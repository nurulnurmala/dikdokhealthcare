import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function VideoSection() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const headingText = language === "en"
    ? "Watch how the Dikdok Healthcare Framework helps your healthcare facility management grow effectively"
    : "Saksikan bagaimana Framework Dikdok Healthcare membantu manajemen fasilitas kesehatan Anda tumbuh secara efektif";

  const subHeadingText = language === "en"
    ? "Claim Free Ebook Now!"
    : "Klaim Ebook Gratis Sekarang!";

  return (
    <section id="case-study-video" className="bg-[#F8F9FA] py-16 md:py-24 relative overflow-hidden text-center">
      {/* Decorative Brand Colors Blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
            {headingText}
          </h2>
          <p className="mt-3 text-sm sm:text-base font-extrabold text-primary uppercase tracking-wider">
            {subHeadingText}
          </p>
        </div>

        {/* Centered High-End Video Player Container */}
        <div className="relative group rounded-3xl overflow-hidden bg-gray-950 shadow-2xl border border-gray-100 aspect-video w-full">
          
          {!isPlaying ? (
            // Custom Performance-Optimized Lazy Cover Image with Glowing Play Overlay
            <div 
              className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center select-none"
              onClick={() => setIsPlaying(true)}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.7)), url('https://img.youtube.com/vi/_JozbImtRl8/maxresdefault.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              {/* Glowing pulses background for play button */}
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-300" />
              
              {/* Centered Premium Play Icon Card */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-shadow duration-300"
              >
                {/* Ripple rings */}
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-75" />
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
              </motion.div>

              <span className="relative z-10 mt-4 sm:mt-6 text-[10px] sm:text-xs font-black text-white/95 uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:bg-black/60 transition-colors duration-200">
                {language === "en" ? "Play Presentation" : "Putar Presentasi"}
              </span>
            </div>
          ) : (
            // Active iframe rendered ONLY on demand to boost Lighthouse & Page Performance
            <iframe
              src="https://www.youtube.com/embed/_JozbImtRl8?autoplay=1&rel=0&modestbranding=1&cc_load_policy=0"
              title="DIKDOK Healthcare Growth Presentation"
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>

      </div>
    </section>
  );
}
