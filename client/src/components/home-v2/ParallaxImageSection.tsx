"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxImageSection
 * Video with subtle parallax effect
 */
export default function ParallaxImageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0;
      setVideoLoaded(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black"
      style={{ zIndex: 10 }}
    >
      {/* Video container with overflow hidden for parallax effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video and text move together inside this container */}
        <motion.div
          className="absolute w-full h-[120%] -top-[10%] left-0"
          style={{ y: videoY }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            className="w-full h-full object-cover"
          >
            <source src="/home/EDC.mp4" type="video/mp4" />
          </video>

          {/* Dark gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.5) 100%)",
            }}
          />

          {/* Dark translucent glass overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
            }}
          />

          {/* Subtle blue tint */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              background: "linear-gradient(135deg, rgba(0,133,202,0.4) 0%, transparent 50%, rgba(0,133,202,0.3) 100%)",
            }}
          />

          {/* Text Content - Inside Parallax */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8 md:px-16 lg:px-24 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-white/40" />
                  <span className="text-white/60 text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-body)" }}>
                    Our Vision
                  </span>
                  <div className="w-12 h-px bg-white/40" />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Building Tomorrow&apos;s
                <span className="block text-acm-blue mt-2">
                  Innovators
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-white/70 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                A community of passionate minds pushing the boundaries of technology and innovation.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
