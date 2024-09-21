import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import Backend from "./tutorials/backend";
import "./globals.css";

// components
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ['100', '200', '300', '400', '500', '600', '700', '800'], variable: '--font-jetbrains-mono'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Analytics  />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        
      </body>
    </html>
  );
}
