import { VscMenu, VscClose } from "react-icons/vsc";
import { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../../images/logo.png"

export function NavResponsive() {
    const [open, setOpen] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);
    let navigate = useNavigate();

    function hamburgerMenu() {
        setOpen(!open); 
    } 

	function logout() {
		setAuth(null);
        setOpen(!open); 
		navigate("/");
	}

    return (
        <>
            <nav>                
                <div className="navigationHeader__navMobile">
                    <div>
                        <Link to="/"><img src={ logo } alt="holidaze logo" /></Link> 
                    </div>
                    <div className="navigationHeader__navMobile-links">
                        {open ? 
                            (<VscClose size="2em" onClick={hamburgerMenu}/>) 
                            : 
                            (<VscMenu size="2em" onClick={hamburgerMenu}/>)
                        }
                        {open && 
                            <div className="navigationHeader-links">
                            {auth ? (
                            <>
                                <NavLink to="/admin" onClick={hamburgerMenu}>Admin</NavLink>
                                <NavLink to="/adminaddaccommodation" onClick={hamburgerMenu}>Add</NavLink>  
                                <NavLink to="/adminbookings" onClick={hamburgerMenu}>Bookings</NavLink>
                                <NavLink to="/adminmessages" onClick={hamburgerMenu}>Messages</NavLink>
                                <button onClick={logout} className="button-logout">Log out</button>
                            </>
                            ) : ( 
                            <>
                                <NavLink to="/accommodation" onClick={hamburgerMenu}>Accommodation</NavLink>
                                <NavLink to="/about" onClick={hamburgerMenu}>About</NavLink>
                                <NavLink to="/contact" onClick={hamburgerMenu}>Contact</NavLink>
                                <NavLink to="/login" onClick={hamburgerMenu}>Login</NavLink>
                            </>
                            )}            
                        </div>
                        }
                    </div>
                </div>
                <div className="navigationHeader__navComputer">
                    <div>
                        <Link to="/"><img src={ logo } alt="holidaze logo"/></Link> 
                    </div>
                    <div className="navigationHeader-links">
                        {auth ? (
                        <>
                            <NavLink to="/admin">Admin</NavLink>
                            <NavLink to="/adminaddaccommodation">Add</NavLink>  
                            <NavLink to="/adminbookings">Bookings</NavLink>
                            <NavLink to="/adminmessages">Messages</NavLink>
                            <button onClick={logout} className="button-logout">Log out</button>                
                        </>
                        ) : (
                        <>
                            <NavLink to="/accommodation">Accommodation</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                        )}            
                    </div>
                </div>
            </nav>
        </>
    )
}