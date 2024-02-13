import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TanstackProvider from "@/utils/providers/tanstack-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techspertise Frontend Assessment",
  description: "Frontend Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <ToastContainer />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
