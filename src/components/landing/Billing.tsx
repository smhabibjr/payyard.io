"use client";

import { apple, bill, google } from "../../../public/images";
import Image from "next/image";
import { motion } from "framer-motion";

const Billing: React.FC = () => {
  return (
    <div className="w-full xl:w-container mx-auto px-6 lg:px-8 text-gray-400 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-sm mt-[6rem]">
      {/* Text content on the left side (on larger screens) */}
      <div className="text-center lg:text-left px-4 md:px-6 lg:px-0">
        <motion.h2
          className="text-3xl md:text-4xl text-white font-semibold leading-tight md:leading-relaxed mb-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Easily Control Your Billing & Invoicing
        </motion.h2>
        <motion.p
          className="text-base leading-loose text-slate-400 max-w-[470px] mx-auto lg:mx-0 mb-6"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Integer Fusce ipsum rhoncus porttitor integer platea placerat.
        </motion.p>
        <div className="flex flex-row justify-center lg:justify-start gap-4">
          <motion.div
            className="w-[128px] h-[42px] cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <Image src={apple} alt="apple_store" className="object-contain" />
          </motion.div>
          <motion.div
            className="w-[128px] h-[42px] cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <Image src={google} alt="google_play" className="object-contain" />
          </motion.div>
        </div>
      </div>

      {/* Image on the right side (on larger screens) */}
      <div className="relative lg:order-last">
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image src={bill} alt="billing" className="w-full h-auto relative z-[5]" />
        </motion.div>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
    </div>
  );
};

export default Billing;
