import { useState } from "react";
import WeatherWidget from "../components/Home/Weather";
function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
        <WeatherWidget />
      </div>
    </>
  );
}

export default Home;
