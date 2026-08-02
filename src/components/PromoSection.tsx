import React from "react";
import { Download, Sparkles, BookOpen, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PromoSectionProps {
  onDownloadClick: (resourceName: string) => void;
}

export default function PromoSection({ onDownloadClick }: PromoSectionProps) {
  const { language } = useLanguage();

  const isEn = language === "en";

  const title = "Free Healthcare Growth E-Book Library";
  
  const desc = isEn
    ? "Get a collection of free e-books for doctors, clinics, hospitals, and healthcare professionals. Learn branding, marketing, patient communication, and healthcare business growth strategies that can be directly implemented."
    : "Dapatkan kumpulan e-book gratis untuk dokter, klinik, rumah sakit, dan tenaga kesehatan. Pelajari strategi branding, marketing, komunikasi pasien, hingga pertumbuhan bisnis kesehatan yang dapat langsung diterapkan.";

  const badge = isEn
    ? "📥 Free Download • Practical • Based on Healthcare Industry Experience"
    : "📥 Gratis Download • Praktis • Berbasis Pengalaman Industri Kesehatan";

  const ctaText = isEn
    ? "Claim Free Ebook Now"
    : "Klaim Free Ebook Sekarang";

  // Navigation behavior: open the separate routing page in a new tab
  // Fallback to both path routing and parameter routing for maximum server tolerance
  const ebooksUrl = "/ebooks";

  return (
    <section id="promo" className="bg-gradient-to-b from-[#F2F4F7] to-white py-20 md:py-28 text-left relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-24 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High-end Premium Teaser Corporate Layout */}
        <div className="bg-white rounded-3xl border border-gray-150 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
          {/* Subtle decorative cover illustration */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-gradient-to-tr from-primary/10 to-orange-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Context / Copy side */}
            <div className="lg:col-span-7 space-y-6">

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                {title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                {desc}
              </p>

              {/* Action Button that routes to /ebooks Ebook Library page */}
              <div className="pt-2">
                <a
                  href="/ebooks"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", "/ebooks");
                    window.dispatchEvent(new Event("popstate"));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-orange-600 to-secondary text-white font-black text-xs uppercase tracking-wider hover:scale-[1.02] shadow-lg shadow-primary/25 transition-all duration-300 transform cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{ctaText}</span>
                </a>
              </div>

            </div>

            {/* Aesthetic Visual Side: Teaser Stack */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-48 sm:h-56 flex items-center justify-center">
                {/* 3D simulated floating book-stacked look */}
                <div className="absolute w-44 h-52 bg-white border border-gray-150 rounded-2xl shadow-lg -rotate-12 translate-x-[-20px] transition-transform duration-500 group-hover:-rotate-6">
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-purple-800 to-primary rounded-l-2xl" />
                  <div className="p-4 pl-6 text-left space-y-2">
                    <span className="block text-[6px] font-black text-[#8E23A4] tracking-widest">DIKDOK BLUEPRINT</span>
                    <div className="h-4 w-12 bg-gray-100 rounded-md" />
                    <div className="h-2 w-16 bg-gray-50 rounded-md" />
                  </div>
                </div>
                
                <div className="absolute w-44 h-52 bg-white border border-gray-200/90 rounded-2xl shadow-xl rotate-6 translate-x-[20px] translate-y-2 transition-transform duration-500 group-hover:rotate-12 group-hover:translate-x-[25px]">
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-[#FF6900] to-orange-400 rounded-l-2xl" />
                  <div className="p-4 pl-6 text-left space-y-2">
                    <span className="block text-[6px] font-black text-[#FF6900] tracking-widest">DIKDOK BLUEPRINT</span>
                    <div className="h-4 w-16 bg-gray-100 rounded-md" />
                    <div className="h-2 w-8 bg-gray-50 rounded-md" />
                  </div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-black text-xs shadow-lg animate-bounce select-none">
                  17+
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
