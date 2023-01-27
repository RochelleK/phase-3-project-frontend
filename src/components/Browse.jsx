import React, { useState, useEffect } from "react";
import Header from "./Header";

function Browse() {
  const [potentialMatches, setPotentialMatches] = useState([]);
  const [currentPotentialMatch, setCurrentPotentialMatch] = useState(0);

  // function nextProfile(){
  //   setCurrentPotentialMatch(currentPotentialMatch ++)
  // }

  useEffect(() => {
    fetch("http://localhost:9292/users/potential")
      .then((response) => response.json())
      .then((response) => {
        setPotentialMatches(response);
      });
  }, []);

  console.log(potentialMatches);
  const potentialMatch = potentialMatches[currentPotentialMatch];
  console.log(potentialMatch);

  //this line of code handles the async request to avoid an "undefined" error:
  //if (!potentialMatches[currentPotentialMatch]) return null

  //Out-of-Potential-Matches Error handler
  if (!potentialMatches[currentPotentialMatch])
    return (
      <div>
        <Header />
        <div>
          <video
            id="empty-beach"
            muted
            autoplay={"autopnpmlay"}
            preload="auto"
            loop
          >
            <source src="assets/beach_placeholder.mov" type="video/mp4" />
          </video>
        </div>
        <div className="no-more-potential">
          <h1 className="error-tagline">
            Sorry, you're out of potential matches...
          </h1>
          <br />
          <h3 className="error-tagline">please try again later</h3>
        </div>
      </div>
    );

  function handleAccept(match) {
    fetch("http://localhost:9292/newmatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        liker_id: 1,
        likee_id: match.id,
        match_status: true,
      }),
    }).then((r) => r.json());
    // .then(setCurrentPotentialMatch(currentPotentialMatch+1));
    setCurrentPotentialMatch(currentPotentialMatch + 1);
  }

  function handleReject() {
    setCurrentPotentialMatch(currentPotentialMatch + 1);
  }

  return (
    <div className="personal-div-two">
      <Header />
      <div className="browse-card-div">
        <img className="profile-image-two" src={potentialMatch.meme} />
        <div className="profile-detail">
          <h1 className="profile_name">{potentialMatch.name}</h1>
          <h1 className="profile_age"> {potentialMatch.age}</h1>
          <h1 className="profile_age">{potentialMatch.gender}</h1>
          <h1 className="profile_location">{potentialMatch.location}</h1>
        </div>
        <p className="profile-bio-two">{potentialMatch.bio}</p>
        <p className="profile-prompt-title-two">
          What are you looking for in a relationship?
        </p>
        <p className="profile-prompt-two">{potentialMatch.prompt_1}</p>
        <p className="profile-prompt-title-two">What are hobbies and passions?</p>
        <p className="profile-prompt-two">{potentialMatch.prompt_2}</p>
        <p className="profile-prompt-title-two">Two truths and a lie:</p>
        <p className="profile-prompt-two">{potentialMatch.prompt_3}</p>
        <div className="browse-buttons">
          <button onClick={handleReject}>
            <img
              src="/assets/delete.png"
              alt="https://www.flaticon.com/free-icons/cross"
            />
          </button>
          <button onClick={() => handleAccept(potentialMatch)}>
            <img
              src="/assets/check.png"
              alt="https://www.flaticon.com/free-icons/foursquare-check-in"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Browse;
