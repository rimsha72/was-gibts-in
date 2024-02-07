import React from "react";
import { IoIosArrowForward } from "react-icons/io";

// Import images
import map2 from "../../assets/map2.png";
import athlete from "../../assets/athlete.png";
import pitch from "../../assets/ptch.png";
import casino from "../../assets/casino.png";
import cinema from "../../assets/cinema.png";
import pitch2 from "../../assets/pitch2.png";
import library from "../../assets/library.png";
import sport from "../../assets/sport.png";
import club from "../../assets/club.png";
import park from "../../assets/park.png";
import pier from "../../assets/pier.png";
import sauna from "../../assets/sauna.png";
import stadium from "../../assets/stadium.png";
import pool from "../../assets/water.png";
import theatre from "../../assets/theatre.png";
import zoo from "../../assets/zoo.png";
import camera from "../../assets/camera.png";
import castle from "../../assets/castle.png";
import church from "../../assets/church.png";
import memorial from "../../assets/memorial.png";
import monument from "../../assets/monument.png";
import mosque from "../../assets/mosque.png";
import museum from "../../assets/museum.png";
import synag from "../../assets/synag.png";
import temple from "../../assets/temple.png";
import tomb from "../../assets/tomb.png";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Entertainment",
    items: [
      { img: athlete, name: "Athletics" },
      { img: pitch, name: "Basketball Pitch" },
      { img: casino, name: "Casino" },
      { img: cinema, name: "Cinema" },
      { img: athlete, name: "Fitness Centre" },
      { img: pitch2, name: "Football Pitch" },
      { img: library, name: "Library" },
      { img: sport, name: "Multi-sport Pitch" },
      { img: club, name: "Nightclub" },
      { img: park, name: "Park" },
      { img: pier, name: "Pier" },
      { img: sauna, name: "Sauna" },
      { img: stadium, name: "Stadium" },
      { img: pool, name: "Swimming Pool" },
      { img: theatre, name: "Theatre" },
      { img: pool, name: "Water Park" },
      { img: zoo, name: "Zoo" },
    ],
  },
  {
    title: "Attractions",
    items: [
      { img: camera, name: "Attraction" },
      { img: castle, name: "Castle" },
      { img: church, name: "Church" },
      { img: memorial, name: "Memorial" },
      { img: monument, name: "Monument" },
      { img: mosque, name: "Mosque" },
      { img: museum, name: "Museum" },
      { img: synag, name: "Synagogue" },
      { img: temple, name: "Temple" },
      { img: tomb, name: "Tomb" },
    ],
  },
];

const Main = () => {
  return (
    <>
      <div className="flex items-center gap-2 py-4 text-sm font-semibold">
        <p className="text-blue-1050">Home</p>
        <IoIosArrowForward />
        <p>Catalog</p>
      </div>
      <div className="py-4 flex lg:gap-10 gap-4 lg:flex-row flex-col">
        <div className="lg:w-1/2">
          {categories.map((category) => (
            <Link key={category.title} to="/category">
              <h1 className="font-bold text-xl">{category.title}</h1>
              <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-6">
                {category.items.map((item, index) => (
                  <div key={index} className="h-[140px] flex items-center justify-center flex-col shadow-md rounded-xl">
                    <img src={item.img} alt={item.name} className="h-10 w-10" />
                    <p className="font-semibold text-sm mt-3">{item.name}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:w-1/2 py-8">
          <img src={map2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
