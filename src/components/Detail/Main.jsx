import React from "react";
import map4 from "../../assets/map4.png";
import club1 from "../../assets/club1.png";
import club2 from "../../assets/club2.png";
import club3 from "../../assets/club3.png";
import club4 from "../../assets/club4.png";
import Tabs from "./Tabs";

const Main = () => {
  return (
    <>
      <div className="py-4 flex lg:gap-10 gap-4 lg:flex-row flex-col">
        <div className="lg:w-1/2 text-black">
          <div className="flex justify-center flex-col items-center py-4">
            <h1 className="text-xl font-bold">Club 59</h1>
            <p className="font-bold text-base py-4 font-montserrat">
              “ YOUR training + YOUR time = YOUR GYM “
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="flex-col gap-2 lg:flex hidden">
              <img src={club1} alt="" className="h-[220px] w-[175px]" />
              <img src={club2} alt="" className="w-[175px] h-[95px]" />
            </div>
            <img src={club3} alt="" className="w-[175px] h-[324px]" />
            <div className="lg:flex hidden flex-col gap-2">
              <img src={club2} alt="" className="w-[175px] h-[95px]" />
              <img src={club1} alt="" className="h-[220px] w-[175px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-6">
            <div className="flex gap-6 items-center">
              <img src={club4} alt="" className="h-16 w-16" />
              <div>
                <h1 className="text-lg font-bold">Club 59 - Your gym</h1>
                <p className="text-xs py-1 text-white mt-1 bg-blue-350 rounded-full font-montserrat w-16 px-3">
                  Sports
                </p>
              </div>
            </div>
            <Tabs />
          </div>
        </div>
        <div className="lg:w-1/2 py-3">
          <img src={map4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
