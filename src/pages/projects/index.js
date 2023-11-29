import React from 'react'
import PageHeaderContent from "../../components/pageHeaderContent";
import ProjectElements from '../../components/ProjectElements'
import Spotify from '../../projectImages/spotify.jpeg'
import Food from '../../projectImages/Food.jpeg'
import Gym from '../../projectImages/Gym.jpeg'

import './style.css'

function Projects() {
    return (
    
       <section id="projects" className="projects">
       <PageHeaderContent headerText="My Projects"  />
       <div className="Projects_align">
       <ProjectElements 
       Title="Spotify Clone"
       Years="Feb 2022"
       ProjectImage={Spotify}
       Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi recusandae quos beatae assumenda rem placeat adipisci rerum, consectetur neque obcaecati facere perferendis! Maiores saepe laboriosam illum consequuntur unde fugit iure."
       />
       <ProjectElements 
       Title="Food Order App"
       Years="May 2022"
       ProjectImage={Food}
       Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi recusandae quos beatae assumenda rem placeat adipisci rerum, consectetur neque obcaecati facere perferendis! Maiores saepe laboriosam illum consequuntur unde fugit iure."
       />
       <ProjectElements 
       Title="Gym Website"
       Years="Dec 2022"
       ProjectImage={Gym}
       Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi recusandae quos beatae assumenda rem placeat adipisci rerum, consectetur neque obcaecati facere perferendis! Maiores saepe laboriosam illum consequuntur unde fugit iure."
       />
       </div>
    </section>
    )
}

export default Projects

