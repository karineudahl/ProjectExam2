import { TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Paragraph } from "../layout/Paragraph";

export default function AccommodationCard({ accommodation }) {
    return (
        <div key={accommodation.id} className="accommodationCard">      
            <Link to={`/detail/${accommodation.id}`}>
                <div>
                    {accommodation.attributes.image.data.slice(0, 1).map((images) => (         
                        <img src={images.attributes.url} key={images.id} alt={images.attributes.name}></img>  
                    ))}
                </div>
                <div className="accommodationCard__text">
                    <div>    
                        <Paragraph content={accommodation.attributes.name} fontWeight="600" fontSize="1.2" />
                        <Paragraph content={accommodation.attributes.price + " NOK/night"} />
                    </div>
                    <div className="accommodationCard__text-icon">
                        <TiStar className="accommodationCard__icon"/>
                        <Paragraph content={accommodation.attributes.rating} />
                    </div> 
                </div>   
            </Link>      
        </div>
    )
}