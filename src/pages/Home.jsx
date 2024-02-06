import { useState } from "react";
import WeatherWidget from "../components/Home/Weather";
import Location from "../components/Home/Location";
import Companies from "../components/Home/Companies";
import Events from "../components/Home/Events";
function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
        <WeatherWidget />
        <Location />
        <Companies />
        <Events />
      </div>
    </>
  );
}

export default Home;
