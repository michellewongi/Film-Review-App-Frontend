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
  const [currentProfile, setCurrentProfile] = useState();

  let { uid } = useParams();

  useEffect(() => {
    const loadData = () => {
      axios
        .get(`${url}/user/${uid}`)
        .then(function (response) {
          setUserReview(response.data);
          setCurrentProfile(response.data.posts[0].displayName);
        })
        .catch(function (error) {
          console.warn(error);
        });
    };
    if (!userReview) {
      loadData();
    }
  }, [uid, userReview, currentProfile]);

  // display all posts BY ONE USER
  return (
    <div className="PageWrapper">
      <div className="username">
        <strong>User: </strong>
        <p className="postedBy">
          {currentProfile ? currentProfile : userInformation.displayName}
        </p>
      </div>
      {userReview && <UserCard user={userReview} />}
    </div>
  );
}

export default UserProfile;
