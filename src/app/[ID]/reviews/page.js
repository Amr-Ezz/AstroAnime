"use client";
import React, { useEffect, useState } from "react";
import { fetchReviewAnime, fetchSingleAnime } from "@/api/requests";
import "./page.css";

const reviewsPage = ({ params }) => {
  const animeID = params.ID;
  const [review, setReview] = useState([]);
  const [anime, setAnime] = useState([]);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  
  const toggleSynopsis = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  }
  const [error, setError] = useState(null);
  useEffect(() => {
    if (animeID) {
      fetchReviewAnime({ animeID })
        .then((data) => {
          setReview(data);
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to fetch review");
        });
    }
  }, [animeID]);
  useEffect(() => {
    if (animeID) {
      fetchSingleAnime({ animeID })
        .then((data) => {
          console.log("Anime data", data);
          console.log("Anime images:", data.images);
          setAnime(data);
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to fetch anime");
        });
    }
  }, [animeID]);
  if (error) {
    return <div>{error}</div>;
  }
  if (anime === null) {
    <div>Loading..</div>;
  }
  console.log(anime);
  // const toggleSynopsis = () => setShowFullSynopsis(!showFullSynopsis);

  return (
    <div className="hero-container">
      <div className="card-info" key={anime.mal_id}>
        <div className="video-wrapper">
          <video
            className="shadow-1-strong rounded"
            src="/ninja.mp4"
            title="local video"
            loop
            autoPlay
            muted
            playsInline
            style={{ width: "100%" }}
          ></video>
        </div>
        <div className="card-details">
          <div className="card-review">
            <div className="info">
              {anime.images && (
                <img src={anime.images.jpg.large_image_url} alt="animeCard" />
              )}
              <div className="overlay">
              <h3 className="title">{anime.title_english}</h3>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-container">
        {review.slice(0, 3).map((reviewItem, index) => {
          const fullSynopsis = reviewItem.review;
          const shortSynopsis =
            fullSynopsis.length > 100
              ? `${fullSynopsis.substring(0, 200)}...`
              : fullSynopsis;
              const longSynopsis = fullSynopsis.length > 500 ? `${fullSynopsis.substring(0, 500)}...`: fullSynopsis;


          return (
            <div key={index}>
              <div className="card" onClick={() => toggleSynopsis(index)}>
                <div className="card-content">
                  <div className="card-top">
                    <span className="card-title">Review: {index + 1}</span>
                    <p>{reviewItem.score}</p>
                  </div>
                  <div className="card-bottom">
                    <p>{activeCard === index ? longSynopsis : shortSynopsis}</p>
                    <svg
                      width="32"
                      viewBox="0 -960 960 960"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => toggleSynopsis(index)}
                    >
                      <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default reviewsPage;
