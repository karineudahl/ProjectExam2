import { HeadingH1 } from "../layout/Headings";
import { API_accommodation } from "../../constants/Api";
import backgroundImgSmallScreen from "../../images/background-small.png";
import backgroundImgBigScreen from "../../images/background-large.png";
import SearchTypeahead from "./SearchTypeahead";
import useFetch from "../hooks/useFetch";
import HomeTopRated from "./HomeTopRated";

function Home() {
    const { data, loading, error } = useFetch(API_accommodation + "?populate=*");

    return (
        <div className="homeIntroduction">
            <HeadingH1 content="Your accommodation in Bergen"/>
            <SearchTypeahead placeholder="Search accommodation.." data={data} loading={loading} error={error}/> 
            <div className="homeIntroduction__image-small">
                <img src={ backgroundImgSmallScreen } alt="graphic illustration of Bryggen i Bergen" />
            </div>
            <div className="homeIntroduction__image-large">
                <img src={ backgroundImgBigScreen } alt="graphic illustration of Bryggen i Bergen" />
            </div>
            <HomeTopRated data={data} loading={loading} error={error}/>
        </div>
    )
} 

export default Home;