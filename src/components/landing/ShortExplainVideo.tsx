"use client";

import { useState } from "react";
import styled from "styled-components";
import { Play } from "lucide-react";

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  position: relative;
  background: #000;
  width: 90vw;
  max-width: 80vw;
  height: 80vh;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function VideoComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "HisbShlgVuk";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 text-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Discover Our Product
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Watch this short video to see how our product can revolutionize your workflow.
        </p>
      </div>

      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
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
      </div>

      {/* Modal */}
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-100 transition-colors"
          >
            ✕
          </button>
        </ModalContent>
      </Overlay>
    </div>
  );
}
