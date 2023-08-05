"use client";
import React, { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { useFavourite } from "../../app/providers/favProvider";
import FavouritesModal from "../Modal/modal";

const Navbar = () => {
  const { favourite } = useFavourite();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleFavouirteModal = () => {
    setShowModal(true);
  };

  return (
    <div id="mainNavigation">
      <nav role="navigation"></nav>
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
                href="#Favourites"
                onClick={handleFavouirteModal}
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
            <FavouritesModal
              show={showModal}
              onClose={handleCloseModal}
              favourites={favourite}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
