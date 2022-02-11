import React from "react";
import FilmButton from "./FilmButton";

function FilmCard({ film }) {
  /**
   * Function to display the chosen film image in review form
   * @param a The image URL
   * @returns display image
   */
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
