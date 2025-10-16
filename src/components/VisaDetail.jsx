import React from "react";
import { useAppContext } from "../context/AppContext";

const VisaDetail = () => {
  const { data } = useAppContext();

  return (
    <div className="py-5 border-b">
      <h4 className="text-2xl font-semibold pb-2">
        Visa <span className="text-purple-800">Details</span>
      </h4>
      <div className="border border-purple-400 rounded-xl px-15 py-4 my-6 flex flex-wrap justify-between items-start text-sm text-gray-800">
        {/* Visa Type */}
        <div>
          <p className="font-bold">Visa Type :</p>
          <p>{data.visa.type}</p>
        </div>

        {/* Departure */}
        <div>
          <p className="font-bold">Validity :</p>
          <p>{data.visa.validity}</p>
        </div>

        {/* Arrival */}
        <div>
          <p className="font-bold">Processing date :</p>
          <p>{data.visa.processingDate}</p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetail;
