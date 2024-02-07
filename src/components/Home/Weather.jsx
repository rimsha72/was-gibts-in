import React, { useState } from "react";
import weather from "../../assets/weather.png";
import weather1 from "../../assets/weather1.png";
import { FaLocationDot } from "react-icons/fa6";
import temperature from "../../assets/temperature.png";
import cloud from "../../assets/cloud.png";
import map from "../../assets/map.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"; 
import { Link } from "react-router-dom";

const WeatherWidget = () => {
  const [showRestaurantsSubmenu, setShowRestaurantsSubmenu] = useState(false);
  const [showTattooArtistsSubmenu, setShowTattooArtistsSubmenu] =
    useState(false);

  const toggleRestaurantsSubmenu = () =>
    setShowRestaurantsSubmenu(!showRestaurantsSubmenu);
  const toggleTattooArtistsSubmenu = () =>
    setShowTattooArtistsSubmenu(!showTattooArtistsSubmenu);
  return (
    <div className="flex">
      <div className="lg:w-1/5 px-4 py-8 border-gray border-r lg:block hidden">
        <ul className="space-y-4 text-base text-black">
          <li
            className="flex justify-between items-center"
            onClick={toggleRestaurantsSubmenu}
          >
            Restaurants{" "}
            {showRestaurantsSubmenu ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowForward />
            )}
          </li>
          {showRestaurantsSubmenu && (
            <ul className="pl-4 space-y-2 text-sm text-blue-350">
              <li>Italian</li>
              <li>Mexican</li>
              <li>Chinese</li>
            </ul>
          )}
          <li
            className="flex justify-between items-center"
            onClick={toggleTattooArtistsSubmenu}
          >
            Tattoo Artists{" "}
            {showTattooArtistsSubmenu ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowForward />
            )}
          </li>
          {showTattooArtistsSubmenu && (
            <ul className="pl-4 space-y-2 text-sm text-blue-350">
              <li>Artist 1</li>
              <li>Artist 2</li>
              <li>Artist 3</li>
            </ul>
          )}
          <li>Gym</li>
          <li>Bowling</li>
          <li>Cafe</li>
          <li>Gym</li>
          <li>Restaurants</li>
          <li>Tattoo Artists</li>
          <li>Hair Dresser</li>
        </ul>
      </div>
      <div className="lg:w-4/5 py-6 lg:px-8">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-6">
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-4 gap-y-6">
              <img src={weather} alt="" className="w-[73px] h-[79px]" />
              <img src={weather1} alt="" className="w-[73px] h-[79px]" />
              <img src={weather} alt="" className="w-[73px] h-[79px]" />
              <img src={weather1} alt="" className="w-[73px] h-[79px]" />
              <img src={weather} alt="" className="w-[73px] h-[79px]" />
              <img src={weather1} alt="" className="w-[73px] h-[79px]" />
              <img src={weather} alt="" className="w-[73px] h-[79px]" />
              <img src={weather1} alt="" className="w-[73px] h-[79px]" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-blue-350 h-[177px] rounded-2xl text-white lg:px-6 px-4 py-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <h1 className="lg:text-lg">Germany</h1>
                <FaLocationDot className="w-5 h-5" />
              </div>
              <div className="flex px-4 lg:gap-4 gap-2 ">
                <img
                  src={temperature}
                  alt=""
                  className="w-[12px] h-[40px] mt-6"
                />
                <h1 className="lg:text-5xl text-3xl">27°C</h1>
                <img src={cloud} alt="" className="w-[78px] h-[50px]" />
              </div>
            </div>
            <p className="text-xs underline font-medium pb-4">Aug 23, Tue</p>
            <div className="flex justify-between">
              <div className="">
                <h1 className="uppercase font-medium text-sm">Humidity</h1>
                <h1 className="uppercase font-medium text-xs underline mt-2 text-center">
                  10%
                </h1>
              </div>
              <div className="">
                <h1 className="uppercase font-medium text-sm">Visiblity</h1>
                <h1 className="uppercase font-medium text-xs underline mt-2 text-center">
                  10%
                </h1>
              </div>
              <div className="">
                <h1 className="uppercase font-medium text-sm">Air Pressure</h1>
                <h1 className="uppercase font-medium text-xs underline mt-2 text-center">
                  10%
                </h1>
              </div>
              <div className="">
                <h1 className="uppercase font-medium text-sm">Wind</h1>
                <h1 className="uppercase font-medium text-xs underline mt-2 text-center">
                  10%
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <Link to="/catalog">
            <img src={map} alt="" className="lg:w-[963px] lg:h-[364px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
