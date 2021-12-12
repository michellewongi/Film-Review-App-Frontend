import React from "react";

function Header({ logout, loggedIn, userInformation }) {
  return (
    <header className="HeaderWrapper">
      <div className="Header PageWrapper">
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
              <a href={`/user/${userInformation.uid}`}>My Profile</a>
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
