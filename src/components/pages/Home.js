import React from "react";
import Gif from "../gif/gif";


export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
      <Gif></Gif>
     </div>



     <div class="grid grid-cols-6 gap-4">
     <div class="col-start-2 col-span-4">

     <p className="mt-5 text-sm text-black text-left">Hello world, my name is Andrew Novobilski and I am a web development professional located in Mission Viejo, California. I have a passion for web design and an eye for design. I aim to create mobile first, fast, responsive websites that have real world impact. I am working to earn my full stack developer certificate from UCI which I will complete in two weeks. 
     </p>

     <h2 className="mt-5 text-2xl text-black"> My Skill Set Includes </h2>

  <div>    
    <ul class="list text-lg bg-rose-200 mt-5 text-center">
  <li>React.js</li>
  <li>Tailwind CSS</li>
  <li>Mongo DB</li>
  <li>MERN Stack</li>
  <li>Node JS</li>
  <li>Nightmare.js Web Scraping</li>
  <li>HTML5</li>
  <li>AWS Deployment</li>
  <li>Linux</li>

  </ul>

  </div>
  



 





     </div>

        

    </div>

    





    </div>



);
};