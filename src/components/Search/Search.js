import React, { useState, useEffect } from "react";
import "./Search.css";
export const fetchUrl = async (searchTerm) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw&limit=20`
  );
  const data = await res.json();
  console.log(data)
 return data?.data;
};
const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    if (search) {
      fetchUrl(search).then(data => {
        onSearch(data)
      })
    }
  }, [search]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <div className="inputbox">
        <form onSubmit={searchHandler}>
          <input
            className="input-value"
            value={search}
            required="required"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span>Search</span>
          <i></i>
        </form>
      </div>
    </div>
  );
};

export default Search;
/* <div class="inputbox">
    <input required="required" type="text">
    <span>Username</span>
    <i></i>
</div>*/
