


const PlatformSupport = () => {
    const platforms = [
        { name: "Android", icon: "../src/assets/android.svg"},
        { name: "Windows", icon: "../src/assets/windows.svg" },
        { name: "iOS", icon: "../src/assets/ios.svg" },
        { name: "Android TV", icon: "../src/assets/android-tv.svg" },
        { name: "Apple TV", icon: "../src/assets/apple-tv.svg" },
        { name: "Fire TV", icon: "../src/assets/amazon-fire.webp" },
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
