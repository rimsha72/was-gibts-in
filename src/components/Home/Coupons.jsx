import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import bg from "../../assets/voucherbg.png";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Coupons = () => {
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);
  const viewCompanies = () => {
    navigate('/companies');
  }

  return (
    <div className="lg:py-16 border-gray border-b text-black max-w-screen-2xl mx-auto lg:px-4">
      <div className="flex gap-4 items-center">
        <hr className="w-[20px] my-4 bg-blue-350 h-[40px] border-0 rounded"></hr>
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

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 my-8">
        <button className="relative" onClick={() => setshowModal(true)}>
          <img src={bg} alt="" />
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </button>
        <div className="relative" onClick={() => setshowModal(true)}>
          <img src={bg} alt="" />
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div className="relative" onClick={() => setshowModal(true)}>
          <img src={bg} alt="" />
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div className="relative" onClick={() => setshowModal(true)}>
          <img src={bg} alt="" />
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div className="relative" onClick={() => setshowModal(true)}>
          <img src={bg} alt="" />
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div className="relative" onClick={() => setshowModal(true)}>
          <img src={bg} alt="" />
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
      </div>
      {showModal &&
        <div className="fixed inset-0 z-50 overflow-y-auto bg-blue-250 bg-opacity-80">
          <div className="flex items-center justify-center min-h-screen px-4">
              <div class="bg-gradient-to-br from-blue-350 to-blue-1750  mx-auto max-w-4xl w-full text-white text-center py-20 px-20 rounded-lg shadow-md relative">
                <RxCross2 className="h-6 w-6 text-white absolute top-4 right-4" onClick={()=>setshowModal(false)} />
                <h3 class="text-2xl font-semibold mb-4">30% flat off on all rides within the city<br />using HDFC Credit Card</h3>
                <div class="flex items-center justify-center space-x-2 my-12">
                  <span id="cpnCode" class="border-white border text-white px-4 py-2 rounded-l font-medium">STEALDEAL20</span>
                  <span id="cpnBtn" class="border border-white bg-white text-blue-350 px-4 py-2 rounded-r cursor-pointer">Copy Code</span>
                </div>
                <p class="text-sm">Valid Till: 20 Dec, 2021</p>

                <div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                <div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>

              </div>
            </div>
          </div>
      }
      <a className="flex items-center justify-center my-12" href="/companies">
        <button className="bg-blue-350 w-[250px] h-[56px] rounded text-white" onClick={viewCompanies}>
          View All Companies
        </button>
      </a>
    </div>
  );
};

export default Coupons;
