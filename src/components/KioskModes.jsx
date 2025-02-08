import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IoCheckmark } from "react-icons/io5";
export default function KioskModes() {
  const [activeTab, setActiveTab] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (tabId) => {
    setOpenAccordion(openAccordion === tabId ? null : tabId);
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 1, label: "Single App Kiosk" },
    { id: 2, label: "Multi-App Kiosk" },
    { id: 3, label: "Web-based Kiosk" },
    { id: 4, label: "Digital Signages" },
    { id: 5, label: "ASAM Kiosk" },
  ];

  const tabContents = {
    1: {
      title: "Powerful Single-App Kiosk solutions for enhanced control",
      points: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      image: "../src/assets/single-app-kios-image.webp",
    },
    2: {
      title: "Elevate efficiency with Multi-App Kiosk",
      points: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "Reduce distractions by providing access to essential functions only.",
        "Allow necessary device settings while retaining control.",
        "Simplify device management while enhancing user productivity.",
      ],
      image: "../src/assets/multi-app-kiosk-image.webp",
    },
    3: {
      title: "Explore the new way to manage web apps and websites",
      points: [
        "Let users access essential and approved web apps and files only.",
        "Utilize Hexnode's advanced settings for website kiosk.",
        "Tailor your experience to match your unique use case.",
        "Take full control with remote debugging and custom toolbar options.",
      ],
      image: "../src/assets/web-based-kiosk-image.webp",
    },
    4: {
      title: "Capture attention with Digital Signage Kiosks",
      points: [
        "Transform devices into captivating digital signage kiosks.",
        "Engage audiences with vibrant images and seamless video streaming.",
        "Customize media with trimming, muting, and background music.",
        "Advertise your brand aesthetics effectively.",
      ],
      image: "../src/assets/digital-signage-kiosk-image.webp",
    },
    5: {
      title: "Unlock the power of Autonomous Single App Mode (ASAM)",
      points: [
        "Empower iOS apps to secure themselves in the foreground.",
        "Transform devices into dedicated POS systems.",
        "Create focused, secure digital environments.",
        "Effortlessly configure ASAM for enhanced user experiences.",
      ],
      image: "../src/assets/asam-kiosk-image.webp",
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16 mt-16">
        Specific kiosk modes for unique use cases
      </h2>

      {/* Desktop Tabs */}
      <div className="hidden md:flex md:justify-between border-[#e5e7eb] rounded-md overflow-hidden bg-white shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`md:text-xl font-medium transition  last:border-r-0 py-6 px-10
              ${
                activeTab === tab.id
                  ? "bg-[#040B18] text-white border-b-4 border-[#e5e7eb]"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {tab.label}

          </button>
        ))}
      </div>

      {/* Desktop Tab Content */}
      <div className="hidden md:flex bg-gray-50 p-8 rounded-b-md items-center justify-between gap-8 shadow-md">
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold text-[#040B18]">
            {tabContents[activeTab]?.title}
          </h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            {tabContents[activeTab]?.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-base">
                <span className="text-green-500 text-xl">
                <IoCheckmark />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src={tabContents[activeTab]?.image}
            alt={tabs.find((tab) => tab.id === activeTab)?.label}
            className="rounded-xl shadow-xl w-full max-w-sm object-contain"
          />
        </div>
      </div>

      {/* Mobile Accordion View */}
      <div className="md:hidden space-y-4">
        {tabs.map((tab) => (
          <div key={tab.id} className="border-b border-[#e5e7eb]  rounded-lg overflow-hidden ">

            <button
              onClick={() => toggleAccordion(tab.id)}
              className={`w-full flex justify-between items-center px-4 py-3 text-base font-medium transition-all
                ${
                  openAccordion === tab.id
                    ? "bg-[#040B18] text-white"
                    : "bg-white-200 text-gray-500"
                }`}
            >
              {tab.label}
              {openAccordion === tab.id ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {openAccordion === tab.id && (
              <div className="bg-[#f1f3f6] p-4 space-y-4">
                <h3 className="text-lg font-bold text-[#040B18]">
                  {tabContents[tab.id]?.title}
                </h3>

                <div className="flex justify-center">
                  <img
                    src={tabContents[tab.id]?.image}
                    alt={tab.label}
                    className="rounded-lg shadow-md w-full max-w-xs object-contain"
                  />
                </div>

                <ul className="space-y-2 text-gray-600">
                  {tabContents[tab.id]?.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500">
                      <IoCheckmark />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
