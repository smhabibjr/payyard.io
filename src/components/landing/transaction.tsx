"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { dash1, dash2, dash3, dash4, dash5, dash6 } from "../../../public/images";

type TransactionItem = {
  id: number;
  title: string;
  description: string;
};

function Transaction() {
  const data: TransactionItem[] = [
    {
      id: 1,
      title: "Paid Invoice",
      description: "With the paid invoice you can check any monthly bills that have been paid by you",
    },
    {
      id: 2,
      title: "Monthly Progress",
      description: "The Monthly Progress Feature in the invoice can track your speed in paying bills each month",
    },
    {
      id: 3,
      title: "Modern UI",
      description: "With the modern user interface, it makes it easier for you to make payments due to its simplicity",
    },
  ];

  return (
    <div className="w-full xl:w-container px-0 md:px-32 lg:px-12 xl:px-0 mx-auto overflow-hidden text-white flex flex-wrap lg:flex-nowrap justify-center xl:justify-between items-center gap-24 mt-[8rem]">
      <div className="w-full lg:w-11/12">
        <motion.h2
          className="text-3xl md:text-4xl text-center lg:text-left font-semibold leading-tight md:leading-relaxed mb-16"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Monitor Transaction Live Through the Software
        </motion.h2>

        {data.map((content, i) => (
          <motion.div
            key={content.id}
            className="flex items-start gap-5 mt-8 mx-8 lg:mx-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: i * 0.2 }}
          >
            <CheckIcon className="w-8 bg-midBlue text-white rounded-full p-2" />
            <div>
              <p className="text-xl font-medium">{content.title}</p>
              <p className="mt-2 text-base leading-loose text-slate-400 group-hover:text-white">
                {content.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-8 mx-10 xl:mx-0 xl:pr-20">
        <div className="flex flex-col items-start gap-7 z-10">
          {[dash1, dash2, dash3].map((imageSrc, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <Image className="w-min" src={imageSrc} alt={`Dashboard ${index + 1}`} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-7 z-10">
          {[dash4, dash5, dash6].map((imageSrc, index) => (
            <motion.div
              key={index + 3}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: (index + 3) * 0.2 }}
            >
              <Image className="w-min" src={imageSrc} alt={`Dashboard ${index + 4}`} />
            </motion.div>
          ))}
        </div>
        <div className="bg hidden lg:block absolute w-[400px] h-[630px] bg-gradient rounded-2xl z-0 ml-44"></div>
      </div>
    </div>
  );
}

export default Transaction;
