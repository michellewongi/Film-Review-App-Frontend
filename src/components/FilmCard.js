import React from "react";

function FilmCard({ film }) {
  if (!film) return <></>;
  return (
    <>
      <button className="FilmList">
        <img src={film.results[0].image} />
        <h2>{film.results[0].title}</h2>
        <p>{film.results[0].description}</p>
      </button>
    </>
  );
}

export default FilmCard;
