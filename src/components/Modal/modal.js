"use client";
import React from "react";
import "./modal.css";

const FavouritesModal = ({ show, onClose, favourites }) => {
  if (!show) return null;

  return (
    <div className="favouriteModal">
      <div className="modalContent">
        <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          {favourites.map((anime, index) => (
            <div className="card-inner">
              <img
                src={anime.imageUrl}
                alt={anime.title}
              />
              <li key={index}>{anime.title}</li>
            </div>
          ))}
          <button
            className="btn-1"
            onClick={onClose}
          >
            {" "}
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouritesModal;
