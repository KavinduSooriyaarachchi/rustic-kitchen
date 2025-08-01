import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              Bringing Comfort to Your Plate
            </p>
          </div>
          <h1 className="prata-regular text-5xl sm:py-3 leading-relaxed ">
            Eat.Enjoy.Repeat
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">ORDER NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right */}

      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Hero;
