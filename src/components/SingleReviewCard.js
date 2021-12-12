import React from "react";

function SingleReviewCard({ post }) {
  // let displayName = `${post.userEmail}`;
  // displayName = displayName.slice(0, displayName.lastIndexOf("@"));

  return (
    <div className="background-card">
      <div className="PostCard">
        <div className="PostCardImage">
          <img src={post.imageSrc} alt="Film Poster" />
        </div>
        <div className="PostCardText">
          <p>{post.postMessage}</p>
          {/* <p>
            Posted by: <a href={`/user/${post.userId}`}>{displayName}</a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default SingleReviewCard;
