import React from "react";

function UserCard({ user }) {
  function displayResults({ user }) {
    let userPosts = [];
    for (let i = 0; i < 20; i++) {
      if (user.posts[`${i}`]) {
        userPosts +=
          `<div class="background-card">` +
          `<div class="PostCard">` +
          `<div class="PostCardImage">` +
          `<img src="${user.posts[`${i}`].imageSrc}">` +
          "</div>" +
          "<p>" +
          user.posts[`${i}`].userEmail +
          "</p>" +
          "<p>" +
          user.posts[`${i}`].postMessage +
          "</p>" +
          "</div>" +
          "</div>";
      }
    }
    return userPosts;
  }
  if (!user) return <></>;
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: displayResults({ user }),
        }}
      ></div>
    </>
  );
}

export default UserCard;
