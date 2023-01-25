import React, { useState } from "react";
import EditProfile from "./EditProfile";

function ProfileCard({ user }) {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <>
      {showProfile ? (
        <div className="profile-card-div">
          {user.name}
          {user.location}
          <button onClick={() => setShowProfile(!showProfile)}>
            {" "}
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="profile-card-div">
          <button onClick={() => setShowProfile(!showProfile)}>
            {" "}
            Submit Changes
          </button>
          <EditProfile />
        </div>
      )}
    </>
  );
}

export default ProfileCard;
