import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <video id="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
        <source src="assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
