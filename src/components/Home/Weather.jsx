import React from "react";
const WeatherCard = ({ time, temperature, weather }) => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-blue-500 rounded-2xl shadow-lg flex items-center space-x-4">
      <div className="flex-1 min-w-0 relative">
        <div className="absolute -bottom-1 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>
        <h2 className="text-lg font-bold text-white truncate">{time}</h2>
        <p className="text-white">{temperature}°</p>
        <div
          className={`h-8 w-8 text-white ${
            weather === "storm" ? "bg-yellow-300" : "bg-blue-300"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
const WeatherWidget = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 px-4 py-8 border-gray border-r">
        <ul className="space-y-4 text-base text-black">
          <li>Restaurants</li>
          <li>Tattoo Artists</li>
          <li>Gym</li>
          <li>Bowling</li>
          <li>Cafe</li>
          <li>Gym</li>
          <li>Restaurants</li>
          <li>Tattoo Artists</li>
          <li>Hair Dresser</li>
        </ul>
      </div>
      <div className="w-4/5 p-4">
        <div className="mb-4">
          <div className="lg:w-1/2">
            <WeatherCard time="21:00 pm" temperature="27" weather="storm" />
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
