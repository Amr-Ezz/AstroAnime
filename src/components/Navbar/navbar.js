import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => (
  <div id="mainNavigation">
    <nav role="navigation">
      {/* <div className="py-3 text-center border-bottom">
      <img src="/astroanime-logo.png" alt="logo" className="invert" />
    </div> */}
    </nav>
    <div className="navbar-expand-md">
      <div className="navbar-dark text-center my-2">
        <button
          className="navbar-toggler w-75"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
        </button>
      </div>
      <div
        className="text-center mt-1 collapse navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav mx-auto ">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/TopAiring"
            >
              Top Airing
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              Favourites
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/PopularAnime"
            >
              Popular Anime
            </a>
          </li>
          {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">Contact us</a></li>
          </ul>
        </li> */}
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
