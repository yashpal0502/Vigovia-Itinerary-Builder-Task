import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    company: {
      name: "PLAN.PACK.GO",
      brand: "vi viago",
      phone: "+91-9504061112",
      email: "utkarsh@vigovia.com",
      address: "Hd-109 Cinnabar Hills, Links Business Park, Karnataka, India.",
      cin: "U79110KA2024PTC191890",
    },
    trip: {
      title: "Singapore Itinerary",
      contactName: "Rahul",
      duration: "4 days 3 Nights",
      departureFrom: "Mumbai",
      departureDate: "31/10/2025",
      arrivalDate: "01/11/2025",
      destination: "Singapore",
      travellers: 4,
    },
    days: [
      {
        day: 1,
        date: "27th November",
        title: "Arrival in Singapore & City Exploration",
        morning: "Arrive in Singapore. Transfer from Airport to Hotel.",
        afternoon:
          "Check into your hotel. Visit Marina Bay Sands Sky Park (2-3 hours). Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.",
        evening:
          "Explore Gardens By The Bay, including Super Tree Grove (3-4 hours).",
      },
      {
        day: 2,
        date: "27th November",
        title: "Singapore City Excursion",
        morning: "Arrive in Singapore. Transfer from Airport to Hotel.",
        afternoon:
          "Check into your hotel. Visit Marina Bay Sands Sky Park (2-3 hours). Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.",
        evening:
          "Explore Gardens By The Bay, including Super Tree Grove (3-4 hours).",
      },
      {
        day: 3,
        date: "27th November",
        title: "Gardens By The Bay + Marina Bay",
        morning: "Arrive in Singapore. Transfer from Airport to Hotel.",
        afternoon:
          "Check into your hotel. Visit Marina Bay Sands Sky Park (2-3 hours). Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.",
        evening:
          "Explore Gardens By The Bay, including Super Tree Grove (3-4 hours).",
      },
      {
        day: 4,
        date: "27th November",
        title: "Arrive in Genting and relax",
        morning: "Arrive in Singapore. Transfer from Airport to Hotel.",
        afternoon:
          "Check into your hotel. Visit Marina Bay Sands Sky Park (2-3 hours). Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.",
        evening:
          "Explore Gardens By The Bay, including Super Tree Grove (3-4 hours).",
      },
    ],
    flights: [
      {
        date: "Thu 10 Jan’24",
        detail: "Fly Air India (AX-123) from Delhi (DEL) to Singapore (SIN).",
      },
      {
        date: "Thu 10 Jan’24",
        detail: "Fly Air India (AX-123) from Delhi (DEL) to Singapore (SIN).",
      },
    ],
    hotels: [
      {
        city: "Singapore",
        name: "Super Townhouse Oak",
        checkIn: "24/02/2024",
        checkOut: "24/02/2024",
        nights: 2,
      },
      {
        city: "Singapore",
        name: "Vashi formerly Blue Diamond",
        checkIn: "24/02/2024",
        checkOut: "24/02/2024",
        nights: 2,
      },
    ],
    scope: [
      {
        service: "Flight tickets and hotel vouchers",
        detail: "Delivered 3 days post full payment ",
      },
      {
        service: "Web Check-In",
        detail: "Boarding pass delivery via Email/WhatsApp ",
      },
      {
        service: "Support",
        detail: "Chat support Response time: 4 hours ",
      },
      {
        service: "Cancellation Support",
        detail: "Provided ",
      },
      {
        service: "Trip Support",
        detail: "Response time: 5 minutes ",
      },
    ],
    notes: [
      {
        point: "Airlines Standard Policy",
        details:
          "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.",
      },
      {
        point: "Hotel Check-In & Check Out",
        details:
          "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.",
      },
      {
        point: "Visa Rejection",
        details:
          "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.",
      },
      {
        point: "Flight/Hotel Cancellation",
        details:
          "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.",
      },
      {
        point: "trip Insurance",
        details:
          "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.",
      },
    ],
    inclusionSummary: [
      {
        count: 2,
        category: "Flight",
        status: "Awaiting Confirmation",
        detail: "All flights mentioned",
      },
      {
        count: 2,
        category: "Tourist Tax",
        status: "Awaiting Confirmation",
        detail:
          "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns),Novotel (Gold Coast), Holiday Inn (Melbourne)",
      },
      {
        count: 2,
        category: "Hotel",
        status: "Included",
        detail: "Airport to Hotel - Hotel to Attractions - Day trips if any",
      },
    ],
    activities: [
      {
        city: "Rio de Janeiro",
        activity: "Sydney Harbour Cruise & Taronga Zoo",
        type: "Nature/Sightseeing ",
        time: "2-3 Hours",
      },
      {
        city: "Rio de Janeiro",
        activity: "Sydney Harbour Cruise & Taronga Zoo",
        type: "Airlines Standard ",
        time: "2-3 Hours",
      },
      {
        city: "Rio de Janeiro",
        activity: "Sydney Harbour Cruise & Taronga Zoo",
        type: "Airlines Standard ",
        time: "2-3 Hours",
      },
    ],
    paymentPlan: {
      total: "₹9,00,000_for 3 pax (inclusive of GST)",
      tcs: "Not Collected",
      installments: [
        { label: "Installment 1", amount: "₹3,50,000", due: "Initial Payment" },
        {
          label: "Installment 2",
          amount: "₹4,00,000",
          due: "Post Visa Approval",
        },
        {
          label: "Installment 3",
          amount: "Remaining",
          due: "20 Days Before Departure",
        },
      ],
    },
    visa: {
      type: "Tourist",
      processingDate: "01/09/2025",
      validity: "6 months",
    },
  });

  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const value = {
    data,
    setData,
    updateData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
