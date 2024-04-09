import React from "react";

const TravelCard = () => {
  return (
    <div className="bg-white p-3">
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-500 to-gray-50 max-w-md">
        <div className="h-[99%] w-[99%] bg-white m-[2px] p-8">
          <h2 className="text-[#E7493F] text-center pb-5 font-semibold">
            Enchanting Maldives: <br /> Paradise Found
          </h2>
          <p>
            In the heart of the Indian Ocean lies a paradise beyond compare –
            the Maldives. Picture-perfect atolls adorned with powdery white sand
            beaches and crystal-clear turquoise waters beckon travelers to
            indulge in the ultimate tropical escape. Each luxurious overwater
            villa or beachfront bungalow offers a sanctuary of serenity, where
            the gentle lull of the waves lulls guests into a state of blissful
            relaxation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
