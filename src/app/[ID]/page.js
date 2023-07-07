"use client";
import React from "react";
import { fetchSingleAnime } from "@/api/requests";
import "./animePage.css";
import { useState, useEffect } from "react";

const AnimePage = ({ params }) => {
  const animeID = params.ID;
  const [anime, setAnime] = useState(null);
  useEffect(() => {
    if (animeID) {
      fetchSingleAnime({ animeID })
        .then((data) => {
          setAnime(data);
          console.log(anime);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [animeID]);

  if (!anime) {
    return <div>...Loading</div>;
  }
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
        <div className="card">
          <b></b>
          <img src={anime.images.jpg.large_image_url} alt="animeCard" />
          <div className="content">
            <p className="title">
              {anime.title}
              <br />
              <span>{anime.title_japanese}</span>
            </p>
          </div>
        </div>
      </div>
   
    </div>
    <div className="border" />
    <div className="animeInfo">
        <h1>{anime.title}</h1>
        <p>rank:{anime.rank} {anime.source} rating: {anime.rating} {anime.score}</p>
        <p>{anime.synopsis}</p>
      </div>
    </div>
  
  );
};

export default AnimePage;
