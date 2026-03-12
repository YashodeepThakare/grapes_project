'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Markazi_Text, Playfair_Display, Inter } from 'next/font/google';

const markazi = Markazi_Text({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function HeroSection() {
  const desktopText = "तनपुरे परिवार - द्राक्षे बागायतदार...";
  const mobileTexts = useMemo(() => ["तनपुरे परिवार", "द्राक्षे बागायतदार...", "तनपुरे परिवार..."], []);

  const desktopTypingSpeed = 180;
  const desktopDeletingSpeed = 150;
  const mobileTypingSpeed = 250;
  const mobileDeletingSpeed = 220;
  const pauseTime = 700;

  const [mounted, setMounted] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePhase, setMobilePhase] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const desktopCount = useRef(0);

  // Set mounted on next tick to avoid ESLint warning
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  // Detect mobile screen
  useEffect(() => {
    if (!mounted) return;
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted]);

  const stableWidth = isMobile
    ? Math.max(...mobileTexts.map(t => t.length))
    : desktopText.length;

  // Typing animation
  useEffect(() => {
    if (!mounted) return;

    let timeout;
    const typingSpeed = isMobile ? mobileTypingSpeed : desktopTypingSpeed;
    const deletingSpeed = isMobile ? mobileDeletingSpeed : desktopDeletingSpeed;

    const handleTyping = () => {
      if (!isMobile) {
        const maxCycles = 3;
        const lastCycle = desktopCount.current === maxCycles - 1;

        if (!isDeleting && displayedText.length < desktopText.length) {
          timeout = setTimeout(() => setDisplayedText(desktopText.substring(0, displayedText.length + 1)), typingSpeed);
        } else if (!isDeleting && displayedText.length === desktopText.length) {
          if (lastCycle) setShowCursor(false);
          else timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayedText.length > 0) {
          timeout = setTimeout(() => setDisplayedText(desktopText.substring(0, displayedText.length - 1)), deletingSpeed);
        } else if (isDeleting && displayedText.length === 0) {
          desktopCount.current += 1;
          setIsDeleting(false);
        }
      } else {
        const currentText = mobileTexts[mobilePhase];
        const isLastPhase = mobilePhase === mobileTexts.length - 1;

        if (!isDeleting && displayedText.length < currentText.length) {
          timeout = setTimeout(() => setDisplayedText(currentText.substring(0, displayedText.length + 1)), typingSpeed);
        } else if (!isDeleting && displayedText.length === currentText.length) {
          if (isLastPhase) setShowCursor(false);
          else timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayedText.length > 0) {
          timeout = setTimeout(() => setDisplayedText(currentText.substring(0, displayedText.length - 1)), deletingSpeed);
        } else if (isDeleting && displayedText.length === 0) {
          setMobilePhase(prev => prev + 1);
          setIsDeleting(false);
        }
      }
    };

    handleTyping();
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isMobile, mobilePhase, mounted, mobileTexts]);

  return (
    <section className="relative w-full min-h-screen h-[100dvh] overflow-hidden bg-black">
      {/* Background image with preloading */}
      <div className="absolute inset-0">
        <Image
          src="/images/grapes.jpg"
          alt="grapes"
          fill
          className="object-cover animate-slowZoom will-change-transform"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero content */}
      <div
        className={`relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-16 transition-opacity duration-500 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full max-w-2xl text-left">
          <h1
            className={`${markazi.className} text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-wide`}
            style={{
              display: 'inline-block',
              minWidth: `${stableWidth}ch`,
              maxWidth: '100%',
              whiteSpace: isMobile ? 'normal' : 'nowrap',
              wordWrap: 'break-word',
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            {displayedText}
            {showCursor && <span className="ml-1 animate-pulse">|</span>}
          </h1>

          <p className={`${playfair.className} mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 leading-relaxed`}>
            तीन भावांची मेहनत, शुद्ध द्राक्षांचा विश्वास..!
          </p>

          <div className={`${inter.className} mt-4 text-gray-300 space-y-2 sm:space-y-3`}>
            <p className="text-base sm:text-lg md:text-[25px] font-bold">नाशिकची प्रीमियम दर्जाची द्राक्षे..!</p>
            <p className="text-lg sm:text-xl font-bold">📍 नाशिक, महाराष्ट्र</p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-extrabold">
              नोकरी सांभाळत शेतीची जपणूक — एक भाऊ पूर्णवेळ बागेसाठी समर्पित
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105 active:scale-95 text-lg sm:text-base"
            >
              🍇 आमची बाग पहा
            </button>
            <a
              href="tel:+919527758051"
              className="w-full sm:w-auto flex items-center justify-center border border-white text-white px-6 py-3 rounded-full transition transform hover:scale-105 active:scale-95 sm:hover:bg-white sm:hover:text-black active:bg-gray-200 text-lg sm:text-base"
            >
              📞 संपर्क करा
            </a>
            <a
              href="https://www.instagram.com/royal_shetkari_7589_96k/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-lg sm:text-base font-semibold shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 active:scale-95 transition-all duration-300 animate-[instaGlow_3s_ease-in-out_infinite]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}