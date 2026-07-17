import React from "react";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/6288808542018?text=${encodeURIComponent(
    "Hai Dikdok Team, Saya mau klaim konsultasi gratis dengan tim ahli Dikdok. Bagaimana caranya?"
  )}`;

  return (
    <div 
      id="floating-whatsapp-container" 
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
    >
      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-2 md:p-2.5 border border-gray-150 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label="Contact on WhatsApp"
      >
        {/* Hover / Highlight Text Wording */}
        <span 
          id="whatsapp-hover-text"
          className="max-w-0 overflow-hidden opacity-0 translate-x-4 group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out font-extrabold text-[13.5px] sm:text-[14.5px] text-primary whitespace-nowrap pl-2"
        >
          Konsultasi Gratis Sekarang
        </span>
        
        {/* WhatsApp Icon Wrapper with pulsing effect */}
        <div 
          id="whatsapp-icon-wrapper" 
          className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 bg-[#25D366] rounded-full shadow-md hover:shadow-[#25D366]/40 transition-shadow"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
          <img
            id="whatsapp-icon-image"
            src="https://lh3.googleusercontent.com/d/1DtgNMdEaDslq2s4rLqK-EAdKARKWhvqK"
            alt="WhatsApp"
            className="w-6.5 h-6.5 sm:w-8 sm:h-8 object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = document.getElementById("whatsapp-svg-fallback");
              if (fallback) fallback.classList.remove("hidden");
            }}
          />
          {/* Fallback SVG */}
          <svg
            id="whatsapp-svg-fallback"
            className="w-6 h-6 sm:w-7 sm:h-7 text-white hidden"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.528 2.016 14.07 1.01 11.5 1.012c-5.443 0-9.867 4.371-9.871 9.8.001 1.968.513 3.89 1.482 5.601l-.975 3.56 3.654-.949c1.657.893 3.292 1.343 4.82 1.343l.034-.012zm10.744-7.531c-.296-.146-1.748-.851-2.02-.95-.271-.099-.469-.146-.667.146-.197.293-.767.95-.94 1.147-.173.197-.346.22-.642.073-.296-.146-1.25-.454-2.381-1.449-.88-.774-1.474-1.73-1.647-2.02-.173-.293-.018-.452.129-.598.132-.132.296-.341.444-.513.148-.171.197-.293.296-.488.099-.195.05-.366-.025-.513-.075-.146-.667-1.583-.914-2.169-.24-.572-.48-.495-.667-.504-.171-.008-.368-.01-.566-.01s-.519.073-.791.366c-.271.293-1.037 1.002-1.037 2.443s1.012 2.833 1.161 3.029c.148.195 1.993 3.003 4.827 4.201.674.285 1.2.455 1.611.583.677.213 1.293.183 1.78.111.543-.08 1.748-.704 1.995-1.385.247-.68.247-1.264.173-1.385-.074-.122-.272-.195-.568-.341z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
