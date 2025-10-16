import React from "react";
import { useAppContext } from "../context/AppContext";

const ItineraryForm = ({ onSubmit }) => {
  const { data, setData } = useAppContext();

  const handleChange = (section, key, value) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const handleArrayChange = (section, index, key, value) => {
    const updatedArray = [...data[section]];
    updatedArray[index][key] = value;
    setData((prev) => ({ ...prev, [section]: updatedArray }));
  };

  const handleInstallmentChange = (index, key, value) => {
    const updatedInstallments = [...data.paymentPlan.installments];
    updatedInstallments[index][key] = value;
    setData((prev) => ({
      ...prev,
      paymentPlan: { ...prev.paymentPlan, installments: updatedInstallments },
    }));
  };

  const sectionClass =
    "bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg space-y-4";
  const inputClass =
    "w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition";
  const addBtnClass =
    "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition";
  const removeBtnClass =
    "bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-3 py-1 rounded-lg shadow hover:shadow-md transition";

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Trip Section */}
      <div className={sectionClass}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Trip Info</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "title",
            "contactName",
            "duration",
            "departureFrom",
            "destination",
          ].map((key) => (
            <input
              key={key}
              type="text"
              value={data.trip[key]}
              onChange={(e) => handleChange("trip", key, e.target.value)}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className={inputClass}
            />
          ))}
          <input
            type="date"
            value={data.trip.departureDate}
            onChange={(e) =>
              handleChange("trip", "departureDate", e.target.value)
            }
            className={inputClass}
          />
          <input
            type="date"
            value={data.trip.arrivalDate}
            onChange={(e) =>
              handleChange("trip", "arrivalDate", e.target.value)
            }
            className={inputClass}
          />
          <input
            type="number"
            value={data.trip.travellers}
            onChange={(e) => handleChange("trip", "travellers", e.target.value)}
            placeholder="Travellers"
            className={inputClass}
          />
        </div>
      </div>

      {/* Days Section */}
      <div className={sectionClass}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Days Info</h2>
        {data.days.map((day, index) => (
          <div
            key={index}
            className="border border-purple-200 p-4 rounded-xl space-y-3 bg-white shadow-sm"
          >
            <h3 className="font-semibold text-purple-600">
              Day {day.day} - {day.date || "Date not set"}
            </h3>
            <input
              type="date"
              value={day.date}
              onChange={(e) =>
                handleArrayChange("days", index, "date", e.target.value)
              }
              className={inputClass}
            />
            {["title", "morning", "afternoon", "evening"].map((key) => (
              <input
                key={key}
                type="text"
                value={day[key]}
                onChange={(e) =>
                  handleArrayChange("days", index, key, e.target.value)
                }
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className={inputClass}
              />
            ))}
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className={removeBtnClass}
                onClick={() => {
                  const updatedDays = [...data.days];
                  updatedDays.splice(index, 1);
                  setData((prev) => ({ ...prev, days: updatedDays }));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className={addBtnClass}
            onClick={() => {
              const newDay = {
                day: data.days.length + 1,
                date: "",
                title: "",
                morning: "",
                afternoon: "",
                evening: "",
              };
              setData((prev) => ({ ...prev, days: [...prev.days, newDay] }));
            }}
          >
            Add Day
          </button>
        </div>
      </div>

      {/* Flights Section */}
      <div className={sectionClass}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Flights Info
        </h2>
        {data.flights.map((flight, index) => (
          <div
            key={index}
            className="border border-purple-200 p-4 rounded-xl space-y-3 bg-white shadow-sm"
          >
            <input
              type="date"
              value={flight.date}
              onChange={(e) =>
                handleArrayChange("flights", index, "date", e.target.value)
              }
              className={inputClass}
            />
            <input
              type="text"
              value={flight.detail}
              onChange={(e) =>
                handleArrayChange("flights", index, "detail", e.target.value)
              }
              placeholder="Flight Details"
              className={inputClass}
            />
            <div className="flex justify-end">
              <button
                type="button"
                className={removeBtnClass}
                onClick={() => {
                  const updatedFlights = [...data.flights];
                  updatedFlights.splice(index, 1);
                  setData((prev) => ({ ...prev, flights: updatedFlights }));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className={addBtnClass}
            onClick={() => {
              const newFlight = { date: "", detail: "" };
              setData((prev) => ({
                ...prev,
                flights: [...prev.flights, newFlight],
              }));
            }}
          >
            Add Flight
          </button>
        </div>
      </div>

      {/* Hotels Section */}
      <div className={sectionClass}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Hotels Info</h2>
        {data.hotels.map((hotel, index) => (
          <div
            key={index}
            className="border border-purple-200 p-4 rounded-xl space-y-3 bg-white shadow-sm"
          >
            <input
              type="text"
              value={hotel.city}
              onChange={(e) =>
                handleArrayChange("hotels", index, "city", e.target.value)
              }
              placeholder="City"
              className={inputClass}
            />
            <input
              type="text"
              value={hotel.name}
              onChange={(e) =>
                handleArrayChange("hotels", index, "name", e.target.value)
              }
              placeholder="Hotel Name"
              className={inputClass}
            />
            <input
              type="date"
              value={hotel.checkIn}
              onChange={(e) =>
                handleArrayChange("hotels", index, "checkIn", e.target.value)
              }
              className={inputClass}
            />
            <input
              type="date"
              value={hotel.checkOut}
              onChange={(e) =>
                handleArrayChange("hotels", index, "checkOut", e.target.value)
              }
              className={inputClass}
            />
            <input
              type="number"
              value={hotel.nights}
              onChange={(e) =>
                handleArrayChange("hotels", index, "nights", e.target.value)
              }
              placeholder="Nights"
              className={inputClass}
            />
            <div className="flex justify-end">
              <button
                type="button"
                className={removeBtnClass}
                onClick={() => {
                  const updatedHotels = [...data.hotels];
                  updatedHotels.splice(index, 1);
                  setData((prev) => ({ ...prev, hotels: updatedHotels }));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className={addBtnClass}
            onClick={() => {
              const newHotel = {
                city: "",
                name: "",
                checkIn: "",
                checkOut: "",
                nights: 0,
              };
              setData((prev) => ({
                ...prev,
                hotels: [...prev.hotels, newHotel],
              }));
            }}
          >
            Add Hotel
          </button>
        </div>
      </div>
      <div className={sectionClass}>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Payment Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            value={data.paymentPlan.total}
            onChange={(e) =>
              handleChange("paymentPlan", "total", e.target.value)
            }
            placeholder="Total"
            className={inputClass}
          />
          <input
            type="text"
            value={data.paymentPlan.tcs}
            onChange={(e) => handleChange("paymentPlan", "tcs", e.target.value)}
            placeholder="TCS"
            className={inputClass}
          />
        </div>

        <h3 className="font-semibold mt-2">Installments</h3>
        {data.paymentPlan.installments.map((inst, index) => (
          <div
            key={index}
            className="border border-purple-200 p-4 rounded-xl space-y-3 bg-white shadow-sm"
          >
            {["label", "amount", "due"].map((key) => (
              <input
                key={key}
                type="text"
                value={inst[key]}
                onChange={(e) =>
                  handleInstallmentChange(index, key, e.target.value)
                }
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className={inputClass}
              />
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                className={removeBtnClass}
                onClick={() => {
                  const updatedInstallments = [
                    ...data.paymentPlan.installments,
                  ];
                  updatedInstallments.splice(index, 1);
                  setData((prev) => ({
                    ...prev,
                    paymentPlan: {
                      ...prev.paymentPlan,
                      installments: updatedInstallments,
                    },
                  }));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className={addBtnClass}
            onClick={() => {
              const newInst = { label: "", amount: "", due: "" };
              setData((prev) => ({
                ...prev,
                paymentPlan: {
                  ...prev.paymentPlan,
                  installments: [...prev.paymentPlan.installments, newInst],
                },
              }));
            }}
          >
            Add Installment
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={onSubmit}
          className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          Build Itinerary
        </button>
      </div>
    </div>
  );
};

export default ItineraryForm;
