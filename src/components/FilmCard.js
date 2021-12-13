import React from "react";
import FilmButton from "./FilmButton";

function FilmCard({ film }) {
  const handleImageChange = (imageUrl) => {
    document.getElementById("imageSrc").value = imageUrl;
  };

  if (!film) {
    return <></>;
  }

  return (
    <div className="FilmList">
      {film.results.map((result, index) => (
        <FilmButton
          key={index}
          result={result}
          onImageChange={handleImageChange}
        />
      ))}
    </div>
  );
}

export default FilmCard;
