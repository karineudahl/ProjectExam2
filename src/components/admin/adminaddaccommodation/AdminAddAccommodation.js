import { HeadingH1 } from "../../layout/Headings";
import { NavOrientation2 } from "../../navigation/NavOrientation";
import AdminAddAccommodationForm from "./AdminAddAccommodationForm";

function AdminAddAccommodation() {
    return (
        <div className="pageContainer">
            <NavOrientation2 link1="/admin" name1="Admin" link2="/adminaddaccommodation" name2="Add accommodation" />
            <HeadingH1 content="Add Accommodation" />
            <AdminAddAccommodationForm />
        </div> 
    )
}

export default AdminAddAccommodation;