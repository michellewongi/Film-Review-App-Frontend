import React from "react";
import { MOCK_DATA } from "./Dashboard";
import FilmCard from "../components/FilmCard";

function UserProfile() {
  // display all posts BY ONE USER
  return (
    <div className="PageWrapper">
      <h1>User Name:</h1>
      <h2>Posts</h2>
      {MOCK_DATA.map((film, i) => (
        <FilmCard film={film} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
