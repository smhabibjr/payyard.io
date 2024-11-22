"use client";

import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md"; // Updated icons
import { motion } from "framer-motion";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { id: 1, question: "How can I create an invoice for my client?", answer: "Go to your dashboard and select the 'Invoice' option. Fill in the required details, such as the client’s information, amount, and description, and then send it directly from the platform using our PayPal integration." },
  { id: 2, question: "How long does it take to receive payment after a client pays through PayPal?", answer: "Payments made by clients through PayPal are typically credited to our platform account instantly. You can monitor payment statuses on your dashboard, and funds will be available for withdrawal once processed." },
  { id: 3, question: "Can I withdraw my earnings to a Bangladeshi bank account?", answer: "Yes, after receiving payments from clients, you can initiate a withdrawal request. We process the withdrawal and transfer funds to your designated Bangladeshi bank account." },
  { id: 4, question: "Is there a fee for using this platform?", answer: "Yes, there’s a small service fee to cover transaction and maintenance costs. This fee will be outlined during invoicing and withdrawal steps so that you’re fully informed." },
  { id: 5, question: "What happens if a client doesn’t pay the invoice?", answer: "If a client does not pay, you can send them a reminder directly from your dashboard. Unfortunately, until payment is made, the funds won’t be available for withdrawal. We recommend following up with clients regularly to ensure timely payments." },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full xl:w-container px-4 md:px-6 lg:px-0 py-16 mx-auto text-gray-400">
      <div className="title3 w-full lg:w-7/12 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="mt-5 w-3/4 mx-auto text-slate-400 text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Find answers to common questions about invoicing, receiving payments, and withdrawing funds as a freelancer on our platform. If you need further assistance, we’re here to help.
        </motion.p>
      </div>

      <motion.div
        className="space-y-4 mt-16"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {faqs.map((faq, index) => (
          <div key={faq.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-white text-lg font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <MdExpandLess className="w-6 h-6 text-midBlue" />
              ) : (
                <MdExpandMore className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <motion.p
                className="mt-4 text-slate-400 text-sm leading-relaxed"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }} // Slower animation duration
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default FAQs;
