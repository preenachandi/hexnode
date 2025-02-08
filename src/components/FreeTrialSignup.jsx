const FreeTrialSignup = () => {
  return (
    <div>
      <div className="bg-[#01081E] text-white text-center py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
          Sign up and try Hexnode free for 14 days!
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
          <input
            type="email"
            placeholder="Your Work Email"
            className="w-full sm:w-64 md:w-80 px-4 py-3 bg-white rounded-md text-gray-800 outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            GET STARTED
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          No credit cards required.{' '}
          <a href="#" className="text-red-500 hover:underline">
            Request a demo &rarr;
          </a>
        </p>
      </div>

      <footer className="bg-gray-100 text-gray-600 py-4 text-sm px-4 md:px-20 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>
        <div className="text-center md:text-left">
          Copyright &copy; 2024 Mitsogo Inc. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default FreeTrialSignup;