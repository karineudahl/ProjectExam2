import { HeadingH2 } from "../../layout/Headings";
import useFetch from "../../hooks/useFetch";
import { API_bookings } from "../../../constants/Api";
import { Paragraph } from "../../layout/Paragraph";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from "../../common/LoadingMessage";
import { BsHouseDoor } from 'react-icons/bs';
import AdminBookingsDelete from "./AdminBookingsDelete";

export default function AdminBookingsContent() {
    const { data: bookings, loading, error } = useFetch(API_bookings);

    return (
        <>
            { error && <ErrorMessage>An error has occured {error}</ErrorMessage>}
            { loading && <LoadingMessage content="Loading bookings ..." />}
            { bookings && <div className="adminContainer">
                {bookings.map((booking) => (              
                    <div key={booking.id} className="adminContainer__content bookings">  
                        <div className="adminContainer__heading-container">
                            <BsHouseDoor className="adminContainer-icon booking-icon" />
                            <HeadingH2 content="Booking" /> 
                            <Paragraph content={"(Booked: " + booking.attributes.createdAt.slice(0,10) + ")"} />
                        </div>
                        <div className="adminContainer bookings-text">
                            <div> 
                                <Paragraph content={"Accommodation name:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.accommodation} />   
                                <Paragraph content={"First Name:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.firstname} />
                                <Paragraph content={"Last Name:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.lastname} />
                                <Paragraph content={"Email:"} fontWeight="600" /> 
                                <Paragraph content={booking.attributes.email} />
                                <Paragraph content={"Phone:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.phonenumber} />
                            </div>    
                            <div>
                                <Paragraph content={"Number of people:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.numberofpeople} />
                                <Paragraph content={"Number of rooms:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.numberofrooms} />
                                <Paragraph content={"Check in date:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.checkin} />
                                <Paragraph content={"Check out date:"} fontWeight="600" />
                                <Paragraph content={booking.attributes.checkout} />
                            </div>
                        </div>
                        <AdminBookingsDelete id={booking.id} />
                    </div>
                ))}
            </div>}   
        </>      
    )
}