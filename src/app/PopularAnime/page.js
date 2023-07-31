"use client";
import React, { useEffect, useState } from "react";
import "../TopAiring/page.css";
import { fetchPopularAnimes } from "../../api/requests";
import AnimePage from "../../components/AnimePage/animePage";

const popularAnimePage = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  useEffect(() => {
    fetchPopularAnimes()
      .then((data) => setPopularAnime(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(popularAnime, "zzz");
  return (
    <div className="hero-container">
      <h3 className="heading">Popular Animes</h3>
      <AnimePage animeList={popularAnime} />
    </div>
  );
};
export default popularAnimePage;
