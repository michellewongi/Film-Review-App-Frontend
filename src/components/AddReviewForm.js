import React from "react";

function AddReviewForm({ submitReview }) {
  return (
    <div className="Form">
      <h2>Add Review Post</h2>
      <form onSubmit={(e) => submitReview(e)}>
        <label htmlFor="postMessage">Post Message</label>
        <input type="text" name="postMessage" placeholder="Enter your review" />
        <label htmlFor="imageSrc">Image Src</label>
        <input type="text" name="imageSrc" />
        <label htmlFor="imageAlt">Image Alt</label>
        <input type="text" name="imageAlt" placeholder="Alt text for image" />
        <button type="submit">Create Review Post</button>
      </form>
    </div>
  );
}

export default AddReviewForm;
