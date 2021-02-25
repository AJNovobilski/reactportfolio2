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

   <div class="grid grid-cols-6 gap-4">
     <div class="col-start-2 col-span-4">

     <p className="mt-5 text-lg text-black text-left">My name is AJ Novobilski and I aim to be a full stack developer once I finish the UCI coding bootcamp. When i'm not coding you can find me playing video games, walking around the lake, going on hikes or playing card games. I have recently also started playing chess. My true passion is business and I enjoy creating businesses that help people.
     </p>

     </div>


     </div>

   <Footer></Footer>


    </div>



  );
};