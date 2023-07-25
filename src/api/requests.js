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
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const fetchReviewAnime = ({ animeID }) => {
  return axios
    .get(`https://api.jikan.moe/v4/anime/${animeID}/reviews`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const fetchCharactersAnime = () => {
  return axios
    .get(`https://animechan.vercel.app/api/random"`)
    .then((res) => {
      return res.data.data,
      console.log(res)
      
    }).catch((err) => {
      console.log(err);
    });
};
