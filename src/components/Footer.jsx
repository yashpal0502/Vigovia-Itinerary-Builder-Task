import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex justify-between mt-10">
      <div className="w-80 pt-4">
        <p className="font-semibold">Vigovia tech pvt. ltd</p>
        <p className="text-sm">
          Registered Office: Hd-109 Cinnabar Hills, Links Business Park,
          Karnataka, India.
        </p>
      </div>
      <div className="text-sm pt-4">
        <p>
          <span className="font-semibold">Phone:</span> +91-9504061112
        </p>
        <p>
          <span className="font-semibold">Email ID:</span> Utkarsh@vigovia.com
        </p>
        <p>
          <span className="font-semibold">CIN:</span> U79110KA2024PTC191890
        </p>
      </div>
      <div className="w-60 flex items-center justify-center">
        <img src={assets.image} alt="" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Footer;
