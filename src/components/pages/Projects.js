import React from "react";
import Gif2 from "../gif/gif2";
import ProjectCard from "../projectcards/projectcard"


export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
      <Gif2></Gif2>
    </div>

    <body class="antialiased md:bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">

    <ProjectCard
    src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
    cat="Node Scripts"
    title="Magic The Gathering Ebay Autolister"
    description="asodfjaosidfjasoidjf"
    date="Feb 12th 2021"
    link="https://github.com/joshuapribek/Project3"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
    cat="Node Scripts"
    title="Magic The Gathering Ebay Autolister"
    description="This unique app is built on the NodeJs framework and uses Inquirer.js to prompt the user for basic info. Axios calls Scryfall api to return live prices for cards, image, set and title data. Then after each card is inputed it outputs a csv file that ebay can read through its bulk listing reader."
    date="Feb 12th 2021"
    link="/contact"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
    cat="Scripts"
    title="asdfasdf"
    description="asodfjaosidfjasoidjf"
    date="Feb 12th 2021"
    link="/contact"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
    cat="Scripts"
    title="asdfasdf"
    description="asodfjaosidfjasoidjf"
    date="Feb 12th 2021"
    link="/contact"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
    cat="Scripts"
    title="asdfasdf"
    description="asodfjaosidfjasoidjf"
    date="Feb 12th 2021"
    link="/contact"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
    cat="Scripts"
    title="asdfasdf"
    description="asodfjaosidfjasoidjf"
    date="Feb 12th 2021"
    link="/contact"
    >
    
    </ProjectCard>

    


    </div>
</body>

    
    </div>
  );
};