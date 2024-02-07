import React from "react";
import send from "../../assets/send.png";
import qr from "../../assets/qr.png";
import google from "../../assets/google.png";
import app from "../../assets/app.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="bg-blue-350 text-white">
        <div className="container pb-10 pt-20 lg:pb-20 lg:pt-[120px] max-w-screen-xl mx-auto lg:px-0 px-4">
          <div className="lg:gap-16 gap-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block">
                  <p className="text-2xl font-bold">WAS GIBTS IN</p>
                </a>
                <p className="text-xl font-medium">Subscribe</p>
                <p className="my-7 text-base">Get 10% off your first order</p>
                <div className="relative">
                  <input
                    type="search"
                    name="serch"
                    placeholder="Enter your email"
                    className="border border-white w-full bg-transparent h-12 px-5 pr-10 rounded text-sm focus:outline-none text-white placeholder:text-white"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  >
                    <img src={send} alt="" className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <LinkGroup header="Support">
              <NavLink link="/#" label="Forchinhiem Germany." />
              <NavLink link="/#" label="wasgibtin@gmail.com" />
              <NavLink link="/#" label="+0000-88888-9999" />
            </LinkGroup>
            <LinkGroup header="Quick Link">
              <NavLink link="/#" label="Privacy Policy" />
              <NavLink link="/#" label="Terms Of Use" />
              <NavLink link="/#" label="FAQ" />
              <NavLink link="/#" label="Contact" />
            </LinkGroup>
            <LinkGroup header="Download App">
              <p className="text-xs">Save $3 with App New User Only</p>
              <div className="flex gap-2">
                <img src={qr} alt="" className="h-[86px] w-[80px]" />
                <div className="flex flex-col gap-2">
                  <img src={google} alt="" className="h-[40px] w-[110px]"/>
                  <img src={app} alt="" className="h-[40px] w-[110px]"/>
                </div>
              </div>
              <div className="flex gap-4 text-white py-4">
                <BiLogoFacebook className="h-6 w-6"/>
                <FiTwitter className="h-6 w-6"/>
                <IoLogoInstagram className="h-6 w-6"/>
                <FaLinkedinIn className="h-6 w-6"/>
              </div>
            </LinkGroup>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-xl font-medium text-white">{header}</h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary"
      >
        {label}
      </a>
    </li>
  );
};
