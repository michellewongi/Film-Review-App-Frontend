import React from "react";

function FilmCard({ film }) {
  // function displaySearchResults({ film }) {
  //   let results = [];
  //   for (let i = 0; i < 10; i++) {
  //     if (film[`${i}`]) {
  //       results +=
  //         `<button class='singleFilmCards'>` +
  //         `<img src="${film[`${i}`].image}">` +
  //         "<h2>" +
  //         film[`${i}`].title +
  //         "</h2>" +
  //         "<h3>" +
  //         film[`${i}`].description +
  //         "</h3>" +
  //         "</button>";
  //     }
  //   }
  //   return results;
  // }

  if (!film) return <></>;
  return (
    <>
      <div
      // className="FilmList"
      // dangerouslySetInnerHTML={{
      //   __html: displaySearchResults({ film }),
      // }}
      >
        <button className="FilmList">
          <img src={film[0].image} />
          <h2>{film[0].title}</h2>
          <h3>{film[0].original_title}</h3>
          <p>
            <strong>Director: </strong>
            {film[0].director}
          </p>
          <p>
            <strong>Producer: </strong>
            {film[0].producer}
          </p>
          <p>{film[0].description}</p>
        </button>
      </div>
    </>
  );
}

export default FilmCard;
