import React from "react";
import VigoviaLogo from "./VigoviaLogo";

interface HeaderProps {
  travelerName: string;
  destination: string;
  duration: string;
}

const Header: React.FC<HeaderProps> = ({
  travelerName,
  destination,
  duration,
}) => {
  return (
    <div className="w-full bg-white">
      {/* Logo Section */}
      <div className="px-6 py-4">
        <VigoviaLogo />
      </div>

      {/* Main Banner - centered content per Figma */}
      <div className="hero-banner vigovia-hero-gradient">
        <div className="hero-content">
          <h1>Hi, {travelerName}!</h1>
          <h2>{destination} Itinerary</h2>
          <p>{duration}</p>
          <div className="hero-icons">
            <span className="hero-icon">✈</span>
            <span className="hero-icon">🏢</span>
            <span className="hero-icon">🔁</span>
            <span className="hero-icon">🚗</span>
            <span className="hero-icon">🧳</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
