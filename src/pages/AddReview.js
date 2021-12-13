import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddReviewForm from "../components/AddReviewForm";
import FilmCard from "../components/FilmCard";

const baseUrl =
  process.env.REACT_APP_BACKEND_URL ||
  `https://young-retreat-88062.herokuapp.com` ||
  `http://localhost:4000`;

function AddReview({ userInformation }) {
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

  const navigate = useNavigate();
  function submitReview(e) {
    e.preventDefault();

    const postMessage = e.currentTarget.postMessage.value;
    const imageSrc = e.currentTarget.imageSrc.value;
    const displayName = userInformation.displayName;
    const userId = userInformation.uid;

    const url = `${baseUrl}/create?postMessage=${postMessage}&imageSrc=${imageSrc}&userId=${userId}&displayName=${displayName}`;

    axios
      .get(url)
      .then(function (response) {
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  return (
    <div className="PageWrapper">
      <h2>Search</h2>
      <div className="fields">
        <input
          className="search-bar"
          type="text"
          onChange={handleChange}
          placeholder="Name of film"
          onKeyDown={(e) => {
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
      <div className="ReviewPage">
        <FilmCard film={title} />
        <AddReviewForm submitReview={submitReview} />
      </div>
    </div>
  );
}

export default AddReview;
