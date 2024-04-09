import React from "react";
import BgImg from "../public/assets/bgimg.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgImg}
          alt="bgimg"
          fill
          className="object-cover object-center brightness-50"
        />
      </div>

      <div className="flex justify-end h-[66%] items-center">
        {/* Nothing will be here, just for proper alignment */}
        <div className="flex flex-col mt-10 w-[50vw]">
          <h1 className="text-white text-[30px] md:text-[50px] font-semibold">
            We Take Care
          </h1>
          <h1 className="text-white text-[30px] md:text-[50px] font-semibold text-center">
            Of Your Trip
          </h1>

          <div className="flex justify-center pt-5 md:pt-10">
            <button className="text-white bg-gradient-to-r from-transparent to-[#E7493F] w-34 text-[13px] md:w-48 md:text-base hover:bg-[#E7493F] font-semibold py-2 px-4 border border-white hover:border-transparent">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
