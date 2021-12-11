import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import FirebaseConfig from "./components/FirebaseConfig";
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

export const baseUrl = `https://young-retreat-88062.herokuapp.com`;

function App() {
  // Track if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  // check to see if there is any loading...
  const [loading, setLoading] = useState(true);
  //store user information in state
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);
  // Error
  const [errors, setErrors] = useState();

  // Ensure app is initialized when it is ready to be
  useEffect(() => {
    // initialized firebase
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  // check to see if user is logged in
  // user loads page, check their status
  // set state accordingly
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //user is signed in
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          // user is signed out
          setUserInformation({});
          setLoggedIn(false);
        }
        // whenever state cxhanges setLoading to false
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
        setErrors();
      })
      .catch((error) => {
        console.warn(error);
        setErrors(error);
      });
  }

  if (loading || !appInitialized) return null;

  return (
    <div>
      <Header logout={logout} loggedIn={loggedIn} />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              !loggedIn ? (
                <Login
                  setErrors={setErrors}
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/create-user"
            element={
              !loggedIn ? (
                <CreateUser
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                  setErrors={setErrors}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/add-review"
            element={
              loggedIn ? (
                <AddReview userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/review/:id"
            element={loggedIn ? <Post /> : <Navigate to="/login" />}
          />
          <Route
            path="/user/:id"
            element={
              loggedIn ? (
                <UserProfile userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/"
            element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
