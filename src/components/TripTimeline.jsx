import React from "react";
import { useAppContext } from "../context/AppContext";

const TripTimeline = () => {
  const { data } = useAppContext();

  return (
    <div>
      {data.days.map((d, idx) => (
        <div
          key={idx}
          className="flex justify-between gap-7 items-start border-b pb-6 mb-6"
        >
          {/* purple vertical label */}
          <div className="bg-[#311d5d] text-white h-60 px-2 py-16 rounded-3xl flex items-center justify-center">
            <p className="rotate-[-90deg] font-semibold text-sm tracking-">
              Day {idx + 1}
            </p>
          </div>

          <div className="flex flex-col items-center text-center min-w-[160px]">
            <img
              src={d.image}
              alt={d.title}
              className="w-36 h-36 rounded-full object-cover border-4 border-purple-300"
            />
            <h3 className="font-bold mt-3">{d.date}</h3>
            <p className="text-sm w-80 px-5 text-gray-600">{d.title}</p>
          </div>

          {/* content */}
          <div className="flex-1">
            <div className="flex flex-col h-60 justify-between">
              {/* Morning */}
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white-600 border rounded-full"></div>
                  <p className="text-sm font-medium">Morning</p>
                </div>
                <div className="text-sm text-gray-700 ml-4">{d.morning}</div>
              </div>

              {/* Vertical line */}
              <div className="relative h-20 ml-[5px]">
                <div className="absolute left-0 h-full w-[2px] bg-blue-200"></div>
              </div>

              {/* Afternoon */}
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white-600 border rounded-full"></div>
                  <p className="text-sm font-medium">Afternoon</p>
                </div>
                <div className="text-sm text-gray-700 ml-4">{d.afternoon}</div>
              </div>

              {/* Vertical line */}
              <div className="relative h-16 ml-[5px]">
                <div className="absolute left-0 h-full w-[2px] bg-blue-200"></div>
              </div>

              {/* Evening */}
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white-600 border rounded-full"></div>
                  <p className="text-sm font-medium">Evening</p>
                </div>
                <div className="text-sm text-gray-700 ml-4">{d.evening}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripTimeline;
