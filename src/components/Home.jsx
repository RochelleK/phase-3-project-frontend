import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <video id="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
          <source src="assets/video3.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <h1 className="header-tagline">It's what's inside that counts</h1>
      </div>
    </div>
  );
}

export default Home;
