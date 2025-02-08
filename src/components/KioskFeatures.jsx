import { useState } from "react";
import Features from "../assets/effortless-kiosk-deployement-image.webp";
import Feature from "../assets/customized-interface-image.webp";
import Features2 from "../assets/power-up-protection-image.webp";
import Features3 from "../assets/secure-app-ecosystem.webp";
import Features4 from "../assets/secure-app-ecosystem.webp";

const KioskFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentData = [
    {
      title: "Effortless kiosk deployment & management",
      description:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      image: Features,
    },
    {
      title: "Customized interface for brand visibility",
      description:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      image: Feature,
    },
    {
      title: "What more can you do with Hexnode kiosk?",
      description:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      image: Features2,
    },
    {
      title: "Secure and update your app ecosystem",
      description:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      image: Features3,
    },
    {
      title: "Provide an easy-to-use interface for end-users",
      description:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      image: Features4,
    },
  ];

  return (
    <section className=" py-10 px-4 md:px-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-20 text-gray-900">
        What additional possibilities does the{" "}
        <br className="hidden md:block" />
        Kiosk mode offer?
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
   
        <div className="w-full md:w-1/3">
          <img
            src={contentData[activeIndex].image}
            alt="Kiosk"
            className="rounded-xl shadow-lg"
          />
        </div>

      
        <div className="w-full md:w-2/3 space-y-4">
          {contentData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer"
            >
              <h3
                className={`text-2xl font-bold  ${
                  activeIndex === index ? "text-black-500" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-700 mt-8 text-xl">{item.description}</p>
              )}
              {activeIndex === index && (
                <p className="text-red-500 font-semibold mt-2 cursor-pointer ">
                  TRY FOR FREE &gt;
                </p>
              )}
              <hr className="border-gray-300 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KioskFeatures;
