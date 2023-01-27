import React from "react";

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
    <div>
      <div className="form">
        THIS IS THE PROFILE FOR THE MATCH
        <br></br>
        <img src={profile_image} />
        <p >NAME: {name}</p>
        <p>AGE: {age}</p>
        <p>Location: {location}</p>
        <p>Bio: {bio}</p>
        <p></p>
      </div>
    </div>
  );
}

export default MatchCards;
