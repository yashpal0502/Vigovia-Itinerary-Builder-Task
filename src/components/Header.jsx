import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { data } = useAppContext();

  return (
    <div className="relative pb-4 mb-6 rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img src={assets.hero} alt="Singapore" className="w-full" />
      {/* Text Overlay */}
      <div className="absolute inset-0 top-13 flex flex-col items-center justify-center text-center text-white gap-1 px-4">
        <h2 className="text-xl lg:text-3xl  font-semibold">
          Hi, {data.trip.contactName}!
        </h2>
        <h1 className="text-2xl lg:text-4xl font-bold mt-1">
          {data.trip.destination} Itinerary
        </h1>
        <p className="text-md lg:text-lg mt-1">{data.trip.duration}</p>
      </div>
    </div>
  );
};

export default Header;
