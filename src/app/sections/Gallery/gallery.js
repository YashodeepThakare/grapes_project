'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const images = [
    '/images/grapes.jpg',
    '/images/grapes2.jpg',
    '/images/img1.jpeg',
    '/images/img2.jpeg',
    '/images/img3.jpeg',
    '/images/img4.jpeg',
    '/images/img5.jpeg',
    '/images/sandip2.jpeg',
    '/images/img6.jpeg',
    '/images/img7.jpeg',
    '/images/img8.jpeg',
    '/images/img9.jpeg',
    '/images/img10.jpeg',
  ];

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  // ✅ MOUNTED STATE (async fix for ESLint)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // ✅ AUTO SLIDER
  useEffect(() => {
    if (!mounted || hovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hovered, mounted, images.length]);

  const changeImage = (newIndex) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ THUMBNAIL VISIBLE IMAGES
  const visibleImages = [];
  const start = (current - 2 + images.length) % images.length;

  for (let i = 0; i < 5; i++) {
    visibleImages.push({
      src: images[(start + i) % images.length],
      index: (start + i) % images.length,
    });
  }

  // ✅ FRAMER MOTION VARIANTS
  const variants = {
    initial: (dir) => ({
      clipPath:
        dir > 0
          ? 'polygon(100% 0%,100% 0%,100% 100%,100% 100%)'
          : 'polygon(0% 0%,0% 0%,0% 100%,0% 100%)',
      scale: 1.1,
      opacity: 0,
    }),
    animate: {
      clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: (dir) => ({
      clipPath:
        dir > 0
          ? 'polygon(0% 0%,0% 0%,0% 100%,0% 100%)'
          : 'polygon(100% 0%,100% 0%,100% 100%,100% 100%)',
      scale: 0.9,
      opacity: 0,
      transition: { duration: 1 },
    }),
  };

  return (
    <section
      id="gallery"
      className="relative -mt-15 w-full bg-linear-to-br from-white via-green-50 to-green-100 flex flex-col items-center gap-10 px-6 md:px-12 py-20 overflow-hidden"
    >
      {/* TITLE */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light bg-linear-to-r from-emerald-900 to-emerald-600 bg-clip-text text-transparent"
        >
          Gallery Showroom
        </motion.h2>
      </div>

      {/* MAIN IMAGE */}
      <div
        className="relative w-full max-w-6xl h-105 md:h-[65vh] min-h-112.5 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-500/30 via-lime-500/30 to-green-500/30 rounded-4xl blur-xl opacity-40"></div>

        <div className="relative w-full h-full rounded-4xl overflow-hidden bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {/* BLURRED BACKGROUND */}
              <Image
                src={images[current]}
                alt=""
                fill
                className="object-cover blur-2xl scale-110 opacity-40"
              />

              {/* MAIN IMAGE */}
              <Image
                src={images[current]}
                alt={`Image ${current + 1}`}
                width={1200}
                height={800}
                priority
                className="relative z-10 max-h-full max-w-full object-contain group-hover:scale-105 transition duration-2000"
              />
            </motion.div>
          </AnimatePresence>

          {/* IMAGE COUNTER */}
          <div className="absolute bottom-6 left-6 bg-black/40 text-white px-4 py-2 rounded-full text-sm backdrop-blur">
            {current + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="flex items-center gap-4 bg-white/50 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-lg">
        <button onClick={prevImage} className="p-2 hover:bg-black/10 rounded-full">
          ‹
        </button>

        <div className="flex gap-3">
          {visibleImages.map((img) => {
            const active = img.index === current;
            return (
              <button
                key={img.index}
                onClick={() => changeImage(img.index)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden transition ${
                  active ? 'ring-2 ring-emerald-500 scale-110' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt="" fill className="object-cover" />
              </button>
            );
          })}
        </div>

        <button onClick={nextImage} className="p-2 hover:bg-black/10 rounded-full">
          ›
        </button>
      </div>
    </section>
  );
}