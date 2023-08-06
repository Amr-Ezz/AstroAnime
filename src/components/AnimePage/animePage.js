"use client";
import React from "react";
import "./animePage.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavourite } from "../../app/providers/favProvider";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const AnimePage = ({ animeList }) => {
  const { favourite, addToFavourite, isFavourite } = useFavourite();

  return (
    <div className="hero-section">
      <div className="anime_grid">
        {animeList.map((anime) => (
          <div
            className="innerCard"
            key={anime.mal_id}
          >
            <div className="frontSide">
              <div className="paragraph">
                <p className="title">{anime.title_english}</p>
              </div>
              <div className="imgContainer">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="anime"
                  className="anime_img"
                />
              </div>
            </div>

            <div className="backSide">
              <p className="title">{anime.title_english}</p>
              <p className="japanese">{anime.title_japanese}</p>
              {anime.episodes ? <p>Episodes: {anime.episodes}</p> : null}
              <p className="type">{anime.type}</p>
              <p className="year">{anime.year}</p>

              <Link href={`/${anime.mal_id}`}>
                <button class="button">
                  More Details
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </Link>
              <FontAwesomeIcon
                icon={isFavourite(anime.mal_id) ? faHeartSolid : faHeartRegular}
                size="sm"
                style={{
                  color: "rgba(255, 255, 255, 0.738)",
                  position: "absolute",
                  right: "1rem",
                  top: "1rem",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  addToFavourite(
                    anime.title_english,
                    anime.mal_id,
                    anime.images.jpg.small_image_url
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimePage;
