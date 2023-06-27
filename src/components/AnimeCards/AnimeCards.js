import React, { useEffect, useState } from "react";
import "./AnimeCards.css";
import { fetchUrl } from "../Search/Search";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const AnimeCards = ({ fetchFunction, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {
    if (fetchFunction.length === 1 && searchTerm) {
      fetchFunction(searchTerm).then((data) => setAnimeList(data));
    } else {
      fetchFunction().then((data) => setAnimeList(data));
    }
  }, [fetchFunction, searchTerm]);
  return (
    <div className="myCard">
      <BsArrowLeftShort onClick={prevPage} />
      {animeList
        ? animeList
            .slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )
            .map((anime) => (
              <div className="innerCard" key={anime.mal_id}>
                <div className="frontSide">
                  <div className="paragraph">
                    <p className="title">{anime.title}</p>
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
                  <p className="title">{anime.title}</p>
                  <p className="japanese">{anime.title_japanese}</p>
                  {anime.episodes ? <p>Episodes: {anime.episodes}</p> : null}
                  <p className="type">{anime.type}</p>
                  <p className="year">{anime.year}</p>
                </div>
              </div>
            ))
        : null}
      <BsArrowRightShort onClick={nextPage} />
    </div>
  );
};

export default AnimeCards;
