import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import ServicesSection from "./components/ServicesSection";
import PromoSection from "./components/PromoSection";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import IntakeModal from "./components/IntakeModal";
import EbookLibrary from "./components/EbookLibrary";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [modalResource, setModalResource] = useState("Free Strategic Consultation");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Check if current page is the dedicated Ebook library (bilingual-supported /ebooks or anniversary /promo)
  const isEbooksRoute = 
    currentPath === "/ebooks" || 
    currentPath === "/promo" || 
    window.location.search.includes("page=ebooks") || 
    window.location.search.includes("page=promo");

  // Handler to capture any CTA clicks and launch the interactive modal
  const openIntakeModal = (resourceName: string) => {
    setModalResource(resourceName);
    setIsIntakeOpen(true);
  };

  if (isEbooksRoute) {
    return (
      <div className="min-h-screen bg-slate-50 text-gray-900 scroll-smooth selection:bg-primary selection:text-white">
        {/* Sticky header containing bilinguistics selector & WhatsApp floating button */}
        <Header />

        <main>
          <EbookLibrary />
        </main>

        {/* Brand purple footer only preview */}
        <ContactSection onlyFooter={true} />

        {/* Lead Capture Modal Overlays */}
        <IntakeModal 
          isOpen={isIntakeOpen} 
          onClose={() => setIsIntakeOpen(false)} 
          targetResource={modalResource} 
        />

        {/* Global Floating WhatsApp Widget */}
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth selection:bg-primary selection:text-white">
      {/* Sticky header containing bilinguistics selector & WhatsApp floating button */}
      <Header />

      {/* Main Page Sections */}
      <main>
        {/* SECTION 1 - HERO with dynamic headline switch */}
        <Hero onCtaClick={openIntakeModal} />

        {/* SECTION 2 - DYNAMIC VIDEO PRESENTATION CASE STUDY */}
        <VideoSection />

        {/* SECTION 5 - INTERACTIVE FILTERABLE SERVICES INDEX (Highlighting Dokter Personal Branding) */}
        <ServicesSection onServiceClick={openIntakeModal} />

        {/* SECTION 6 - PROMO & LEAD MAGNETS SPECIAL BLUEPRINT GRID (17 targets / Anniversary Edition) */}
        <PromoSection onDownloadClick={openIntakeModal} />

        {/* SECTION 7 - SECTOR WORK TARGET INDEX */}
        <WhoWeWorkWith onCtaClick={openIntakeModal} />

        {/* SECTION 8 - ABOUT DIKDOK HISTORIC PORTRAIT (Shortened high-impact paragraph) */}
        <AboutSection />

        {/* SECTION 9 - ANIMATED ACCORDION FAQ BLOCK */}
        <FaqSection />

        {/* SECTION 10 - INTERACTIVE CTA COMPOSER FORM & COMPLIANT FOOTER (No-agency) */}
        <ContactSection onFormSubmit={(serviceName) => openIntakeModal(`Schedule Audit: ${serviceName}`)} />
      </main>

      {/* Lead Capture Modal Overlays */}
      <IntakeModal 
        isOpen={isIntakeOpen} 
        onClose={() => setIsIntakeOpen(false)} 
        targetResource={modalResource} 
      />

      {/* Global Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
