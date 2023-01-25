import React, { useState, useEffect } from 'react'
import Header from './Header'

function Browse() {
  
  const [potentialMatches, setPotentialMatches] = useState([])
  const [currentPotentialMatch, setCurrentPotentialMatch] = useState([0])

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

  return (
    <div>
      <Header />
      <br/>
      <div className='browse'>
        Browse Your Dating Pool
        <div>
          <img className="prof-pic"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"/>
          <div className="browse-container">
            <div className='browse-details'>
              <h1>{potentialMatch.name}</h1>
              <h3>Gender: {potentialMatch.gender}</h3>
              <h3>Age: {potentialMatch.age}</h3>
              <h3>Location: {potentialMatch.location}</h3>
              <h3>Bio: {potentialMatch.bio}</h3>
              <h3>What are you looking for in a relationship?</h3>
                <h4>{potentialMatch.prompt_1}</h4>
              <h3>What are hobbies and passions?</h3>
               <h4>{potentialMatch.prompt_2}</h4>
              <h3>Two truths and a lie:</h3>
               <h4>{potentialMatch.prompt_3}</h4>
            </div>
            <div className='browse-meme'>
                    <img src={potentialMatch.meme}/>
                  </div>
                  </div>
                  <div className='browse-buttons'>
                    <img src='/assets/delete.png' alt='https://www.flaticon.com/free-icons/cross'/>
                    <img src='/assets/check.png' alt="https://www.flaticon.com/free-icons/foursquare-check-in"/>
                  </div>
          </div>
      </div>
    </div>
  )
}

export default Browse