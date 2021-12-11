import React from "react";

function LoginForm({ loginUser }) {
  return (
    <div className="Form">
      <h2>Login Form</h2>
      <form onSubmit={(e) => loginUser(e)}>
        <label htmlFor="userEmail">Email</label>
        <input type="email" name="userEmail" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
