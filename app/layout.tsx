import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A G Ventures | Wholesale Perfumes, Skin & Cosmetics in Dubai",
    template: "%s | A G Ventures Dubai",
  },
  description:
    "A G Ventures is a trusted trading and distribution wholesaler of luxury perfumes, skincare, beauty, and cosmetics brands based in Deira, Dubai, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F9F8] text-[#0B2520] font-sans antialiased selection:bg-[#C8A252]/30 selection:text-[#0B2520]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}