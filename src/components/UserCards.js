import React from "react";

function UserCard({ user }) {
  function displayResults({ user }) {
    let userPosts = [];
    for (let i = 0; i < 40; i++) {
      if (user.posts[`${i}`]) {
        userPosts +=
          `<div class="user-postcards">` +
          `<div class="background-card-user">` +
          `<div class="PostCard">` +
          `<div class="PostCardImage">` +
          `<img alt="Film Poster" src="${user.posts[`${i}`].imageSrc}"/>` +
          "</div>" +
          `<div class="PostCardText">` +
          `<div>` +
          "<p>" +
          user.posts[`${i}`].postMessage +
          "</p>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          `</div>`;
      }
    }
    return userPosts;
  }
  if (!user) return <></>;
  return (
    <>
      <div
        className="reviews"
        dangerouslySetInnerHTML={{
          __html: displayResults({ user }),
        }}
      ></div>
    </>
  );
}

export default UserCard;
