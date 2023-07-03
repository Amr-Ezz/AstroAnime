import React from "react";
import { fetchSingleAnime } from "@/api/requests";
import "./singleAnime.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const AnimePage = () => {
  const router = useRouter();
  const { animeID } = router.query;
  const [anime, setAnime] = useState(null);
  useEffect(() => {
    if (animeID) {
      fetchSingleAnime({ animeID })
        .then((data) => {
          setAnime(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [animeID]);

  if (!anime) {
    return <div>...Loading</div>;
  }
  return (
    <div className="container">
      <div className="animeCard">
        <div className="card">
          <b></b>
          <div className="content">
            <p className="title">
              {anime.title}
              <br />
              <span>{anime.title_japanese}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="animeInfo"></div>
    </div>
  );
};

export default AnimePage;