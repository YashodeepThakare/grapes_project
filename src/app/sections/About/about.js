"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {

  const images = [
    "/images/grapes.jpg",
    "/images/grapes2.jpg",
    "/images/amol.jpeg",
    "/images/sandip.jpeg",
    "/images/grapes.jpg",
    "/images/sandip2.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  /* Auto Image Slider */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  /* Scroll Animation */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-28 pb-36 bg-linear-to-br from-green-50 via-white to-green-100 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-105 h-105 bg-green-300 rounded-full blur-[140px] opacity-20" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE SLIDER */}

        <div
          className={`relative w-full h-105 sm:h-125 md:h-140 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-900 ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >

          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1200 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <Image
                src={img}
                alt="Tanpure Grapes Farm"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        </div>

        {/* RIGHT CONTENT */}

        <div
          className={`space-y-8 transition-all duration-900 delay-200 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          } text-center md:text-left`}
        >

          <h2 className="text-3xl md:text-5xl font-bold rozha-text tracking-tight leading-[1.3] text-green-800">
            🌿 तनपुरे द्राक्षे बागायतदार 🌿
          </h2>

          <p className="text-gray-700 merriweather-text text-lg md:text-xl leading-relaxed">
            तनपुरे द्राक्षे बागायतदार ही केवळ शेती नसून समर्पण, अनुभव आणि विश्वासाची
            परंपरा आहे. नाशिक जिल्ह्यातील शिरवाडे, ता. निफाड येथे आमची द्राक्ष
            बागायती असून आम्हाला या क्षेत्रातील १०+ वर्षांचा अनुभव आहे.
          </p>

          <p className="text-gray-700 merriweather-text text-lg md:text-xl leading-relaxed">
            आधुनिक तंत्रज्ञान आणि पारंपरिक शेती पद्धतींचा योग्य समन्वय साधत आम्ही
            उत्कृष्ट प्रतीची, निर्यात दर्जाची द्राक्षे उत्पादन करतो. आमची द्राक्षे
            देशांतर्गत बाजारपेठेसोबतच विदेशातही निर्यात केली जातात.
          </p>

          <p className="text-gray-700 merriweather-text text-lg md:text-xl leading-relaxed">
            नाशिक पंचक्रोशीत &quot;तनपुरे द्राक्षे बागायतदार&quot; हे एक विश्वासार्ह
            आणि गुणवत्तेचे नाव म्हणून ओळखले जाते.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
            <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-bounce" />
            <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-bounce delay-150" />
            <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-bounce delay-300" />
          </div>

        </div>

      </div>

      {/* Bottom Divider */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-22.5"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,120 1100,0 1440,60 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>

    </section>
  );
}