import React from "react";
import { MOCK_DATA } from "./Dashboard";
import ReviewCard from "../components/ReviewCard";

function UserProfile({ userInformation }) {
  // display all posts BY ONE USER
  console.log({ userInformation });
  return (
    <div className="PageWrapper">
      <h1>User Name:</h1>
      <h2>Posts</h2>
      {MOCK_DATA.map((post, i) => (
        <ReviewCard post={post} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
