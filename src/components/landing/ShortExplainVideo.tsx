"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import AnimScroll from './animScroll';
import { useEffect } from 'react';

export default function VideoComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "HisbShlgVuk";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    AnimScroll(".video-title", 100, { trigger: ".video-title" });
    AnimScroll(".video-description", 50, { trigger: ".video-description" });
    AnimScroll(".video-player", 300, { trigger: ".video-player" });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 text-gray-100">
      <div className="title3 w-full lg:w-7/12 mx-auto text-center mb-12">
        <h2 className="video-title text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white">
          More power and easy our pricing
        </h2>
        <p className="video-description mt-5 w-3/4 mx-auto text-slate-400 text-base">
          Before you buy our products, you can see what benefits you will get from buying our financial software.
        </p>
      </div>

      <div className="video-player relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
        {/* Conditionally render the video iframe or thumbnail */}
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
            <img
              src={thumbnailUrl}
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 transition-all duration-300 hover:bg-opacity-30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 animate-pulse"
                aria-label="Play video"
              >
                <Play className="w-12 h-12 text-white animate-spin-slow" />
                <span className="absolute -inset-4 border-2 border-white border-opacity-50 rounded-full animate-ping"></span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}