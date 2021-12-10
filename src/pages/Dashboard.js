import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import ReviewCard from "../components/ReviewCard";

export const MOCK_DATA = [
  {
    imageAlt: "Cool film",
    imageSrc:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/dfgnmbhxjzvbxtyw_1638085572.jpeg",
    postMessage: "Hi",
    userId: "1",
  },
];

const url = `http://localhost:4000/`;

function Dashboard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(url)
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
      <h1>Dashboard</h1>
      {reviews.map((l) => (
        <ReviewCard post={l} />
      ))}
    </div>
  );
}

export default Dashboard;
