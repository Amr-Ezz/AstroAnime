import React, { useEffect, useState } from "react";
import "./AnimeCards.css";
import Link from "next/link";

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
  return (
    <div>
      <div className="myCard">
        {/* <BsArrowLeftShort onClick={prevPage} className="left-Arrow" /> */}

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
                        {anime.episodes ? (
                          <p>Episodes: {anime.episodes}</p>
                        ) : null}
                        <p className="type">{anime.type}</p>
                        <p className="year">{anime.year}</p>
                        <Link href={`/${anime.mal_id}`}>
                          <p className="type">More Details</p>
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
            <button className="btn btnPrev" onClick={prevPage}>
              Prev
              <span className="icon-left"></span>
              <span className="icon-left after"></span>
            </button>
          )}

          <button className="btn btnNext" onClick={nextPage}>
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
