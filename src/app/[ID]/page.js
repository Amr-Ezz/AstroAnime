"use client";
import React from "react";
import {
  fetchSingleAnime,
  fetchPopularAnimes,
  fetchTopAnimes,
} from "../../api/requests";
import "./animePage.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

const AnimePage = ({ params }) => {
  const animeID = params.ID;
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const {
    data: anime,
    error: animeError,
    isLoading: animeLoading,
  } = useQuery(["anime", animeID], () => fetchSingleAnime({ animeID }));
  const {
    data: popularAnime,
    error: popularAnimeError,
    isLoading: popularAnimeLoading,
  } = useQuery(["popularAnime", animeID], () =>
    fetchPopularAnimes({ animeID })
  );
  console.log(popularAnime, "popular anime");

  const {
    data: topAnime,
    error: topAnimeError,
    isLoading: topAnimeLoading,
  } = useQuery(["topAnime", animeID], () => fetchTopAnimes());

  if (!anime) {
    return <div>...Loading</div>;
  }
  if (animeError) {
    return <div>{animeError.message}</div>;
  }
  if (topAnimeError) {
    return <div>{topAnimeError.message}</div>;
  }
  if (popularAnimeError) {
    return <div>{popularAnimeError.message}</div>;
  }
  if (animeLoading) {
    return <Skeleton height={100} width={100} />;
  }
  if (topAnimeLoading) {
    return <Skeleton height={100} width={100} />;
  }
  if (popularAnimeLoading) {
    return <Skeleton height={100} width={100} />;
  }

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };
  const getFullSynopsis = () => {
    if (anime.synopsis.length > 100) {
      return showFullSynopsis
        ? anime.synopsis
        : `${anime.synopsis.substring(0, 200)}...`;
    } else {
      return anime.synopsis;
    }
  };
  return (
    <div className="hero">
      <div className="container" key={anime.animeID}>
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=${anime.trailer.youtube_id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
          />
        </div>
        <div className="animeCard">
          <div className="content">
            <h3 className="title">
              {anime.title_english}
              <br />
            </h3>
            <p className="paragraph">{anime.title_japanese}</p>
            <hr
              style={{
                margin: "5px 300px",
                borderColor: "white",
                borderWidth: "4px",
                opacity: "1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="border" />
      <div className="animeInfo">
        <div className="card_info">
          <div className="content_info">
            <p className="heading">{anime.title_english}</p>
            <div className="info-card">
              <p className="info-item">
                <img src="/star.png" alt="Rating Icon" className="info-icon" />
                {anime.rating}
              </p>
              <p className="info-item">
                <img src="/stars.png" alt="Score Icon" className="info-icon" />
                {anime.score}
              </p>
              <p className="info-item">
                <img
                  src="/open-source.png"
                  alt="Source Icon"
                  className="info-icon"
                />
                {anime.source}
              </p>
              <p className="info-item">
                <img src="/chevron.png" alt="Rank Icon" className="info-icon" />
                {anime.rank}
              </p>
            </div>

            <p className="para">{getFullSynopsis()}</p>
            <button className="btn" onClick={toggleSynopsis}>
              Read more
            </button>
            <Link className="btn" href={`/${anime.mal_id}/reviews`}>
              Reviews
            </Link>
          </div>
        </div>
      </div>
      <div className="anime_suggestion">
        <video autoPlay loop muted className="video_background">
          <source src="/lake_-_91562 (1080p).mp4" type="video/mp4" />
        </video>
        <div className="anime_rows">
          <div className="anime_row">
            <div className="header_info">
              <h3 className="heading_info">Popular Animes</h3>
            </div>

            <div className="cards">
              {popularAnime.slice(0, 3).map((anime, index) => (
                <div
                  className={`card_suggest ${["one", "two", "three"][index]}`}
                  key={index}
                  style={{
                    backgroundImage: `linear-gradient(315deg, #03a8f44b, #ff005944), url(${anime.images.jpg.large_image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="cardDetails">
                    <div className="cardDetailsHaeder">
                      {anime.title_english}
                    </div>
                    <Link
                      href={`/${anime.mal_id}`}
                      className="cardDetailsButton"
                    >
                      Click me
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="anime_row">
            <div className="header_info">
              <h3 className="heading_info">Top Airing</h3>
            </div>

            <div className="cards">
              {topAnime.slice(0, 3).map((anime, index) => (
                <div
                  className={`card_suggest ${["one", "two", "three"][index]}`}
                  key={index}
                  style={{
                    backgroundImage: `linear-gradient(315deg, #03a8f44b, #ff005944), url(${anime.images.jpg.large_image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="cardDetails">
                    <div className="cardDetailsHaeder">
                      {anime.title_english}
                    </div>
                    <div className="cardDetailsButton">Click me</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
