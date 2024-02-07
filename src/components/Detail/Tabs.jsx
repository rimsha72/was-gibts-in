import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
const TabContent = ({ hours }) => {
  return (
    <div className="space-y-4">
      {hours.map((day, index) => (
        <div
          key={index}
          className="flex justify-between items-center my-1 text-sm"
        >
          <div className="text-gray-800">{day.name}</div>
          <hr className="w-48 h-[1.25px] mx-auto border-0 rounded bg-blue-650/20" />
          <div className="text-black">{day.time}</div>
        </div>
      ))}
    </div>
  );
};
const About = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col max-w-sm my-1 text-sm">
        <h1 className="text-sm font-bold font-montserrat">From the C.E.O</h1>
        <p className="text-sm mt-2 text-justify">
          “ Club 59 exclusively offers only 59 members in the heart of Bamberg
          the opportunity to focus on their own training. Instead of queuing and
          being watched, you can use your time for yourself and your training
          with us!
        </p>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="space-y-4">
      <div className="flex max-w-sm my-1 text-sm items-center gap-3">
        <MdLocationOn className="h-4 w-4 text-blue-350" />
        <p>0951 18084888</p>
      </div>
      <div className="flex max-w-sm my-1 text-sm items-center gap-3">
        <MdLocationOn className="h-4 w-4 text-blue-350" />
        <p>www.club59-deingym.de/8</p>
      </div>
      <div className="flex max-w-sm my-1 text-sm items-center gap-3">
        <MdLocationOn className="h-4 w-4 text-blue-350" />
        <p>info@club59-deingym.de</p>
      </div>
      <div className="flex max-w-sm my-1 text-sm items-center gap-3">
        <MdLocationOn className="h-4 w-4 text-blue-350" />
        <p>bere Koenigstrasse 31, 96052 Bamberg</p>
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div>
      <ul className="flex py-4 text-sm">
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <>
              <li
                key={label}
                className={`px-4 py-2 font-semibold ${
                  label === activeTab
                    ? "text-black font-bold"
                    : "text-blue-1350"
                }`}
                onClick={() => setActiveTab(label)}
              >
                {label}
                {label === activeTab && (
                  <hr className="w-7 h-2 my-2 border-0 rounded bg-blue-350" />
                )}
              </li>
            </>
          );
        })}
      </ul>
      {children.map((one) => {
        if (one.props.label === activeTab)
          return <div key={one.props.label}>{one.props.children}</div>;
        else return null;
      })}
    </div>
  );
};

const Tabs = () => {
  const openingHours = [
    { name: "Monday", time: "06:00 - 22:00" },
    { name: "Tuesday", time: "06:00 - 22:00" },
    { name: "Wednesday", time: "06:00 - 22:00" },
    { name: "Thursday", time: "06:00 - 22:00" },
    { name: "Friday", time: "06:00 - 22:00" },
    { name: "Saturday", time: "06:00 - 22:00" },
    { name: "Sunday", time: "06:00 - 22:00" },
  ];

  return (
    <div className="App">
      <Tab>
        <div label="Opening Hours">
          <TabContent hours={openingHours} />
        </div>
        <div label="About Company">
          <About />
        </div>
        <div label="Contact Us">
          <Contact />
        </div>
      </Tab>
    </div>
  );
};

export default Tabs;
