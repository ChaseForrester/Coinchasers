import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Coinchasers | Chase the Coin",
  description: "Premium clothing for those who want to make money. Clothes, bags, pants, shirts, jumpers.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Coinchasers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        
        {/* Announcement Bar / Marquee */}
        <div className="bg-[var(--color-gold-500)] text-black overflow-hidden whitespace-nowrap py-1.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
          <div className="inline-block animate-marquee pl-full">
            BUILT DIFFERENT • CHASE MORE • FREE SHIPPING WORLDWIDE • BUILT DIFFERENT • CHASE MORE • FREE SHIPPING WORLDWIDE • BUILT DIFFERENT • CHASE MORE • FREE SHIPPING WORLDWIDE
          </div>
        </div>

        <Navigation />
        {/* Remove top padding since Navigation might be positioned differently now, or adjust accordingly */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
