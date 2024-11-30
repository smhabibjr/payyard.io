"use client";
import { createContext } from "react";

// Use a generic type with a default of null
export const Initialload = createContext<null | unknown>(null);
