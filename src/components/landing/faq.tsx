"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { id: 1, question: "How can I subscribe to the newsletter?", answer: "You can subscribe by entering your email in the subscription field and clicking 'Get started'." },
  { id: 2, question: "How often are newsletters sent?", answer: "We send newsletters monthly, with additional updates for special announcements or promotions." },
  { id: 3, question: "Can I unsubscribe from the newsletter?", answer: "Yes, you can unsubscribe anytime via the 'Unsubscribe' link at the bottom of each newsletter email." },
  { id: 4, question: "Is my email address shared with third parties?", answer: "No, we prioritize your privacy and do not share your email address with third parties." },
  { id: 5, question: "Do I need an account to subscribe?", answer: "No account is needed. Simply provide your email address, and you're all set!" },
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
          More power and easy our pricing
        </motion.h2>
        <motion.p
          className="mt-5 w-3/4 mx-auto text-slate-400 text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Before you buy our products, you can see what benefits you will get from buying our financial software.
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
                <ChevronUpIcon className="w-6 h-6 text-midBlue" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <motion.p
                className="mt-4 text-slate-400 text-sm leading-relaxed"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
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
