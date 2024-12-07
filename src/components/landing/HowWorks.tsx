"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component for optimized images
import {  withdraw_funds, send_invoice, receive_payment } from "@public/assets/images/landingpage";

type StepItem = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

function HowWorks() {
  const data: StepItem[] = [
    {
      id: 1,
      icon: <Image unoptimized src={send_invoice} alt="Send Invoice Icon" width={150} height={100} style={{ width: "auto", height: "auto" }}  className="rounded-lg" priority  />,
      title: "Generate and Send Invoices",
      description: "Easily create customized invoices and send them directly to your foreign clients.",
    },
    {
      id: 2,
      icon: <Image unoptimized src={receive_payment} alt="Receive Payment Icon" width={100} height={100} style={{ width: "auto", height: "auto" }}  className="rounded-lg" priority  />,
      title: "Receive Payments",
      description: "Payments made by clients are credited to your Payyard.io account for secure processing.",
    },
    {
      id: 3,
      icon: <Image unoptimized src={withdraw_funds} alt="Receive Payment Icon" width={100} height={100} style={{ width: "auto", height: "auto" }}  className="rounded-lg" priority />,
      title: "Withdraw Funds",
      description: "Request to withdraw your funds to your bank in Bangladesh, hassle-free.",
    }
  ];

  return (
    <div className="w-full xl:w-container mt-60 sm:mt-64 md:mt-36 lg:mt-72 xl:mt-72 px-4 md:px-6 lg:px-0 pb-16 mx-auto text-white">
      <div className="title x-full md:w-7/12 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold leading-relaxed"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="mt-5 w-3/4 mx-auto text-slate-400 text-base"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Discover the simple steps to start invoicing, receiving payments, and withdrawing funds seamlessly.
        </motion.p>
      </div>

      <div className="card-list mt-12 text-center md:text-left flex flex-wrap justify-center gap-10">
        {data.map((step, i) => (
          <motion.div
            key={step.id}
            className="group hover:bg-midBlue rounded-2xl transition duration-200 ease-out p-8 w-[360px]"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: i * 0.2 }}
          >
            <span style={{ height: "80px"}} className="flex justify-center md:justify-start">{step.icon}</span>
            <h3 className="mt-8 text-2xl font-medium">{step.title}</h3>
            <p className="content my-4 text-sm leading-loose text-slate-400 group-hover:text-white">
              {step.description}
            </p>
            <a className="font-medium underline" href="#">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HowWorks;