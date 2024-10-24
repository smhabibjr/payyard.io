import { apple, bill, google } from "../../../public";
import styles, { layout } from "./styles";
import Image from "next/image";
import AnimScroll from './animScroll';
const Billing: React.FC = () => (
  <div className="w-full xl:w-container mx-auto px-6 lg:px-8 text-gray-400 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-sm mt-[10rem]">
    {/* Text content on the left side (on larger screens) */}
    <div className="text-center lg:text-left px-4 md:px-6 lg:px-0">
      <h2 className="text-3xl md:text-4xl text-white font-semibold leading-tight md:leading-relaxed mb-8">
        Easily Control Your Billing & Invoicing
      </h2>
      <p className="text-base leading-loose text-slate-400 max-w-[470px] mx-auto lg:mx-0 mb-6">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Integer Fusce ipsum rhoncus porttitor integer platea placerat.
      </p>
      <div className="flex flex-row justify-center lg:justify-start gap-4">
        <Image
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>

    {/* Image on the right side (on larger screens) */}
    <div className="relative lg:order-last">
      <div className="flex justify-center lg:justify-end">
        <Image src={bill} alt="billing" className="w-full h-auto relative z-[5]" />
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
  </div>
);

export default Billing;
