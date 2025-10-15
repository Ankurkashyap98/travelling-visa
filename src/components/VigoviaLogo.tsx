import React from "react";
import LogoImg from "../assets/images/Frame 206 (1).png";

const VigoviaLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <img src={LogoImg} alt="Vigovia" className="vigovia-logo-img" />
    </div>
  );
};

export default VigoviaLogo;
