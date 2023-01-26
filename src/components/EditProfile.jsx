import React, { useState } from "react";

function EditProfile() {
  const [gender, setGender] = useState("Woman");
  const [interest, setInterest] = useState("All");
  const [location, setLocation] = useState("NYC");
  const [political, setPolitical] = useState("Liberal");
  const [smoker, setSmoker] = useState(false);
  const [drinker, setDrinker] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [prompt1, setPrompt1] = useState("");
  const [prompt2, setPrompt2] = useState("");
  const [prompt3, setPrompt3] = useState("");
  const [meme, setMeme] = useState("");

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div id="form-2-div">
      <form className="form-2">
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
            <option value="Womand">Woman</option>
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
          <label className="form-text">Age</label>
          <input id="range" type="range" value="number" />
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
          <label className="form-text">Prompt 1 </label>
          <input
            id="text-box"
            type="text-box"
            value={prompt1}
            onChange={(e) => setPrompt1(e.target.value)}
          />
        </div>
        <div>
          <label className="form-text">Prompt 2 </label>
          <input
            id="text-box"
            type="text-box"
            value={prompt2}
            onChange={(e) => setPrompt2(e.target.value)}
          />
        </div>
        <div>
          <label className="form-text">Prompt 3 </label>
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
        <button id="form-submit">Edit Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
