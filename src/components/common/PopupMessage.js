import { NavLink } from "react-router-dom";

export default function PopupMessage(props) {
    return (props.trigger) ? (
        <div className="popupMessage">
            <div className="popupMessage__container">
                <div className="popupMessage__container-text">
                    {props.children}
                </div>
                <div className="popupMessage__container-link">
                    <button className="button-popup"><NavLink to={props.button} className="popupMessage__container-link-link">{props.buttonName}</NavLink></button>
                </div>     
            </div>
        </div>
    ) : ""; 
}