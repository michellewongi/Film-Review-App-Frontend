import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const url = `http://localhost:4000`;

function Post() {
  const [singleReview, setSingleReview] = useState();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/review/${id}`)
      .then(function (response) {
        console.log(response.data);
        setSingleReview(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [id]);

  return (
    <div className="PageWrapper">
      <h1>Post</h1>
      <ReviewCard reviews={singleReview} />
    </div>
  );
}

export default Post;
