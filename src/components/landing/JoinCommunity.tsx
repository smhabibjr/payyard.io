"use client";

import { FaDiscord, FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const JoinCommunity = () => {
  return (
    <div className="w-full xl:w-container px-4 md:px-6 lg:px-0 py-16 mx-auto text-gray-400">
      <div className="title3 w-full lg:w-7/12 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Join Our Community
        </motion.h2>
        <motion.p
          className="mt-5 w-3/4 mx-auto text-slate-400 text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Connect with our community on Discord, Telegram, and Facebook for the latest updates and support.
        </motion.p>
      </div>

      {/* Responsive Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <CommunityCard
          icon={<FaDiscord className="text-5xl text-blue-500 mx-auto" />}
          title="Join Our Discord"
          description="Be part of our growing Discord community."
          link="https://discord.com/invite/your-discord-link"
        />
        <CommunityCard
          icon={<FaTelegramPlane className="text-5xl text-blue-400 mx-auto" />}
          title="Join Our Telegram"
          description="Connect with us on Telegram for updates."
          link="https://t.me/your-telegram-link"
        />
        <CommunityCard
          icon={<FaFacebook className="text-5xl text-blue-600 mx-auto" />}
          title="Join Our Facebook"
          description="Follow us on Facebook to stay informed."
          link="https://facebook.com/your-facebook-link"
        />
      </div>
    </div>
  );
};

// Community Card Component
interface CommunityCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ icon, title, description, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 text-center mx-auto transform transition-transform animated-border"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-400 text-sm md:text-base">{description}</p>
    <button
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
    >
      Join Now
    </button>
  </motion.a>
);

export default JoinCommunity;