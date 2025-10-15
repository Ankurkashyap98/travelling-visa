import React from "react";

interface TravelDetailsProps {
  departureFrom: string;
  departureDate: string;
  arrivalDate: string;
  destination: string;
  travelers: number;
}

const TravelDetails: React.FC<TravelDetailsProps> = ({
  departureFrom,
  departureDate,
  arrivalDate,
  destination,
  travelers,
}) => {
  return (
    <div className="travel-details-box">
      <div className="travel-details-grid">
        <div>
          <div className="travel-label">Departure From :</div>
          <div className="travel-value">{departureFrom}</div>
        </div>
        <div>
          <div className="travel-label">Departure :</div>
          <div className="travel-value">{departureDate}</div>
        </div>
        <div>
          <div className="travel-label">Arrival :</div>
          <div className="travel-value">{arrivalDate}</div>
        </div>
        <div>
          <div className="travel-label">Destination :</div>
          <div className="travel-value">{destination}</div>
        </div>
        <div>
          <div className="travel-label">No. Of Travellers :</div>
          <div className="travel-value">{travelers}</div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
