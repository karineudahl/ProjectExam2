import { HeadingH1 } from "../../layout/Headings";
import { NavOrientation2 } from "../../navigation/NavOrientation";
import AdminBookingsContent from "./AdminBookingsContent";

function AdminBookings() {
    return (
        <div className="pageContainer">
            <NavOrientation2 link1="/admin" name1="Admin" link2="/adminbookings" name2="Bookings" />
            <HeadingH1 content="Bookings"/>        
            <AdminBookingsContent />
        </div>
    )
}

export default AdminBookings;