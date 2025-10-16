import React from "react";
import { useAppContext } from "../context/AppContext";

const InclusionSummary = () => {
  const { data } = useAppContext();

  return (
    <div className="gap-6 mb-6">
      <h4 className="text-2xl font-semibold mb-4 py-5">
        Inclusion <span className="text-purple-800">Summary</span>
      </h4>

      <div className="flex gap-1 justify-between pb-5">
        {/* 🟣 Category Column */}
        <div className="flex flex-col w-35">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Category
          </div>
          {data.inclusionSummary.map((item, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.inclusionSummary.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {item.category}
            </div>
          ))}
        </div>

        {/* 🟣 Count Column */}
        <div className="flex flex-col w-25">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Count
          </div>
          {data.inclusionSummary.map((item, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.inclusionSummary.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {item.count}
            </div>
          ))}
        </div>

        {/* 🟣 Details Column */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Details
          </div>
          {data.inclusionSummary.map((item, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 px-4 text-center text-sm h-10 ${
                i === data.inclusionSummary.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {item.detail}
            </div>
          ))}
        </div>

        {/* 🟣 Status / Comments Column */}
        <div className="flex flex-col w-45">
          <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
            Status / Comments
          </div>
          {data.inclusionSummary.map((item, i) => (
            <div
              key={i}
              className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                i === data.inclusionSummary.length - 1 ? "rounded-b-4xl" : ""
              }`}
            >
              {item.status}
            </div>
          ))}
        </div>
      </div>

      <div className="pb-5 border-b">
        <p className="font-semibold">Transfer Policy(Refundable Upon Claim)</p>
        <p className="text-sm">
          If any transfer is delayed beyond 15 minutes, customers may book an
          app-based or radio taxi and claim a refund for that specific leg.
        </p>
      </div>
    </div>
  );
};

export default InclusionSummary;
