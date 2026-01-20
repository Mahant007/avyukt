import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header/Header";
import DisclaimerPopup from "./component/Disclaimer/DisclaimerPopu"
import Footer from "./component/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Avyukat Associate",
  description: "Advocates & Legal Consultants in Gujarat",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DisclaimerPopup/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
