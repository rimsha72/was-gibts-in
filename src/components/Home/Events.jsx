import React from "react";
import event from "../../assets/event.png";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Events = () => {
  const navigate = useNavigate();
  const backgroundStyle = {
    height: "189px",
    backgroundImage: `url(${event})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="lg:py-16 border-gray border-b">
      <h1 className="font-bold lg:text-4xl text-2xl">
        Events <span className="text-blue-350">Calendar</span>
      </h1>
      <hr className="w-[64px] my-4 bg-blue-350 h-3 border-0 rounded-full"></hr>
      <div
        style={backgroundStyle}
        className="w-full bg-cover rounded-xl my-8 flex items-center justify-center"
      >
        <button onClick={()=>navigate('/event')} className="px-4 py-2 bg-blue-350 text-white w-[231px] h-[56px] font-medium rounded flex items-center justify-center gap-4">
          Let’s find out <BsArrowRight className="w-9 h-9"/>
        </button>
      </div>
    </div>
  );
};

export default Events;
