import { MapIcon } from "@heroicons/react/24/outline";

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
        <div className="bg-white mx-auto mt-6 sm:mt-8 rounded-xl flex items-center h-12 sm:h-16 justify-between px-3 sm:px-4 md:px-6">
          <label htmlFor="mail" className="flex items-center h-full">
            <MapIcon className="w-5 sm:w-6 text-gray-500 mr-2" />
          </label>
          <input
            id="mail"
            className="text-gray-500 outline-none text-xs sm:text-sm placeholder-slate-500 h-full w-full sm:w-64 font-medium ml-auto"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="bg-midBlue text-white font-medium rounded-xl px-4 sm:px-6 transition duration-200 h-10 sm:h-14 text-xs sm:text-sm hover:bg-btnDark ml-2">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

