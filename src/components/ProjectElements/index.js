import React from 'react'
import './style.css'
function ProjectElements(props) {
   const { Title,Years,ProjectImage,Description} = props

  return (
    
         <div className="Project_elements">
          <h1 className="Title">{Title}</h1>
          <h3 className="Years">{Years}</h3>
          <img src={ProjectImage} className="project_img" alt="ProjectImage" />
           <p  className="Description">
               {Description}
           </p>
          <button className="btn">View</button>
       </div>
      
  );
}

export default ProjectElements
