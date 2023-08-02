import React, { useEffect, useState } from "react";
import "./AnimeCards.css";
import Link from "next/link";
import { useFavourite } from "../../app/providers/favProvider";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const showButtons = searchTerm || fetchFunction.length !== 1;
  const { favourite, addToFavourite } = useFavourite();
  console.log(favourite);
  return (
    <div>
      <div className="myCard">
        {/* <BsArrowLeftShort onClick={prevPage} className="left-Arrow" /> */}

        {animeList
          ? animeList
              .slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage)
              .map((anime) => (
                <div
                  className="innerCard"
                  key={anime.mal_id}
                >
                  <div className="frontSide">
                    <div className="paragraph">
                      <p className="title">{anime.title_english}</p>
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
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="sm"
                      style={{
                        color: "#650101",
                        position: "absolute",
                        right: "1rem",
                        top: "1rem",
                        fontSize: "2rem",
                      }}
                      onClick={() => addToFavourite(anime.title, anime.mal_id)}
                    />
                    <p className="title">{anime.title_english}</p>
                    <p className="japanese">{anime.title_japanese}</p>
                    {anime.episodes ? <p>Episodes: {anime.episodes}</p> : null}
                    <p className="type">{anime.type}</p>
                    <p className="year">{anime.year}</p>
                    <Link href={`/${anime.mal_id}`}>
                      <button className="button">
                        More Details
                        <div className="hoverEffect">
                          <div></div>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              ))
          : null}

        {/* <BsArrowRightShort onClick={nextPage} /> */}
      </div>
      {showButtons && (
        <div className="buttonContainer">
          {currentPage > 0 && (
            <button
              className="btn btnPrev"
              onClick={prevPage}
            >
              Prev
              <span className="icon-left"></span>
              <span className="icon-left after"></span>
            </button>
          )}

          <button
            className="btn btnNext"
            onClick={nextPage}
          >
            Next
            <span className="icon-right"></span>
            <span className="icon-right after"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimeCards;
