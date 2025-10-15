import React, { useState, useRef } from "react";
import Header from "./components/Header";
import TravelDetails from "./components/TravelDetails";
import DayItinerary from "./components/DayItinerary";
import HotelBookings from "./components/HotelBookings";
import ScopeOfService from "./components/ScopeOfService";
import ActivityTable from "./components/ActivityTable";
import PaymentPlan from "./components/PaymentPlan";
import FlightSummary from "./components/FlightSummary";
import ImportantNotes from "./components/ImportantNotes";
import Footer from "./components/Footer";
import ItineraryForm from "./components/ItineraryForm";
import PDFGenerator from "./components/PDFGenerator";

// Sample data - this will be replaced with form data later
const sampleData = {
  travelerName: "Rahul",
  destination: "Singapore",
  duration: "4 Days 3 Nights",
  travelDetails: {
    departureFrom: "Mumbai",
    departureDate: "31/10/2025",
    arrivalDate: "01/11/2025",
    destination: "Singapore",
    travelers: 4,
  },
  days: [
    {
      dayNumber: 1,
      date: "27th November",
      title: "Arrival In Singapore & City Exploration",
      imageUrl: require("./assets/images/day1.jpg"),
      activities: {
        morning: [
          {
            time: "Morning",
            description: "Arrive In Singapore. Transfer From Airport To Hotel.",
          },
        ],
        afternoon: [
          { time: "Afternoon", description: "Check Into Your Hotel." },
          {
            time: "Afternoon",
            description: "Visit Marina Bay Sands Sky Park (2-3 Hours).",
          },
          {
            time: "Afternoon",
            description:
              "Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
          },
        ],
        evening: [
          {
            time: "Evening",
            description:
              "Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)",
          },
        ],
      },
    },
    {
      dayNumber: 2,
      date: "28th November",
      title: "Singapore City Excursion",
      imageUrl: require("./assets/images/day2.jpg"),
      activities: {
        morning: [{ time: "Morning", description: "Visit Sentosa Island" }],
        afternoon: [
          {
            time: "Afternoon",
            description: "Explore Universal Studios Singapore",
          },
          { time: "Afternoon", description: "Visit S.E.A. Aquarium" },
        ],
        evening: [{ time: "Evening", description: "Enjoy Wings of Time Show" }],
      },
    },
    {
      dayNumber: 3,
      date: "29th November",
      title: "Gardens By The Bay + Marina Bay",
      imageUrl: require("./assets/images/day3.jpg"),
      activities: {
        morning: [{ time: "Morning", description: "Visit Cloud Forest" }],
        afternoon: [
          { time: "Afternoon", description: "Explore Flower Dome" },
          { time: "Afternoon", description: "Walk through Supertree Grove" },
        ],
        evening: [
          { time: "Evening", description: "Marina Bay Sands Light Show" },
        ],
      },
    },
    {
      dayNumber: 4,
      date: "30th November",
      title: "Departure",
      imageUrl: require("./assets/images/day4.jpg"),
      activities: {
        morning: [{ time: "Morning", description: "Check out from hotel" }],
        afternoon: [{ time: "Afternoon", description: "Transfer to airport" }],
        evening: [{ time: "Evening", description: "Departure flight" }],
      },
    },
  ],
  hotelBookings: [
    {
      city: "Singapore",
      checkIn: "24/02/2024",
      checkOut: "27/02/2024",
      nights: 3,
      hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
    },
  ],
  services: [
    {
      service: "Flight Tickets And Hotel Vouchers",
      details: "Delivered 3 Days Post Full Payment",
    },
    {
      service: "Web Check-In",
      details: "Boarding Pass Delivery Via Email/WhatsApp",
    },
    { service: "Support", details: "Chat Support - Response Time: 4 Hours" },
    { service: "Cancellation Support", details: "Provided" },
    { service: "Trip Support", details: "Response Time: 5 Minutes" },
  ],
  inclusions: [
    {
      category: "Flight",
      count: 2,
      details: "All Flights Mentioned",
      status: "Awaiting Confirmation",
    },
    {
      category: "Tourist Tax",
      count: 2,
      details:
        "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)",
      status: "Awaiting Confirmation",
    },
    {
      category: "Hotel",
      count: 2,
      details: "Airport To Hotel - Hotel To Attractions - Day Trips If Any",
      status: "Included",
    },
  ],
  flights: [
    {
      date: "Thu 10 Jan'24",
      airline: "Fly Air India (AX-123)",
      fromTo: "From Delhi (DEL) To Singapore (SIN)",
    },
    {
      date: "Thu 10 Jan'24",
      airline: "Fly Air India (AX-123)",
      fromTo: "From Delhi (DEL) To Singapore (SIN)",
    },
    {
      date: "Thu 10 Jan'24",
      airline: "Fly Air India (AX-123)",
      fromTo: "From Delhi (DEL) To Singapore (SIN)",
    },
    {
      date: "Thu 10 Jan'24",
      airline: "Fly Air India (AX-123)",
      fromTo: "From Delhi (DEL) To Singapore (SIN)",
    },
  ],
  activities: [
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Nature/Sightseeing",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Singapore",
      activity: "Sydney Harbour Cruise & Taronga Zoo",
      type: "Airlines Standard",
      timeRequired: "2-3 Hours",
    },
  ],
  paymentPlan: {
    totalAmount: "₹ 9,00,000 For 3 Pax (Inclusive Of GST)",
    tcs: "Not Collected",
    installments: [
      {
        installment: "Installment 1",
        amount: "₹3,50,000",
        dueDate: "Initial Payment",
      },
      {
        installment: "Installment 2",
        amount: "₹4,00,000",
        dueDate: "Post Visa Approval",
      },
      {
        installment: "Installment 3",
        amount: "Remaining",
        dueDate: "20 Days Before Departure",
      },
    ],
    visaDetails: {
      visaType: "123456",
      validity: "123456",
      processingDate: "123456",
    },
  },
  importantNotes: [
    {
      point: "Airlines Standard Policy",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Flight/Hotel Cancellation",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Trip Insurance",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Hotel Check-In & Check Out",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Visa Rejection",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
  ],
};

function App() {
  const [itineraryData, setItineraryData] = useState(sampleData);
  const [showForm, setShowForm] = useState(false);
  const itineraryRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (data: any) => {
    setItineraryData(data);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {showForm ? (
        <ItineraryForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="w-full overflow-x-auto">
          {/* Form Toggle Button */}
          <div className="fixed top-4 right-4 z-50 flex space-x-2">
            <button
              onClick={() => setShowForm(true)}
              className="bg-vigovia-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-vigovia-light-purple transition-colors shadow-lg"
            >
              Edit Itinerary
            </button>
            <PDFGenerator itineraryRef={itineraryRef} />
          </div>

          {/* Itinerary Content */}
          <div ref={itineraryRef} className="itinerary-container">
            {/* Header */}
            <Header
              travelerName={itineraryData.travelerName}
              destination={itineraryData.destination}
              duration={itineraryData.duration}
            />

            {/* Travel Details */}
            <TravelDetails {...itineraryData.travelDetails} />

            {/* Day Itineraries */}
            {itineraryData.days.map((day) => (
              <DayItinerary key={day.dayNumber} {...day} />
            ))}

            {/* Flight Summary */}
            <FlightSummary flights={itineraryData.flights} />

            {/* Hotel Bookings */}
            <HotelBookings bookings={itineraryData.hotelBookings} />

            {/* Important Notes */}
            <ImportantNotes notes={itineraryData.importantNotes} />

            {/* Scope of Service */}
            <ScopeOfService
              services={itineraryData.services}
              inclusions={itineraryData.inclusions}
            />

            {/* Activity Table */}
            <ActivityTable activities={itineraryData.activities} />

            {/* Payment Plan */}
            <PaymentPlan {...itineraryData.paymentPlan} />

            {/* Footer */}
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
