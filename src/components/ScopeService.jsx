import React from "react";
import { useAppContext } from "../context/AppContext";

const ScopeService = () => {
  const { data } = useAppContext();

  return (
    <div className="gap-6 mb-6">
      <h4 className="text-2xl font-semibold mb-4 py-5">
        Scope of <span className="text-purple-800">Service</span>
      </h4>

      <div className="flex gap-1">
        {/* 🟣 Service Column */}
        <div className="flex flex-col w-70">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-md h-12 mb-1">
            Service
          </div>
          {data.scope.map((s, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-md h-10 ${
                i === data.scope.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {s.service}
            </div>
          ))}
        </div>

        {/* 🟣 Details Column */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-md h-12 mb-1">
            Details
          </div>
          {data.scope.map((s, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-md h-10 ${
                i === data.scope.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {s.detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScopeService;
