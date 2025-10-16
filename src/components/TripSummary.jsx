import React from "react";
import { useAppContext } from "../context/AppContext";

const TripSummary = () => {
  const { data } = useAppContext();

  return (
    <div className="border border-purple-400 rounded-xl px-6 py-4 mb-8 flex flex-wrap justify-between items-start text-sm text-gray-800">
      {/* Departure From */}

      <div>
        <p className="font-semibold">Departure From :</p>
        <p>{data.trip.departureFrom}</p>
      </div>

      {/* Departure */}
      <div>
        <p className="font-semibold">Departure :</p>
        <p>{data.trip.departureDate}</p>
      </div>

      {/* Arrival */}
      <div>
        <p className="font-semibold">Arrival :</p>
        <p>{data.trip.arrivalDate}</p>
      </div>

      {/* Destination */}
      <div>
        <p className="font-semibold">Destination :</p>
        <p>{data.trip.destination}</p>
      </div>

      {/* Travellers */}
      <div>
        <p className="font-semibold">No. Of Travellers :</p>
        <p>{data.trip.travellers}</p>
      </div>
    </div>
  );
};

export default TripSummary;
