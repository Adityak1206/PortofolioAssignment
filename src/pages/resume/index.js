import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import ResElements from "../../components/ResElements"
import ResTitle from '../../components/resTitle'
import './style.css';


const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="My Resume"  />
      <ResTitle Type="Experience"/>
      <ResElements Role="Assistant Manager" Institution="Reliance Jio" Years= "2023-present"/>
      <ResElements Role="Web Developer Intern" Institution="Appinop Technologies" Years= "2022"/>
      <ResElements Role="Software Developer Intern" Institution="Komet" Years= "2022"/>
      <ResTitle Type="Education"/>
      <ResElements Role="B.Tech" Institution="LNMIIT Jaipur" Years= "2019-2023"/>
      <ResElements Role="12th Grade" Institution="DPS Jaipur" Years= "2017-2018"/>
      <ResElements Role="10th Grade" Institution="DPS Jaipur" Years= "2015-2016"/>
      

    </section>
  );
};
export default Resume;