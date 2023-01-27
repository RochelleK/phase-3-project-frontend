import React from "react";
import Chat from "./Chat";

function MatchCards({ match }) {
  const {
    name,
    age,
    location,
    bio,
    prompt_1,
    prompt_2,
    prompt_3,
    meme,
    profile_image,
  } = match;
  return (
    <div className="match-center-div">
      <img className="profile-image-match" src={profile_image} />
      <div className="match-info">
        <p className="match-center-name">{name}</p>
        <p className="match-center-age">{age}</p>
        <p className="match-center-location">{location}</p>
      </div>
      <p className="profile-prompt-three">{bio}</p>
      <p></p>
    </div>
  );
}

export default MatchCards;
