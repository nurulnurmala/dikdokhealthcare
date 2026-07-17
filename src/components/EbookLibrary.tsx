import React, { useState, useMemo } from "react";
import { 
  Download, 
  BookOpen, 
  Star, 
  Search, 
  SlidersHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Tag, 
  X,
  Sparkles,
  BookMarked,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { ebooksData, EbookItem } from "../ebooksData";

// Helper component for generating premium 16:9 ebook thumbnail covers
function EbookThumbnail({ title, category, priceType, thumbnail }: { title: string; category: string; priceType: "FREE" | "PAID"; thumbnail?: string }) {
  if (thumbnail) {
    return (
      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-gray-200/80 flex items-center justify-center select-none">
        <img 
          src={thumbnail} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for realism */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
        {/* Book Spine highlight simulation */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent z-10 pointer-events-none" />
      </div>
    );
  }

  // Select distinct beautiful gradients based on pricing and categories to look like a real curated library
  const gradientClass = priceType === "FREE" 
    ? "from-orange-500 via-orange-600 to-amber-700" 
    : "from-[#8E23A4] via-indigo-950 to-[#5C116C]";

  return (
    <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br ${gradientClass} text-white p-4 flex flex-col justify-between shadow-inner group/thumb select-none border border-white/10`}>
      {/* Decorative radial glows for premium feeling */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-black/25 rounded-full blur-xl pointer-events-none" />
      
      {/* Realistic Book Spine highlight on the left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/20 via-transparent to-white/10 z-20" />
      <div className="absolute left-2.5 top-0 bottom-0 w-[1px] bg-white/20 z-20" />

      {/* Header Tag inside cover */}
      <div className="flex items-center justify-between z-10 pl-2">
        <span className="text-[7.5px] font-black tracking-widest text-white/90 bg-white/10 px-2 py-0.5 rounded uppercase backdrop-blur-xs">
          DIKDOK LIBRARY
        </span>
        <BookMarked className="w-3.5 h-3.5 text-white/80" />
      </div>

      {/* Ebook Cover Title */}
      <div className="pl-2 z-10 my-auto text-left">
        <h4 className="text-xs sm:text-sm font-black text-white leading-tight tracking-tight line-clamp-2 drop-shadow-sm uppercase">
          {title}
        </h4>
        <span className="inline-block mt-1 text-[8px] font-bold text-white/70 tracking-wider">
          {category} Blueprint
        </span>
      </div>

      {/* Footer Branding inside cover */}
      <div className="pl-2 flex items-center justify-between z-10 pt-1 border-t border-white/10">
        <span className="text-[7px] font-medium tracking-wider text-white/60">
          HEALTHCARE GROWTH
        </span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-2 h-2 fill-current text-amber-300" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EbookLibrary() {
  const { language } = useLanguage();
  
  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<string>("All");
  const [selectedPriceType, setSelectedPriceType] = useState<"ALL" | "FREE" | "PAID">("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Items per page
  const itemsPerPage = 12;

  // Active High-Level Pillar Filter definitions
  const categoryPillars = useMemo(() => [
    { id: "All", nameEn: "All Categories", nameId: "Semua Kategori" },
    { id: "Clinic", nameEn: "Clinic", nameId: "Klinik" },
    { id: "Hospital", nameEn: "Hospital", nameId: "Rumah Sakit" },
    { id: "General Practitioner", nameEn: "General Practitioner", nameId: "Dokter Umum" },
    { id: "Dentist", nameEn: "Dentist", nameId: "Dokter Gigi" },
    { id: "Specialist Doctor", nameEn: "Specialist Doctor", nameId: "Dokter Spesialis" },
    { id: "Marketing", nameEn: "Marketing", nameId: "Marketing" },
    { id: "Strategy", nameEn: "Strategy", nameId: "Strategi" },
    { id: "Digital Marketing", nameEn: "Digital Marketing", nameId: "Digital Marketing" },
    { id: "Communication", nameEn: "Communication", nameId: "Komunikasi" },
    { id: "Sales", nameEn: "Sales", nameId: "Sales" },
    { id: "Nurse", nameEn: "Nurse", nameId: "Perawat" }
  ], []);

  // Helper matching logic for Category Pillars
  const matchesPillar = (ebook: EbookItem, pillar: string) => {
    if (pillar === "All") return true;
    
    const tagsEn = ebook.categoriesEn.map(c => c.toLowerCase());
    const tagsId = ebook.categoriesId.map(c => c.toLowerCase());
    const p = pillar.toLowerCase();

    // Custom match patterns to resolve exact Indonesian or English mappings nicely
    if (p === "nurse") {
      return tagsEn.includes("nurse") || tagsId.includes("perawat") || tagsId.includes("perawat gigi");
    }
    if (p === "specialist doctor") {
      return tagsEn.includes("specialist doctor") || tagsEn.includes("specialist") || tagsId.includes("dokter spesialis") || tagsId.includes("spesialis");
    }
    if (p === "general practitioner") {
      return tagsEn.includes("general practitioner") || tagsEn.includes("gp") || tagsId.includes("dokter umum");
    }
    if (p === "dentist") {
      return tagsEn.includes("dentist") || tagsId.includes("dokter gigi");
    }
    if (p === "digital marketing") {
      return tagsEn.includes("digital marketing") || tagsId.includes("digital marketing") || tagsId.includes("pemasaran digital");
    }
    if (p === "strategy") {
      return tagsEn.includes("strategy") || tagsId.includes("strategi");
    }
    if (p === "communication") {
      return tagsEn.includes("communication") || tagsId.includes("komunikasi");
    }
    if (p === "clinic") {
      return tagsEn.includes("clinic") || tagsId.includes("klinik");
    }
    if (p === "hospital") {
      return tagsEn.includes("hospital") || tagsId.includes("rumah sakit");
    }
    if (p === "marketing") {
      return tagsEn.includes("marketing") || tagsId.includes("marketing") || tagsId.includes("pemasaran");
    }
    if (p === "sales") {
      return tagsEn.includes("sales") || tagsId.includes("sales") || tagsId.includes("penjualan");
    }

    return tagsEn.includes(p) || tagsId.includes(p);
  };

  // Dynamic count generator for categories
  const getPillarCount = (pillarId: string) => {
    return ebooksData.filter(ebook => matchesPillar(ebook, pillarId)).length;
  };

  // Filter & Search Logic
  const filteredEbooks = useMemo(() => {
    return ebooksData.filter((ebook) => {
      const title = language === "en" ? ebook.titleEn : ebook.titleId;
      const desc = language === "en" ? ebook.descEn : ebook.descId;
      
      const matchesSearch = 
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = matchesPillar(ebook, selectedPillar);
      
      const matchesPrice = 
        selectedPriceType === "ALL" || 
        ebook.priceType === selectedPriceType;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedPillar, selectedPriceType, language]);

  // Pagination Logic
  const totalItems = filteredEbooks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  
  // Safe adjustment when filters change the total count
  const adjustedCurrentPage = Math.min(currentPage, totalPages);
  
  const paginatedEbooks = useMemo(() => {
    const startIndex = (adjustedCurrentPage - 1) * itemsPerPage;
    return filteredEbooks.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredEbooks, adjustedCurrentPage]);

  // Reset helper
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedPillar("All");
    setSelectedPriceType("ALL");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Area */}
        <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-none">
            {language === "en" ? "DIKDOK E-Book Library" : "Pustaka E-Book DIKDOK"}
          </h1>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {language === "en"
              ? "Browse, filter, and instantly download our premium e-books, blueprints, and tactical frameworks engineered to scale modern clinics and doctor brands."
              : "Telusuri, saring, dan unduh e-book, cetak biru, serta panduan taktis kami yang dirancang untuk meningkatkan pertumbuhan klinik dan personal branding dokter."}
          </p>
        </div>

        {/* Layout Grid: Sidebar on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          
          {/* LEFT SIDEBAR (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-8 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="font-extrabold text-sm tracking-tight text-gray-950 flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
                {language === "en" ? "Filter Library" : "Penyaring Pustaka"}
              </span>
              {(searchQuery || selectedPillar !== "All" || selectedPriceType !== "ALL") && (
                <button 
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-primary hover:text-secondary hover:underline cursor-pointer transition-colors"
                >
                  {language === "en" ? "Reset All" : "Atur Ulang"}
                </button>
              )}
            </div>

            {/* Search Input inside Sidebar */}
            <div className="space-y-2">
              <label className="block text-xs font-black text-gray-700 uppercase tracking-wider">
                {language === "en" ? "Search" : "Cari Judul"}
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder={language === "en" ? "Type keyword..." : "Ketik kata kunci..."}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs shadow-inner transition-all"
                />
                <Search className="absolute left-3 top-3 w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>

            {/* Ebook Type Filters */}
            <div className="space-y-3">
              <label className="block text-xs font-black text-gray-700 uppercase tracking-wider">
                {language === "en" ? "Ebook Type" : "Tipe Ebook"}
              </label>
              <div className="space-y-2">
                {[
                  { id: "ALL", name: language === "en" ? "All E-books" : "Semua E-book" },
                  { id: "FREE", name: language === "en" ? "FREE" : "GRATIS" },
                  { id: "PAID", name: language === "en" ? "Premium (Paid)" : "Premium (Berbayar)" }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedPriceType(option.id as any);
                      setCurrentPage(1);
                    }}
                    className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    style={{
                      backgroundColor: selectedPriceType === option.id ? "#FFF5F0" : "transparent",
                      color: selectedPriceType === option.id ? "#FF6900" : "#4B5563"
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                        selectedPriceType === option.id ? "border-primary bg-primary" : "border-gray-300 bg-white"
                      }`}>
                        {selectedPriceType === option.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      {option.name}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {option.id === "ALL" && ebooksData.length}
                      {option.id === "FREE" && ebooksData.filter(e => e.priceType === "FREE").length}
                      {option.id === "PAID" && ebooksData.filter(e => e.priceType === "PAID").length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* High-Level Pillars (Categories) Filter */}
            <div className="space-y-3">
              <label className="block text-xs font-black text-gray-700 uppercase tracking-wider">
                {language === "en" ? "Categories" : "Kategori Utama"}
              </label>
              <div className="space-y-1">
                {categoryPillars.map((pillar) => {
                  const isActive = selectedPillar === pillar.id;
                  const count = getPillarCount(pillar.id);
                  const name = language === "en" ? pillar.nameEn : pillar.nameId;

                  return (
                    <button
                      key={pillar.id}
                      onClick={() => {
                        setSelectedPillar(pillar.id);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between gap-2 text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isActive 
                          ? "bg-primary text-white border-primary shadow-xs" 
                          : "bg-white hover:bg-slate-50 text-gray-700 border-transparent hover:border-gray-200"
                      }`}
                    >
                      <span className="leading-snug break-words">{name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black shrink-0 ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-gray-500"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MOBILE FILTERS COLLAPSED / BAR */}
          <div className="lg:hidden col-span-1 space-y-4 px-2">
            <div className="flex items-center gap-3 w-full">
              {/* Main search bar on mobile */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={language === "en" ? "Search library..." : "Cari pustaka..."}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs shadow-sm"
                />
                <Search className="absolute left-3 top-3 w-3.5 h-3.5 text-gray-400" />
              </div>

              {/* Toggle filters trigger */}
              <button
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-white border border-gray-200 text-gray-700 shadow-xs cursor-pointer hover:bg-slate-50 transition-all"
              >
                <SlidersHorizontal className="w-4 h-4 text-primary" />
                <span>{language === "en" ? "Filters" : "Filter"}</span>
                {(selectedPillar !== "All" || selectedPriceType !== "ALL") && (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                )}
              </button>
            </div>

            {/* Mobile Filters Dropdown Drawer Accordion */}
            <AnimatePresence>
              {isMobileFiltersOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md space-y-5 overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="text-xs font-black text-gray-800 uppercase tracking-wider">
                      {language === "en" ? "Filter Options" : "Pilihan Filter"}
                    </span>
                    <button 
                      onClick={handleResetFilters}
                      className="text-[10px] font-black text-primary hover:underline"
                    >
                      {language === "en" ? "Reset All" : "Atur Ulang"}
                    </button>
                  </div>

                  {/* Ebook Type on Mobile */}
                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-black text-gray-500 uppercase">
                      {language === "en" ? "Ebook Type" : "Tipe Ebook"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "ALL", name: language === "en" ? "All" : "Semua" },
                        { id: "FREE", name: language === "en" ? "FREE" : "GRATIS" },
                        { id: "PAID", name: language === "en" ? "Premium" : "Premium" }
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSelectedPriceType(option.id as any);
                            setCurrentPage(1);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            selectedPriceType === option.id
                              ? "bg-primary/10 text-primary border-primary"
                              : "bg-slate-50 text-gray-600 border-gray-200"
                          }`}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pillars on Mobile */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-black text-gray-500 uppercase">
                      {language === "en" ? "Categories" : "Kategori"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {categoryPillars.map((pillar) => {
                        const isActive = selectedPillar === pillar.id;
                        const name = language === "en" ? pillar.nameEn : pillar.nameId;
                        return (
                          <button
                            key={pillar.id}
                            onClick={() => {
                              setSelectedPillar(pillar.id);
                              setCurrentPage(1);
                            }}
                            className={`px-3 py-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-left ${
                              isActive 
                                ? "bg-primary text-white border-primary shadow-xs" 
                                : "bg-slate-50 text-gray-700 border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            {name} ({getPillarCount(pillar.id)})
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="w-full py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-black text-gray-700 transition-colors cursor-pointer"
                  >
                    {language === "en" ? "Apply Filters" : "Terapkan Filter"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT CONTENT WORKSPACE: GRID OF CARDS & PAGINATION */}
          <main className="col-span-1 lg:col-span-9 space-y-10">
            
            {/* Filter tags summary */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 bg-slate-100/50 p-3 rounded-xl border border-slate-200/40">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-gray-500">
                <span>{language === "en" ? "Showing" : "Menampilkan"}</span>
                <span className="text-gray-950 font-extrabold">{filteredEbooks.length}</span>
                <span>{language === "en" ? "ebooks in total" : "total e-book"}</span>
                {(selectedPillar !== "All" || selectedPriceType !== "ALL" || searchQuery) && (
                  <div className="flex items-center gap-1.5 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-primary text-[10px] font-black">
                    <span>
                      {selectedPillar !== "All" && categoryPillars.find(p => p.id === selectedPillar)?.[language === "en" ? "nameEn" : "nameId"]}
                      {selectedPriceType !== "ALL" && ` • ${selectedPriceType}`}
                      {searchQuery && ` • "${searchQuery}"`}
                    </span>
                    <button 
                      onClick={handleResetFilters}
                      className="p-0.5 rounded-full hover:bg-slate-100 cursor-pointer"
                    >
                      <X className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Simplified Cards Grid */}
            {totalItems === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-150 shadow-xs flex flex-col items-center justify-center space-y-4 px-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-gray-400 flex items-center justify-center shadow-inner">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-900 font-extrabold text-base">
                    {language === "en" ? "No e-books match your filters" : "E-book tidak ditemukan"}
                  </p>
                  <p className="text-gray-500 text-xs font-medium max-w-sm">
                    {language === "en" 
                      ? "Try lowering your search parameters or clearing filters to discover all available resources." 
                      : "Coba hapus filter atau cari kata kunci lain untuk melihat semua pustaka kami."}
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-primary text-white text-xs font-black rounded-xl hover:bg-opacity-90 shadow-sm shadow-primary/20 transition-all cursor-pointer"
                >
                  {language === "en" ? "Clear Filters" : "Hapus Semua Filter"}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {paginatedEbooks.map((ebook) => {
                  const title = language === "en" ? ebook.titleEn : ebook.titleId;
                  const categories = language === "en" ? ebook.categoriesEn : ebook.categoriesId;
                  const primaryCategory = categories[0] || "Health";

                  return (
                    <div
                      key={ebook.id}
                      id={`ebook-card-new-${ebook.id}`}
                      className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 group cursor-pointer relative"
                    >
                      {/* Top elements container */}
                      <div className="space-y-3.5">
                        
                        {/* 1. Thumbnail Placeholder Component (16:9) with hover zoom transition */}
                        <div className="relative overflow-hidden rounded-xl bg-slate-100">
                          <div className="group-hover:scale-103 transition-transform duration-300">
                            <EbookThumbnail 
                              title={title} 
                              category={primaryCategory} 
                              priceType={ebook.priceType} 
                              thumbnail={ebook.thumbnail}
                            />
                          </div>

                          {/* 2. Status Badge overlayed elegantly on top right */}
                          <div className="absolute top-2.5 right-2.5 z-10">
                            <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded-md uppercase border shadow-xs ${
                              ebook.priceType === "FREE"
                                ? "bg-white text-primary border-primary/10"
                                : "bg-white text-secondary border-secondary/10"
                            }`}>
                              {ebook.priceType}
                            </span>
                          </div>
                        </div>

                        {/* Title and Rating Container */}
                        <div className="space-y-2">
                          
                          {/* 5. Static Star Rating */}
                          <div className="flex items-center gap-1">
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-3 h-3 fill-current text-amber-400" />
                              ))}
                            </div>
                            <span className="text-[10px] text-gray-400 font-bold ml-1">5.0</span>
                          </div>

                          {/* 3. Ebook Title (Large bold, max 2 lines, primary hover color) */}
                          <h3 className="text-sm font-black text-gray-950 tracking-tight leading-snug line-clamp-2 h-10 group-hover:text-primary transition-colors text-left">
                            {title}
                          </h3>

                          {/* 4. Category chips underneath */}
                          <div className="flex flex-wrap gap-1 pt-1.5">
                            {categories.map((cat, i) => (
                              <span 
                                key={i}
                                className="text-[9px] font-extrabold bg-slate-50 text-gray-500 border border-gray-200/60 px-2 py-0.5 rounded-md"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* 6. Pricing & Full-Width orange CTA Button */}
                      <div className="pt-4 border-t border-slate-100 mt-5 space-y-3">
                        
                        {/* 7. Price indicator */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 font-bold">
                            {language === "en" ? "Resource Price:" : "Harga Akses:"}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {ebook.originalPrice && (
                              <span className="line-through text-gray-400 text-xs font-semibold">
                                {ebook.originalPrice}
                              </span>
                            )}
                            <span className={`font-black text-sm ${
                              ebook.priceType === "FREE" ? "text-primary" : "text-secondary"
                            }`}>
                              {ebook.currentPrice ? (
                                ebook.currentPrice
                              ) : ebook.priceType === "FREE" ? (
                                language === "en" ? "FREE" : "GRATIS"
                              ) : (
                                language === "en" ? "PREMIUM" : "PREMIUM"
                              )}
                            </span>
                          </div>
                        </div>

                        <a
                          href={ebook.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 bg-primary hover:bg-opacity-95 text-white font-extrabold text-xs rounded-xl shadow-md shadow-primary/10 transition-all cursor-pointer"
                        >
                          <span>
                            {language === "en" ? "Download Ebook Now" : "Unduh Ebook Sekarang"}
                          </span>
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6 border-t border-gray-150">
                {/* Prev Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={adjustedCurrentPage === 1}
                  className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-slate-50 text-gray-600 disabled:opacity-45 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Number Buttons */}
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = adjustedCurrentPage === pageNum;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-white border border-gray-200 hover:bg-slate-50 text-gray-700"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={adjustedCurrentPage === totalPages}
                  className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-slate-50 text-gray-600 disabled:opacity-45 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
}
