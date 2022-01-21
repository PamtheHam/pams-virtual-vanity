import React from "react";
import BlueEyelinerPH from "../../../assets/images/BlueEyelinerPH.jpg";

const MyStory = () => {
  return (
    <>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <p>
              My love/hate relationship with makeup is not unique, nor are any
              of my opinions on makeup. However, I hope you can still find some
              value in the content I create for this website. Oh yeah, I am a
              full stack web developer and designed this website myself! It is
              still under construction, so please be easy on me while I work out
              the kinks! Thanks and enjoy :)
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={BlueEyelinerPH}
              className="blue-eyeliner-pic"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default MyStory;
