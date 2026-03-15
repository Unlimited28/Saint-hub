import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Saint Hub | One Group. Infinite Possibilities.",
    template: "%s | Saint Hub"
  },
  description: "Saint Hub is a Nigerian investment group driving excellence across technology, fashion, education, trading, fragrance and automotive industries.",
  keywords: ["Saint Hub", "Nigerian Investment Group", "Saint Gadgets", "Saint Collections", "Saint Education", "Saint Perfumery", "Saint Trading", "Saint Cars"],
  authors: [{ name: "Saint Hub" }],
  icons: {
    icon: "/logo.png",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-midnight text-white`}
      >
        {children}
      </body>
    </html>
  );
}
