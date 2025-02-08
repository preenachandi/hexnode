import RecognitionSections from "../assets/idc.webp"
import RecognitionSections2 from "../assets/gartner.webp"
import RecognitionSections3 from "../assets/forrester.webp"
function RecognitionSection() {
  return (
    <div className="text-white py-10 bg-[#1A1C2B] md:py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center md:text-left">

      
        <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-700 px-4 pb-6 md:pb-0 transform transition duration-300 hover:-translate-y-2">
          <img src={RecognitionSections} alt="IDC" className="h-6 mb-2" />
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
          </p>
        </div>

       
        <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-700 px-4 pb-6 md:pb-0 transform transition duration-300 hover:-translate-y-2">
          <img src={RecognitionSections2} alt="Gartner" className="h-6 mb-2" />
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.
          </p>
        </div>

       
        <div className="flex flex-col items-center md:items-start px-4 transform transition duration-300 hover:-translate-y-2">
          <img src={RecognitionSections3} alt="Forrester" className="h-6 mb-2" />
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
          </p>
        </div>

      </div>
    </div>
  );
}

export default RecognitionSection;
