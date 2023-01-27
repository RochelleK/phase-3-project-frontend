import React, { useState } from "react";

function EditProfile({ showProfile, setShowProfile}) {
  const [gender, setGender] = useState("Woman");
  const [interest, setInterest] = useState("All");
  const [location, setLocation] = useState("NYC");
  const [political, setPolitical] = useState("Liberal");
  const [bio, setBio] = useState(
    "I am a musician from nyc looking for love in the big city"
  );
  const [smoker, setSmoker] = useState(false);
  const [drinker, setDrinker] = useState(false);
  const [profilePic, setProfilePic] = useState(
""  );
  const [prompt1, setPrompt1] = useState(
    "I am looking for a long term relatioship with someone who wants to love me for who I am on the inside."
  );
  const [prompt2, setPrompt2] = useState(
    "In my freetime you can find me traveling the world and eating amazing food. I love an adventure."
  );
  const [prompt3, setPrompt3] = useState(
    "I am the queen of Wakanda. I have three siblings. I've been to the grammys"
  );
  const [meme, setMeme] = useState(
""  );
  const [age, setAge] = useState(30)

  const updateProfile = (e) => {
    e.preventDefault();
    console.log("form submitted");

    fetch(`http://localhost:9292/users/${1}`, {
      method: "PATCH",
      body: JSON.stringify({
        location: location,
        age: age,
        gender: gender,
        smoking: smoker,
        drinking: drinker,
        political: political,
        bio: bio,
        prompt_1: prompt1,
        prompt_2: prompt2,
        prompt_3: prompt3,
        meme: meme,
        profile_image: profilePic,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(e.target.reset())
      .then(setBio(""))
      .then(setPrompt1(""))
      .then(setPrompt2(""))
      .then(setPrompt3(""))
  };

  return (
    <div id="form-2-div">
      <form className="form-2" onSubmit={updateProfile}>
        <p className="form-title">My Profile</p>
        <div>
          <label className="form-text">Gender Idenity</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>
        <div>
          <label className="form-text">Interested in a </label>
          <select
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Non-binary"> Non-binary</option>
            <option value="Woman and Man">Woman and Man</option>
            <option value="All">All</option>
          </select>
        </div>
        <div>
          <label className="form-text">Location </label>
          <select
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="NYC">NYC</option>
            <option value="LA">LA</option>
            <option value="Miami">Miami</option>
            <option value="All">All</option>
          </select>
        </div>
        <div>
          <label className="form-text">Political View </label>
          <select
            name="political"
            value={political}
            onChange={(e) => setPolitical(e.target.value)}
          >
            <option value="Liberal">Liberal</option>
            <option value="Conservative">Conservative</option>
          </select>
        </div>

        <div className="slider">
          <label className="form-text">Slide to set Age: </label>
          <input
            id="range"
            type="range"
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
            max={90}
            // style={getBackgroundSizeWater()}
          />

          <p className="range-value">Age: {age}</p>
        </div>

        <div className="checkbox-div">
          <label id="exercise" className="form-text" htmlFor="exercise">
            Smoker?
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={smoker}
            onChange={(e) => setSmoker(e.target.checked)}
          />
          <label id="meditation" className="form-text" htmlFor="meditation">
            Drinker?
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={drinker}
            onChange={(e) => setDrinker(e.target.checked)}
          />
        </div>
        <div>
          <label className="form-text">Profile Pic </label>
          <input
            id="text-box"
            type="file"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </div>
        <div>
          <label className="form-text">A little bit about me: </label>
          <input
            id="text-box"
            type="text-box"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label className="form-text">
            What I am looking for in a relationship:{" "}
          </label>
          <input
            id="text-box"
            type="text-box"
            value={prompt1}
            onChange={(e) => setPrompt1(e.target.value)}
          />
        </div>
        <div>
          <label className="form-text">
            Some of my hobbies and passions include:{" "}
          </label>
          <input
            id="text-box"
            type="text-box"
            value={prompt2}
            onChange={(e) => setPrompt2(e.target.value)}
          />
        </div>
        <div>
          <label className="form-text">Two truths and a lie: </label>
          <input
            id="text-box"
            type="text-box"
            value={prompt3}
            onChange={(e) => setPrompt3(e.target.value)}
          />
        </div>

        <div>
          <label className="form-text">Favorite Meme </label>
          <input
            id="text-box"
            type="file"
            value={meme}
            onChange={(e) => setMeme(e.target.value)}
          />
        </div>
        <button id="form-submit">Save Changes</button>
      </form>
        <button id="form-submit" onClick={() => setShowProfile(true)}>
          Go Back
        </button>
    </div>
  );
}

export default EditProfile;