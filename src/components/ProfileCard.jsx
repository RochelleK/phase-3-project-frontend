import React from "react";

function ProfileCard() {
  return (
    <div>
      <div id="form">
        <form className="form">
          <p className="form-title">My Profile</p>
          <div>
            <label className="form-text">I Am A </label>
            <select name="cars" id="cars">
              <option value="volvo">Woman</option>
              <option value="saab">Man</option>
              <option value="mercedes">Non-binary</option>
            </select>
          </div>
          <div>
            <label className="form-text">Looking for A </label>
            <select name="cars" id="cars">
              <option value="volvo">Woman</option>
              <option value="saab">Man</option>
              <option value="mercedes"> Non-binary</option>
              <option value="saab">Woman and Man</option>
              <option value="audi">All</option>
            </select>
          </div>
          <div>
            <label className="form-text">Location </label>
            <select name="cars" id="cars">
              <option value="volvo">NYC</option>
              <option value="saab">LA</option>
              <option value="mercedes">Miami</option>
              <option value="audi">Anywhere</option>
            </select>
          </div>
          <div>
            <label className="form-text">Political View </label>
            <select name="cars" id="cars">
              <option value="volvo">Liberal</option>
              <option value="saab">Conservative</option>
            </select>
          </div>

          <div className="slider">
            <label className="form-text" htmlFor="water">
              Age
            </label>
            <input id="range" type="range" value="number" />
          </div>

          <div className="checkbox-div">
            <label id="exercise" className="form-text" htmlFor="exercise">
              Smoker?
            </label>
            <input className="checkbox" type="checkbox" />
            <label id="meditation" className="form-text" htmlFor="meditation">
              Drinker?
            </label>
            <input className="checkbox" type="checkbox" />
          </div>
          <div>
            <label className="form-text" htmlFor="water">
              Profile Pic
            </label>
            <input id="text-box" type="file" />
          </div>
          <div>
            <label className="form-text" htmlFor="water">
              Prompt 1
            </label>
            <input id="text-box" type="text-box" />
          </div>
          <div>
            <label className="form-text" htmlFor="water">
              Prompt 2
            </label>
            <input id="text-box" type="text-box" />
          </div>
          <div>
            <label className="form-text" htmlFor="water">
              Prompt 3
            </label>
            <input id="text-box" type="text-box" />
          </div>

          <div>
            <label className="form-text" htmlFor="water">
              Favorite Meme
            </label>
            <input id="text-box" type="file" />
          </div>

          <button id="form-submit">Submit </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
