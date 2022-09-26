import { TiStar } from "react-icons/ti";
import { HeadingH1, HeadingH2 } from "../layout/Headings";
import { Paragraph } from "../layout/Paragraph";
import LoadingMessage from "../common/LoadingMessage";
import ErrorMessage from "../common/ErrorMessage";
import { NavOrientation3 } from "../navigation/NavOrientation";
import AccommodationDetailImageSlider from "./AccommodationDetailImageSlider";

export default function AccommodatinDetailContent({ accommodationDetail, loading, error }) {
    return (
        <>
            { loading && <LoadingMessage content="Loading accommodation ..."/>}
            { error && <ErrorMessage>An error has occured {error}</ErrorMessage>}
            { accommodationDetail && 
                <div className="accommodationDetail">        
                    <NavOrientation3 link1="/" name1="Home" link2="/accommodation" name2="Accommodation" link3="/detail/:id" name3={accommodationDetail.attributes.name} />
                    <HeadingH1 content={accommodationDetail.attributes.name} />
                    <div>
                        <AccommodationDetailImageSlider accommodationDetail={accommodationDetail} />
                    </div>    
                    <div className="accommodationDetail__about">
                        <HeadingH2 content="Rating" />
                        <p className="accommodationDetail__rating">Rated by customers: <TiStar className="accommodationDetail__icon"/>{accommodationDetail.attributes.rating}</p>
                        <HeadingH2 content="About" />
                        <Paragraph content={accommodationDetail.attributes.description}></Paragraph>
                        <HeadingH2 content="Price" />
                        <Paragraph content={accommodationDetail.attributes.price + "NOK/night"}></Paragraph>
                        <HeadingH2 content="Contact" />
                        <Paragraph content={"Adress: " + accommodationDetail.attributes.adress} />
                        <a href="tel:004799999999" className="accommodationDetail__about-contact"><Paragraph content={"Phone: " + accommodationDetail.attributes.phone}></Paragraph></a>
                        <a href="mailto:support@holidaze.com" className="accommodationDetail__about-contact"><Paragraph content={"Email: " + accommodationDetail.attributes.email}></Paragraph></a>
                    </div>                                 
                </div>
            }
        </>
    )
}