"use client";

import React, { useEffect } from "react";

// Define a type for the props
interface SeoProps {
  title: string; // Adjust type if `title` can be something other than a string
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  useEffect(() => {
    document.title = `Ynex - ${title}`;
  }, [title]); // Include `title` as a dependency

  return null; // Since the component doesn't render visible UI, return null
};

export default Seo;