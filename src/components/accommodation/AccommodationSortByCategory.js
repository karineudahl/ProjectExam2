import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { API_accommodation } from "../../constants/Api";
import ErrorMessage from "../common/ErrorMessage";
import LoadingMessage from "../common/LoadingMessage";
import { BsHouseDoor, BsBorderAll } from "react-icons/bs";
import { RiHotelLine, RiHotelBedLine } from "react-icons/ri";
import AccommodationCard from "../common/AccommodationCard";

export default function AccommodationSortByCategory() {
    const { data: accommodations, loading, error } = useFetch(API_accommodation + "?populate=*");

    const [filterHotel, setFilterHotel] = useState([])
    const [searchField, setSearchField] = useState(""); 
    const [active, setActive] = useState(""); 

    const displayNone = document.querySelector(".display-none") 

    const accommodationType = (categoryItem) => {
        if(categoryItem === "all")  {
            setFilterHotel(accommodations); 
            setActive("all")
            return;
        } 

        const selectedCategory = accommodations.filter((currentItem) => {
            if(currentItem.attributes.typeofaccommodation === categoryItem) {              
                return true;
            }
            return false;
        })

        setFilterHotel(selectedCategory);
        setSearchField(""); 
        setActive(categoryItem);
        displayNone.style.display = "none";  
    }

    return ( 
        <>
            <div className="searchAccommodation">
                <input onChange={event => {setSearchField(event.target.value)}} type="search" placeholder="Search accommodation ..." className="searchAccommodation-field" />    
            </div>         
            <div className="sortByCategory">
                <button onClick={() => accommodationType("all")} className={active === "all" ? "sortByCategory__button-active" : "sortByCategory__button" }><BsBorderAll className="sortByCategory__icon"/>All</button>
                <button onClick={() => accommodationType("BedBreakfast")} className={active === "BedBreakfast" ? "sortByCategory__button-active" : "sortByCategory__button" }><BsHouseDoor className="sortByCategory__icon"/>B&B</button>
                <button onClick={() => accommodationType("Hotel")} className={active === "Hotel" ? "sortByCategory__button-active" : "sortByCategory__button" }><RiHotelLine className="sortByCategory__icon"/>Hotel</button>
                <button onClick={() => accommodationType("Guesthouse")} className={active === "Guesthouse" ? "sortByCategory__button-active" : "sortByCategory__button" }><RiHotelBedLine className="sortByCategory__icon"/>Guesthouse</button>
            </div>
            { error && <ErrorMessage>An error has occured {error}</ErrorMessage>}
            { loading && <LoadingMessage content="Loading your next stay in Bergen ..." />}
            { accommodations && 
                <>
                    <div className="acoommodationList">
                        {filterHotel.filter((accommodation => {
                        if(accommodation.attributes.name.toLowerCase().includes(searchField.toLowerCase())) {
                            return true;
                        } 
                        return false;
                        })).map((accommodation) => {                
                            return <AccommodationCard key={accommodation.id} accommodation={accommodation} />
                        })}
                    </div>
                    <div className="acoommodationList display-none">
                        {accommodations.filter((accommodation => {
                        if(accommodation.attributes.name.toLowerCase().includes(searchField.toLowerCase())) {
                            return true;
                        }
                        return false;
                        })).map((accommodation) => {                
                            return <AccommodationCard key={accommodation.id} accommodation={accommodation} />
                        })}
                    </div>
                </>
            }
        </>
    )
}