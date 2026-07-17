import React, { useState } from "react";
import { MessageSquare, ArrowUpRight, HelpCircle, Instagram, Youtube, Mail } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface ContactSectionProps {
  onFormSubmit?: (serviceName: string) => void;
  onlyFooter?: boolean;
}

export default function ContactSection({ onFormSubmit, onlyFooter = false }: ContactSectionProps) {
  const { language, t } = useLanguage();

  const isEbooksRoute = 
    window.location.pathname === "/ebooks" || 
    window.location.pathname === "/promo" || 
    window.location.search.includes("page=ebooks") || 
    window.location.search.includes("page=promo");

  const servicesAnchor = isEbooksRoute ? "/#services" : "#services";

  const servicesList = [
    { nameEn: "Personal Branding", nameId: "Personal Branding" },
    { nameEn: "Doctor Management Team", nameId: "Doctor Management Team" },
    { nameEn: "Virtual Assistance for Healthcare", nameId: "Virtual Assistance for Healthcare" },
    { nameEn: "Meta Ads", nameId: "Meta Ads" },
    { nameEn: "Google Ads", nameId: "Google Ads" },
    { nameEn: "SEO", nameId: "SEO" },
    { nameEn: "Website", nameId: "Website" },
    { nameEn: "Training Admin/Front Office", nameId: "Training Admin/Front Office" },
    { nameEn: "Public Speaking Doctor (Private Class)", nameId: "Public Speaking Doctor (Kelas Privat)" },
  ];

  const whatsappPrefilledMessage = language === "en"
    ? "Hi Dikdok Team, I want to claim a free consultation with Dikdok's expert team. How do I do that?"
    : "Hai Dikdok Team, Saya ingin klaim konsultasi gratis dengan tim ahli Dikdok. Bagaimana caranya?";

  const whatsappPrefilledUrl = `https://wa.me/6288808542018?text=${encodeURIComponent(whatsappPrefilledMessage)}`;

  if (onlyFooter) {
    return (
      <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 text-left border-t border-gray-900 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Column 1: Brand & Desc (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="block hover:opacity-90 transition-opacity">
                <Logo theme="dark" />
              </a>
            </div>

            {/* Column 2: Layanan Kami (3 cols) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
                Layanan Kami
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-400">
                {servicesList.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={servicesAnchor} 
                      className="hover:text-primary transition-colors block"
                    >
                      {language === "en" ? service.nameEn : service.nameId}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Meta (4 cols) */}
            <div className="md:col-span-4 space-y-4 text-xs">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
                Contact Us
              </h4>
              <ul className="space-y-3 font-semibold text-gray-400">
                <li>
                  <a href={whatsappPrefilledUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#FF6900]" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@dikdok499" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <TiktokIcon className="w-4 h-4 text-white" />
                    <span>Tiktok</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dikdok_id" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@dikdok_id" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>Youtube</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:dikdokindonesia@gmail.com" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-gray-900 my-8" />

          {/* Legal / Copyright line */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-medium gap-4">
            <span>
              &copy; 2026 DIKDOK HEALTHCARE. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <div id="contact" className="relative">
      
      {/* SECTION 10: PREMIUM FINAL CTA */}
      <section className="bg-gradient-to-br from-[#8E23A4] via-[#5F1370] to-[#360841] text-white relative overflow-hidden w-full flex flex-col md:flex-row items-stretch min-h-[600px] max-md:w-screen max-md:ml-[calc(50%-50vw)] max-md:mr-[calc(50%-50vw)] max-md:max-w-[100vw]">
        
        {/* Abstract vector accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6900]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />
        
        {/* Mobile ONLY Headline/Description (rendered top on mobile) */}
        <div className="md:hidden px-6 pt-12 pb-6 text-left space-y-4 relative z-10 w-full">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
            {t.contact.headline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6900] to-orange-300">
              {t.contact.headlineHighlight}
            </span>
          </h2>
          
          <p className="text-sm text-purple-100 font-medium leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Column 1: Stretches perfectly flush from absolute top to bottom on desktop.
            On Mobile: Sits right in the middle, edge-to-edge width 100%, without hard borders or card overlays */}
        <div className="w-full md:w-1/2 relative min-h-[320px] md:min-h-0 self-stretch flex-shrink-0 z-10">
          <img
            src="https://lh3.googleusercontent.com/d/1S9TaabQmzWEYjFFHq_IJUGykLDkgFvrc"
            alt="DIKDOK Healthcare Growth"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Column 2: Right side layout detailing Pitch (only on desktop) and the beautiful white form card */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center space-y-8 relative z-10">
          
          {/* Desktop ONLY Pitch overlay */}
          <div className="hidden md:block space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
              {t.contact.headline} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6900] to-orange-300">
                {t.contact.headlineHighlight}
              </span>
            </h2>
            
            <p className="text-base text-purple-100 font-medium leading-relaxed max-w-xl">
              {t.contact.description}
            </p>
          </div>

          {/* Interactive White Inquiry Form block alignment replaced with WhatsApp CTA */}
          <div className="w-full">
            <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl space-y-6 text-center flex flex-col items-center justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-950 tracking-tight leading-snug">
                {language === "en" ? "Accelerate Your Healthcare Business Growth." : "Tingkatkan Pertumbuhan Bisnis Kesehatan Anda."}
              </h3>
              
              <a
                href={whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center p-4 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#FF6900] to-orange-600 hover:from-orange-600 hover:to-[#FF6900] shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 select-none cursor-pointer"
              >
                <MessageSquare className="mr-2 w-4 h-4 fill-current text-white" />
                <span>
                  {language === "en" ? "Claim Free Consultation" : "Klaim Konsultasi Gratis"}
                </span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
          </div>
        </section>

      {/* FOOTER ACCENTS & CREDITS */}
      <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 text-left border-t border-gray-900 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Column 1: Brand & Desc (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <a href="#home" className="block hover:opacity-90 transition-opacity">
                <Logo theme="dark" />
              </a>
            </div>

            {/* Column 2: Layanan Kami (3 cols) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
                Layanan Kami
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-400">
                {servicesList.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={servicesAnchor} 
                      className="hover:text-primary transition-colors block"
                    >
                      {language === "en" ? service.nameEn : service.nameId}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Meta (4 cols) */}
            <div className="md:col-span-4 space-y-4 text-xs">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
                Contact Us
              </h4>
              <ul className="space-y-3 font-semibold text-gray-400">
                <li>
                  <a href={whatsappPrefilledUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#FF6900]" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@dikdok499" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <TiktokIcon className="w-4 h-4 text-white" />
                    <span>Tiktok</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dikdok_id" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@dikdok_id" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>Youtube</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:dikdokindonesia@gmail.com" className="hover:text-primary text-xs font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-gray-900 my-8" />

          {/* Legal / Copyright line */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-medium gap-4">
            <span>
              &copy; 2026 DIKDOK HEALTHCARE. All Rights Reserved.
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
