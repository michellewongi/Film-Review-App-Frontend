import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import FilmCard from "../components/FilmCard";

export const MOCK_DATA = [
  {
    imageAlt: "Cool film",
    imageSrc:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/dfgnmbhxjzvbxtyw_1638085572.jpeg",
    filmMessage: "Hi",
    postId: "1",
    userId: "1",
    userName: "FilmLover123",
  },
];

const url = `http://localhost:4000`;

function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState();
  const [titleName, setTitleName] = useState();

  const apiKey = "k_69xwbh1e";

  const titleURL = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleName}`;

  function handleChange(e) {
    setTitleName(e.target.value);
  }

  useEffect(() => {
    // get ALL review posts
    axios
      .get(url)
      .then(function (response) {
        setReviews(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  const getFilm = () => {
    axios
      .get(titleURL)
      .then(function (response) {
        setTitle(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  // display all review posts
  return (
    <>
      <div className="PageWrapper">
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

        {/* <h1>Dashboard</h1>
        {MOCK_DATA.map((film, i) => (
          <FilmCard film={film} key={i} />
        ))} */}
      </div>
    </>
  );
}

export default Dashboard;
