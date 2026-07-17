import { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_URL } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-[#F8F9FA] py-20 md:py-28 text-left relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          {t.faq.tag && (
            <span className="text-secondary font-extrabold text-xs uppercase tracking-widest bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full inline-block">
              {t.faq.tag}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mt-2">
            {t.faq.title}
          </h2>
          {t.faq.desc && (
            <p className="text-sm font-semibold text-gray-500 max-w-lg mx-auto">
              {t.faq.desc}
            </p>
          )}
        </div>

        {/* Accordions */}
        <div className="space-y-4 animate-fade-in">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-primary/45 shadow-lg shadow-primary/5" 
                    : "border-gray-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-3.5 pr-8">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                    <span className="text-sm sm:text-base font-black text-gray-900 group-hover:text-primary transition-colors leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-all ${isOpen ? 'bg-primary/10 text-primary rotate-180' : 'bg-gray-50 text-gray-500 group-hover:bg-gray-100'}`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-100/60 bg-gray-50/10">
                        <p className="text-xs sm:text-sm font-semibold text-gray-650 leading-relaxed pl-8 whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to action trigger */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-gray-150 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-black text-gray-950">
              {t.faq.notAnsweredQ}
            </h4>
            <p className="text-xs text-gray-500 font-semibold">
              {t.faq.notAnsweredA}
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-white bg-primary hover:bg-opacity-95 shadow-md shadow-primary/25 transition-all"
          >
            <MessageSquare className="w-4 h-4 stroke-2" />
            <span>{t.faq.ctaButton}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
