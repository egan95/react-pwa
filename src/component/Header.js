import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Header() {
    
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><Link to="/"><span>Com</span>pany</Link></h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link to="/" className={splitLocation[1] === "" ? "active" : ""}>Home</Link></li>

                    <li className="dropdown"><a href="#"><span>About</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><Link to="/about" className={splitLocation[1] === "about" ? "active" : ""}>About Us</Link></li>
                        <li><Link to="/team" className={splitLocation[1] === "team" ? "active" : ""}>Team</Link></li>
                        <li><Link to="/testimonial" className={splitLocation[1] === "testimonial" ? "active" : ""}>Teatimonials</Link></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>

                    <li><Link to="/services" className={splitLocation[1] === "services" ? "active" : ""}>Services</Link></li>
                    <li><Link to="/portofolio" className={splitLocation[1] === "portofolio" ? "active" : ""}>Portofolio</Link></li>
                    <li><Link to="/pricing" className={splitLocation[1] === "pricing" ? "active" : ""}>Pricing</Link></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}>Contact</Link></li>

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <div className="header-social-links d-flex">
                    <a href="#" className="twitter"><i className="bu bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bu bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bu bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bu bi-linkedin"></i></a>
                </div>

            </div>
        </header>
    )
}

export default Header
