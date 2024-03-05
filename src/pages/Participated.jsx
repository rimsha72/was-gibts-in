import React, {useState} from "react";
import bg2 from "../assets/vouche.png";
import club from "../assets/club5.png";
import club1 from "../assets/club6.png";
import Dropdown from "../components/Home/Dropdown";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
function Participated() {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 py-8 ">
        <p className="text-2xl font-semibold">
          Participated Companies Vouchers{" "}
        </p>
        <div className="flex justify-between py-8 lg:flex-row flex-wrap gap-4">
          <div>
            <label className="text-sm font-medium">Categories</label>
            <Dropdown />
          </div>
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 text-white">
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative " onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
            </div>
          </div>
          <div>
            <div className="relative" onClick={() => setshowModal(true)}>
              <img src={bg2} alt="" />
              <div className="absolute bottom-2 px-4">
                <div className="flex flex-row xl:gap-8 gap-4 items-center">
                  <div className="font-bold text-xs md:text-sm ">
                    Voucher
                  </div>
                  <p className="text-xs px-2 py-1 border-2 border-blue-350 lg:rounded-full rounded-md">
                    Use until 15 July 2023
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-6 text-center text-white">
                <p className="font-medium text-base md:text-lg">30%</p>
                <span className="text-xs md:text-sm">5 days left</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <div className="flex -space-x-3 items-center">
                <img
                  src={club}
                  alt="Company 1"
                  className="w-11 h-11 rounded-full z-10"
                />
                <img
                  src={club1}
                  alt="Company 2"
                  className="w-7 h-7 rounded-full z-0"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-black">
                +20 others companies
              </span>
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
      </div>
    </>
  );
}

export default Participated;
