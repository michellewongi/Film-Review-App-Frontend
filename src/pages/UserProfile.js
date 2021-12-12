import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserCard from "../components/UserCards";

const url =
  process.env.REACT_APP_BACKEND_URL ||
  `https://young-retreat-88062.herokuapp.com` ||
  `http://localhost:4000`;

function UserProfile({ userInformation }) {
  const [userReview, setUserReview] = useState();
  console.log(userInformation);

  let { uid } = useParams();

  useEffect(() => {
    const loadData = () => {
      axios
        .get(`${url}/user/${uid}`)
        .then(function (response) {
          setUserReview(response.data);
        })
        .catch(function (error) {
          console.warn(error);
        });
    };
    if (!userReview) {
      loadData();
    }
  }, [uid]);

  // display all posts BY ONE USER
  return (
    <div className="PageWrapper">
      <p className="username">
        <strong>User: </strong> {userInformation.email}
      </p>
      {userReview && <UserCard user={userReview} />}
    </div>
  );
}

export default UserProfile;
