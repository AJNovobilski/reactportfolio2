import React from "react";
import Me from "../photo/me";
import Footer from "../footer/footer"


export const About = () => {
  return (

    <div>
      <h1>About</h1>
      <div>
      <Me></Me>
    </div>


   <a href="https://github.com/anovobilskischool?tab=repositories"> <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Github</button> </a>

   <Footer></Footer>


    </div>



  );
};