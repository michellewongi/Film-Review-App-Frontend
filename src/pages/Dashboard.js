import React from "react";
// Components
import FilmCard from "../components/FilmCard";

export const MOCK_DATA = [
  {
    imageAlt: "Cool film",
    imageSrc:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/dfgnmbhxjzvbxtyw_1638085572.jpeg",
    filmMessage: "Hi",
    postId: "1",
    userId: "1",
    userName: "FilmLover123",
  },
];

function Dashboard() {
  // display all review posts
  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      {MOCK_DATA.map((film, i) => (
        <FilmCard film={film} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
