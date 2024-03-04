import React from "react";
import vape from "../../assets/vape.png"
const Location = () => {
  return (
    <div className="lg:py-16 border-gray border-b">
      <h1 className="font-bold lg:text-4xl text-2xl font-montserrat">Was gibts in <span className="text-blue-350">Berlin</span>?</h1>
      <hr className="w-[64px] my-4 bg-blue-350 h-3 border-0 rounded-full"></hr>
      <div className="flex lg:flex-row flex-col gap-4 pt-8">
        <div className="bg-blue-550 rounded-lg lg:h-[87px] flex items-center justify-between w-full px-4 drop-shadow-md lg:py-0 py-4">
          <div className="">
            <h1 className="uppercase font-bold text-lg">VAPODORM</h1>
            <p className="text-blue-650 text-sm">Vapodrome e-cigarette shop</p>
          </div>
          <img src={vape} alt="" className="w-[111px] h-[68px]" />
        </div>
        <div className="bg-blue-550 rounded-lg lg:h-[87px] flex items-center justify-between w-full px-4 drop-shadow-md lg:py-0 py-4">
          <div className="">
            <h1 className="uppercase font-bold text-lg">VAPODORM</h1>
            <p className="text-blue-650 text-sm">Vapodrome e-cigarette shop</p>
          </div>
          <img src={vape} alt="" className="w-[111px] h-[68px]" />
        </div>
        <div className="bg-blue-550 rounded-lg lg:h-[87px] flex items-center justify-between w-full px-4 drop-shadow-md lg:py-0 py-4">
          <div className="">
            <h1 className="uppercase font-bold text-lg">VAPODORM</h1>
            <p className="text-blue-650 text-sm">Vapodrome e-cigarette shop</p>
          </div>
          <img src={vape} alt="" className="w-[111px] h-[68px]" />
        </div>
      </div>
    </div>
  );
};

export default Location;
