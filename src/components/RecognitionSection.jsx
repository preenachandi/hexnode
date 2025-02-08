function RecognitionSection() {
  return (
    <div className="text-white py-10 bg-[#1A1C2B] md:py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center md:text-left">

        {/* IDC */}
        <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-700 px-4 pb-6 md:pb-0 transform transition duration-300 hover:-translate-y-2">
          <img src="../src/assets/idc.webp" alt="IDC" className="h-6 mb-2" />
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
          </p>
        </div>

        {/* Gartner */}
        <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-700 px-4 pb-6 md:pb-0 transform transition duration-300 hover:-translate-y-2">
          <img src="../src/assets/gartner.webp" alt="Gartner" className="h-6 mb-2" />
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.
          </p>
        </div>

        {/* Forrester */}
        <div className="flex flex-col items-center md:items-start px-4 transform transition duration-300 hover:-translate-y-2">
          <img src="../src/assets/forrester.webp" alt="Forrester" className="h-6 mb-2" />
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
          </p>
        </div>

      </div>
    </div>
  );
}

export default RecognitionSection;
