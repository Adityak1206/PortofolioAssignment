import React from 'react'
import './style.css'
function ResElements(props) {
   const { Role,Institution,Years} = props

  return (
    <div className="resume_elements">
          <h1 className="Role">{Role}</h1>
          <h3 className="Institution">{Institution}</h3>
          <p  className="Years">{Years}</p>
      </div>
  );
}

export default ResElements
