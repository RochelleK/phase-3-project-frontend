import React, { useState } from "react";
import EditProfile from "./EditProfile";

function ProfileCard({ user }) {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <>
      {showProfile ? (
        <div className="profile-card-div">
          <img className="profile-image" src={user.profile_image} />
          <div className="profile-detail">
            <h1 className="profile_name">{user.name}</h1>
            <h1 className="profile_age">{user.age}</h1>
            <h1 className="profile_location">{user.location}</h1>
          </div>
          <p className="profile-bio">{user.bio}</p>
          <p className="profile-prompt-title">
            What are you looking for in a relationship?
          </p>
          <p className="profile-prompt">{user.prompt_1}</p>
          <p className="profile-prompt-title">
            What are hobbies and passions?:
          </p>
          <p className="profile-prompt">{user.prompt_2}</p>
          <p className="profile-prompt-title">Two truths and a lie:</p>
          <p className="profile-prompt">{user.prompt_3}</p>

          <div className = "profile-edit-button-div">
            {" "}
            <button className = "profile-edit-button" onClick={() => setShowProfile(!showProfile)}>
              {" "}
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div>
          <EditProfile user={user} />
        </div>
      )}
    </>
  );
}

export default ProfileCard;
