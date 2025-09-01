import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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
  title: "Felix A. Taveras",
  description: "A personal Portfolio of Felix A. Taveras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Analytics  />
        <Header />
        <PageTransition>{children}</PageTransition>
        <StairTransition />
        
      </body>
    </html>
  );
}
