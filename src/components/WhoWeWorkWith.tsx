import { useState, useRef, useEffect } from "react";
import { 
  Stethoscope, 
  Activity, 
  Sparkles, 
  Award, 
  Home, 
  Building, 
  HeartHandshake,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Users,
  Tag
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface WhoWeWorkWithProps {
  onCtaClick?: (resourceName: string) => void;
}

export default function WhoWeWorkWith({ onCtaClick }: WhoWeWorkWithProps) {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const iconMap: Record<string, any> = {
    Stethoscope: Stethoscope,
    Activity: Activity,
    Sparkles: Sparkles,
    Award: Award,
    Home: Home,
    Building: Building,
    HeartHandshake: HeartHandshake,
    Leaf: Leaf,
    Users: Users,
    Tag: Tag
  };

  const segments = t.whoWeWorkWith.segments;

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      }
    };
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [segments]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
      const gap = 24; // matching gap-6 (24px)
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
      const gap = 24;
      const scrollAmount = direction === 'left' 
        ? -(cardWidth + gap) 
        : (cardWidth + gap);
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
              {t.whoWeWorkWith.title}
            </h2>
            {t.whoWeWorkWith.desc && (
              <p className="text-sm font-semibold text-gray-500 max-w-lg">
                {t.whoWeWorkWith.desc}
              </p>
            )}
          </div>

          {/* Navigation Arrows */}
          {segments.length > 1 && (
            <div className="flex items-center gap-2 self-start md:self-end">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-2.5 rounded-2xl border transition-all cursor-pointer shadow-sm active:scale-95 ${
                  canScrollLeft 
                    ? "bg-white border-gray-200 text-gray-800 hover:text-primary hover:border-primary/50" 
                    : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-2.5 rounded-2xl border transition-all cursor-pointer shadow-sm active:scale-95 ${
                  canScrollRight 
                    ? "bg-white border-gray-200 text-gray-800 hover:text-primary hover:border-primary/50" 
                    : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel View Container */}
        <div className="relative group/carousel">
          {/* Left gradient hint */}
          <div className={`absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Right gradient hint */}
          <div className={`absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-start"
          >
            {segments.map((segment, index) => {
              const Icon = iconMap[segment.icon] || Stethoscope;
              const isOpen = expandedTitle === segment.title;

              return (
                <div 
                  key={index}
                  onClick={() => setExpandedTitle(isOpen ? null : segment.title)}
                  className={`bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/10 border rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col items-center justify-center text-center shrink-0 snap-start w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] relative cursor-pointer ${
                    isOpen 
                      ? 'border-primary ring-2 ring-primary/20 shadow-md h-fit min-h-[220px]' 
                      : 'border-gray-150 hover:border-primary/45 aspect-square'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-primary text-white scale-110 mb-4' 
                      : 'bg-orange-100/40 text-primary mb-5 group-hover:scale-110'
                  }`}>
                    <Icon className="w-6 h-6 stroke-2" />
                  </div>
                  
                  {/* Title & Chevron */}
                  <div className="flex flex-col items-center gap-1 w-full">
                    <h3 className="text-xs sm:text-base font-black text-gray-950 group-hover:text-primary transition-colors leading-tight px-1">
                      {segment.title}
                    </h3>
                    
                    {/* Toggle Chevron indicator */}
                    <div className={`mt-2 p-1 rounded-full transition-all ${
                      isOpen 
                        ? 'bg-primary/10 text-primary rotate-180' 
                        : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-primary'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Hidden Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden w-full mt-4"
                      >
                        {/* Description */}
                        <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-4">
                          {segment.description}
                        </p>

                        {/* CTA button */}
                        <a
                          href={`https://wa.me/6288808542018?text=${encodeURIComponent(
                            language === "en"
                              ? `Hi Dikdok Team, I am a "${segment.title}" and would like to claim a free consultation.`
                              : `Hai Dikdok Team, saya adalah "${segment.title}" dan ingin klaim konsultasi gratis.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-primary hover:bg-opacity-95 text-white font-extrabold text-xs rounded-xl shadow-md shadow-primary/10 transition-all group/cta cursor-pointer"
                        >
                          <span>{language === "en" ? "Book Free Consultation" : "Jadwalkan Konsultasi Gratis"}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators and helper */}
        {segments.length > 1 && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-white px-4 py-2.5 rounded-full border border-gray-150 shadow-sm">
              {segments.map((_, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (scrollRef.current) {
                        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
                        const gap = 24;
                        scrollRef.current.scrollTo({
                          left: idx * (cardWidth + gap),
                          behavior: "smooth"
                        });
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "w-8 bg-primary shadow-sm shadow-primary/30" 
                        : "w-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Micro swipe helper cue */}
            <div className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase flex items-center gap-2 select-none">
              <span className="animate-pulse">← Swipe Left / Right to Explore →</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
