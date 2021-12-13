import React from "react";

function FilmButton({ result, onImageChange }) {
  return (
    <button
      className="singleFilmCards"
      onClick={() => onImageChange(result.image)}
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
