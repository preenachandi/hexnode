import PlatformSupports from "../assets/android.svg";
import PlatformSupports2 from "../assets/windows.svg";
import PlatformSupports3 from "../assets/ios.svg";
import PlatformSupports4 from "../assets/android-tv.svg";
import PlatformSupports5 from "../assets/apple-tv.svg";
import PlatformSupports6 from "../assets/amazon-fire.webp"
const PlatformSupport = () => {
    const platforms = [
        { name: "Android", icon: PlatformSupports },
        { name: "Windows", icon: PlatformSupports2 },
        { name: "iOS", icon: PlatformSupports3 },
        { name: "Android TV", icon: PlatformSupports4 },
        { name: "Apple TV", icon:PlatformSupports5 },
        { name: "Fire TV", icon: PlatformSupports6 },
      ];
      
  return (
    <div className="text-center py-10 bg-white mb-20">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 mt-14">Platforms Supported</h2>
      <div className="flex flex-wrap justify-center gap-10 ">
        {platforms.map((platform, index) => (
          <div
            key={index}
           
          >
            <img
              src={platform.icon}
              alt={platform.name}
              className="w-40 h-18 object-contain transform transition duration-300 hover:-translate-y-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformSupport;
