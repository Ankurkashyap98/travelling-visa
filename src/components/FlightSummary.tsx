import React from "react";

interface FlightItem {
  date: string; // e.g. Thu 10 Jan'24
  airline: string; // e.g. Fly Air India (AX-123)
  fromTo: string; // e.g. From Delhi (DEL) To Singapore (SIN)
}

interface FlightSummaryProps {
  flights: FlightItem[];
}

const FlightSummary: React.FC<FlightSummaryProps> = ({ flights }) => {
  return (
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Flight <span className="text-vigovia-light-purple">Summary</span>
      </h2>
      <div className="space-y-4">
        {flights.map((f, idx) => (
          <div key={idx} className="flight-pill">
            <div className="flight-pill-left">{f.date}</div>
            <div className="flight-pill-body">
              <span className="font-bold">{f.airline}</span> {f.fromTo}.
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Note: All Flights Include Meals, Seat Choice (Excluding XL), And
        20kg/25Kg Checked Baggage.
      </p>
    </div>
  );
};

export default FlightSummary;
