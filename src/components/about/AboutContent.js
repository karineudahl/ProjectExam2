import { HeadingH2 } from "../layout/Headings";
import { Paragraph } from "../layout/Paragraph";
import ContactInformation from "../common/ContactInformation";
import { TiStar } from "react-icons/ti";
import { BsHouseDoor } from "react-icons/bs";
import profil1 from "../../images/profil1.jpg";
import profil2 from "../../images/profil2.jpg";
import profil3 from "../../images/profil3.jpg";
import profil4 from "../../images/profil4.jpg";

export default function AboutContent() {
    return (
        <div className="about">
            <div className="about__pictures"> 
                <HeadingH2 content="Team" />
                <figure className="about__pictures-figure">
                    <img src={profil3} alt="smiling Mathilda, daily manager, standing in a staircase" className="about__pictures-picture" />
                    <figcaption>Mathilda</figcaption>
                    <figcaption>Daily Manager</figcaption>
                </figure>
                <figure className="about__pictures-figure">
                    <img src={profil4} alt="Trond from support, in the forest" className="about__pictures-picture" />
                    <figcaption>Trond</figcaption>
                    <figcaption>Support</figcaption>
                </figure>
                <figure className="about__pictures-figure">
                    <img src={profil2} alt="Caroline, developer, smiling, sitting" className="about__pictures-picture" />
                    <figcaption>Caroline</figcaption>
                    <figcaption>Developer</figcaption>
                </figure>
                <figure className="about__pictures-figure">
                    <img src={profil1} alt="Daniel, booking manager, smiling, outside" className="about__pictures-picture" />
                    <figcaption>Daniel</figcaption>
                    <figcaption>Booking manager</figcaption>
                </figure>
            </div>
            <div className="about__vision">
                <h2><BsHouseDoor className="about__vision-icon" />Our Vision</h2>
                <Paragraph content="The about page is an important page. You have to show your customers that they can trust you. Be truthful and open." />
                <Paragraph content="Give your user an insight into the history of the company. Describe why the company is good at what they do. Describe which customers the company has had, and what you have helped them with." />
                <Paragraph content="Write feedback you have received from customers. Attach photos of employees and their work areas. Add contact information." />
            </div>
            <div className="about__contactInformation">
                <HeadingH2 content="Contact information" />
                <ContactInformation />
            </div>
            <div className="about__feedback">
                <HeadingH2 content="Feedback from customers" />
                <div className="about__feedback-content">
                    <Paragraph content="Marianne" />
                    <p className="about__feedback-icon"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>
                    <Paragraph content="Good support." />
                </div>
                <div className="about__feedback-content">
                    <Paragraph content="Trond" />
                    <p className="about__feedback-icon"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>
                    <Paragraph content="Very helpful." />
                </div>
                <div className="about__feedback-content">
                    <Paragraph content="Trine" />
                    <p className="about__feedback-icon"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>
                    <Paragraph content="Happy, good service." />
                </div>
            </div>
        </div>
    );
}