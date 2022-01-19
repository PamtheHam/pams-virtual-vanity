import React from "react";
import logo from "../../assets/images/VVLogo.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" to="/">
            <img
              src={logo}
              alt="virtual vanity logo"
              width="60"
              height="auto"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active link-dark"
                  aria-current="page"
                  href="#home"
                  to="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-dark" href="#about" to="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-dark" href="#contact" to="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle link-dark"
                  id="navbarDropdown"
                  role="button"
                  href="#cosmetics"
                  to="/cosmetics"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vanity
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item link-dark"
                      href="#skincare"
                      to="/skincare"
                    >
                      Skincare
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item link-dark"
                      href="#cosmetics"
                      to="/cosmetics"
                    >
                      Cosmetics
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item link-dark"
                      href="#haircare"
                      to="/haircare"
                    >
                      Haircare
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
