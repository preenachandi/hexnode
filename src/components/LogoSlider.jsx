
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSliders from "../assets/marriott-intl.svg";
import LogoSliders2 from "../assets/merck.svg";
import LogoSliders3 from "../assets/lowes.svg";
import LogoSliders4 from "../assets/gorillas.svg";
import LogoSliders5 from "../assets/polaris.svg";
import LogoSliders6 from "../assets/lowes.svg";
import LogoSliders7 from "../assets/merck.svg";
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
            LogoSliders,
          
            LogoSliders2,
            LogoSliders3,
            LogoSliders4,
            LogoSliders5,
            LogoSliders6,
            LogoSliders7,
          ].map((logo, index) => (
            <div key={index} className="!m-0 !p-0 flex justify-center items-center">
              <img
                src={logo}
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
