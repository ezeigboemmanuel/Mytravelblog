import React from "react";
import Maldives from "../../public/assets/maldives.jpg"
import Paris from "../../public/assets/paris.jpg"
import Tokyo from "../../public/assets/tokyo.jpg"
import MapImg from "../../public/assets/map.jpg"
import Image from "next/image";

const Explore = () => {
  const countries = [
    {
      name: "Maldives",
      image: Maldives,
      readers: "1.5k",
      map: MapImg,
    },
    {
      name: "Paris",
      image: Paris,
      readers: "1.2k",
      map: MapImg,
    },
    {
      name: "Tokyo",
      image: Tokyo,
      readers: "6.2k",
      map: MapImg,
    },
  ];
  return (
  <div className="flex flex-row justify-center gap-x-2 lg:gap-x-10 md:gap-x-4 mx-auto">
    {countries.map((country) => (
      <div key={country.name} className="bg-black text-white flex flex-col items-center pb-2">
        <Image
            src={country.image}
            alt="country_img"
            className="w-28 md:w-40 h-20 md:h-40 object-cover object-center"
          />
          <Image
            src={MapImg}
            alt="map_img"
            className="w-28 md:w-40 h-20 md:h-28 brightness-50 grayscale object-cover object-center"
          />
          <p className="text-[12px] font-semibold">{country.name}</p>
          <p className="text-[#E7493F] text-[10px]">{country.readers + " READERS"}</p>
          <button className="w-24 md:w-32 text-[10px] bg-tranparent text-white py-2 px-4 border border-[#fff] hover:border-transparent">
            EXPLORE NOW
          </button>
      </div>
    ))} 
  </div>
  );
};

export default Explore;
