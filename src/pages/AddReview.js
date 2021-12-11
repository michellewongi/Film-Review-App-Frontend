import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";
import FilmCard from "../components/FilmCard";

const baseUrl = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function AddReview({ userInformation }) {
  const [title, setTitle] = useState();

  const titleURL = "https://ghibliapi.herokuapp.com/films";

  function setFilm() {
    if (!title) return <></>;
    return (document.getElementById("imageSrc").value = title[0].image);
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
    const userId = userInformation.uid;
    const userEmail = userInformation.email;

    const url = `${baseUrl}/create?postMessage=${postMessage}&imageSrc=${imageSrc}&userId=${userId}&userEmail=${userEmail}`;

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
          type="text"
          placeholder="Name of film"
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
            setFilm();
          }}
        >
          Search
        </button>
      </div>
      <FilmCard film={title} />
      <AddReviewForm submitReview={submitReview} />
    </div>
  );
}

export default AddReview;
