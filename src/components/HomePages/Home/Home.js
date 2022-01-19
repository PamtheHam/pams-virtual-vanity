import React from "react";
import VVLogo from "../../../assets/images/VirtualVanityLogo.png";

const Home = () => {
  return (
    <div>
      <div className="vv-container">
        <img src={VVLogo} alt="virtual vanity logo" className="vv-image" />
      </div>
      <h1>Welcome to My Virtual Vanity</h1>
    </div>
  );
};

export default Home;
