import React from "react";
import { useAppContext } from "../context/AppContext";

const ActivityTable = () => {
  const { data } = useAppContext();

  return (
    <div className="gap-6 mb-6">
      <h4 className="text-2xl font-semibold mb-4 py-5">
        Activity <span className="text-purple-800">Table</span>
      </h4>

      <div className="flex gap-1 justify-between">
        {/* 🟣 City Column */}
        <div className="flex flex-col w-35">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            City
          </div>
          {data.activities.map((a, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.activities.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {a.city}
            </div>
          ))}
        </div>

        {/* 🟣 Activity Column */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Activity
          </div>
          {data.activities.map((a, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.activities.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {a.activity}
            </div>
          ))}
        </div>

        {/* 🟣 Type Column */}
        <div className="flex flex-col w-45">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Type
          </div>
          {data.activities.map((a, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 px-4 text-center text-sm h-10 ${
                i === data.activities.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {a.type}
            </div>
          ))}
        </div>

        {/* 🟣 Time Required Column */}
        <div className="flex flex-col w-45">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Time Required
          </div>
          {data.activities.map((a, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.activities.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {a.time}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTable;
