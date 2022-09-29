import { Link } from "react-router-dom";
import { BsHouseDoor, BsPlusSquare } from "react-icons/bs";
import { TbMail } from "react-icons/tb";
import { useContext } from "react";
import { HeadingH1, HeadingH2 } from "../layout/Headings";
import { Paragraph } from "../layout/Paragraph"; 
import AuthContext from "../context/AuthContext";
import ErrorMessage from "../common/ErrorMessage";

export default function Admin() {
    const [auth] = useContext(AuthContext);

    return (
        <div className="pageContainer">
            <HeadingH1 content="Administrating"/>
            { auth ? 
            <div className="adminContainer">
                <div className="adminContainer__content">
                    <Link to="/adminmessages" className="adminContainer__content-link">
                        <div className="adminContainer__heading-container">
                            <TbMail className="adminContainer-icon message-icon" />
                            <HeadingH2 content="Messages" />
                        </div>
                        <Paragraph content="Read messages from customers." />
                    </Link>
                </div>                
                <div className="adminContainer__content">
                    <Link to="/adminbookings" className="adminContainer__content-link">
                        <div className="adminContainer__heading-container">
                            <BsHouseDoor className="adminContainer-icon booking-icon" />
                            <HeadingH2 content="Bookings" />
                        </div>
                        <Paragraph content="List of bookings made by customers." />
                    </Link>
                </div>
                <div className="adminContainer__content">
                    <Link to="/adminaddaccommodation" className="adminContainer__content-link">
                        <div className="adminContainer__heading-container">
                            <BsPlusSquare className="adminContainer-icon add-icon" /> 
                            <HeadingH2 content="Add accommodations" />
                        </div>
                        <Paragraph content="Create new accommodations." />
                    </Link>
                </div>
            </div> : <ErrorMessage>{"You have to log in to administrate."}</ErrorMessage> }
        </div>
    )
}