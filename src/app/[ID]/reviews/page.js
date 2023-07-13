"use client";
import React, { useEffect, useState } from "react";
import { fetchReviewAnime } from "@/api/requests";
import "./page.css";

const reviewsPage = ({ params }) => {
  const animeID = params.ID;
  const [review, setReview] = useState([]);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  useEffect(() => {
    if (animeID) {
      fetchReviewAnime({ animeID })
        .then((data) => {
          setReview(data);
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [animeID]);
  const toggleSynopsis = () => setShowFullSynopsis(!showFullSynopsis);

  return (
    <div >
      {review.slice(0, 3).map((reviewItem, index) => {
        const fullSynopsis = reviewItem.review;
        const shortSynopsis =
          fullSynopsis.length > 100
            ? `${fullSynopsis.substring(0, 200)}...`
            : fullSynopsis;

        return (
          <div key={index}>
            <div className="card" onClick={toggleSynopsis}>
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">Review: {index + 1}</span>
                  <p>{reviewItem.score}</p>
                </div>
                <div className="card-bottom">
                  <p>{showFullSynopsis ? fullSynopsis : shortSynopsis}</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={toggleSynopsis}
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image"></div>
            </div>
            {/* <h2>Review {index + 1}</h2>
    <p>{reviewItem.review}</p>  
    <p>Rating: {reviewItem.score}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default reviewsPage;
