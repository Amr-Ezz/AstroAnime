import React, { useState, useContext, createContext } from "react";
const FavouriteContext = createContext();
export const useFavourite = () => {
  return useContext(FavouriteContext);
};
export const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const addToFavourite = (animeName) => {
    setFavourite([...favourite, animeName]);
  };
  return (
    <FavouriteContext.Provider value={{ favourite, addToFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
