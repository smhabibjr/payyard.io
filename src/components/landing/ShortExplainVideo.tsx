"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

export default function VideoComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "dK6eeiGC8Uw";
  const thumbnailUrl = `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Refs for elements to observe
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  // Trigger animation when in view
  const titleInView = useInView(titleRef, { once: false });
  const videoInView = useInView(videoRef, { once: false });

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 text-gray-100">
      <motion.div
        ref={titleRef}
        className="title3 w-full lg:w-7/12 mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 150 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="video-title text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white">
          Explained in 120 Seconds
        </h2>
        <p className="video-description mt-5 w-3/4 mx-auto text-slate-400 text-base">
          See how you can create invoices, receive payments, and withdraw funds—all within minutes.
        </p>
      </motion.div>

      <motion.div
        ref={videoRef}
        style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
        className="animated-border video-player relative aspect-video rounded-2xl overflow-hidden shadow-2xl group"
        initial={{ opacity: 0, y: 150 }}
        animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {isOpen ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Image
              src={thumbnailUrl}
              alt="Video Thumbnail"
              width={1280}
              height={720}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.button
                onClick={() => setIsOpen(true)}
                className="relative p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 transition-all duration-300 hover:bg-opacity-30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 animate-pulse"
                aria-label="Play video"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={videoInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 }}
              >
                <FaPlay className="w-12 h-12 text-white" />
                <span className="absolute -inset-4 border-2 border-white border-opacity-50 rounded-full animate-ping"></span>
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}