import React, { useCallback, useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// Components
import LoginForm from "../components/LoginForm";

function Login({ setErrors, setLoggedIn, setUserInformation }) {
  const [errorMsg, setErrorMsg] = useState();
  const loginUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          setErrors(undefined);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setErrorMsg(errorMessage);
          setErrors(errorMessage);
        });
    },
    [setErrors, setLoggedIn, setUserInformation]
  );
  return (
    <div className="PageWrapper">
      <h1 className="login-heading">Login</h1>
      <LoginForm loginUser={loginUser} />
      {errorMsg ? (
        <p className="error-message">wrong email or password...</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Login;
