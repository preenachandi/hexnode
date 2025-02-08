import Banner from "../assets/hexnode-kiosks.webp";
function HomeBanner() {
  return (
    <div className="h-screen flex items-center bg-[#0B0E17] text-white ">
      <section className="w-full px-2 py-0 ">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 w-full items-center">
      
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h2>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Work Email"
                className="w-full sm:w-72 px-4 py-3 text-black rounded-md focus:outline-none bg-white"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                GET STARTED NOW!
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Banner}
              alt="Hexnode Kiosk"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeBanner;
