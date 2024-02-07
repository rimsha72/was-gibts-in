import { useEffect, useRef, useState } from "react";
import CalendarRow from "./CalendarRow";

const Calendar = () => {
    const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
    const [activeMonthString, setActiveMonthString] = useState(
      new Date().toDateString().split(' ')[1]
    );
    const [activeYear, setActiveYear] = useState(new Date().getFullYear());
    const prevMonth = useRef(null);
    const [firstDayInMonth, setFirstDayInMonth] = useState([]);
  
    useEffect(() => {
      let x = [];
      for (let i = 1; i <= 12; i++) {
        x.push(new Date(`${activeYear}/${i}/1`).getDay());
      }
      setFirstDayInMonth(x);
    }, [activeYear]);
  
    useEffect(() => {
      setActiveMonthString(
        new Date(new Date().setMonth(activeMonth)).toDateString().split(' ')[1]
      );
      prevMonth.current = activeMonth; // No need for @ts-ignore in JavaScript
    }, [activeMonth]);
  
  

  return (
    <div className="bg-white my-4 font-poppins">
      <div className="w-full rounded">
        <div className="flex items-center justify-between mb-4">
          <div className="text-left font-medium text-xl text-black">
            {`${activeMonthString} ${activeYear}`}
          </div>
          <div className="flex space-x-4">
            <button
              className="p-2 rounded bg-blue-350 text-white"
              onClick={() => {
                if (prevMonth.current === 0) {
                  setActiveYear(activeYear - 1);
                  setActiveMonth(11);
                } else {
                  setActiveMonth(activeMonth - 1);
                }
              }}
            >
              <svg
                width={15}
                height={15}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                ></path>
              </svg>
            </button>
            <button
              className="p-2 rounded bg-blue-350 text-white"
              onClick={() => {
                if (prevMonth.current === 11) {
                  setActiveYear(activeYear + 1);
                  setActiveMonth(0);
                } else {
                  setActiveMonth(activeMonth + 1);
                }
              }}
            >
              <svg
                width={15}
                height={15}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="-mx-2">
          <table className="w-full text-black">
            <thead>
              <tr>
                <th className="py-3 px-2 md:px-3 font-medium">Sun</th>
                <th className="py-3 px-2 md:px-3 font-medium ">Mon</th>
                <th className="py-3 px-2 md:px-3 font-medium ">Tue</th>
                <th className="py-3 px-2 md:px-3 font-medium ">Wed</th>
                <th className="py-3 px-2 md:px-3 font-medium ">Thu</th>
                <th className="py-3 px-2 md:px-3 font-medium ">Fri</th>
                <th className="py-3 px-2 md:px-3 font-medium ">Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={0}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={1}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={2}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={3}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={4}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={5}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;