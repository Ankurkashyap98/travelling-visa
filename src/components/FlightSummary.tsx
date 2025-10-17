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
    <div className="flight-summary-section">
      <h2 className="flight-summary-title">
        Flight <span className="flight-summary-accent">Summary</span>
      </h2>
      <div className="flight-list">
        {flights.map((flight, idx) => (
          <div key={idx} className="flight-item">
            <div className="flight-date">{flight.date}</div>
            <div className="flight-details">
              <span className="flight-airline flight-airlin-span">{flight.airline}</span> {flight.fromTo}.
            </div>
          </div>
        ))}
      </div>
      <p className="flight-note">
        Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25Kg Checked Baggage.
      </p>
      <div className="flight-separator"></div>
    </div>
  );
};

export default FlightSummary;