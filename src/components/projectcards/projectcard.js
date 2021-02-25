import React from "react";

const ProjectCard = (props) => {
    return(

<div class="md:p-8 p-2 bg-white mt-6">
        <img
          class="rounded-lg w-full"
          src={props.src}
        />

        <p class="text-indigo-500 font-semibold text-base mt-2">{props.cat}</p>
        <h1
          class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate p-2"
        >
          {props.title}
        </h1>
        <div class="max-w-full">
          <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
           {props.description}
          </p>
        </div>
      <a target="_blank" href={props.link}>  <button class="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Learn More
</button>
</a>
        <div class="flex items-center space-x-2 mt-10">
    
            <p class="text-gray-500 font-semibold text-sm">
                
            &middot; 
    {props.date}
            </p>
            <div>

          </div>
        </div>
      </div>






    )
}

export default ProjectCard