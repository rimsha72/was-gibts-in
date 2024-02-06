import React from "react";

const Banner = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl lg:mx-8 mx-4 text-blue-150 flex justify-between items-center lg:h-12 lg:p-0 py-3 lg:text-sm text-xs">
        <div className="flex-1"></div>
        <div className="flex-2 lg:text-center">
          <p className="flex gap-4">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <button className="underline font-semibold">ShopNow</button>
          </p>
        </div>
        <div className="flex-1 flex justify-end gap-2">
          <button className="lg:block hidden">Location</button>
          <button className="underline font-semibold lg:block hidden">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
