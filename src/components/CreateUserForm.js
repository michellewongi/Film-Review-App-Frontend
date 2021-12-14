import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="displayName">Username</label>
        <input
          type="text"
          name="displayName"
          placeholder="Enter your username"
        />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button className="createUserBtn" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUserForm;
