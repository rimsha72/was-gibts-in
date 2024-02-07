import React from "react";
import entertain from "../../assets/entertain.png";
import attract from "../../assets/attract.png";
import business from "../../assets/business.png";
import lodging from "../../assets/lodging.png";
import shop from "../../assets/shop.png";
import health from "../../assets/health.png";
import food from "../../assets/fast.png";
import edu from "../../assets/education.png";
import transport from "../../assets/transport.png";
import finance from "../../assets/finance.png";
const Categories = () => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex gap-3 lg:py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={entertain} alt="" className="w-3.5 h-3.5" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Entertainment</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={attract} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Attractions</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={business} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Business</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={lodging} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Lodging</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={shop} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Shops</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={health} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Health</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={food} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Food</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={edu} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Education</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={transport} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Transport</p>
      </div>
      <div className="flex gap-3 py-4 items-center">
        <div className="bg-blue-850 h-6 w-6 rounded-full flex items-center justify-center">
          <img src={finance} alt="" className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-blue-350">Finance</p>
      </div>
    </div>
  );
};

export default Categories;
