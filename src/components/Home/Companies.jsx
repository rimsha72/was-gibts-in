import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Companies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Sample data for each card
  const cardsData = [
    {
      name: "VAPODORM",
      price: "$120",
      originalPrice: "$160",
      rating: 5,
      reviews: 88,
    },
    {
      name: "CLUB 59",
      price: "$960",
      originalPrice: "$1160",
      rating: 4,
      reviews: 72,
    },
    {
      name: "CLUB 59",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
      reviews: 99,
    },
    {
      name: "CLUB 59",
      price: "$375",
      originalPrice: "$400",
      rating: 5,
      reviews: 99,
    },
    {
      name: "VAPODORM",
      price: "$120",
      originalPrice: "$160",
      rating: 5,
      reviews: 88,
    },
    {
      name: "CLUB 59",
      price: "$960",
      originalPrice: "$1160",
      rating: 4,
      reviews: 72,
    },
    {
      name: "CLUB 59",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
      reviews: 99,
    },,

  ];

  const nextCards = () => {
    setCurrentIndex((prevIndex) => prevIndex + 4);
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className="lg:py-16 border-gray border-b">
      <div className="flex gap-4 items-center">
        <hr className="w-[20px] my-4 bg-blue-350 h-[40px] border-0 rounded"></hr>
        <p className="font-semibold text-base text-blue-350">Today's</p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold lg:text-4xl text-2xl">Companies of the day</h1>
        <div className="flex gap-2">
          <button
            className="bg-blue-250 h-10 w-10 flex items-center justify-center rounded-full"
            onClick={prevCards}
            disabled={currentIndex === 0}
          >
            <GoArrowLeft className="h-4 w-4" />
          </button>
          <button
            className="bg-blue-250 h-10 w-10 flex items-center justify-center rounded-full"
            onClick={nextCards}
          >
            <GoArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 pt-8">
        {/* Render cards based on currentIndex */}
        {cardsData.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <div
            key={currentIndex + index}
            className="relative flex w-full flex-col overflow-hidden"
          >
            <a className="relative flex h-60 overflow-hidden rounded bg-blue-250" href="#">
              <span className="absolute top-0 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><IoMdHeartEmpty className="text-black w-[16px] h-[16px]" /></span>
              <span className="absolute top-10 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><LuEye className="text-black w-[16px] h-[16px]" /></span>
            </a>
            <div className="my-4">
              <a href="#">
                <h5 className="text-base tracking-tight text-black uppercase font-medium">{card.name}</h5>
              </a>
              <div className="my-2 flex items-center gap-3 text-base font-medium">
                <span className=" text-blue-350">{card.price}</span>
                <span className="text-blue-650">{card.originalPrice}</span>
              </div>
              <div className="flex items-center">
                {[...Array(card.rating)].map((_, i) => (
                  <TiStarFullOutline key={i} className="h-5 w-5 text-blue-750" />
                ))}
                <span className="mr-2 rounded px-2.5 py-0.5 text-sm font-semibold text-blue-650">
                  ({card.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <button
          className="bg-blue-350 w-[250px] h-[56px] rounded text-white"
          onClick={() => navigate("/companies")}
        >
          View All Companies
        </button>
      </div>
    </div>
  );
};

export default Companies;
