import React from "react";
import zara from "../../assets/zara.png";
import zara2 from "../../assets/zara2.png";
import barcode from "../../assets/barcode.png";
import barcode2 from "../../assets/barcode2.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Coupons = () => {
  return (
    <div className="lg:py-16 border-gray border-b text-black">
      <div className="flex gap-4 items-center">
        <hr className="w-[20px] my-4 bg-blue-350 h-[40px] border-0 rounded-full"></hr>
        <p className="font-semibold text-base text-blue-350">Coupons</p>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-0 gap-4">
        <h1 className="font-bold lg:text-4xl text-2xl">
          Coupons of the companies
        </h1>
        <div className="flex gap-8 items-center">
          <p className="font-semibold">Coupons are redeemable via app</p>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <div className="bg-blue-250 h-11 w-11 flex items-center justify-center rounded-full">
                <BsArrowLeft />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-blue-250 h-11 w-11 flex items-center justify-center rounded-full">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 pt-8">
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl drop-shadow">
          <a className="flex h-80 rounded-xl bg-white items-center " href="#">
            <div className="absolute top-4 px-4 w-full ">
              <div className="flex justify-between font-inter">
                <div>
                  <h1 className="text-4xl font-semibold">10% </h1>
                  <span className="text-base font-semibold">Off</span>
                </div>
                <img src={zara} alt="" className="w-[84px] h-[35px]" />
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-black h-9 -mt-8">
              <span className="text-white text-lg font-semibold">
                Hover to view
              </span>
            </div>
            <div className="absolute bottom-4 w-full text-center">
              <span className="text-black text-xs font-semibold">
                Valid till 28th June 2023
              </span>
              <div className="flex items-center justify-center">
                <img src={barcode} alt="" className="w-[155] h-[50px] " />
              </div>
            </div>
            <div className="absolute left-0 -ml-5 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-11 w-11"></div>
            <div className="absolute right-0 -mr-5 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-11 w-11"></div>
          </a>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl">
          <a
            className="flex h-80 rounded-xl bg-black text-white items-center border border-gray-400"
            href="#"
          >
            <div className="absolute top-4 px-4 w-full ">
              <div className="flex justify-between font-inter">
                <div>
                  <h1 className="text-4xl font-semibold">10% </h1>
                  <span className="text-base font-semibold">Off</span>
                </div>
                <img src={zara2} alt="" className="w-[84px] h-[35px]" />
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-white h-9 -mt-8">
              <span className="text-black text-lg font-semibold">
                Code : FLAT10
              </span>
            </div>
            <div className="absolute bottom-4 w-full text-center">
              <span className="text-white text-xs font-semibold">
                Valid till 28th June 2023
              </span>
              <div className="flex items-center justify-center">
                <img src={barcode2} alt="" className="w-[155] h-[50px] " />
              </div>
            </div>
            <div className="absolute left-0 -ml-5 rounded-full items-center flex bg-white px-2 text-center border border-gray-400 text-sm font-medium text-white h-11 w-11"></div>
            <div className="absolute right-0 -mr-5 rounded-full items-center flex bg-white px-2 text-center border border-gray-400 text-sm font-medium text-white h-11 w-11"></div>
          </a>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl">
          <a
            className="flex h-80 rounded-xl bg-black text-white items-center border border-gray-400"
            href="#"
          >
            <div className="absolute top-4 px-4 w-full ">
              <div className="flex justify-between font-inter">
                <div>
                  <h1 className="text-4xl font-semibold">10% </h1>
                  <span className="text-base font-semibold">Off</span>
                </div>
                <img src={zara2} alt="" className="w-[84px] h-[35px]" />
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-white h-9 -mt-8">
              <span className="text-black text-lg font-semibold">
                Code : FLAT10
              </span>
            </div>
            <div className="absolute bottom-4 w-full text-center">
              <span className="text-white text-xs font-semibold">
                Valid till 28th June 2023
              </span>
              <div className="flex items-center justify-center">
                <img src={barcode2} alt="" className="w-[155] h-[50px] " />
              </div>
            </div>
            <div className="absolute left-0 -ml-5 rounded-full items-center flex bg-white px-2 text-center border border-gray-400 text-sm font-medium text-white h-11 w-11"></div>
            <div className="absolute right-0 -mr-5 rounded-full items-center flex bg-white px-2 text-center border border-gray-400 text-sm font-medium text-white h-11 w-11"></div>
          </a>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl drop-shadow">
          <a className="flex h-80 rounded-xl bg-white items-center " href="#">
            <div className="absolute top-4 px-4 w-full ">
              <div className="flex justify-between font-inter">
                <div>
                  <h1 className="text-4xl font-semibold">10% </h1>
                  <span className="text-base font-semibold">Off</span>
                </div>
                <img src={zara} alt="" className="w-[84px] h-[35px]" />
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-black h-9 -mt-8">
              <span className="text-white text-lg font-semibold">
                Hover to view
              </span>
            </div>
            <div className="absolute bottom-4 w-full text-center">
              <span className="text-black text-xs font-semibold">
                Valid till 28th June 2023
              </span>
              <div className="flex items-center justify-center">
                <img src={barcode} alt="" className="w-[155] h-[50px] " />
              </div>
            </div>
            <div className="absolute left-0 -ml-5 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-11 w-11"></div>
            <div className="absolute right-0 -mr-5 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-11 w-11"></div>
          </a>
        </div>
        
      </div>
      <div className="flex items-center justify-center my-12">
        <button className="bg-blue-350 w-[250px] h-[56px] rounded text-white">
          View All Companies
        </button>
      </div>
    </div>
  );
};

export default Coupons;
