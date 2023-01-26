import React, { useState } from "react";

function Preferences() {
  const [genderPref, setGenderPref] = useState("All");
  const [locationPref, setLocationPref] = useState("NYC");
  const [politicalPref, setPoliticalPref] = useState("Liberal");
  const [smokerPref, setSmokerPref] = useState(false);
  const [drinkerPref, setDrinkerPref] = useState(false);

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
    <div className="profile-card-div">
      <form>
        <p className="form-title">Preferences</p>
        <div>
          <label className="form-text">Looking for A </label>
          <select
            name="gender"
            value={setGenderPref}
            onChange={(e) => setGenderPref(e.target.value)}
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Non-binary"> Non-binary</option>
            <option value="Womand and Man">Woman and Man</option>
            <option value="All">All</option>
          </select>
        </div>
        <div>
          <label className="form-text">Living In </label>
          <select
            name="location"
            value={locationPref}
            onChange={(e) => setLocationPref(e.target.value)}
          >
            <option value="NYC">NYC</option>
            <option value="LA">LA</option>
            <option value="Miami">Miami</option>
            <option value="Anywhere">Anywhere</option>
          </select>
        </div>
        <div>
          <label className="form-text">Political View </label>
          <select
            name="political"
            id="cars"
            value={politicalPref}
            onChange={(e) => setPoliticalPref(e.target.value)}
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
          <label id="exercise" className="form-text">
            Smoker?
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={smokerPref}
            onChange={(e) => setSmokerPref(e.target.checked)}
          />
          <label id="meditation" className="form-text">
            Drinker?
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={drinkerPref}
            onChange={(e) => setDrinkerPref(e.target.checked)}
          />
        </div>
        <button id="form-submit">Submit</button>
      </form>
    </div>
  );
}

export default Preferences;
