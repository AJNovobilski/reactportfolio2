import React from "react";
import { NavLink } from "react-router-dom"
import "./navbar.css"

function NavBar() {

    window.onload = function () {
        document.getElementById("hamburger").onclick = function toggleMenu() {
          const navToggle = document.getElementsByClassName("toggle");
          for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
      }
      
      
        }
      };
    
    return ( 
    <>
<div className="gradient">
<nav className="flex flex-wrap items-center justify-between p-5 ">      
  <svg width="155px" height="43px" viewBox="0 0 155 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">    
    <defs />
    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="Desktop-HD" transform="translate(-793.000000, -178.000000)">
        <g id="acme-logo-1" transform="translate(793.000000, 178.000000)">
         
        </g>
      </g>
    </g>
  </svg>   
  <div className="flex md:hidden">
    <button id="hamburger">
      <img className="toggle block" src="https://img.icons8.com/office/40/000000/shutdown.png" width={40} height={40} />
      <img className="toggle hidden" src="https://img.icons8.com/office/40/000000/restart.png" width={40} height={40} />
    </button>
  </div>      


  
  <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">        
  <NavLink exact to="/" className="text-4xl block md:inline-block text-yellow-200 hover:text-white px-3 py-3 border-b-2 border-blue-900 md:border-none">
                AJ Novobilski 
  </NavLink> 
  <NavLink exact to="/projects" className="text-4xl block md:inline-block text-yellow-400 hover:text-white px-3 py-3 border-b-2 border-blue-900 md:border-none">
                Projects
  </NavLink> 
  <NavLink exact to="/about" className="text-4xl block md:inline-block text-yellow-500 hover:text-white px-3 py-3 border-b-2 border-blue-900 md:border-none">
                About
  </NavLink> 
  <NavLink exact to="/contact" className="text-4xl block md:inline-block text-yellow-600 hover:text-white px-3 py-3 border-b-2 border-blue-900 md:border-none">
                Contact
  </NavLink> 
  
  </div>
              

</nav>
    </div>
    </>
        );
}

export default NavBar;


