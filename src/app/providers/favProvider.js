import React, { useState, useContext, createContext } from "react";
const FavouriteContext = createContext();
export const useFavourite = () => {
  return useContext(FavouriteContext);
};
export const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const isFavourite = (id) => {
    return favourite.some((anime) => anime.mal_id === id);
  };

  const addToFavourite = (animeName, id, imageUrl) => {
    if (isFavourite(id)) {
      setFavourite(favourite.filter((anime) => anime.id !== id));
    } else {
      setFavourite([...favourite, { title: animeName, mal_id: id, imageUrl: imageUrl }]);
    }
  };
  return (
    <FavouriteContext.Provider value={{ favourite, addToFavourite, isFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
