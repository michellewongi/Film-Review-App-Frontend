import React from "react";

function FilmCard({ film }) {
  if (!film) return <></>;
  return (
    <div className="FilmCard">
      <img src={film.results[0].image} />
      <h1
        dangerouslySetInnerHTML={{
          __html: film.results[0].title ? film.results[0].title : "Unknown",
        }}
      ></h1>
    </div>
  );
}

export default FilmCard;
