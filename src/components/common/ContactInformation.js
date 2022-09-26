import { TbMapPin, TbMail } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { HeadingH3 } from "../layout/Headings";
import { Paragraph } from "../layout/Paragraph";

export default function ContactInformation() {
    return (
        <>
            <div className="contact__information-content">
                <TbMapPin className="contact__information-icon" />
                <div>
                    <HeadingH3 content="Address" />
                    <Paragraph content="Bergen brygge 231"/>
                    <Paragraph content="5020 Bergen"/>
                </div>
            </div>
            <div className="contact__information-content">
                <BsTelephone className="contact__information-icon" />
                <div>
                    <HeadingH3 content="Lets talk" />
                    <a href="tel:004799999999"><Paragraph content="00 47 99 99 99 99"></Paragraph></a>
                </div>
            </div>
            <div className="contact__information-content">
                <TbMail className="contact__information-icon" />
                <div>
                    <HeadingH3 content="Email" />
                    <a href="mailto:support@holidaze.com"><Paragraph content="support@holidaze.com"></Paragraph></a>
                </div>
            </div> 
        </>
    )
}