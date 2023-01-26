import React, {useState} from "react";

function Preferences() {

const [genderPref, setGenderPref] = useState("All")
const [locationPref, setLocationPref] = useState("NYC")
const [politicalPref, setPoliticalPref] = useState("Liberal")
const [smokerPref, setSmokerPref] = useState(false)
const [drinkerPref, setDrinkerPref] = useState(false)


const updatePrefs = (e) => {
    e.preventDefault();
    console.log("pref submitted");
    
    fetch(`http://localhost:9292/users/${1}`, {
      method: "PATCH",
      body: JSON.stringify({
        gender_pref: genderPref,
        // age_min_pref: age_min_pref,
        // age_max_pref: age_max_pref,
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
      .then((json) => console.log(json))
      .then(e.target.reset());

  }

  return (
    <div id="form">
      <form className="form" onSubmit={updatePrefs}>
        <p className="form-title">Preferences</p>
        <div>
          <label className="form-text">Looking for a: </label>
          <select name="gender" value={genderPref} onChange={(e)=> setGenderPref(e.target.value)}>
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Non-binary"> Non-binary</option>
            <option value="Womand and Man">Woman and Man</option>
            <option value="All">All</option>
          </select>
        </div>
        <div>
          <label className="form-text">Living In </label>
          <select name="location" value={locationPref} onChange={(e)=> setLocationPref(e.target.value)} >
            <option value="NYC">NYC</option>
            <option value="LA">LA</option>
            <option value="Miami">Miami</option>
            <option value="Anywhere">Anywhere</option>
          </select>
        </div>
        <div>
          <label className="form-text">Political View </label>
          <select name="political" id="cars" value={politicalPref} onChange={(e)=> setPoliticalPref(e.target.value)}>
            <option value="Liberal">Liberal</option>
            <option value="Conservative">Conservative</option>
          </select>
        </div>

        <div className="slider">
          <label className="form-text" >
            Age
          </label>
          <input id="range" type="range" value="number" />
        </div>

        <div className="checkbox-div">
          <label id="exercise" className="form-text" >
            Smoker?
          </label>
          <input className="checkbox" type="checkbox" value={smokerPref} onChange={(e)=> setSmokerPref(e.target.checked)}/>
          <label id="meditation" className="form-text" >
            Drinker?
          </label>
          <input className="checkbox" type="checkbox" value={drinkerPref} onChange={(e)=> setDrinkerPref(e.target.checked)}/>
        </div>
        <button id="form-submit">Submit</button>
      </form>
    </div>
  );
}

export default Preferences;
