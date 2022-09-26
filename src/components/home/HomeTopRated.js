import AccommodationCard from "../common/AccommodationCard";
import ErrorMessage from "../common/ErrorMessage";
import LoadingMessage from "../common/LoadingMessage";
import { HeadingH2 } from "../layout/Headings";
import { TiStar } from "react-icons/ti";

export default function HomeTopRated({ data, loading, error }) {
    return (
        <>
            <div className="topRatedContainer">
                <HeadingH2 content="Top rated accommodations" />
                <p className="topRatedContainer__stars"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p> 
                <div>
                    { error && <ErrorMessage>An error has occured {error}</ErrorMessage>}
                    { loading && <LoadingMessage content="Loading best rated places in Bergen ..." />}
                    { data && <div className="topRatedContainer__content">      
                        {data.map((accommodation) => {
                            if(accommodation.attributes.rating === 5) {
                                return <AccommodationCard key={accommodation.id} accommodation={accommodation} />                
                            }  
                            return false;    
                        })}  
                    </div>}
                </div> 
            </div> 
        </>
    )
}