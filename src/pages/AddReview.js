import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";

const baseUrl = `http://localhost:4000/`;

function AddReview({ userInformation }) {
  const navigate = useNavigate();
  function submitReview(e) {
    e.preventDefault();

    const postMessage = e.currentTarget.postMessage.value;
    const imageSrc = e.currentTarget.imageSrc.value;
    const imageAlt = e.currentTarget.imageAlt.value;
    // const displayName = userInformation.displayName;
    const userId = userInformation.uid;

    const url = `${baseUrl}/create?postMessage=${postMessage}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&userId=${userId}`;

    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  return (
    <div className="PageWrapper">
      <h1>Add Review</h1>
      <AddReviewForm submitReview={submitReview} />
    </div>
  );
}

export default AddReview;
