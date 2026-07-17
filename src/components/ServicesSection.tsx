import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  Compass, 
  Laptop, 
  Layers, 
  MapPin, 
  Globe, 
  Share2, 
  Sparkles,
  CheckCircle2,
  Filter,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface ServicesSectionProps {
  onServiceClick: (serviceName: string) => void;
}

export default function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const categories = ["All", "Acquisition", "Branding", "Conversion", "Courses"];

  // Mapping string icons to real Lucide components
  const iconMap: Record<string, any> = {
    Search: Search,
    Compass: Compass,
    Laptop: Laptop,
    Layers: Layers,
    MapPin: MapPin,
    Globe: Globe,
    Share2: Share2,
    Sparkles: Sparkles,
    Users: Users
  };

  const filteredServices = activeFilter === "All" 
    ? t.services.list
    : t.services.list.filter(service => service.category === activeFilter);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Reset index and scroll to start when filter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    setCurrentIndex(0);
    setCanScrollLeft(false);
    setCanScrollRight(filteredServices.length > 1);
  }, [activeFilter, filteredServices.length]);

  // Check scroll ability on resize or data changes
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
  }, [filteredServices]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
      const gap = 24;
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
    <section id="services" className="bg-[#F8F9FA] py-20 md:py-28 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              {t.services.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                {t.services.titleHighlight}
              </span>
            </h2>
            {t.services.desc && (
              <p className="text-sm font-semibold text-gray-500 max-w-lg leading-relaxed">
                {t.services.desc}
              </p>
            )}
          </div>

          {/* Filtering & Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filtering buttons toolbar */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const displayLabel = t.services.categories[cat as keyof typeof t.services.categories] || cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-2xl text-xs font-black tracking-tight transition-all duration-250 cursor-pointer ${
                      activeFilter === cat
                        ? "bg-gray-950 text-white shadow-md shadow-gray-950/15"
                        : "bg-white hover:bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {displayLabel}
                  </button>
                );
              })}
            </div>

            {/* Navigation Arrows (Desktop) */}
            {filteredServices.length > 1 && (
              <div className="hidden md:flex items-center gap-2 border-l border-gray-200 pl-3">
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
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left indicator gradient (only when scrolled right) */}
          <div className={`absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Right indicator gradient (only when scrollable right) */}
          <div className={`absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-start"
          >
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              
              // Checking if this is the highlighted Personal Branding card
              const isPersonalBrandingHighlight = service.title === "Personal Branding" || service.isSpecialHighlight;
              const isOpen = expandedTitle === service.title;

              return (
                <div 
                  key={index}
                  onClick={() => setExpandedTitle(isOpen ? null : service.title)}
                  className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-350 hover:shadow-2xl cursor-pointer group relative bg-white border h-fit w-[85%] sm:w-[420px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start ${
                    isPersonalBrandingHighlight
                      ? "bg-gradient-to-br from-orange-50/50 via-white to-purple-50/30 border-primary/60 shadow-lg shadow-orange-100/50"
                      : "border-gray-150 hover:border-gray-300"
                  } ${isOpen ? 'shadow-xl ring-2 ring-primary/20 border-primary' : ''}`}
                >
                  {/* Special Highlight Ribbon Tag */}
                  {isPersonalBrandingHighlight && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-gradient-to-r from-primary to-orange-600 text-white text-[8px] font-black tracking-widest px-3 py-1 rounded-full shadow-md shadow-orange-500/10 uppercase">
                      <Sparkles className="w-2.5 h-2.5 text-white animate-pulse" />
                      <span>Dokter Personal Branding</span>
                    </span>
                  )}

                  <div>
                    {/* Card top */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isPersonalBrandingHighlight
                          ? "bg-primary text-white scale-110"
                          : "bg-orange-50 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
                      }`}>
                        <IconComponent className="w-6 h-6 stroke-2" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-extrabold font-mono tracking-widest text-gray-400 uppercase bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                          {t.services.categories[service.category as keyof typeof t.services.categories] || service.category}
                        </span>
                        <div className={`p-1.5 rounded-lg transition-all ${isOpen ? 'bg-primary/10 text-primary rotate-180 animate-bounce-subtle' : 'bg-gray-50 text-gray-500 group-hover:bg-gray-100'}`}>
                          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-black text-gray-950 group-hover:text-primary transition-colors mb-2 pr-6">
                      {service.title}
                    </h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden w-full"
                      >
                        {/* Description */}
                        <p className="text-xs text-gray-500 font-semibold leading-relaxed mt-4 mb-4">
                          {service.description}
                        </p>

                        {/* Features Checklist */}
                        <div className="border-t border-gray-100 pt-4 space-y-2.5">
                          <span className="block text-[9px] font-black text-gray-900 uppercase tracking-widest mb-1">
                            {t.services.deliverablesLabel}
                          </span>
                          <ul className="space-y-2">
                            {service.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-gray-600 leading-normal">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* WhatsApp CTA button */}
                        <a
                          href={`https://wa.me/6288808542018?text=${encodeURIComponent(
                            language === "en"
                              ? `Hi Dikdok Team, I am interested in the "${isPersonalBrandingHighlight ? "Dokter Personal Branding" : service.title}" service and want to claim a free consultation.`
                              : `Hai Dikdok Team, saya tertarik dengan layanan "${isPersonalBrandingHighlight ? "Dokter Personal Branding" : service.title}" dan ingin konsultasi gratis.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-opacity-95 text-white font-extrabold text-xs rounded-xl shadow-md shadow-primary/10 transition-all group/cta cursor-pointer"
                        >
                          <span>{t.contact.ctaButton}</span>
                          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel indicators & Swipe assistance banner */}
        {filteredServices.length > 1 && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 bg-white px-4 py-2.5 rounded-full border border-gray-150 shadow-sm">
              {filteredServices.map((_, idx) => {
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
