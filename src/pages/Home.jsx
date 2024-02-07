import { useState } from "react";
import WeatherWidget from "../components/Home/Weather";
import Location from "../components/Home/Location";
import Companies from "../components/Home/Companies";
import Events from "../components/Home/Events";
import Coupons from "../components/Home/Coupons";
import Products from "../components/Home/Products";
function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto lg:px-0 px-5">
        <WeatherWidget />
        <Location />
        <Companies />
        <Events />
        <Coupons />
        <Products />
      </div>
    </>
  );
}

export default Home;
