import React from "react";
import MakeupApplicationPH from "../../../assets/images/MakeupApplicationPH.jpg";
import MyIntro from "./MyIntro";

const About = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-paragraph">
          <div className="text-center about-right">
            <h3>About This Website</h3>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={MakeupApplicationPH}
              className="makeup-app-pic"
            />
          </figure>
        </div>
      </div>
      <MyIntro />
    </>
  );
};

export default About;
