import React from "react";

function ReviewCard({ post }) {
  // let displayName = `${post.userEmail}`;
  // displayName = displayName.slice(0, displayName.lastIndexOf("@"));

  let previewText = `${post.postMessage}`;
  previewText = previewText.slice(0, 45) + "...";

  return (
    <div className="background-card">
      <div className="PostCard">
        <div className="PostCardImage">
          <img src={post.imageSrc} alt="Film Poster" />
        </div>
        <div className="PostCardText">
          <p>{previewText}</p>
          {/* <p>
            Posted by: <a href={`/user/${post.userId}`}>{displayName}</a>
          </p> */}
          <p className="view-post">
            <a href={`/review/${post.id}`}>View Post </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;