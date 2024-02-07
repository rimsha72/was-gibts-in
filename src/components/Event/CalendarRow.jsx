import { useState } from "react";

function CalendarRow({ firstDay, lastDayInMonth, row, currentMonth, currentYear }) {
    const [activeDay] = useState(new Date().getDate());

    let content = [];
    //first row with empty spaces
    if (!row) {
        for (let i = 0; i < firstDay; i++) {
            content.push(<td key={`empty-${i}`}></td>);
        }
        content.push(
            <td key="first-day" className="relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                1
            </td>
        );
        let len = 7 - content.length;
        for (let i = 1; i <= len; i++) {
            content.push(
                <td key={`day-${i}`} className="relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                    {activeDay === i + 1 &&
                        new Date().getMonth() === currentMonth &&
                        new Date().getFullYear() === currentYear ? (
                            <span className="p-1 rounded-full border-green-400 border-2">
                                {i + 1}
                            </span>
                        ) : (
                            i + 1
                        )}
                </td>
            );
        }

        return <>{content}</>;
    }
    //other rows
    for (let i = 1; i <= 7; i++) {
        if (i + (7 * row - firstDay) <= lastDayInMonth) {
            content.push(
                <td key={`day-${i}`} className="relative py-3 px-2 md:px-3  hover:text-blue-350 text-center text-gray-800">
                    {activeDay === i + (7 * row - firstDay) &&
                        new Date().getMonth() === currentMonth &&
                        new Date().getFullYear() === currentYear ? (
                            <span className="p-1 text-blue-350 font-semibold">
                                {i + (7 * row - firstDay)}
                            </span>
                        ) : (
                            i + (7 * row - firstDay)
                        )}
                </td>
            );
        }
    }
    return <>{content}</>;
};

export default CalendarRow;
