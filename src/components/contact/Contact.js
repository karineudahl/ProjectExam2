import { HeadingH1 } from "../layout/Headings";
import ContactForm from "./ContactForm";
import { NavOrientation2 } from "../navigation/NavOrientation";

function Contact() {
    return (
        <div className="pageContainer">
            <NavOrientation2 link1="/" name1="Home" link2="/contact" name2="Contact" />
            <HeadingH1 content="Contact" />
            <ContactForm />
        </div> 
    )
} 

export default Contact;   