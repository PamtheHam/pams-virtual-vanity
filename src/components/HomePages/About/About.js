import React from "react";
import MakeupApplicationPH from "../../../assets/images/MakeupApplicationPH.jpg";
import MyIntro from "./MyIntro";
import MyStory from "./MyStory";

const About = () => {
  return (
    <>
      <div className="intro-container">
        <div className="my-intro">
          <div className="text-center about-right">
            <h3>
              Nice to meet you. My name is Pam. <br /> Welcome to my virtual
              vanity.
            </h3>
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
      <MyStory />
    </>
  );
};

export default About;
