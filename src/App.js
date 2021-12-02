import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
// Components
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import AddReview from "./pages/AddReview";
import UserProfile from "./pages/UserProfile";
import Post from "./pages/Post";
import Header from "./components/Header";
// Stylesheet
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/add-review" element={<AddReview />} />
          <Route path="/review/:id" element={<Post />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
