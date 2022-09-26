import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./components/home/Home";
import Accommodation from "./components/accommodation/Accommodation"; 
import About from "./components/about/About";
import Contact from "./components/contact/Contact"; 
import Login from "./components/login/Login";
import AccommodationDetail from "./components/accommodationDetail/AccommodationDetail";
import Admin from "./components/admin/Admin";
import AdminAddAccommodation from "./components/admin/adminaddaccommodation/AdminAddAccommodation";
import AdminBookings from "./components/admin/adminbookings/AdminBookings"; 
import AdminMessages from "./components/admin/adminmessages/AdminMessages"; 
import { Footer } from "./components/layout/Footer";
import { AuthProvider } from "./components/context/AuthContext";
import { NavResponsive } from "./components/navigation/NavResponsive";

function App() {
    return (   
        <AuthProvider>
            <div className="wrapper">
                <Router>
                    <header>
                      <NavResponsive />
                    </header>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/accommodation" element={<Accommodation />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/detail/:id" element={<AccommodationDetail />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/adminaddaccommodation" element={<AdminAddAccommodation />} />
                            <Route path="/adminbookings" element={<AdminBookings />} />
                            <Route path="/adminmessages" element={<AdminMessages />} />
                        </Routes>
                    </div>
                </Router>
            </div>
            <Footer />
        </AuthProvider> 
    );
}

export default App;