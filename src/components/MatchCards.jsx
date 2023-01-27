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
    <div className="match-chat-div-2">
      <div className="form">
        <p>{name}</p>
        <br></br>
        <img src={profile_image} />
        <p>{age}</p>
        <p>{location}</p>
        <p>{bio}</p>
        <p>{prompt_1}</p>
        <p>{prompt_2}</p>
        <p>{prompt_3}</p>
        <p></p>
      </div>
      { match == [] ?
      <></> :
      <Chat match={match} /> 
    }
    </div>
  );
}

export default MatchCards;
