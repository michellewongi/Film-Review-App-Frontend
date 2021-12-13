import React from "react";

function ReviewCard({ post }) {
  // add a function that adds ... if more than x characters
  let previewText = `${post.postMessage}`;
  previewText = previewText.slice(0, 45);

  return (
    <div className="background-card">
      <div className="PostCard">
        <div className="PostCardImage">
          <img src={post.imageSrc} alt="Film Poster" />
        </div>
        <div className="PostCardText">
          <p>{previewText}</p>
          <p>
            Posted by:{" "}
            <a className="postedBy" href={`/user/${post.userId}`}>
              {post.displayName}
            </a>
          </p>
          <p className="view-post">
            <a href={`/review/${post.id}`}>View Post </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
