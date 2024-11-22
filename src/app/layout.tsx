"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import "../../public/assets/css/landing.css";

/* export const metadata: Metadata = {
  title: "Payyard.io",
  description: "Payments getway for freelancers",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
