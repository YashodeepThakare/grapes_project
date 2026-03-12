import { Geist, Geist_Mono } from "next/font/google";
import { Markazi_Text, Merriweather, Rozha_One } from 'next/font/google';

// Set up Markazi Text (the one highlighted in your image)
const markazi = Markazi_Text({
  weight: ['400', '500', '600', '700'], // 400 to 700 as shown in your image
  subsets: ['latin'],
  variable: '--font-markazi',
});

// You can also add the other fonts from your image if you want
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const rozha = Rozha_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rozha',
});

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "तनपुरे परिवार - द्राक्षे बागायतदार",
  description: "नाशिकची प्रीमियम दर्जाची द्राक्षे",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr"  className={`${markazi.variable} ${merriweather.variable} ${rozha.variable}`}>
      <head>
        {/* Google Fonts Roboto */}
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans `}>
        {children}
      </body>
    </html>
  );
}