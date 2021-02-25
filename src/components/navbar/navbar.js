import React from "react";
import { NavLink } from "react-router-dom"
import "./navbar.css"

function NavBar() {
    return ( 
    <>

    <nav className="navbar">
        <div className="nav-container">
            <NavLink excat to="/" className="nav-logo">
                AJN Portfolio
            </NavLink>

            <ul>
                <li>
                    <NavLink exact to="/" className="nav-links">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" className="nav-links">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/projects" className="nav-links">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" className="nav-links">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </>
        );
}

export default NavBar;
