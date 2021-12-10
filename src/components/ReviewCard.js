import React from "react";

function ReviewCard({ post, key }) {
  return (
    <div className="PostCard">
      <div className="PostCardImage">
        <img src={post.imageSrc} alt={post.imageAlt} />
      </div>
      <div className="PostCardText">
        <p>{post.postMessage}</p>
        <p>
          Posted by: <a href={`/user/${post.userId}`}>{post.userId}</a>
        </p>
        <p>
          <a href={`/user/${post.id}`}>View Post </a>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
