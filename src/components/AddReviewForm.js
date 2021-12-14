import React from "react";

function AddReviewForm({ submitReview }) {
  return (
    <div className="Form hidden">
      <h2>Add Review Post</h2>
      <form id="write-form" onSubmit={(e) => submitReview(e)}>
        <label htmlFor="imageSrc">Image Src</label>
        <input type="text" name="imageSrc" id="imageSrc" />
        <label htmlFor="postMessage">Post Message</label>
        <textarea name="postMessage" placeholder="Enter your review" rows="7" />
        <button className="createPostBtn" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AddReviewForm;
