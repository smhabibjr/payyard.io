import { FaEnvelope } from "react-icons/fa";

function Newsletter() {
  return (
    <div className="bg-gradient w-full px-4 sm:px-6 md:px-8 h-[300px] lg:h-newsletter text-white text-center flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
          Subscribe to our newsletter
        </h2>
        <p className="mt-2 text-slate-200 text-sm sm:text-base">
          Get notifications about tips, new products, and exclusive promo news just for you
        </p>

        {/* Input and Button Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Input Field Container */}
          <div className="flex items-center bg-white rounded-xl h-12 sm:h-16 px-4 w-full max-w-xs sm:max-w-sm">
            <label htmlFor="mail" className="flex items-center text-gray-500">
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            </label>
            <input
              id="mail"
              className="text-gray-500 outline-none text-xs sm:text-sm placeholder-slate-500 w-full font-medium"
              type="text"
              placeholder="Enter your email address"
            />
          </div>

          {/* Button Container */}
          <div>
            <button className="bg-midBlue text-white font-medium rounded-xl px-4 sm:px-6 h-10 sm:h-14 text-xs sm:text-sm hover:bg-btnDark transition duration-200">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;