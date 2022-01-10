import React from "react";

function SingleReviewCard({ post }) {
  return (
    <div className="background-card">
      <div className="PostCard">
        <div className="PostCardImage">
          <img src={post.imageSrc} alt="Film Poster" />
        </div>
        <div className="PostCardText">
          <div>
            <p>{post.postMessage}</p>
            <p>
              Posted by:{" "}
              <a className="postedBy" href={`/user/${post.userId}`}>
                {post.displayName}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleReviewCard;
