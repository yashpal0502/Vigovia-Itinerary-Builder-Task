import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import { assets } from "../assets/assets";
import TripSummary from "./TripSummary";
import { useAppContext } from "../context/AppContext";
import TripTimeline from "./TripTimeline";
import FlightSummary from "./FlightSummary";
import HotelBookings from "./HotelBookings";
import ImportantNotes from "./ImportantNotes";
import ScopeService from "./ScopeService";
import InclusionSummary from "./InclusionSummary";
import ActivityTable from "./ActivityTable";
import PaymentPlan from "./PaymentPlan";
import VisaDetail from "./VisaDetail";
import Header from "./Header";
import Footer from "./Footer";

export default function ItineraryBuilder() {
  const { data } = useAppContext();
  const printRef = useRef(null);

  useEffect(() => {
    console.log("ItineraryBuilder received updated data:", data);
  }, [data]);

  const downloadPDF = async () => {
    const container = printRef.current;
    if (!container) return;

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // render the entire container into one canvas
      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: container.scrollWidth,
        windowHeight: container.scrollHeight,
        onclone: (document) => {
          const images = document.getElementsByTagName("img");
          return Promise.all(
            Array.from(images).map((img) => {
              if (img.complete) return Promise.resolve();
              return new Promise((resolve) => {
                img.addEventListener("load", resolve);
                img.addEventListener("error", resolve);
              });
            })
          );
        },
      });

      const imgData = canvas.toDataURL("image/png", 1.0);

      // Fit entire content into one PDF page by scaling down if necessary
      let imgWidth = pageWidth;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (imgHeight > pageHeight) {
        const fitScale = pageHeight / imgHeight;
        imgHeight = pageHeight;
        imgWidth = imgWidth * fitScale;
      }

      const xOffset = Math.max(0, (pageWidth - imgWidth) / 2);
      const yOffset = Math.max(0, (pageHeight - imgHeight) / 2);

      pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight, undefined, "FAST");
      pdf.save("itinerary.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-3">
        <button
          onClick={downloadPDF}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>

      <div
        ref={printRef}
        className="paper px-15 py-10 border shadow-sm"
        style={{ margin: "20px" }}
      >
        {/* Header */}
        <div className="pdf-section" id="section-1">
          <Header />
        </div>

        {/* Trip summary */}
        <div className="pdf-section" id="section-1">
          <TripSummary />
        </div>

        {/* Days - timeline style */}
        <div className="pdf-section" id="section-1">
          <TripTimeline />
        </div>

        {/* Flight summary */}
        <div className="pdf-section" id="section-1">
          <FlightSummary />
        </div>

        {/* Hotel bookings table */}
        <div className="pdf-section" id="section-1">
          <HotelBookings />
        </div>

        {/* Important notes */}
        <div className="pdf-section" id="section-1">
          <ImportantNotes />
        </div>

        {/* Scope of service */}
        <div className="pdf-section" id="section-1">
          <ScopeService />
        </div>

        {/* Inclusion summary */}
        <div className="pdf-section" id="section-1">
          <InclusionSummary />
        </div>

        {/* Activity Table */}
        <div className="pdf-section" id="section-1">
          <ActivityTable />
        </div>

        {/* Terms and Conditions */}
        <div className="py-5 border-b">
          <h4 className="text-2xl font-semibold pb-2">
            Terms and <span className="text-purple-800">Conditions</span>
          </h4>
          <a href="#" className="text-xl text-blue-700 underline font-semibold">
            View all terms and conditions{" "}
          </a>
        </div>

        {/* Payment Plan */}
        <PaymentPlan />

        {/* Visa Details */}
        <VisaDetail />

        {/* Book Button */}
        <div className="flex flex-col justify-center items-center py-8 gap-4">
          <p className="text-3xl font-semibold text-purple-900">PLAN.PACK.GO!</p>
          <div className="bg-purple-900 px-25 py-3 text-white rounded-full">
            <button className="font-semibold">Book Now</button>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
