"use client";
import React, { useEffect, useState } from "react";
import {
  fetchReviewAnime,
  fetchSingleAnime,
  fetchTopAnimes,
} from "@/api/requests";
import "./page.css";

const reviewsPage = ({ params }) => {
  const animeID = params.ID;
  const [review, setReview] = useState([]);
  const [anime, setAnime] = useState([]);
  const [topAiring, setTopAiring] = useState([]);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  // const manageSynopsis = () => {
  //   setShowFullSynopsis(!showFullSynopsis);
  // };
  // const getFullSynopsis = () => {
  //   if (anime.synopsis.length > 100) {
  //     return showFullSynopsis
  //       ? anime.synopsis
  //       : `${anime.synopsis.substring(0, 200)}...`;
  //   } else {
  //     return anime.synopsis;
  //   }
  // };

  const toggleSynopsis = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };
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
  useEffect(() => {
    if (animeID) {
      fetchTopAnimes()
        .then((data) => setTopAiring(data))
        .catch((err) => console.log(err));
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
        <div className="card_description">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner">
            <div className="paragraph">
              <p className="para">{anime.synopsis}</p>
            
            </div>

            <div className="card-details">
              <div className="card-review">
                <div className="info">
                  {anime.images && (
                    <img
                      src={anime.images.jpg.large_image_url}
                      alt="animeCard"
                    />
                  )}
                  <div className="overlay">
                    <h3 className="title">{anime.title_english}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
      <div className="review-container">
        {review.slice(0, 3).map((reviewItem, index) => {
          const fullSynopsis = reviewItem.review;
          const shortSynopsis =
            fullSynopsis.length > 100
              ? `${fullSynopsis.substring(0, 200)}...`
              : fullSynopsis;
          const longSynopsis =
            fullSynopsis.length > 500
              ? `${fullSynopsis.substring(0, 500)}...`
              : fullSynopsis;

          return (
            <div key={index}>
              <div className="card" onClick={() => toggleSynopsis(index)}>
                <div className="card-content">
                  <div className="card-top">
                    <div className="image-wrapper">
                      <img
                        src={reviewItem.user.images.jpg.image_url}
                        alt="username"
                      />
                    </div>

                    <p style={{ paddingRight: "10px" }}>
                      {reviewItem.user.username}
                    </p>

                    {/* <span className="card-title"> {index + 1}</span> */}
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
      <div className="anime_row">
        

        {/* <div className="cards">
          {topAiring &&
            topAiring.slice(0, 3).map((anime, index) => (
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
                  <div className="cardDetailsHaeder">{anime.title_english}</div>
                  <div className="cardDetailsButton">Click me</div>
                </div>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default reviewsPage;
