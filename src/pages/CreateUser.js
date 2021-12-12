import React, { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Components
import CreateUserForm from "../components/CreateUserForm";

function CreateUser({ setUserInformation, setErrors, setLoggedIn }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user.updateProfile({
            displayName: e.currentTarget.displayName.value,
          });
          user.reload();
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          setErrors();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setErrors, setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper">
      <h1>Create User</h1>
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default CreateUser;
