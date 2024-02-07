import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const Companies = () => {
  const navigate=useNavigate();
  return (
    <div className="lg:py-16 border-gray border-b">
      <div className="flex gap-4 items-center">
        <hr className="w-[20px] my-4 bg-blue-350 h-[40px] border-0 rounded-full"></hr>
        <p className="font-semibold text-base text-blue-350">Today's</p>
      </div>
      <h1 className="font-bold lg:text-4xl text-2xl">Companies of the day</h1>
      <div className="flex lg:flex-row flex-col gap-4 pt-8">
        <div className="relative flex w-full flex-col overflow-hidden">
          <a className="relative flex h-60 overflow-hidden rounded bg-blue-250" href="#">
            {/* <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" /> */}
            <span className="absolute top-0 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><IoMdHeartEmpty className="text-black w-[16px] h-[16px]" /></span>
            <span className="absolute top-10 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><LuEye className="text-black w-[16px] h-[16px]" /></span>
          </a>
          <div className="my-4">
            <a href="#">
              <h5 className="text-base tracking-tight text-black uppercase font-medium">VAPODORM</h5>
            </a>
            <div className="my-2 flex items-center gap-3 text-base font-medium">
              <span className=" text-blue-350">$120</span>
              <span className="text-blue-650">$160</span>

            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <span className="mr-2 rounded px-2.5 py-0.5 text-sm font-semibold text-blue-650">(88)</span>
            </div>

          </div>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden">
          <a className="relative flex h-60 overflow-hidden rounded bg-blue-250" href="#">
            {/* <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" /> */}
            <span className="absolute top-0 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><IoMdHeartEmpty className="text-black w-[16px] h-[16px]" /></span>
            <span className="absolute top-10 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><LuEye className="text-black w-[16px] h-[16px]" /></span>
          </a>
          <div className="my-4">
            <a href="#">
              <h5 className="text-base tracking-tight text-black uppercase font-medium">VAPODORM</h5>
            </a>
            <div className="my-2 flex items-center gap-3 text-base font-medium">
              <span className=" text-blue-350">$120</span>
              <span className="text-blue-650">$160</span>

            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <span className="mr-2 rounded px-2.5 py-0.5 text-sm font-semibold text-blue-650">(88)</span>
            </div>

          </div>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden">
          <a className="relative flex h-60 overflow-hidden rounded bg-blue-250" href="#">
            {/* <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" /> */}
            <span className="absolute top-0 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><IoMdHeartEmpty className="text-black w-[16px] h-[16px]" /></span>
            <span className="absolute top-10 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><LuEye className="text-black w-[16px] h-[16px]" /></span>
          </a>
          <div className="my-4">
            <a href="#">
              <h5 className="text-base tracking-tight text-black uppercase font-medium">VAPODORM</h5>
            </a>
            <div className="my-2 flex items-center gap-3 text-base font-medium">
              <span className=" text-blue-350">$120</span>
              <span className="text-blue-650">$160</span>

            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <span className="mr-2 rounded px-2.5 py-0.5 text-sm font-semibold text-blue-650">(88)</span>
            </div>

          </div>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden">
          <a className="relative flex h-60 overflow-hidden rounded bg-blue-250" href="#">
            {/* <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" /> */}
            <span className="absolute top-0 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><IoMdHeartEmpty className="text-black w-[16px] h-[16px]" /></span>
            <span className="absolute top-10 right-0 m-4 rounded-full items-center flex bg-white px-2 text-center text-sm font-medium text-white h-8 w-8"><LuEye className="text-black w-[16px] h-[16px]" /></span>
          </a>
          <div className="my-4">
            <a href="#">
              <h5 className="text-base tracking-tight text-black uppercase font-medium">VAPODORM</h5>
            </a>
            <div className="my-2 flex items-center gap-3 text-base font-medium">
              <span className=" text-blue-350">$120</span>
              <span className="text-blue-650">$160</span>

            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <TiStarFullOutline className="h-5 w-5 text-blue-750" />
              <span className="mr-2 rounded px-2.5 py-0.5 text-sm font-semibold text-blue-650">(88)</span>
            </div>

          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <button className="bg-blue-350 w-[250px] h-[56px] rounded text-white" onClick={()=>navigate('/companies')}>View All Companies</button>
      </div>
    </div>
  );
};

export default Companies;
