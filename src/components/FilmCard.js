import React from "react";

function FilmCard({ film }) {
  return (
    <div className="FilmCard">
      <div className="FilmCardImage">
        <img src={film.imageSrc} alr={film.imageAlt} />
      </div>
      <div className="FilmCardText">
        <p>{film.filmMessage}</p>
        <p>
          Posted by: <a href={`/user/${film.userId}`}>{film.userName}</a>
        </p>
        <p>
          <a href={`/user/${film.postId}`}>View Post </a>
        </p>
      </div>
    </div>
  );
}

export default FilmCard;
