import { Link } from "react-router-dom";
import { Paragraph } from "../layout/Paragraph";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { TiStar } from "react-icons/ti";

export default function SearchTypeahead({ placeholder, data, loading, error }) {
    const [filteredData, setFilteredData] = useState([]);
    const [typedWord, setTypedWord] = useState(""); 
    const [noMatch, setNoMatch] = useState(""); 

    function handleFilter(event) {
        const searchWord = event.target.value; 
        setTypedWord(searchWord);

        const newFilter = data.filter((accommodation) => {
            if(accommodation.attributes.name.toLowerCase().includes(searchWord.toLowerCase())) {
                return true;
            }; 
            return false;
        });

        if(newFilter.length === 0) {
            setNoMatch("No accommodations includes " + typedWord ); 
        } else {
            setNoMatch("");
        }

        if(searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter); 
        }
    }

    function clearInput() { 
        setFilteredData([]);
        setTypedWord("");
    }

    return (
        <>
            <div className="searchTypeahead">
                <div className="searchTypeahead__input">
                    <input type="text" placeholder={placeholder} value={typedWord} onChange={handleFilter} className="searchTypeahead__input-field"/>
                    <div className="searchTypeahead__input-icons">
                        {filteredData.length === 0 ? ( <BsSearch /> ) : ( <RiCloseLine onClick={clearInput} className="searchTypeahead__input-icons-close" /> )} 
                    </div>  
                </div>
                <div className="searchTypeahead__error">
                    <p>{noMatch}</p>
                </div> 
                { error && <p className="searchTypeahead__error">Error loading accommodations</p>}
                { loading && <p className="searchTypeahead__loading">Loading search bar ... </p>}
                {filteredData.length > 0 && (
                    <div className="searchTypeahead__results">
                        {filteredData.map((accommodation) => {                           
                            return <div key={accommodation.id}>      
                                <Link to={`/detail/${accommodation.id}`} className="searchTypeahead__results-link">                             
                                    {accommodation.attributes.image.data.slice(0, 1).map((images) => (         
                                        <img src={images.attributes.url} key={images.id} alt={images.attributes.name}></img>  
                                    ))}
                                    <Paragraph content={accommodation.attributes.name} />
                                    <p><TiStar className="searchTypeahead__results-icon"/>{accommodation.attributes.rating}</p>
                                </Link>     
                            </div>
                        })}
                    </div>
                )} 
            </div>
        </>
    )
}