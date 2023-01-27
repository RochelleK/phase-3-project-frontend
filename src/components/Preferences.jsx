import React, { useState } from "react";

function Preferences() {
  const [genderPref, setGenderPref] = useState("All");
  const [locationPref, setLocationPref] = useState("NYC");
  const [politicalPref, setPoliticalPref] = useState("Liberal");
  const [smokerPref, setSmokerPref] = useState(false);
  const [drinkerPref, setDrinkerPref] = useState(false);
  const [minAge, setMinAge] = useState(27);
  const [maxAge, setMaxAge] = useState(60);

  

  const updatePrefs = (e) => {
    e.preventDefault();
    console.log("pref submitted");

    fetch(`http://localhost:9292/pref/${1}`, {
      method: "PATCH",
      body: JSON.stringify({
        gender_pref: genderPref,
        age_min_pref: minAge,
        age_max_pref: maxAge,
        location_pref: locationPref,
        smoking_pref: smokerPref,
        drinking_pref: drinkerPref,
        political_pref: politicalPref,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // .then(e.target.reset());
  };

  return (
    <div className="profile-card-div-pref">
      <form className="form" onSubmit={updatePrefs}>
        <p className="form-title">Discovery Settings</p>
        <div className="form-sections">
          <label className="form-text">Gender Preference </label>
          <select
            name="gender"
            value={genderPref}
            onChange={(e) => setGenderPref(e.target.value)}
            className="dropdown"
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="All">All</option>
          </select>
        </div>
        <div className="form-sections">
          <label className="form-text">Location </label>
          <select
            className="dropdown"
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
        <div className="form-sections">
          <label className="form-text">Political View </label>
          <select
            className="dropdown"
            name="political"
            id="cars"
            value={politicalPref}
            onChange={(e) => setPoliticalPref(e.target.value)}
          >
            <option value="Liberal">Liberal</option>
            <option value="Conservative">Conservative</option>
          </select>
        </div>

        <div className="form-sections-two">
          <label className="form-text">Min Age</label>
          <input
            id="range"
            type="range"
            value={minAge}
            onChange={(e) => setMinAge(e.target.valueAsNumber)}
            min={18}
            max={100}
          />
          <p className="range-text">{minAge}</p>
        </div>

        <div className="form-sections-two">
          <label className="form-text">Max Age</label>
          <input
            id="range"
            type="range"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.valueAsNumber)}
            min={18}
            max={100}
          />
          <p className="range-text">{maxAge}</p>
        </div>

        <div className="form-sections">
          <label id="exercise" className="form-text">
            Smoker?
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={smokerPref}
            onChange={(e) => setSmokerPref(e.target.checked)}
          />
          <label id="drinker" className="form-text">
            Drinker?
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={drinkerPref}
            onChange={(e) => setDrinkerPref(e.target.checked)}
          />
        </div>
        <button id="form-submit-three">Submit</button>
      </form>
    </div>
  );
}

export default Preferences;
