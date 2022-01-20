import React from "react";
import logo from "../../assets/images/VVLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="virtual vanity logo"
              width="60"
              height="auto"
            />
          </Link>
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
                <Link
                  className="nav-link active link-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle link-dark"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vanity
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item link-dark" to="/skincare">
                      Skincare
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item link-dark" to="/cosmetics">
                      Cosmetics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item link-dark" to="/haircare">
                      Haircare
                    </Link>
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
