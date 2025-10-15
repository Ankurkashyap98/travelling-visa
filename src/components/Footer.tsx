import React from "react";
import VigoviaLogo from "./VigoviaLogo";

const Footer: React.FC = () => {
  return (
    <div className="bg-white border-t border-gray-200 mt-8">
      <div className="mx-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-vigovia-purple mb-2">
              Vigovia Tech Pvt. Ltd
            </h3>
            <p className="text-sm text-gray-600">
              Registered Office: Hd-109 Cinnabar Hills, Links Business Park,
              Karnataka, India.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm text-gray-600">Phone: +91-9504061112</p>
            <p className="text-sm text-gray-600">
              Email ID: Utkarsh@Vigovia.Com
            </p>
            <p className="text-sm text-gray-600">CIN: U79110KA2024PTC191890</p>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <VigoviaLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
