import React from "react";
import map3 from "../../assets/map3.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import filter from "../../assets/filter.png";
import training from "../../assets/training.png";
import training1 from "../../assets/training2.png";
import { TiStarFullOutline } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";

const Main = () => {
  return (
    <>
      <div className="flex items-center gap-2 py-4 text-sm font-semibold">
        <p className="text-blue-1050">Home</p>
        <IoIosArrowForward />
        <p className="text-blue-1050">Catalog</p>
        <IoIosArrowForward />
        <p className="text-blue-1050">Entertainment</p>
        <IoIosArrowForward />
        <p>Fitness Centre</p>
      </div>
      <div className="py-4 flex lg:gap-10 gap-4 lg:flex-row flex-col">
        <div className="lg:w-1/2">
          <div className="flex gap-3 items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoIosSearch />
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full ps-10 py-3 px-2.5"
                placeholder="Find a Category"
                required
              />
            </div>
            <img src={filter} alt="" className="h-8 w-8" />
          </div>
          <div className="flex justify-between py-4">
            <h1 className="font-bold text-3xl">Fitness Centre</h1>
            <p className="text-sm text-blue-1050 font-semibold">22,052 found</p>
          </div>
          <div className="flex flex-col space-y-4 my-4" >
            <Link className="flex justify-between items-center flex-row " to="/detail">
              <div className="flex gap-4 items-center">
                <img src={training} alt="" className="w-[140px] h-[130px]" />
                <h1 className="text-blue-1250 font-bold">
                  Gritness Cross Training 2.0
                </h1>
              </div>
              <p className="flex gap-1 text-blue-350 font-bold">
                <TiStarFullOutline className="h-6 w-6 " />
                <span>2.0</span>
              </p>
            </Link>
            <Link className="flex justify-between items-center " to="detail">
              <div className="flex gap-4 items-center">
                <img src={training1} alt="" className="w-[140px] h-[130px]" />
                <div>
                  <h1 className="text-blue-1250 font-bold">
                    Fitness Factory Premiere
                  </h1>
                  <p className="flex gap-1 text-blue-350 font-bold mt-2 items-center">
                    <MdLocationOn className="h-5 w-5 text-blue-350 lg:block hidden" />
                    <span className="text-blue-1050 text-sm font-semibold">
                      Cyprus, GPS: 35.329464,33.35707
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            <Link className="flex justify-between items-center" to="detail">
              <div className="flex gap-4 items-center">
                <img src={training} alt="" className="w-[140px] h-[130px]" />
                <h1 className="text-blue-1250 font-bold">
                  Competition Higienópolis
                </h1>
              </div>
              <p className="flex gap-1 text-blue-350 font-bold">
                <TiStarFullOutline className="h-6 w-6 " />
                <span>1.0</span>
              </p>
            </Link>
            <Link className="flex justify-between items-center" to="detail">
              <div className="flex gap-4 items-center">
                <img src={training} alt="" className="w-[140px] h-[130px]" />
                <div className="">
                  <h1 className="text-blue-1250 font-bold">
                    Kingdom Fight Gym
                  </h1>
                  <p className="flex gap-1 text-blue-350 font-bold mt-2 lg:items-center">
                    <MdLocationOn className="h-5 w-5 text-blue-350 lg:block hidden" />
                    <span className="text-blue-1050 text-sm font-semibold">
                      Krong Siem Reap, Cambodia, GPS: 13.346738,103.86204
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex justify-center gap-3 text-white">
              <div className="h-8 w-8 bg-blue-350 flex items-center justify-center rounded-full">
                <p>1</p>
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-full">
                <p className="text-blue-1050">2</p>
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-full">
                <p className="text-blue-1050">3</p>
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-full">
                <p className="text-blue-1050">4</p>
              </div>
              <div className="h-8 w-8 bg-blue-350 flex items-center justify-center rounded-full">
                <p>
                  <IoIosArrowForward className="h-4 w-14" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 py-3">
          <img src={map3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
