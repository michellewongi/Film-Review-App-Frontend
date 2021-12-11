import React from "react";
import ReviewCard from "../components/ReviewCard";

function UserProfile({ userInformation }) {
  // display all posts BY ONE USER
  console.log({ userInformation });
  return (
    <div className="PageWrapper">
      <h1>User Name: {userInformation.email}</h1>
      <h2>Posts</h2>
    </div>
  );
}

export default UserProfile;
