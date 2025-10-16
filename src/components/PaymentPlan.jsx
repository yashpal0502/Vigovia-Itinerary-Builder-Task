import React from "react";
import { useAppContext } from "../context/AppContext";

const PaymentPlan = () => {
  const { data } = useAppContext();

  return (
    <div className="py-5">
      <h4 className="text-2xl font-semibold pb-2">
        Payment <span className="text-purple-800">Plan</span>
      </h4>

      <div className="flex flex-col gap-5 py-5">
        <div className="flex items-center border border-purple-400 rounded-lg overflow-hidden w-full">
          <div className="flex items-center bg-[#f8edff] text-black font-semibold px-15 py-4 relative">
            TCS
            <div
              className="absolute right-[-15px] top-0 h-full w-4 bg-[#f8edff] border-t border-b border-r border-purple-400"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            ></div>
          </div>

          <div className="flex-1 text-center py-4 text-black bg-white">
            <span className="font-semibold">
              {data.paymentPlan.total.split("_")[0]}
            </span>
            <span> {data.paymentPlan.total.split("_")[1]}</span>
          </div>
        </div>
      </div>

      {/* 🟣 TCS Section */}
      <div className="flex flex-col gap-5 py-5">
        <div className="flex items-center border border-purple-400 rounded-lg overflow-hidden w-full">
          <div className="flex items-center bg-[#f8edff] text-black font-semibold px-15 py-4 relative">
            TCS
            <div
              className="absolute right-[-15px] top-0 h-full w-4 bg-[#f8edff] border-t border-b border-r border-purple-400"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            ></div>
          </div>

          <div className="flex-1 text-center font-semibold py-4 text-black bg-white">
            {data.paymentPlan.tcs}
          </div>
        </div>
      </div>

      {/* 🟣 Installments Table */}
      <div className="py-5 mb-6">
        <div className="flex gap-1 justify-between">
          {/* Installment Label Column */}
          <div className="flex flex-col w-70">
            <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
              Installment
            </div>
            {data.paymentPlan.installments.map((inst, i) => (
              <div
                key={i}
                className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                  i === data.paymentPlan.installments.length - 1
                    ? "rounded-b-4xl"
                    : ""
                }`}
              >
                {inst.label}
              </div>
            ))}
          </div>

          {/* Amount Column */}
          <div className="flex flex-col flex-1">
            <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
              Amount
            </div>
            {data.paymentPlan.installments.map((inst, i) => (
              <div
                key={i}
                className={`flex justify-center items-center bg-purple-100 py-8 text-center text-sm h-10 ${
                  i === data.paymentPlan.installments.length - 1
                    ? "rounded-b-4xl"
                    : ""
                }`}
              >
                {inst.amount}
              </div>
            ))}
          </div>

          {/* Due Column */}
          <div className="flex flex-col w-70">
            <div className="flex justify-center items-center bg-[#311d5d] text-white rounded-t-4xl text-center text-sm h-12 mb-1">
              Due
            </div>
            {data.paymentPlan.installments.map((inst, i) => (
              <div
                key={i}
                className={`flex justify-center items-center bg-purple-100 py-8 px-4 text-center text-sm h-10 ${
                  i === data.paymentPlan.installments.length - 1
                    ? "rounded-b-4xl"
                    : ""
                }`}
              >
                {inst.due}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 
      <div className="text-right font-semibold text-lg">
        Total Amount: {data.paymentPlan.total}
      </div> */}
    </div>
  );
};

export default PaymentPlan;
