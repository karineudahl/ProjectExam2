import { NavLink } from "react-router-dom";

export function NavOrientation2(props) {
    return (
        <div>
            <NavLink to={props.link1}>{props.name1} /</NavLink>
            <NavLink to={props.link2}>  {props.name2}</NavLink>
        </div>
    )
} 

export function NavOrientation3(props) {
    return (
        <div>
            <NavLink to={props.link1}>{props.name1} /</NavLink>
            <NavLink to={props.link2}>  {props.name2} /</NavLink>
            <NavLink to={props.link3}>  {props.name3}</NavLink>
        </div>
    )
}