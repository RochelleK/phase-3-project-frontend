import React, { useState } from "react";
import Preferences from "./Preferences";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

function PersonalProfile() {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div>
      <Header />
      {isClicked ? (
        <div>
          <button
            onClick={() => {
              setIsClicked(!isClicked);
              console.log("this is clicked");
            }}
            className="pref-button"
          >
            Edit Preferences
          </button>
          <ProfileCard />
        </div>
      ) : (
        <div>
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="pref-button"
          >
            Got Back to Profile
          </button>
          <Preferences />
        </div>
      )}
    </div>
  );
}

export default PersonalProfile;
