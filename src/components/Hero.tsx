import { MessageSquare, Sparkles, TrendingUp, Target, CheckCircle, Globe, BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onCtaClick: (resourceName: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const { language, toggleLanguage, t } = useLanguage();
  const heroDoctorImg = "https://lh3.googleusercontent.com/d/1E2yKHvVcV_TfA2z4bX6F2n72dWGHITXN";

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-72px)] xs:min-h-[calc(100vh-80px)] md:min-h-fit lg:min-h-[82vh] xl:min-h-[88vh] flex items-center overflow-hidden bg-white pt-[72px] xs:pt-[80px] sm:pt-24 pb-6 sm:pb-12 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12 xl:pt-28 xl:pb-14"
    >
      {/* Decorative Brand Colors Blurs */}
      <div className="absolute top-6 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-12 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Headline and Pitch */}
          <div className="md:col-span-7 space-y-4 xs:space-y-5 sm:space-y-4 lg:space-y-6 text-left order-1 md:order-1 lg:-mt-4 xl:-mt-6 lg:pt-4 xl:pt-6 min-h-0 md:min-h-0 flex flex-col justify-start pt-2 xs:pt-4 md:justify-center md:py-0">
            
            {/* Headline and Sub-headline (Block 3) */}
            <div className="space-y-2 sm:space-y-2 lg:space-y-3.5">
              <h1 className="text-[32px] xs:text-[36px] sm:text-5xl md:text-[38px] lg:text-[62px] xl:text-[70px] font-black text-gray-990 tracking-tight leading-[1.08] sm:leading-[1.02] md:leading-[1.02] lg:leading-[1.02] xl:leading-[1.02] animate-fade-in text-left">
                {language === "id" ? (
                  <>
                    <span className="block bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                      Partner Terpercaya
                    </span>
                    <span className="block bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mt-1 xs:mt-1.5 sm:mt-1.5 md:mt-1 lg:mt-1 xl:mt-1.5">
                      untuk Pertumbuhan
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                      Trusted Partner
                    </span>
                    <span className="block bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mt-1 xs:mt-1.5 sm:mt-1.5 md:mt-1 lg:mt-1 xl:mt-1.5">
                      for Growth
                    </span>
                  </>
                )}
              </h1>
              <h2 className="text-[20px] xs:text-[24px] sm:text-2xl md:text-lg lg:text-[36px] xl:text-[42px] font-extrabold text-gray-800 tracking-tight leading-snug mt-1.5 sm:mt-2.5 lg:mt-7 xl:mt-9 text-left">
                {t.hero.subheadline}
              </h2>
            </div>

            <p className="text-[13.5px] xs:text-[14.5px] sm:text-base md:text-sm lg:text-[15px] xl:text-[16px] text-gray-500 font-semibold leading-relaxed max-w-xl text-left lg:mt-8 xl:mt-10">
              {t.hero.description}
            </p>
 
            {/* Dual Balanced Call-to-Actions (Block 3 and 7) */}
            <div className="flex flex-row items-center justify-start gap-2 sm:gap-3 w-full pt-5 xs:pt-6 sm:pt-2 md:pt-6 lg:pt-12 xl:pt-16">
              {/* Button 1: WhatsApp Consultation (Solid Orange, Hover to Purple) */}
              <a
                href={`https://wa.me/6288808542018?text=${encodeURIComponent(
                  language === "en"
                     ? "Hi Dikdok Team, I'd like to claim a free consultation with the expert team. How do I proceed?"
                    : "Hai Dikdok Team, Saya mau klaim konsultasi gratis dengan tim ahli Dikdok. Bagaimana caranya?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center flex-1 md:flex-initial px-3.5 py-2.5 xs:py-3 sm:px-6 sm:py-3.5 md:px-6 md:py-3.5 lg:px-9 lg:py-5.5 rounded-xl lg:rounded-2xl text-[12px] xs:text-[13px] sm:text-xs lg:text-base font-black text-white bg-primary border border-primary hover:bg-secondary hover:border-secondary shadow-md hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center min-h-[42px] xs:min-h-[48px] md:min-h-[50px] lg:min-h-[64px] ease-in-out"
              >
                {/* Custom Google Drive Icon */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1RfKaP16UoFil3-6FvS4PTMatzt2WWIFA" 
                  alt="WhatsApp Icon" 
                  className="w-4 h-4 xs:w-5 h-5 lg:w-6.5 lg:h-6.5 mr-1 sm:mr-2 lg:mr-2.5 flex-shrink-0 object-contain filter brightness-100"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.onerror = null;
                    img.style.display = "none";
                  }}
                />
                <span>
                  <span className="inline sm:hidden leading-tight">
                    {language === "id" ? (
                      <>
                        Klaim Konsultasi
                        <br />
                        Gratis
                      </>
                    ) : (
                      <>
                        Claim Free
                        <br />
                        Consultation
                      </>
                    )}
                  </span>
                  <span className="hidden sm:inline">
                    {t.hero.ctaConsultation}
                  </span>
                </span>
              </a>

              {/* Button 2: Ebook (Outline Secondary/Purple, Hover to Solid Purple) */}
              <a
                href="/ebooks"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/ebooks");
                  window.dispatchEvent(new Event("popstate"));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center flex-1 md:flex-initial px-3.5 py-2.5 xs:py-3 sm:px-6 sm:py-3.5 md:px-6 md:py-3.5 lg:px-9 lg:py-5.5 rounded-xl lg:rounded-2xl text-[12px] xs:text-[13px] sm:text-xs lg:text-base font-black text-secondary bg-transparent border border-secondary hover:bg-secondary hover:border-secondary hover:text-white shadow-sm hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center min-h-[42px] xs:min-h-[48px] md:min-h-[50px] lg:min-h-[64px] ease-in-out"
              >
                <BookOpen className="mr-1 sm:mr-2 lg:mr-2.5 w-3.5 h-3.5 xs:w-4.5 xs:h-4.5 lg:w-6 lg:h-6 text-secondary group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                <span>
                  <span className="inline sm:hidden leading-tight">
                    {language === "id" ? (
                      <>
                        Klaim Ebook
                        <br />
                        Gratis
                      </>
                    ) : (
                      <>
                        Claim Free
                        <br />
                        Ebook
                      </>
                    )}
                  </span>
                  <span className="hidden sm:inline">
                    {t.hero.ctaEbook}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Hero Graphic with Feathered Mask image placement */}
          <div className="md:col-span-5 relative mt-4 md:mt-0 flex justify-center md:justify-end pr-0 w-full order-2 md:order-2 lg:-mt-4 xl:-mt-6 pt-2 md:pt-0 pb-12 md:pb-0">
            <div className="relative w-full max-w-[225px] xs:max-w-[255px] sm:max-w-[285px] md:max-w-[285px] lg:max-w-[385px] xl:max-w-[425px] aspect-[4/5] overflow-visible">
              
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/15 to-transparent blur-3xl rounded-full scale-110 -z-10 pointer-events-none" />
              
              <div className="w-full h-full bg-transparent relative overflow-visible flex items-center justify-center">
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet="https://lh3.googleusercontent.com/d/1E2yKHvVcV_TfA2z4bX6F2n72dWGHITXN" media="(max-width: 767px)" />
                  <img
                    src={heroDoctorImg}
                    alt="DIKDOK Professional Healthcare"
                    className="w-full h-full object-contain select-none transition-all duration-700 ease-out hover:scale-105"
                    style={{
                      maskImage: "radial-gradient(ellipse at 50% 50%, black 65%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 65%, transparent 100%)"
                    }}
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>

              {/* Staggered Floating Cards */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Healthcare Growth Strategy High Top Right - shifted above/near the head of the image */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-[3%] xs:top-[2%] md:top-[12%] lg:top-[6%] xl:top-[8%] -right-2 xs:-right-4 md:-right-1 lg:right-[2%] xl:right-[4%] bg-white/95 backdrop-blur-sm p-1 xs:p-1.5 md:p-1 lg:p-3.5 xl:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-gray-100 shadow-md lg:shadow-xl flex items-center gap-1 xs:gap-1.5 md:gap-1 lg:gap-3 w-[115px] xs:w-[130px] sm:w-[150px] md:w-[130px] lg:w-max xl:w-max lg:min-w-[240px] xl:min-w-[275px] lg:px-4 xl:px-5 pointer-events-auto hover:scale-105 transition-transform duration-200"
                >
                  <div className="p-0.5 xs:p-1 md:p-1 lg:p-2.5 rounded-md lg:rounded-xl bg-amber-50 text-amber-600 flex-shrink-0">
                    <Star className="w-2 h-2 xs:w-2.5 xs:h-2.5 md:w-2.5 md:h-2.5 lg:w-5 lg:h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] md:text-[9px] lg:text-[12px] xl:text-[14px] font-black text-gray-990 leading-tight lg:whitespace-nowrap xl:whitespace-nowrap">{t.hero.card1Title}</h4>
                    <p className="text-[5.5px] xs:text-[6.5px] sm:text-[8px] md:text-[7.5px] lg:text-[10.5px] xl:text-[12px] lg:whitespace-nowrap xl:whitespace-nowrap text-gray-500 font-bold leading-normal mt-0.5">{t.hero.card1Desc}</p>
                  </div>
                </motion.div>

                {/* Patient Acquisition System Middle Left - shifted further left to prevent overlap */}
                <motion.div
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-[48%] md:top-[50%] lg:top-[50%] xl:top-[52%] -translate-y-1/2 -left-12 xs:-left-14 md:-left-6 lg:-left-28 xl:-left-38 bg-white/95 backdrop-blur-sm p-1 xs:p-1.5 md:p-1 lg:p-3.5 xl:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-gray-100 shadow-md lg:shadow-xl flex items-center gap-1 xs:gap-1.5 md:gap-1 lg:gap-3 w-[115px] xs:w-[130px] sm:w-[150px] md:w-[130px] lg:w-max xl:w-max lg:min-w-[240px] xl:min-w-[275px] lg:px-4 xl:px-5 pointer-events-auto hover:scale-105 transition-transform duration-200"
                >
                  <div className="p-0.5 xs:p-1 md:p-1 lg:p-2.5 rounded-md lg:rounded-xl bg-purple-50 text-[#8E23A4] flex-shrink-0">
                    <TrendingUp className="w-2 h-2 xs:w-2.5 xs:h-2.5 md:w-2.5 md:h-2.5 lg:w-5 lg:h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] md:text-[9px] lg:text-[12px] xl:text-[14px] font-black text-gray-990 leading-tight lg:whitespace-nowrap xl:whitespace-nowrap">{t.hero.card2Title}</h4>
                    <p className="text-[5.5px] xs:text-[6.5px] sm:text-[8px] md:text-[7.5px] lg:text-[10.5px] xl:text-[12px] lg:whitespace-nowrap xl:whitespace-nowrap text-gray-500 font-bold leading-normal mt-0.5">{t.hero.card2Desc}</p>
                  </div>
                </motion.div>

                {/* Communication Excellence Bottom Right - shifted lower to make it airy */}
                <motion.div
                  initial={{ x: 25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-[6%] xs:bottom-[5%] md:bottom-[4%] lg:bottom-[-2%] xl:bottom-[-3%] -right-2 xs:-right-4 md:-right-1 lg:right-[2%] xl:right-[4%] bg-white/95 backdrop-blur-sm p-1 xs:p-1.5 md:p-1 lg:p-3.5 xl:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-gray-100 shadow-md lg:shadow-xl flex items-center gap-1 xs:gap-1.5 md:gap-1 lg:gap-3 w-[115px] xs:w-[130px] sm:w-[150px] md:w-[130px] lg:w-max xl:w-max lg:min-w-[240px] xl:min-w-[275px] lg:px-4 xl:px-5 pointer-events-auto hover:scale-105 transition-transform duration-200"
                >
                  <div className="p-0.5 xs:p-1 md:p-1 lg:p-2.5 rounded-md lg:rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                    <CheckCircle className="w-2 h-2 xs:w-2.5 xs:h-2.5 md:w-2.5 md:h-2.5 lg:w-5 lg:h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] md:text-[9px] lg:text-[12px] xl:text-[14px] font-black text-gray-990 leading-tight lg:whitespace-nowrap xl:whitespace-nowrap">{t.hero.card3Title}</h4>
                    <p className="text-[5.5px] xs:text-[6.5px] sm:text-[8px] md:text-[7.5px] lg:text-[10.5px] xl:text-[12px] lg:whitespace-nowrap xl:whitespace-nowrap text-gray-500 font-bold leading-normal mt-0.5">{t.hero.card3Desc}</p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
