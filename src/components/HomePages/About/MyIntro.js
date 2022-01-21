import React from "react";
import RainbowShadowPH from "../../../assets/images/RainbowShadowPH.jpg";

const MyIntro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="my-intro">
          <div className="text-center">
            <h4>Nice to meet you. My name is Pam.</h4>
          </div>
        </div>
      </div>

      <div className="intro-container">
        <div className="intro-paragraph">
          <figure>
            <img
              alt="Pamela Hammond"
              src={RainbowShadowPH}
              className="rainbow-eyeshadow-pic"
            />
          </figure>
          <div className="text-center about-left">
            <p>
              Lover of all things beauty, I created this website to share my
              love and experiences with cosmetics, skincare, and haircare with
              the world. I have been wearing makeup since I was 12 years old
              (very young, I know) and it's been such a huge part of my life in
              good and bad ways.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyIntro;
