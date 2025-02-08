import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-30 py-6 
        transition-colors duration-500 ease-in-out shadow-md  
        ${isScrolled ? "bg-white" : "bg-[#0B0E17]"} 
        hover:bg-white`}
    >
      <h1
        className={`text-3xl font-semibold transition-colors duration-500  ${
          isScrolled ? "text-black" : "text-white"
        } hover:text-black`}
      >
        hexnode
      </h1>

      <div className="hidden md:flex">
        <button className="bg-red-600 text-white text-sm md:text-base px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
          14 DAY FREE TRIAL
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-colors duration-500 ${
            isScrolled ? "text-black" : "text-white"
          } hover:text-black`}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-[#0B0E17] w-full p-4 flex flex-col items-center md:hidden shadow-md">
          <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
            14 DAY FREE TRIAL
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
