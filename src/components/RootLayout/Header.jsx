import React from "react";
import logo from "../../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
import { MdSearch } from "react-icons/md";
const Header = () => {
  return (
    <nav className="border border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-[181px]  h-[45px]" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <MdSearch className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </button>
          <div className="relative text-gray-600 lg:block hidden">
            <input
              type="search"
              name="serch"
              placeholder="What are you looking for?"
              className="h-10 px-5 pr-10 bg-blue-250 rounded text-sm placeholder:text-sm placeholder:text-black focus:outline-none lg:w-[293px] w-full"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <MdSearch className="h-6 w-6" />
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <IoIosMenu className="h-6 w-6" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoIosMenu className="h-6 w-6" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full lg:w-[293px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 text-black text-base md:p-0 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 ">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">
                Events Calendar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
