import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoSlider from "./LogoSlider";



const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Testimonial Data
const testimonials = [
    {
      image: "../src/assets/justin-modrak.webp",
      quote: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      role: "Technology Coordinator",
      company: "East Troy Community School District",
    },
    {
      image: "../src/assets/dalibor-kruljac.webp",
      quote: "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Sophia Lee",
      role: "IT Manager",
      company: "Tech Solutions Inc.",
    },
    {
      image: "../src/assets/chris-robinson.webp",
            quote: "An excellent platform for kiosk management. Highly recommend!",
            name: "Michael Brown",
            role: "Network Admin",
            company: "Global Enterprises",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-4 md:px-20 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 mt-14">
        Why should you choose Hexnode?
      </h2>

      <div className="flex items-center justify-center gap-2 md:gap-4 mb-16">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-white p-3 rounded-md shadow-md hover:bg-gray-100 transition "
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
        </button>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-3xl md:max-w-4xl">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="object-cover h-60 md:h-full w-full"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 p-4 md:p-6 text-center md:text-left">
            <p className="text-lg md:text-xl font-medium text-gray-900 pt-8 pb-8">
              {testimonials[currentIndex].quote}
            </p>
            <hr className="my-3 md:my-4 border-gray-300" />
            <p className="text-md md:text-lg font-semibold text-gray-900 pb-1">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              {testimonials[currentIndex].role}
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              {testimonials[currentIndex].company}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-white p-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
        </button>
      </div>

      <LogoSlider/>
    </section>
  );
};

export default TestimonialSlider;
