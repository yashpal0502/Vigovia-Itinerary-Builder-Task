import React from "react";
import { useAppContext } from "../context/AppContext";

const FlightSummary = () => {
  const { data } = useAppContext();

  return (
    <div className="mb-6 border-b pb-10">
      <h4 className="text-2xl font-semibold mb-2">
        Flight <span className="text-purple-800">Summary</span>
      </h4>

      <div className="flex flex-col gap-5 py-5">
        {data.flights.map((f, i) => (
          <div
            key={i}
            className="flex items-center border border-purple-400 rounded-lg overflow-hidden w-full"
          >
            {/* Left Arrow Section */}
            <div className="flex items-center bg-[#f8edff] text-black font-semibold px-15 py-4 relative">
              {f.date}
              {/* Arrow shape */}
              <div
                className="absolute right-[-15px] top-0 h-full w-4 bg-[#f8edff] border-t border-b border-r border-purple-400"
                style={{
                  clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                }}
              ></div>
            </div>

            {/* Right Text Section */}
            <div className="flex-1 text-center font-semibold py-4 text-black bg-white">
              {f.detail}
            </div>
          </div>
        ))}
      </div>

      <div>
        Note: All flights include meals, seat choice (excluding XL), and checked
        baggage.
      </div>
    </div>
  );
};

export default FlightSummary;
