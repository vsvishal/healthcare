const VisionMission = () => {
  return (
    <div className="text-center">
      <p className="text-xs md:text-lg font-bold italic">VISION & MISSION</p>
      <div className="flex justify-center items-center my-2">
        <button
          type="button"
          className="bg-orange-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-sm ml-2 md:ml-4 hover:bg-orange-700"
        >
          AFFORDABILITY
        </button>
        <button
          type="button"
          className="bg-orange-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-sm ml-2 md:ml-4 hover:bg-orange-700"
        >
          AVAILABILITY
        </button>
        <button
          type="button"
          className="bg-orange-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-sm ml-2 md:ml-4 hover:bg-orange-700"
        >
          ACCESSIBILITY
        </button>
      </div>
    </div>
  );
};

export default VisionMission;
