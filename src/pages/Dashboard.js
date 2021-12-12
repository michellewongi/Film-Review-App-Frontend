import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import ReviewCard from "../components/ReviewCard";
import { baseUrl } from "../App";

function Dashboard() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // get all posts
    axios
      .get(baseUrl)
      .then(function (response) {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  // display all review posts
  return (
    <div className="PageWrapper">
      <h1 className="dashboard-heading">Dashboard</h1>
      {reviews.map((l, i) => (
        <ReviewCard post={l} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
