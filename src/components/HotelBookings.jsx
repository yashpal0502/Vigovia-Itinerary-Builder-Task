import React from "react";
import { useAppContext } from "../context/AppContext";

const HotelBookings = () => {
  const { data } = useAppContext();

  return (
    <div className="mb-6 border-b pb-10">
      <h4 className="text-2xl font-semibold mb-4">
        Hotel <span className="text-purple-800">Bookings</span>
      </h4>

      <div className="flex gap-1 justify-between">
        {/* 🏙 City Column */}
        <div className="flex flex-col w-45">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            City
          </div>
          {data.hotels.map((h, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.hotels.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {h.city}
            </div>
          ))}
        </div>

        {/* 🗓 Check In Column */}
        <div className="flex flex-col w-35">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Check In
          </div>
          {data.hotels.map((h, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.hotels.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {h.checkIn}
            </div>
          ))}
        </div>

        {/* 📅 Check Out Column */}
        <div className="flex flex-col w-35">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Check Out
          </div>
          {data.hotels.map((h, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 px-4 text-center text-sm h-10 ${
                i === data.hotels.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {h.checkOut}
            </div>
          ))}
        </div>

        {/* 🌙 Nights Column */}
        <div className="flex flex-col w-25">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Nights
          </div>
          {data.hotels.map((h, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.hotels.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {h.nights}
            </div>
          ))}
        </div>

        {/* 🏨 Hotel Name Column */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Hotel Name
          </div>
          {data.hotels.map((h, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.hotels.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {h.name}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 px-4">
        <ol className="text-gray-500 text-sm list-decimal">
          <li>All hotels are tentative and can be replaced with similar.</li>
          <li>Breakfast included for all hotel stays.</li>
          <li>All Hotels will be 4* and above category</li>
          <li>
            A maximum occupancy of 2 people /room is allowed in most hotels.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HotelBookings;
