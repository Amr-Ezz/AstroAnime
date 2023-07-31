"use client";
import React, { useEffect, useState } from "react";
import AnimePage from "../../components/AnimePage/animePage";
import { fetchTopAnimesSingle } from "../../api/requests";
import "./page.css";

const topAiring = () => {
  const [topAiring, setTopAiring] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    fetchTopAnimesSingle()
      .then((data) => setTopAiring(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(topAiring, "zzz");
  return (
    <div className="hero-container">
      <h3 className="heading">Top Airing</h3>
      <AnimePage animeList={topAiring} />
    </div>
  );
};

export default topAiring;
