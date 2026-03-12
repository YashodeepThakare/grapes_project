"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/* =========================
   Team Data
========================= */

const team = [
  {
    name: "अमोल तनपुरे",
    role: "द्राक्ष बाग व्यवस्थापक",
    speciality: "द्राक्ष बाग लागवड आणि देखभाल",
    description:
      "द्राक्ष बागेची लागवड, बॅगिंग आणि देखभाल यासाठी पूर्णवेळ समर्पित. प्रत्येक हंगामात उत्तम दर्जाची द्राक्षे मिळावीत यासाठी आधुनिक आणि शाश्वत शेती पद्धतींचा वापर करतात.",
    image: "/images/Amol.jpeg",
  },
  {
    name: "संदीप तनपुरे",
    role: "सहाय्यक भाऊ",
    speciality: "नियोजन आणि व्यवस्थापन",
    description:
      "नोकरी सांभाळत असतानाही शेतातील कामांसाठी नियोजन, मार्गदर्शन आणि आवश्यक मदत करतात.",
    image: "/images/Sandip.jpeg",
  },
  {
    name: "निलेश तनपुरे",
    role: "सहाय्यक भाऊ",
    speciality: "लॉजिस्टिक्स आणि हंगामी व्यवस्थापन",
    description:
      "नोकरीच्या जबाबदाऱ्या सांभाळत द्राक्ष बागेच्या व्यवस्थापनात मदत करतात.",
    image: "/images/nilesh.jpeg",
  },
];

/* =========================
   Animations
========================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const hoverAnimation = {
  y: -12,
  scale: 1.03,
  transition: { duration: 0.35 },
};

export default function TeamSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-10 overflow-hidden bg-white text-gray-900">

      {/* TOP DIVIDER (connect previous section) */}

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 100" className="w-full h-[30px]" preserveAspectRatio="none">
          <path
            d="M0,40 C300,120 1100,0 1440,60 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Green Wave Bottom */}

      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          className="w-full h-[600px]"
        >
          <path
            fill="#065f46"
            d="M0,620 C240,520 480,400 720,360 C960,320 1200,420 1440,480 L1440,800 L0,800 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold rozha-text text-emerald-700"
          >
            तीन भाऊ , एक ध्येय
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 markazi-text max-w-xl mx-auto text-lg font-bold"
          >
            समर्पणात रुजलेले. शिस्तीत वाढणारे. उद्दिष्टाने एकत्रित.
          </motion.p>
        </div>

        {/* Desktop Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-3 gap-10"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={hoverAnimation}
              className="group relative overflow-hidden bg-white border border-gray-200 rounded-[32px] p-10 min-h-[500px] text-center shadow-lg flex flex-col justify-between"
            >

              <div className="relative z-10">

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-36 h-36 mx-auto mb-8"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </motion.div>

                <h3 className="text-2xl markazi-text font-bold mb-2">
                  {member.name}
                </h3>

                <p className="text-emerald-600 markazi-text font-bold text-lg mb-2">
                  {member.role}
                </p>

                <p className="text-lg markazi-text font-bold text-gray-500 mb-4">
                  {member.speciality}
                </p>

                <p className="text-gray-600 merriweather-text text-lg leading-relaxed">
                  {member.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider */}

    {/* Mobile Slider */}

<div className="lg:hidden relative">

  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -80, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white border border-gray-200 rounded-[32px] p-10 text-center shadow-xl"
    >

      {/* Image */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileTap={{ scale: 1.1 }}
        className="relative w-32 h-32 mx-auto mb-6"
      >
        <Image
          src={team[current].image}
          alt={team[current].name}
          fill
          className="object-cover rounded-full border-4 border-white shadow-xl"
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-semibold mb-2"
      >
        {team[current].name}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-emerald-700 font-bold mb-2"
      >
        {team[current].role}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-500 font-bold mb-4"
      >
        {team[current].speciality}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 leading-relaxed"
      >
        {team[current].description}
      </motion.p>

    </motion.div>
  </AnimatePresence>

  {/* Dots */}

  <div className="flex justify-center mt-6 space-x-3">
    {team.map((_, index) => (
      <motion.button
        key={index}
        whileTap={{ scale: 1.3 }}
        onClick={() => setCurrent(index)}
        className={`h-3 w-3 rounded-full transition-all ${
          current === index
            ? "bg-emerald-700 scale-125"
            : "bg-gray-300"
        }`}
      />
    ))}
  </div>

</div>

      </div>
    </section>
  );
}