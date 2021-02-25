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
    src="https://portfoliobucketajn.s3-us-west-1.amazonaws.com/coming+soon.png"
    cat="MERN Stack"
    title="Wanderlist"
    description="Location based music app that finds local artists near you."
    date="Feb 24th 2021"
    link="https://github.com/joshuapribek/Project3"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://s3.amazonaws.com/killacards.com/killa-cards.jpg"
    cat="Node Scripts"
    title="Trading Card Ebay Autolister"
    description="This unique app is built on the NodeJs framework and uses Inquirer.js to prompt the user for basic info. Axios calls Scryfall api to return live prices for cards, image, set and title data. Then after each card is inputed it outputs a csv file that ebay can read through its bulk listing reader."
    date="Feb 12th 2021"
    link="/contact"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://portfoliobucketajn.s3-us-west-1.amazonaws.com/familymarketingusfinal.png"
    cat="Websites"
    title="FamilyMarketing.us"
    description="U.S. Family Marketing offers custom websites, branding, and marketing solutions available anytime. When presented with a challenge we strive for excellence and overachieve."
    date="Jan 1st 2021"
    link="https://familymarketing.us/"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://portfoliobucketajn.s3-us-west-1.amazonaws.com/expunge.png"
    cat="Websites"
    title="ExpungedIt.Com"
    description="Utilizes SurveyJS to create a survey experience for people who need their prior convictions expunged by professional lawyers."
    date="Feb 12th 2021"
    link="http://expungedit.com/"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://portfoliobucketajn.s3-us-west-1.amazonaws.com/yes.png"
    cat="Progressive Web Apps"
    title="Offline Budget Tracker"
    description="Using smart caching and service workers, you can track a budget offline from anywhere. Download the webpage as an app to your phone and use it."
    date="Feb 12th 2021"
    link="https://thawing-beach-45377.herokuapp.com/"
    >
    
    </ProjectCard>

    <ProjectCard
    src="https://portfoliobucketajn.s3-us-west-1.amazonaws.com/1280px-React-icon.svg.png"
    cat="React Projects"
    title="Employee Directory"
    description="Gathers a list of random employees from a random user API. Sorts and returns a table."
    date="Feb 12th 2021"
    link="https://anovobilskischool.github.io/employee-direc/"
    >
    
    </ProjectCard>

    


    </div>
</body>

    
    </div>
  );
};