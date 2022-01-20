import React from "react";
import VVLogo from "../../../assets/images/VirtualVanityLogo.png";

const Home = () => {
  return (
    <>
      <div className="vv-container">
        <a href="#home">
          <img src={VVLogo} alt="virtual vanity logo" className="vv-image" />
        </a>
      </div>

      <div>
        <h3 className="welcome-container">
          <em>Welcome to My Virtual Vanity</em>
        </h3>
      </div>
    </>
  );
};

export default Home;
