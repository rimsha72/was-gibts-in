import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import bg from "../../assets/voucherbg.png";
import { useNavigate } from "react-router-dom";
const Coupons = () => {
  const navigate = useNavigate();
  const viewCompanies =()=>{
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
        <div
          className="w-full md:max-w-sm p-4 relative h-32 md:h-[131px] bg-no-repeat lg:bg-contain bg-cover mb-4"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div
          className="w-full md:max-w-sm p-4 relative h-32 md:h-[131px] bg-no-repeat lg:bg-contain bg-cover mb-4"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div
          className="w-full md:max-w-sm p-4 relative h-32 md:h-[131px] bg-no-repeat lg:bg-contain bg-cover mb-4"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div
          className="w-full md:max-w-sm p-4 relative h-32 md:h-[131px] bg-no-repeat lg:bg-contain bg-cover mb-4"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div
          className="w-full md:max-w-sm p-4 relative h-32 md:h-[131px] bg-no-repeat lg:bg-contain bg-cover mb-4"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
        <div
          className="w-full md:max-w-sm p-4 relative h-32 md:h-[131px] bg-no-repeat lg:bg-contain bg-cover mb-4"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute top-8 right-6 text-center text-white">
            <p className="font-medium text-base md:text-lg">30%</p>
            <span className="text-xs md:text-sm">5 days left</span>
          </div>
        </div>
      </div>

      <a className="flex items-center justify-center my-12" href="/companies">
        <button className="bg-blue-350 w-[250px] h-[56px] rounded text-white" onClick={viewCompanies}>
          View All Companies
        </button>
      </a>
    </div>
  );
};

export default Coupons;
