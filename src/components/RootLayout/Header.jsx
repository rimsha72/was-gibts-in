import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 lg:px-0 px-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-[181px] h-[45px]" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu} 
            className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <IoIosMenu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="absolute top-0 right-0 w-[75%] bg-white h-full z-50 shadow-lg p-5 md:hidden transition-transform transform translate-x-0"
            id="navbar-search"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col p-4 text-black text-base space-y-4">
              <li>
                <a href="/" className="block py-2 px-3" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3">
                  About
                </a>
              </li>
              <li>
                <a href="/event" className="block py-2 px-3">
                  Events Calendar
                </a>
              </li>
            </ul>
          </div>
        )}

        <ul className="lg:flex hidden flex-col p-4 text-black text-base md:p-0 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <a href="/" className="block py-2 px-3" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3">
              About
            </a>
          </li>
          <li>
            <a href="/event" className="block py-2 px-3">
              Events Calendar
            </a>
          </li>
        </ul>
        <div
          className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative text-gray-600 lg:block hidden">
            <input
              type="search"
              name="search"
              placeholder="What are you looking for?"
              className="h-10 px-5 pr-10 rounded text-sm bg-blue-250 placeholder:text-sm placeholder:text-black focus:outline-none lg:w-[293px] w-full"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <MdSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
