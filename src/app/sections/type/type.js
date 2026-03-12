"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
});

const grape = {
  name: "Thompson Seedless",
  description: "गोड, निर्यात-योग्य द्राक्षे, लोकप्रिय आणि उत्कृष्ट दर्जाची.",
  season: "जानेवारी – मार्च",
  image: "/images/img10.jpeg",
  price: { local: "₹80/kg", export: "₹150/kg" },
  benefits: ["गोड आणि रसाळ", "निर्यातासाठी आदर्श", "टिकाऊ आणि रोट नाहीत"],
  details: `Thompson Seedless ही द्राक्षांची अत्यंत लोकप्रिय आणि उच्च प्रतीची जाती आहे. भारतात विशेषतः नाशिक, सोलापूर आणि छत्रपती संभाजी नगर मोठ्या प्रमाणावर लागवड केली जाते.

मध्यम ते मोठ्या आकाराचे हिरवे ते हलके पिवळसर फळ, गोडसर चव आणि रसाळ पोत यामुळे ही द्राक्षे ताजे खाण्यास, रस, सुला किंवा निर्यातासाठी आदर्श आहेत.

मुख्य काढणी हंगाम: जानेवारी ते मार्च.

Thompson Seedless द्राक्षे म्हणजे टिकाऊपणा, दर्जा आणि बाजारपेठेतील मागणी यांचा सुंदर संगम आहे.`,
};

export default function GrapesVarieties() {
  return (
    <section
      className={`relative w-full py-10 px-4 overflow-hidden ${hind.className}`}
    >

      {/* TOP DIVIDER (About Section connect) */}

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 100" className="w-full h-[80px]" preserveAspectRatio="none">
          <path
            d="M0,40 C300,120 1100,0 1440,60 L1440,100 L0,100 Z"
            className="fill-green-50"
          />
        </svg>
      </div>

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/green-grape.jpeg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-green-50/70 to-white/80" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl rozha-text font-bold text-green-700">
            🌿 आमची द्राक्षे 🌿
          </h2>

          <div className="w-24 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>

          <p className="text-gray-700 mt-3 text-lg font-bold sm:text-xl">
            "द्राक्षांच्या सर्वोत्तम निवडी"
          </p>
        </motion.div>

        {/* Layout */}

        <div className="grid md:grid-cols-[40%_60%] gap-10 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="absolute -inset-4 bg-green-200/40 blur-2xl rounded-3xl"></div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl h-[420px]"
            >
              <Image
                src={grape.image}
                alt={grape.name}
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-md bg-white/60 rounded-3xl p-8 shadow-xl"
          >

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold rozha-text text-green-700 mb-3"
            >
              {grape.name}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 merriweather-text mb-4 text-lg leading-relaxed"
            >
              {grape.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-lg"
            >
              <span className="font-semibold text-xl text-green-800">📅 हंगाम:</span>
              <span className="text-xl"> {grape.season}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-5"
            >
              <p className="font-semibold text-green-800 mb-2 text-xl">
                💰 किंमत
              </p>

              <div className="flex gap-3">
                <span className="bg-green-100 px-4 py-2 rounded-full text-lg font-medium shadow">
                  स्थानिक: {grape.price.local}
                </span>

                <span className="bg-green-100 px-4 py-2 rounded-full text-lg font-medium shadow">
                  निर्यात: {grape.price.export}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-5"
            >
              <h4 className="font-semibold text-green-800 mb-2 text-xl">
                📝 वर्णन
              </h4>

              <p className="text-gray-700 text-[17px] merriweather-text leading-relaxed">
                {grape.details}
              </p>
            </motion.div>

            <div>
              <h4 className="font-semibold text-green-800 mb-3 text-xl">
                ✨ फायदे
              </h4>

              <ul className="space-y-2">
                {grape.benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <span className="text-green-600 text-2xl">✔</span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>

          </motion.div>

        </div>
      </div>

      {/* BOTTOM DIVIDER */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="w-full h-[70px]" preserveAspectRatio="none">
          <path
            d="M0,40 C300,120 1100,0 1440,60 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>

    </section>
  );
}