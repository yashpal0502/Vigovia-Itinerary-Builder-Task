import React, { useState } from "react";
import ItineraryForm from "../src/components/ItineraryForm";
import ItineraryBuilder from "./components/ItineraryBuilder";
import "./index.css";

export default function App() {
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8 print-font flex flex-col gap-8">
      {/* Form Section */}
      <div className="flex-1">
        <ItineraryForm onSubmit={() => setShowBuilder(true)} />
      </div>

      {/* Builder Section */}
      {showBuilder && (
        <div className="flex-1">
          <ItineraryBuilder />
        </div>
      )}
    </div>
  );
}
