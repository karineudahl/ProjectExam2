import footerImg from "../../images/footer.png";
import { Paragraph } from "./Paragraph";

export function Footer() {
    return (
        <footer>
            <div>
                <img src={ footerImg } alt="graphic illustration of Bryggen i Bergen"/>
            </div>
            <div className="footer__information">
                <a href="tel:004799999999"><Paragraph content="00 47 99 99 99 99"></Paragraph></a>
                <p>|</p>
                <a href="mailto:support@holidaze.com"><Paragraph content=" support@holidaze.com"></Paragraph></a>
                <p>|</p>
                <p> Bergen brygge 231</p> 
            </div> 
        </footer>
    )
} 