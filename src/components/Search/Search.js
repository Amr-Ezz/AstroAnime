import React, { useState, useEffect, useRef } from "react";
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
  const inputRef = useRef();
 
  useEffect(() => {
    if (search) {
      fetchUrl(search).then(data => {
        onSearch(data)
      })
    }
  }, [search]);

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value)
  };


  return (
    <div className="search">
      <div className="inputbox">
        <form onSubmit={submitHandler}>
          <input
            className="input-value"
            value={search}
            onChange={e => setSearch(e.target.value)}
            required="required"
            type="text"
            ref={inputRef}
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
