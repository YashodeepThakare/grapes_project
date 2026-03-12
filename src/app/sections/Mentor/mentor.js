/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Mentor() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemLeftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const itemRightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section className="relative w-full flex flex-col pt-28 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden cl from-gray-100 via-gray-50 to-[#B0E0E6]">

            {/* TOP WAVE */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 1440 120" className="w-full h-22.5" preserveAspectRatio="none">
                    <path d="M0,40 C300,120 1100,0 1440,60 L1440,0 L0,0 Z" className="fill-green-100" />
                </svg>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl opacity-50 mix-blend-overlay animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-64 md:w-96 h-64 md:h-96 bg-blue-300 rounded-full blur-3xl opacity-30 animate-[pulse_4s_ease-in-out_infinite]"></div>

            {/* Heading */}
            <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl rozha-text font-extrabold text-green-700">
                    मार्गदर्शक
                </motion.h2>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-20 h-1 bg-blue-400 mx-auto mt-3 rounded-full"></motion.div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Images */}
                <motion.div className="w-full lg:w-5/12 flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemLeftVariants}>
                    <div className="relative w-[75%] sm:w-[320px] md:w-90 aspect-3/4">
                        <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden border-4 border-white hover:scale-105 transition duration-500 z-10">
                            <Image src="/images/sir.jpeg" alt="Mentor" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[-10%] right-[-15%] w-[65%] aspect-3/4 rounded-2xl shadow-2xl overflow-hidden border-4 border-white hover:scale-105 transition duration-500 z-20">
                            <Image src="/images/image.png" alt="Mentor" fill className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div className="w-full lg:w-7/12 flex flex-col bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-lg border border-white/50 max-w-2xl"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>

                    <motion.div variants={itemRightVariants} className="text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full w-max text-lg font-bold mb-3">
                        डॉ. धर्मराज माकुणे
                    </motion.div>

                    <motion.h2 variants={itemRightVariants} className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6 rozha-text">
                        धर्मा फार्म आणि कन्सल्टन्सी, निफाड
                    </motion.h2>

                    <div className="flex flex-col space-y-4 text-slate-600 leading-relaxed">

                        <motion.div variants={itemRightVariants} className="bg-white/70 p-5 merriweather-text text-lg rounded-2xl shadow-sm border border-white/60">
                            <p>द्राक्ष बाग व्यवस्थापन, आधुनिक शेती तंत्रज्ञान आणि शाश्वत शेती पद्धती यामध्ये अनेक वर्षांचा अनुभव.</p>
                        </motion.div>

                        <motion.div variants={itemRightVariants} className="bg-white/70 p-5 merriweather-text text-lg rounded-2xl shadow-sm border border-white/60">
                            <p>नवीन तंत्रज्ञान आणि वैज्ञानिक शेती पद्धती वापरून शेतकऱ्यांना अधिक उत्पादन मिळवून देणे – 300+ बागांचे व्यवस्थापन करून उच्च दर्जाचे उत्पादन सुनिश्चित करणे.</p>
                        </motion.div>

                    </div>

                    {/* Instagram + Contact buttons */}
                    <motion.div variants={itemRightVariants} className="mt-10 flex justify-center gap-6">
                        
{/* Instagram Button */}
<motion.a
  href="https://www.instagram.com/dharmarajmakune_0101/"
  target="_blank"
  rel="noopener noreferrer"
  animate={{ y: [0, -3, 0] }} // idle float
  transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
  whileHover={{ scale: 1.15, rotate: 10, y: 0 }} // hover scale & rotate
  whileTap={{ scale: 0.95, rotate: -5, y: 0 }} // active click
  className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
>
  <FaInstagram />
</motion.a>

{/* Phone Button */}
<motion.a
  href="tel:+919876543210"
  animate={{ y: [0, -3, 0] }} // idle float
  transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
  whileHover={{ scale: 1.15, rotate: 10, y: 0 }} // same hover effect
  whileTap={{ scale: 0.95, rotate: -5, y: 0 }} // active click
  className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl shadow-lg bg-green-400"
>
  <FaPhoneAlt />
</motion.a>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}