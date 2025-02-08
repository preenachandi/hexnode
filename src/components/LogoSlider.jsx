
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px", 
   
  };

  return (
    <div className="bg-gray-50 py-6 px-4 md:px-20 mt-14">
      <div className="slider-container">
        <Slider {...settings}>
          {[
            "marriott-intl.svg",
            "merck.svg",
            "group1-automotive.webp",
            "lowes.svg",
            "gorillas.svg",
            "polaris.svg",
            "lowes.svg",
            "merck.svg",
          ].map((logo, index) => (
            <div key={index} className="!m-0 !p-0 flex justify-center items-center">
              <img
                src={`../src/assets/${logo}`}
                alt={`Logo ${index + 1}`}
                className="w-28 md:w-40 object-contain !m-0 !p-0" // Removes space around images
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
