"use client";
import React from "react";
import "./animePage.css";
import { fetchTopAnimesSingle } from "../../api/requests";
import Link from "next/link";

const AnimePage = ({ animeList }) => {
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimePage;
