import { HeadingH1 } from "../layout/Headings"; 
import { NavOrientation2 } from "../navigation/NavOrientation";
import AccommodationSortByCategory from "./AccommodationSortByCategory";

function Accommodation() {
    return ( 
        <div className="pageContainer">
            <NavOrientation2 link1="/" name1="Home" link2="/accommodation" name2="Accommodation" />
            <HeadingH1 content="Accommodation"/>
            <AccommodationSortByCategory />
        </div>
    )
}

export default Accommodation;