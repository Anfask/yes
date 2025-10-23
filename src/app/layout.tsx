import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "@/components/layout/Header";
import "@/styles/mixins.scss"
import Footer from "@/components/layout/Footer";
import { Funnel_Display } from "next/font/google";

//  Import Google Font professionally
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display", // custom CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Website | Fast & SEO Friendly",
  description: "Dynamic website built with Next.js, TypeScript, SCSS, and Tailwind",
  keywords: ["Next.js", "SEO", "Tailwind", "TypeScript"],
  openGraph: {
    title: "My Website",
    description: "Dynamic website with advanced SEO",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "My Website" },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${funnelDisplay.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer/>
      </body>

      {/* <body className="antialiased">{children}</body> */}
    </html>
  );
}