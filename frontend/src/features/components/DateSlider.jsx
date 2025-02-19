import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const generateDates = (numDays = 7) => {
  const today = new Date();
  const dates = [];

  for (let i = -Math.floor(numDays / 2); i <= Math.floor(numDays / 2); i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    dates.push({
      day: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      date: date
        .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
        .toUpperCase(),
    });
  }
  return dates;
};

const DateSlider = ({ onDateSelect }) => {
  const [dates, setDates] = useState(generateDates());
  const [selectedDate, setSelectedDate] = useState(
    new Date()
      .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
      .toUpperCase()
  );

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const shiftDates = (direction) => {
    setDates((prevDates) => {
      return prevDates.map(({ day, date }) => {
        const newDate = new Date(date + " " + new Date().getFullYear());
        newDate.setDate(newDate.getDate() + direction);
        return {
          day: newDate
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase(),
          date: newDate
            .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
            .toUpperCase(),
        };
      });
    });
  };

  return (
    <div className="flex flex-col  justify-between p-4 rounded-lg shadow-xs bg-white">
      <div className="text-2xl font-bold">
        <p>Scores</p>
      </div>

      <div className="flex items-center justify-between  ">
        <button className="p-2 text-blue-500" onClick={() => shiftDates(-1)}>
          <ChevronLeft />
        </button>
        <div className="flex space-x-4">
          {dates.map(({ day, date }) => (
            <button
              key={date}
              className={`flex flex-col items-center px-4 text-black hover:text-red-800 ${
                selectedDate === date ? "font-bold text-black" : ""
              }`}
              onClick={() => handleDateClick(date)}
            >
              <span>{day}</span>
              <span>{date}</span>
            </button>
          ))}
        </div>
        <button
          className="p-2 text-blue-500 hover:text-black"
          onClick={() => shiftDates(1)}
        >
          <ChevronRight />
        </button>
        <button className="p-2 text-black hover:text-black">
          <Calendar />
        </button>
      </div>
    </div>
  );
};

export default DateSlider;
