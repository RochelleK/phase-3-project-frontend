import React, { useState, useEffect } from "react";
import Preferences from "./Preferences";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

function PersonalProfile() {
  const [isClicked, setIsClicked] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Header />
      {isClicked ? (
        <div className="personal-div">
          <button
            onClick={() => {
              setIsClicked(!isClicked);
              console.log("this is clicked");
            }}
            className="pref-button"
          >
            Discovery Settings
          </button>
          <ProfileCard user={user} />
        </div>
      ) : (
        <div className="personal-div">
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="pref-button"
          >
            Back to Profile
          </button>
          <Preferences />
        </div>
      )}
    </div>
  );
}

export default PersonalProfile;
