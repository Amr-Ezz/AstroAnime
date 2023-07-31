"use client";
import React, { useEffect, useState } from "react";
import { fetchReviewAnime, fetchSingleAnime } from "../../../api/requests";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "animate.css";
import "./page.css";

const reviewsPage = ({ params }) => {
  const animeID = params.ID;

  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const toggleSynopsis = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  const {
    data: review,
    error: reviewError,
    isLoading: reviewLoading,
  } = useQuery(["review", animeID], () => fetchReviewAnime({ animeID }));

  console.log(review, "dataaa");

  const {
    data: anime,
    error: animeError,
    isLoading: animeLoading,
  } = useQuery(["anime", animeID], () => fetchSingleAnime({ animeID }));

  console.log(anime, "animeed");

  if (anime === null) {
    return <Skeleton height={250} />;
  }
  if (animeLoading) {
    return <Skeleton height={250} />;
  }
  if (reviewLoading) {
    return <Skeleton height={250} />;
  }
  if (reviewError) {
    return <div>{reviewError.message}</div>;
  }

  return (
    <div className="hero-container">
      <div className="card-info" key={anime?.mal_id}>
        <div className="card_description animate__animated animate__bounce">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner">
            <div className="paragraph">
              <p className="para">{anime?.synopsis}</p>
            </div>

            <div className="card-details">
              <div className="card-review">
                <div className="info">
                  {anime?.images ? (
                    <img
                      src={anime?.images.jpg.large_image_url}
                      alt="animeCard"
                    />
                  ) : (
                    <Skeleton circle={true} height={50} width={50} />
                  )}
                  <div className="overlay">
                    {anime?.title_english ? (
                      <h3 className="title">{anime?.title_english}</h3>
                    ) : (
                      <Skeleton height={20} width={20} />
                    )}
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
                <div className="card-content animate__animated animate__zoomInLeft animate__delay-2s">
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
