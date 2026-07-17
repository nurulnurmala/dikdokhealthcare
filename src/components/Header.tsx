import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_URL } from "../data";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const isEbooksRoute = 
    window.location.pathname === "/ebooks" || 
    window.location.pathname === "/promo" || 
    window.location.search.includes("page=ebooks") || 
    window.location.search.includes("page=promo");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Limit header navigation to exactly 5 items based on requirements
  const navItems = [
    { name: t.nav.home, href: isEbooksRoute ? "/#home" : "#home", isHighlighted: true },
    { name: t.nav.services, href: isEbooksRoute ? "/#services" : "#services", isHighlighted: true },
    { name: t.nav.promo, href: isEbooksRoute ? "/#promo" : "#promo", isHighlighted: true },
    { name: t.nav.about, href: isEbooksRoute ? "/#about" : "#about", isHighlighted: true },
    { name: t.nav.faq, href: isEbooksRoute ? "/#faq" : "#faq", isHighlighted: true },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2.5"
          : "bg-white/60 backdrop-blur-sm py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-3 w-full">
          
          {/* Logo Column */}
          <div className="flex-shrink-0 lg:col-span-1 flex justify-start">
            <a 
              href="/" 
              onClick={(e) => {
                if (isEbooksRoute) {
                  e.preventDefault();
                  window.location.href = "/";
                }
              }} 
              className="block hover:opacity-90 transition-opacity"
            >
              <Logo theme="light" />
            </a>
          </div>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3.5 lg:col-span-1 whitespace-nowrap flex-nowrap">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-extrabold tracking-tight transition-all duration-200 relative ${
                  item.isHighlighted
                    ? "text-primary hover:text-secondary bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100"
                    : "text-gray-600 hover:text-primary py-1.5"
                }`}
              >
                {item.name}
                {item.isHighlighted && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Controls Cluster: Language + Sticky WhatsApp CTA */}
          <div className="hidden lg:flex items-center justify-end gap-4 lg:col-span-1">
            
            {/* Elegant EN | ID Toggle Button inside the Header */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-150 transition-all duration-200 cursor-pointer"
              title="Switch Language / Ganti Bahasa"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span className={language === "en" ? "text-primary font-black" : "text-gray-400 font-bold"}>EN</span>
              <span className="text-gray-300">|</span>
              <span className={language === "id" ? "text-primary font-black" : "text-gray-400 font-bold"}>ID</span>
            </button>

            {/* Sticky Floating CTA Whatsapp Button far-right */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary shadow-md shadow-primary/25 hover:shadow-lg transition-all duration-300 animate-pulse-subtle"
            >
              <MessageSquare className="mr-1.5 w-4 h-4 fill-current text-white" />
              <span>{t.nav.freeConsultation}</span>
              <ArrowUpRight className="ml-1 w-3 h-3 text-white" />
            </a>
          </div>

          {/* Quick Header Toggle for Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Unified EN | ID Language switch on mobile/tablet header directly next to toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-black bg-gray-50 text-gray-700 border border-gray-150 transition-all duration-200 cursor-pointer"
              title="Switch Language / Ganti Bahasa"
            >
              <Globe className="w-3 h-3 text-primary" />
              <span className={language === "en" ? "text-primary font-black" : "text-gray-400 font-bold"}>EN</span>
              <span className="text-gray-300">|</span>
              <span className={language === "id" ? "text-primary font-black" : "text-gray-400 font-bold"}>ID</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Open Menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-4">
              <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
                <Logo theme="light" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-1.5 text-left">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-extrabold transition-all ${
                      item.isHighlighted
                        ? "text-primary bg-orange-50/50 hover:bg-orange-50 border-l-4 border-primary"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-xs font-black text-white bg-primary hover:bg-opacity-95 shadow-md shadow-primary/20 text-center"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-white" />
                  {t.nav.freeConsultation}
                  <ArrowUpRight className="ml-1 w-3 h-3 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
