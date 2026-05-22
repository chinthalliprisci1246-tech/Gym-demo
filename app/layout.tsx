import type { Metadata } from "next";
import { Geist, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/whatsapp";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOUR GYM NAME", // TODO: change
  description: "Transform yourself.", // TODO: change
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-black text-white antialiased`}>
        <Navbar/>
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB/>
      </body>
    </html>
  );
}
