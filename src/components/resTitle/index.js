import React from 'react'
import './style.css'
function ResTitle(props) {
   const {Type} = props

  return (
    <div className="resume_title">
          <h1 className="Title_res">{Type}</h1>
    </div>
  );
}

export default ResTitle
