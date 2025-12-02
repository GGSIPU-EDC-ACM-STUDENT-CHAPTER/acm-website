"use client";

import { motion } from "framer-motion";

const categories = [
  "HACKATHONS",
  "WORKSHOPS",
  "WEBINARS",
  "BOOTCAMPS",
  "SEMINARS",
  "CHALLENGES",
  "IDEATHONS",
  "MENTORSHIP",
];

export default function EventsMarquee() {
  return (
    <section className="relative py-10 md:py-14 bg-[#030303] overflow-hidden border-y border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-acm-blue/5 via-transparent to-acm-blue/5" />

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* First marquee */}
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 md:gap-20 shrink-0"
        >
          {[...categories, ...categories].map((item, i) => (
            <div key={i} className="flex items-center gap-8 group">
              <span
                className="text-3xl md:text-5xl lg:text-6xl font-black whitespace-nowrap text-white/10 group-hover:text-white/30 transition-colors duration-500"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item}
              </span>
              <span className="w-2 h-2 bg-acm-blue/40 rotate-45" />
            </div>
          ))}
        </motion.div>

        {/* Duplicate for seamless loop */}
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 md:gap-20 shrink-0"
        >
          {[...categories, ...categories].map((item, i) => (
            <div key={i} className="flex items-center gap-8 group">
              <span
                className="text-3xl md:text-5xl lg:text-6xl font-black whitespace-nowrap text-white/10 group-hover:text-white/30 transition-colors duration-500"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item}
              </span>
              <span className="w-2 h-2 bg-acm-blue/40 rotate-45" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#030303] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#030303] to-transparent pointer-events-none z-10" />
    </section>
  );
}
