import axios from "axios";

export const fetchPopularAnimes = () => {
  return axios
    .get("https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=24")
    .then((res) => res.data.data)
    .catch((err) => {
      throw err;
    });
};

export const fetchTopAnimes = () => {
  return axios
    .get("https://api.jikan.moe/v4/top/anime?filter=airing&limit=5")
    .then((res) => res.data.data)
    .catch((err) => {
      throw err;
    });
};
export const fetchSingleAnime = ({ animeID }) => {
  return axios
    .get(`https://api.jikan.moe/v4/anime/${animeID}`)
    .then((res) => res.data.data)
    .catch((err) => {
      throw err;
    });
};
