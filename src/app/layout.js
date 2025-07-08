// src/app/layout.js
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "../context/LoadingContext";
import ConsoleEasterEgg from "../components/ConsoleEasterEgg";
import SystemStatusLog from "../components/SystemStatusLog";
import data from '../../portfolioData.json';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: `${data.name}'s Portfolio`,
  description: data.tagline,
  openGraph: {
    title: `${data.name}'s Portfolio`,
    description: data.tagline,
    url: '/',
    siteName: `${data.name}'s Portfolio`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains_mono.variable} !scroll-smooth`}>
      <body className="font-sans bg-slate-900 text-slate-50">
        <LoadingProvider>
          {children}
          <ConsoleEasterEgg />
          <SystemStatusLog />
        </LoadingProvider>
      </body>
    </html>
  );
}