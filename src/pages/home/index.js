import React from "react";
import "./style.css";
import Resume from "../../projectImages/Resume.pdf"
import Sun from '../../projectImages/sun.png'

const Home = () => {

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I am Aditya kaushik
          <br />
          I work at Reliance JIO
        </h1>
        <p>
          I like to develop stuff using latest cutting edge technologies, I am particulary inlined towards ReactJs, Javascript, HTML and CSS
        </p>
        <a className="resD" href={Resume} download>Download Resume</a>
         <img src={Sun} className="sun_img" alt="Sun_Image"/>
      </div>
     
    </section>
  );
};
export default Home;