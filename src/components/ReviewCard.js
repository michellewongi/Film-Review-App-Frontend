import React from "react";

function ReviewCard({ post }) {
  return (
    <div className="PostCard">
      <div className="PostCardImage">
        <img src={post.imageSrc} alt="Film Poster" />
      </div>
      <div className="PostCardText">
        <p>{post.postMessage}</p>
        <p>
          Posted by: <a href={`/user/${post.userId}`}>{post.userEmail}</a>
        </p>
        <p>
          <a href={`/review/${post.id}`}>View Post </a>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
