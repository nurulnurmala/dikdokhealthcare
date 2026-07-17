import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Parse value to find numeric part, formatting details, and suffix
    const numericMatch = value.match(/[\d.,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const rawNumStr = numericMatch[0];
    const suffix = value.replace(rawNumStr, "");
    
    // Determine if it uses Indonesian dot format (like 10.600)
    const isDotThousands = rawNumStr.includes(".") && !rawNumStr.includes(",");
    
    // Get actual number
    const actualNumber = parseFloat(rawNumStr.replace(/\./g, ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(actualNumber, suffix, isDotThousands);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const animateValue = (target: number, suffix: string, isDotThousands: boolean) => {
    const duration = 1500; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);

      // Format back
      let formattedVal = "";
      if (isDotThousands) {
        formattedVal = currentVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {
        formattedVal = currentVal.toString();
      }

      setDisplayValue(`${formattedVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Ensure final target is exact
        let finalFormatted = "";
        if (isDotThousands) {
          finalFormatted = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
          finalFormatted = target.toString();
        }
        setDisplayValue(`${finalFormatted}${suffix}`);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={containerRef} className="text-center sm:text-left">
      <span className="block text-3xl md:text-4xl font-black text-gray-900 leading-none">
        {displayValue}
      </span>
      <span className="block text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="bg-white py-20 md:py-28 text-left relative overflow-hidden">
      {/* Decorative Blur BGs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ——— OVERVIEW SUB-SECTION (No Tag/Pill Container per Block 1 directive) ——— */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-none mb-12">
            {t.about.headline}
          </h2>

          {/* Micro stats counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-10 mt-10 border-t border-gray-100">
            <AnimatedCounter value={t.about.stat1Val} label={t.about.stat1Lbl} />
            <AnimatedCounter value={t.about.stat2Val} label={t.about.stat2Lbl} />
            <AnimatedCounter value={t.about.stat3Val} label={t.about.stat3Lbl} />
          </div>
        </div>

      </div>
    </section>
  );
}
