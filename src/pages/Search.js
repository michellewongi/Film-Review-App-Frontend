import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "../components/FilmCard";

function Search() {
  const [title, setTitle] = useState();
  const [titleName, setTitleName] = useState();

  const apiKey = "k_69xwbh1e";

  const titleURL = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleName}`;

  function handleChange(e) {
    setTitleName(e.target.value);
  }

  const getFilm = () => {
    axios
      .get(titleURL)
      .then(function (response) {
        setTitle(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  return (
    <div className="PageWrapper">
      <h1>Search</h1>
      <div className="fields">
        <input
          type="text"
          placeholder="Name of film"
          onChange={handleChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              getFilm();
            }
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            getFilm();
          }}
        >
          Search
        </button>
      </div>
      <FilmCard film={title} />
    </div>
  );
}

export default Search;
