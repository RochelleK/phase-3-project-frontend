import React from 'react'

function Browse() {
  return (
    <div className='browse'>
      Browse Your Dating Pool
      <div>
        <img className="prof-pic"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"/>
        <div className="browse-container">
        <div className='browse-details'>
          <h1>Name</h1>
          <h3>Gender: [gender]</h3>
          <h3>Age: [age]</h3>
          <h3>Location: [location]</h3>
          <h3>Bio: [bio]</h3>
          <h3>What are you looking for in a relationship?</h3>
            <h4>[prompt 1]</h4>
          <h3>What are hobbies and passions?</h3>
           <h4>[prompt 2]</h4>
          <h3>Two truths and a lie:</h3>
           <h4>[prompt 3]</h4>
        </div>
        <div className='browse-meme'>
          <img src="https://brobible.com/wp-content/uploads/2021/07/best-50-memes-billionaires-other-planets.png"/>
        </div>
        </div>
        <div className='browse-buttons'>
          <img src='/assets/delete.png' alt='https://www.flaticon.com/free-icons/cross'/>
          <img src='/assets/check.png' alt="https://www.flaticon.com/free-icons/foursquare-check-in"/>
        </div>
      </div>
    </div>
  )
}

export default Browse