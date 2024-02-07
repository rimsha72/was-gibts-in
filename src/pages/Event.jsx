import { useState } from "react";
import Calendar from "../components/Event/Calendar";
import { IoIosSearch } from "react-icons/io";
function Event() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto lg:px-0 px-5">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2 lg:px-16 lg:border-gray lg:border-r-2 my-8">
            <div className="relative py-8">
              <input
                type="text"
                id="password"
                className="w-full pl-3 pr-10 py-2 bg-blue-1450/50 rounded transition-colors focus:outline-none"
                placeholder="Search for Events"
              />
              <button className="block w-7 h-7 text-center lg:text-xl leading-0 absolute top-10 right-2 text-gray-600 hover:text-gray-900 transition-colors">
                <IoIosSearch />
              </button>
            </div>
            <Calendar />
          </div>
          <div className="lg:w-1/2 my-8 ">
            <div className="flex items-center border-dashed border-b lg:px-6 px-2 py-6 border-gray-400">
              <p className="w-[70px] text-sm">8 AM</p>
              <div className="bg-blue-350 text-white lg:h-[90px] w-full rounded-xl flex lg:flex-row flex-col items-center px-4 justify-between">
                <div className="flex gap-4 items-center">
                  <h1 className="lg:text-xl text-sm font-semibold">Music Event</h1>
                  <p className="text-xs">Thursday, November 9</p>
                </div>
                <p className="bg-blue-1550 rounded-full lg:py-3 py-1 px-3 text-xs lg:my-0 my-2">Public Event</p>
              </div>
            </div>
            <div className="flex items-center border-dashed border-b lg:px-6 py-6 border-gray-400">
              <p className="w-[70px] text-sm">9 AM</p>
              <div className="bg-blue-650/20 text-black lg:h-[90px] w-full rounded-xl flex lg:flex-row flex-col items-center px-4 justify-between">
                <div className="flex gap-4 items-center">
                  <h1 className="lg:text-xl text-sm  font-semibold">Music Event</h1>
                  <p className="text-xs">Thursday, November 9</p>
                </div>
                <p className="bg-blue-1650 text-white rounded-full lg:py-3 py-1 px-3 text-xs lg:my-0 my-2">Public Event</p>
              </div>
            </div>
            <div className="flex items-center border-dashed border-b lg:px-6 py-6 border-gray-400">
              <p className="w-[70px] text-sm">11 AM</p>
              <div className="bg-blue-650/20 text-black lg:h-[90px] w-full rounded-xl flex lg:flex-row flex-col items-center px-4 justify-between">
                <div className="flex gap-4 items-center">
                  <h1 className="lg:text-xl text-sm  font-semibold">Music Event</h1>
                  <p className="text-xs">Thursday, November 9</p>
                </div>
                <p className="bg-blue-1650 text-white rounded-full lg:py-3 py-1 px-3 text-xs lg:my-0 my-2">Public Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
