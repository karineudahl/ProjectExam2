import { HeadingH1 } from "../layout/Headings";
import { NavOrientation2 } from "../navigation/NavOrientation";
import AboutContent from "./AboutContent";

function About() {
    return (
        <div className="pageContainer">
            <NavOrientation2 link1="/" name1="Home" link2="/about" name2="About" />
            <HeadingH1 content="About" />
            <AboutContent />
        </div>
    );
}

export default About;