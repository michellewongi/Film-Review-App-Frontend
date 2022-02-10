import React from "react";
import FilmButton from "./FilmButton";

function FilmCard({ film }) {
  const handleImageChange = (imageUrl) => {
    document.getElementById("imageSrc").value = imageUrl;
    document.getElementById("imageSrc").classList.add("hidden");
    const img = document.createElement("img");
    img.className = "addReviewImage";
    img.src = `${imageUrl}`;
    document.querySelector(".imageSrcImg").appendChild(img);
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
