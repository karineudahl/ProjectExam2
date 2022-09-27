import { HeadingH1 } from "../../layout/Headings";
import { NavOrientation2 } from "../../navigation/NavOrientation";
import AdminMessagesContent from "./AdminMessagesContent";

function AdminMessages() {
    return (
        <div className="pageContainer"> 
            <NavOrientation2 link1="/admin" name1="Admin" link2="/adminmessages" name2="Messages" />
            <HeadingH1 content="Messages" />
            <AdminMessagesContent />
        </div> 
    )
}

export default AdminMessages;