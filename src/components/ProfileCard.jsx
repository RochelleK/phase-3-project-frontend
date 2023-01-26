import React, { useState } from "react";
import EditProfile from "./EditProfile";

function ProfileCard({ user }) {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <>
      {showProfile ? (
        <div className="profile-card-div">
          <h1>{user.name}</h1>
          <img src={user.profile_image} />
          <h2>{user.gender}</h2>
          <h2>{user.age}</h2>
          <h2>{user.location}</h2>
          <p>Bio: {user.bio}</p>
          <p>What are you looking for in a relationship?: {user.prompt_1}</p>
          <p>What are hobbies and passions?: {user.prompt_2}</p>
          <p>Two truths and a lie: {user.prompt_3}</p>
          <p>
            Favorite Meme
            <img src={user.meme} />
          </p>
          <div>
            {" "}
            <button onClick={() => setShowProfile(!showProfile)}>
              {" "}
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="profile-card-div">
          <EditProfile user={user} />
        </div>
      )}
    </>
  );
}

export default ProfileCard;
