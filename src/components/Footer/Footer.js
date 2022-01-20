import React from "react";
import instagramLogo from "../../assets/images/Instagram.png";
import pinterestLogo from "../../assets/images/Pinterest.png";
import tiktokLogo from "../../assets/images/TikTok.png";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link footer-link"
            href="https://www.instagram.com/pamtheham_/"
          >
            <img
              src={instagramLogo}
              alt="Instagram logo"
              width="40"
              height="auto"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link footer-link" href="https://pin.it/2hHKfDZ">
            <img
              src={pinterestLogo}
              alt="Pinterest logo"
              width="40"
              height="auto"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link footer-link"
            href="https://www.tiktok.com/@pamtheham_"
          >
            <img src={tiktokLogo} alt="TikTok logo" width="40" height="auto" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
