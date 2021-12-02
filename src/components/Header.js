import React from "react";

function Header() {
  return (
    <header className="HeaderWrapper">
      <div className="Header PageWrapper">
        <h1>Film Site</h1>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/login">Login</a>
          <a href="/create-user">Create User</a>
          <a href="/add-review">Add Review</a>
          {/* TODO: pull in user id */}
          <a href="/user/:id">My Profile</a>
          {/* TODO: add logout function */}
          <a href="/logout">Logout</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
