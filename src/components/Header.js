import React from "react";

function Header({ logout, loggedIn }) {
  return (
    <header className="HeaderWrapper">
      <div className="Header PageWrapper">
        <h1>Film Site</h1>
        <nav>
          {!loggedIn && (
            <>
              <a href="/login">Login</a>
              <a href="/create-user">Create User</a>
            </>
          )}
          {loggedIn && (
            <>
              <a href="/">Dashboard</a>
              <a href="/search">Search</a>
              <a href="/user/:id">My Profile</a>
              <a href="/add-review">Add Review</a>
              <button onClick={() => logout()}>Log Out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
