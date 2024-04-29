import React from "react";

const VisionMission = () => {
  return (
    <div className="text-center">
      <p className="text-xs md:text-lg font-bold italic">VISION & MISSION</p>
      <div className="flex justify-center items-center my-2">
        <button className="bg-orange-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-sm ml-4 hover:bg-orange-700">
          AFFORDABILITY
        </button>
        <button className="bg-orange-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-sm ml-4 hover:bg-orange-700">
          AVAILABILITY
        </button>
        <button className="bg-orange-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-sm ml-4 hover:bg-orange-700">
          ACCESSIBILITY
        </button>
      </div>
    </div>
  );
};

export default VisionMission;
