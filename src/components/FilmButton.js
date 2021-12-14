import React from "react";

function FilmButton({ result, onImageChange }) {
  function toggle() {
    const form = document.querySelector(".Form");
    const films = document.querySelector(".FilmList");
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      films.setAttribute("style", "display: none !important");
    }
  }

  return (
    <button
      className="singleFilmCards"
      onClick={() => {
        onImageChange(result.image);
        toggle();
      }}
    >
      <div className="film-wrapper">
        <img src={result.image} />
        <h2>{result.title}</h2>
        <h3>{result.description}</h3>
      </div>
    </button>
  );
}

export default FilmButton;
