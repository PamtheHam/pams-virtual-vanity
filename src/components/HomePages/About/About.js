import React from "react";
import MakeupApplicationPH from "../../../assets/images/MakeupApplicationPH.jpg";
import MyIntro from "./MyIntro";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-paragraph">
          <div className="text-center about-this">
            <h3>About This Website</h3>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={MakeupApplicationPH}
              className="makeup-app-pic"
            />
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
      <MyIntro />
    </>
  );
};

export default About;
