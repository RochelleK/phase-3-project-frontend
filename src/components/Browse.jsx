import React, { useState, useEffect } from 'react'
import Header from './Header'

function Browse() {
  
  const [potentialMatches, setPotentialMatches] = useState([])
  const [currentPotentialMatch, setCurrentPotentialMatch] = useState(0)

  // function nextProfile(){
  //   setCurrentPotentialMatch(currentPotentialMatch ++)
  // }

  useEffect(() =>{
    fetch("http://localhost:9292/users")
    .then ((response) => response.json())
    .then ((response) => {setPotentialMatches(response)})
  }, []);
  
  console.log(potentialMatches)
  const potentialMatch = potentialMatches[currentPotentialMatch]
  console.log(potentialMatch)

  //handles the async request to avoid an "undefined" error
  if (!potentialMatches[currentPotentialMatch]) return null

  function handleAccept(match){
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
    setCurrentPotentialMatch(currentPotentialMatch+1)
  }

  function handleReject(){
    setCurrentPotentialMatch(currentPotentialMatch + 1);
  }

  return (
    <div>
      <Header />
      <br />
      <div className="profile-card-div">      
          <img className="profile-image" src={potentialMatch.meme}/>
          <div className="profile-detail">
            <h1 className="profile_name">{potentialMatch.name}</h1>
            <h1 className="profile_age"> {potentialMatch.age}</h1>
            <h1 className="profile_age">{potentialMatch.gender}</h1>
            <h1 className="profile_location">{potentialMatch.location}</h1>
          </div>
            <p className="profile-bio">{potentialMatch.bio}</p>
            <p className="profile-prompt-title">What are you looking for in a relationship?</p>
            <p className="profile-prompt">{potentialMatch.prompt_1}</p>
            <p className="profile-prompt-title">What are hobbies and passions?</p>
            <p className="profile-prompt">{potentialMatch.prompt_2}</p>
            <p className="profile-prompt-title">Two truths and a lie:</p>
            <p className="profile-prompt">{potentialMatch.prompt_3}</p>          
          <div className="browse-buttons">
            <button onClick={handleReject}>
              <img src="/assets/delete.png" alt="https://www.flaticon.com/free-icons/cross"/>
            </button>
            <button onClick={()=>handleAccept(potentialMatch)}>
              <img src="/assets/check.png" alt="https://www.flaticon.com/free-icons/foursquare-check-in"/>
            </button>
          </div>        
      </div>
    </div>
  );
}

export default Browse