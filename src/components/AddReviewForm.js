import React from "react";

function AddReviewForm({ submitReview }) {
  return (
    <div className="Form">
      <h2>Add Review Post</h2>
      <form onSubmit={(e) => submitReview(e)}>
        <label htmlFor="imageSrc">Image Src</label>
        <input type="text" name="imageSrc" id="imageSrc" />
        <label htmlFor="postMessage">Post Message</label>
        <input type="text" name="postMessage" placeholder="Enter your review" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default AddReviewForm;
