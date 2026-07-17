export interface EbookItem {
  id: string;
  titleEn: string;
  titleId: string;
  descEn: string;
  descId: string;
  link: string;
  categoriesEn: string[];
  categoriesId: string[];
  priceType: "FREE" | "PAID";
  thumbnail?: string;
  originalPrice?: string;
  currentPrice?: string;
}

const rawEbooksData: EbookItem[] = [
  // --- Volume 1 ---
  {
    id: "clinic-growth",
    titleEn: "Clinic Growth Framework",
    titleId: "Framework Pertumbuhan Klinik",
    descEn: "Learn 8 practical steps to increase visibility, build patient trust, and develop your clinic sustainably. Perfect for owners, managers, and clinic teams wanting to grow faster.",
    descId: "Pelajari 8 langkah praktis untuk meningkatkan visibilitas, membangun kepercayaan pasien, dan mengembangkan klinik secara berkelanjutan. Cocok untuk pemilik, manajer, dan tim klinik yang ingin bertumbuh lebih cepat.",
    link: "http://lynk.id/dikdokhealthcare/1z79gllmk6q6",
    categoriesEn: ["Clinic"],
    categoriesId: ["Klinik"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/12nRksBD5OtDTFs8qPHi2krQJX8mLm_lp"
  },
  {
    id: "hospital-growth-free",
    titleEn: "Hospital Growth Framework",
    titleId: "Framework Pertumbuhan Rumah Sakit",
    descEn: "A concise guide for hospitals to strengthen reputation, boost referrals, and create patient experiences that drive sustainable service growth.",
    descId: "Panduan singkat bagi rumah sakit untuk memperkuat reputasi, meningkatkan rujukan, dan menciptakan pengalaman pasien yang mendorong pertumbuhan layanan secara berkelanjutan.",
    link: "http://lynk.id/dikdokhealthcare/259ezwdjz0ej",
    categoriesEn: ["Hospital"],
    categoriesId: ["Rumah Sakit"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/10VbE2s-ghOOPTi_QR9PjB5v1QhHpxQ5Z"
  },

  {
    id: "branding-gp",
    titleEn: "General Practitioner Personal Branding Framework",
    titleId: "Framework Personal Branding Dokter Umum",
    descEn: "Build a professional reputation, increase visibility, and unlock more career opportunities as a general practitioner with the right personal branding strategies.",
    descId: "Bangun reputasi profesional, tingkatkan visibilitas, dan buka lebih banyak peluang karier sebagai dokter umum dengan strategi personal branding yang tepat.",
    link: "http://lynk.id/dikdokhealthcare/y6o31v9yvl6j",
    categoriesEn: ["Clinic", "Hospital", "General Practitioner", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Dokter Umum", "Marketing"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1keq2W8xwHBmjofPkinmpqA3CL5HjaICW"
  },
  {
    id: "branding-dentist",
    titleEn: "Dentist Personal Branding Framework",
    titleId: "Framework Personal Branding Dokter Gigi",
    descEn: "Learn how to build patient trust, strengthen professional reputation, and develop a dental practice that is more preferred and highly valued.",
    descId: "Pelajari cara membangun kepercayaan pasien, memperkuat reputasi profesional, dan mengembangkan praktik dokter gigi yang lebih diminati dan bernilai.",
    link: "http://lynk.id/dikdokhealthcare/jk1ywyrqg5k7",
    categoriesEn: ["Clinic", "Hospital", "Dentist", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Dokter Gigi", "Marketing"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1BIOgVIKhFJTNu05EW12h7HsCZuIFHvcs"
  },
  {
    id: "branding-specialist",
    titleEn: "Specialist Personal Branding Framework",
    titleId: "Framework Personal Branding Dokter Spesialis",
    descEn: "Practical strategies to build authority, expand referral networks, and increase professional value as a medical specialist in the digital era.",
    descId: "Strategi praktis untuk membangun otoritas, memperluas jejaring rujukan, dan meningkatkan nilai profesional sebagai dokter spesialis di era digital.",
    link: "http://lynk.id/dikdokhealthcare/08q1016r1ery",
    categoriesEn: ["Clinic", "Hospital", "Specialist Doctor", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Dokter Spesialis", "Marketing"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/17DQ8OjqkRPPe-3b3ON0H3pe2y3HAHPft"
  },
  {
    id: "branding-audit",
    titleEn: "Clinic & Hospital Branding Audit",
    titleId: "Audit Branding Klinik & Rumah Sakit",
    descEn: "Discover the strengths and weaknesses of your healthcare facility's branding through a simple audit that helps identify frequently missed growth opportunities.",
    descId: "Temukan kekuatan dan kelemahan branding fasilitas kesehatan Anda melalui audit sederhana yang membantu mengidentifikasi peluang pertumbuhan yang sering terlewat.",
    link: "http://lynk.id/dikdokhealthcare/81o24216pv5g",
    categoriesEn: ["Clinic", "Hospital", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1PAePgvM04dxS-u3hgNpRrG6p6B_NVFTL"
  },
  {
    id: "meta-ads",
    titleEn: "Meta Ads for Doctors, Clinics & Hospitals",
    titleId: "Meta Ads untuk Dokter, Klinik & Rumah Sakit",
    descEn: "Learn how to run effective Facebook and Instagram ads that strictly comply with healthcare regulations while generating more leads and patients.",
    descId: "Pelajari cara menjalankan iklan Facebook dan Instagram yang efektif, sesuai regulasi kesehatan, serta mampu menghasilkan lebih banyak lead dan pasien.",
    link: "http://lynk.id/dikdokhealthcare/e95w0wqk88p0",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/17TsYgK_lJm9cI3rZKcZXKNjbm_xVKW-6"
  },
  {
    id: "google-ads",
    titleEn: "Google Ads for Doctors, Clinics & Hospitals",
    titleId: "Google Ads untuk Dokter, Klinik & Rumah Sakit",
    descEn: "A guide to understanding Google Ads so your services appear precisely when potential patients are actively searching for the healthcare solutions they need.",
    descId: "Panduan memahami Google Ads agar layanan Anda muncul tepat saat calon pasien sedang aktif mencari solusi kesehatan yang mereka butuhkan.",
    link: "http://lynk.id/dikdokhealthcare/x30141mp37m4",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1TMNCG69HuRbaAfDAtTfsYKDkIgKLGI9i"
  },
  {
    id: "seo",
    titleEn: "SEO for Doctors, Clinics & Hospitals",
    titleId: "SEO untuk Dokter, Klinik & Rumah Sakit",
    descEn: "Learn healthcare SEO strategies to increase visibility on Google Search and Google Maps without having to continuously rely on paid advertising.",
    descId: "Pelajari strategi SEO kesehatan untuk meningkatkan visibilitas di Google dan Google Maps tanpa harus terus bergantung pada iklan berbayar.",
    link: "http://lynk.id/dikdokhealthcare/0ylnznv63l1x",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/18izFvTc-RrfEQHChqRdbM4bXfAolDuH8"
  },
  {
    id: "website",
    titleEn: "Website for Doctors, Clinics & Hospitals",
    titleId: "Website untuk Dokter, Klinik & Rumah Sakit",
    descEn: "Build a website that not only looks professional but is also highly capable of increasing trust and converting visitors into active patients.",
    descId: "Bangun website yang tidak hanya terlihat profesional, tetapi juga mampu meningkatkan kepercayaan dan mengubah pengunjung menjadi pasien.",
    link: "http://lynk.id/dikdokhealthcare/rkjrov7wp7w6",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1KSAxBOW_EVI1_DjLeUnBSgnQe5DjBWkB"
  },
  {
    id: "admin-guide",
    titleEn: "Clinic & Hospital Admin Guide",
    titleId: "Panduan Admin Klinik & Rumah Sakit",
    descEn: "Learn the vital role of admins and customer service in enhancing the patient experience, accelerating response rates, and boosting visit conversions.",
    descId: "Pelajari peran penting admin dan customer service dalam meningkatkan pengalaman pasien, mempercepat respon, dan meningkatkan konversi kunjungan.",
    link: "http://lynk.id/dikdokhealthcare/j4xd91l9q6z8",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Communication"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Komunikasi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/10uZtQmP1vX4iYpu6eDa3pq2i7OY86wPJ"
  },
  {
    id: "marketing-guide",
    titleEn: "Clinic & Hospital Marketing Team Guide",
    titleId: "Panduan Tim Marketing Klinik & Rumah Sakit",
    descEn: "Help your marketing team work with clear direction, using strategies, KPIs, and evaluation systems designed to generate measurable impacts.",
    descId: "Bantu tim marketing bekerja lebih terarah dengan strategi, KPI, dan sistem evaluasi yang jelas untuk menghasilkan dampak yang terukur.",
    link: "https://lynk.id/dikdokhealthcare/d4ejoyelpenz",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/16TxfbXHC_to04ovLIC8FP__V3HhXhNX9"
  },
  {
    id: "sales-guide",
    titleEn: "Clinic & Hospital Sales Team Guide",
    titleId: "Panduan Tim Sales Klinik & Rumah Sakit",
    descEn: "Learn how to build strong collaborations, increase external referrals, and execute ethical sales approaches within the healthcare industry.",
    descId: "Pelajari cara membangun kerja sama, meningkatkan rujukan, dan melakukan pendekatan penjualan yang etis dalam industri kesehatan.",
    link: "http://lynk.id/dikdokhealthcare/e0ve7x1ddjxy",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Sales"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Sales"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/17Fvt6086VO7KhZ9UgQGTz1D6oxeQgeSQ"
  },
  {
    id: "manager-guide",
    titleEn: "Healthcare Facility Sales & Marketing Manager Guide",
    titleId: "Panduan Sales & Marketing Manager Faskes",
    descEn: "A practical framework to align your sales and marketing teams into a more measurable, effective, and sustainable growth machine.",
    descId: "Framework praktis untuk menyelaraskan tim sales dan marketing menjadi mesin pertumbuhan yang lebih terukur, efektif, dan berkelanjutan.",
    link: "http://lynk.id/dikdokhealthcare/5pk5vyq8q2q1",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Sales", "Management"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Sales", "Management"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1RPbSZhI90FxZU6uY3YM24Xf0A926GiIM"
  },
  {
    id: "nurse-guide",
    titleEn: "Nurse Communication Guide",
    titleId: "Komunikasi Perawat",
    descEn: "Enhance therapeutic communication skills to build patient trust, elevate service satisfaction levels, and strengthen healthcare team collaboration.",
    descId: "Tingkatkan kemampuan komunikasi terapeutik untuk membangun kepercayaan pasien, meningkatkan kepuasan layanan, dan memperkuat kolaborasi tim kesehatan.",
    link: "http://lynk.id/dikdokhealthcare/vvgwnl93kjrj",
    categoriesEn: ["Clinic", "Hospital", "Nurse", "Strategy", "Communication"],
    categoriesId: ["Klinik", "Rumah Sakit", "Perawat", "Strategi", "Komunikasi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1tBa0z4llddDmpthuHu6N4W-ycmvhatyH"
  },
  {
    id: "dental-assistant-guide",
    titleEn: "Dental Assistant Communication Guide",
    titleId: "Komunikasi Asisten Dokter Gigi",
    descEn: "A guide to helping patients feel completely comfortable, calm, and reassured throughout their dental treatment through effective and empathetic communication.",
    descId: "Panduan membantu pasien merasa lebih nyaman, tenang, dan percaya selama proses perawatan gigi melalui komunikasi yang efektif dan empatik.",
    link: "http://lynk.id/dikdokhealthcare/0xn7v96mo3wo",
    categoriesEn: ["Clinic", "Hospital", "Nurse", "Strategy", "Communication"],
    categoriesId: ["Klinik", "Rumah Sakit", "Perawat Gigi", "Strategi", "Komunikasi"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1CTRFWh7kutf8a6BRI3bXKbOUAb86RlXM"
  },
  {
    id: "quality-service",
    titleEn: "Quality Service for All Teams",
    titleId: "Layanan Berkualitas untuk Semua Tim",
    descEn: "Build a consistent culture of service excellence across your entire healthcare team to optimize the patient experience and reinforce facility reputation.",
    descId: "Bangun budaya pelayanan yang konsisten di seluruh tim kesehatan untuk meningkatkan pengalaman pasien dan memperkuat reputasi fasilitas kesehatan.",
    link: "http://lynk.id/dikdokhealthcare/jkp1mxk6dv06",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Sales", "Management"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Sales", "Management"],
    priceType: "FREE",
    thumbnail: "https://lh3.googleusercontent.com/d/1F6yBRTrO6I96f2hXW6Q5pZGKUwMkm7iP"
  },

  // --- Volume 2 ---
  {
    id: "clinic-growth-v2",
    titleEn: "Clinic Growth Framework",
    titleId: "Framework Pertumbuhan Klinik",
    descEn: "Advanced practical steps to scale visibility, build patient trust, and develop your clinic sustainably.",
    descId: "Langkah praktis tingkat lanjut untuk meningkatkan visibilitas, membangun kepercayaan pasien, dan mengembangkan klinik.",
    link: "http://lynk.id/dikdokhealthcare/g6j9wl159609",
    categoriesEn: ["Clinic"],
    categoriesId: ["Klinik"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1I_g9nW9Pk7pIuZTKdCPwY4y8iZwcFfDY",
    originalPrice: "Rp. 255.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "hospital-growth-v2",
    titleEn: "Hospital Growth Framework",
    titleId: "Framework Pertumbuhan Rumah Sakit",
    descEn: "A secondary playbook for hospitals to strengthen referral loops and scale premium medical services.",
    descId: "Buku panduan pelengkap bagi rumah sakit untuk memperkuat jaringan rujukan dan meningkatkan layanan medis premium.",
    link: "http://lynk.id/dikdokhealthcare/e0jm5ym5kwm2",
    categoriesEn: ["Hospital"],
    categoriesId: ["Rumah Sakit"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1CPqU9_QHdpV68wh-swPDTECYdz0NnHPx",
    originalPrice: "Rp. 325.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "branding-gp-v2",
    titleEn: "Doctor Personal Branding Playbook",
    titleId: "Panduan Personal Branding Dokter Umum",
    descEn: "Accelerate your local community reputation and attract ideal patients as a general practitioner.",
    descId: "Akselerasi reputasi komunitas lokal dan tarik pasien ideal Anda sebagai dokter umum.",
    link: "http://lynk.id/dikdokhealthcare/v154ml8zpxvv",
    categoriesEn: ["Clinic", "Hospital", "General Practitioner", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Dokter Umum", "Marketing"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1VlcptE79UtyWs0spjapeGjLyaJMm-Pft",
    originalPrice: "Rp175.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "branding-dentist-v2",
    titleEn: "Dentist Personal Branding Playbook",
    titleId: "Panduan Personal Branding Dokter Gigi",
    descEn: "Creative positioning techniques to help dental practices stand out in competitive urban areas.",
    descId: "Teknik pemosisian kreatif untuk membantu klinik dokter gigi bersaing di area perkotaan yang padat.",
    link: "http://lynk.id/dikdokhealthcare/ppxgqmzxjqjz",
    categoriesEn: ["Clinic", "Hospital", "Dentist", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Dokter Gigi", "Marketing"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1cje4PeENUErIDOdcKgFYpiuqTWOxlpgN",
    originalPrice: "Rp175.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "branding-specialist-v2",
    titleEn: "Doctor Specialist Personal Branding Playbook",
    titleId: "Panduan Personal Branding Dokter Spesialis",
    descEn: "Deep-dive case studies on establishing absolute peer authority and professional referral pipelines.",
    descId: "Studi kasus mendalam dalam membangun otoritas sejawat mutlak dan pipa rujukan profesional.",
    link: "http://lynk.id/dikdokhealthcare/wzv6krl2024m",
    categoriesEn: ["Clinic", "Hospital", "Specialist Doctor", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Dokter Spesialis", "Marketing"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/19qCdHsWFuawCalrKAzujPTjnbNxbbbKm",
    originalPrice: "Rp185.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "branding-audit-v2",
    titleEn: "Clinic & Hospital Brand Audit",
    titleId: "Audit Branding Klinik & Rumah Sakit",
    descEn: "Our secondary assessment checklist to spot leaked opportunities in hospital touchpoints and digital identity.",
    descId: "Daftar periksa penilaian kedua kami untuk menemukan celah kebocoran peluang di rumah sakit dan identitas digital.",
    link: "http://lynk.id/dikdokhealthcare/dopv4l4lpr11",
    categoriesEn: ["Clinic", "Hospital", "Marketing"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1L7Rr_bHM6sXOfBbfvY1LfCTkiq3diPBH",
    originalPrice: "Rp225.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "meta-ads-v2",
    titleEn: "Meta Ads Mastery for Healthcare Packages Ebook",
    titleId: "Penguasaan Meta Ads untuk Layanan Kesehatan Packages Ebook",
    descEn: "Advanced tracking, custom pixel setup, and patient lead generation strategies under strict medical policies.",
    descId: "Pelacakan tingkat lanjut, pengaturan piksel khusus, dan strategi akuisisi pasien di bawah kebijakan medis yang ketat.",
    link: "http://lynk.id/dikdokhealthcare/94yd86l38ek0",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1nu9jxrrrq4H79Pmn8U5Fz8thSWgxB847",
    originalPrice: "Rp275.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "google-ads-v2",
    titleEn: "Learn Google Ads for Healthcare Packages Ebook",
    titleId: "Belajar Google Ads untuk Layanan Kesehatan Packages Ebook",
    descEn: "How to capture high-intent healthcare queries with absolute negative keyword optimization and local landing pages.",
    descId: "Cara menangkap pencarian berniat tinggi dengan optimasi kata kunci negatif mutlak dan halaman landas lokal.",
    link: "http://lynk.id/dikdokhealthcare/5gkznd30e9w0",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1nynu3suWKFgslkAIARNSDYVlk6_gO0bj",
    originalPrice: "Rp275.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "seo-v2",
    titleEn: "Learn SEO for Healthcare Packages Ebook",
    titleId: "Belajar SEO Untuk Layanan Kesehatan Packages Ebook",
    descEn: "Practical schema markup, doctor page citation secrets, and local search superiority for medical practices.",
    descId: "Markup skema praktis, rahasia sitasi halaman dokter, dan keunggulan pencarian lokal untuk praktik medis.",
    link: "http://lynk.id/dikdokhealthcare/plr2d656q7wy",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1hxMASTYXbZdCIvlK4JM6OZY76Nv9sDjf",
    originalPrice: "Rp355.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "website-v2",
    titleEn: "Learn Website for Healthcare Packages Ebook",
    titleId: "Belajar Website untuk Layanan Kesehatan Packages Ebook",
    descEn: "User experience optimization guidelines for clinics, highlighting speed, call-to-actions, and online bookings.",
    descId: "Panduan pengoptimalan pengalaman pengguna untuk klinik, menyoroti kecepatan, panggilan aksi, dan pemesanan online.",
    link: "http://lynk.id/dikdokhealthcare/7vrk95g800x5",
    categoriesEn: ["Clinic", "Hospital", "Digital Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Digital Marketing", "Strategi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1f1Lo2mX-Uy5-s-tBwxySWCDf51rFh3bO",
    originalPrice: "Rp395.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "admin-guide-v2",
    titleEn: "Clinic and Hospital Admin Guide Packages Ebook",
    titleId: "Panduan Admin Klinik dan Rumah Sakit Packages Ebook",
    descEn: "Streamlining call scripts, patient follow-ups, and chat response rates for maximum medical facility conversion.",
    descId: "Merampingkan naskah panggilan, tindak lanjut pasien, dan tingkat respons obrolan untuk konversi fasilitas medis.",
    link: "https://lynk.id/dikdokhealthcare/z14no3lp849n",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Communication"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Komunikasi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1t1CH8OI_Ghf4wfPKLVn_rmon_D9NSjov",
    originalPrice: "Rp215.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "marketing-guide-v2",
    titleEn: "Clinic & Hospital Marketing Team Playbook Packages Ebook",
    titleId: "Panduan Tim Marketing Klinik & Rumah Sakit Packages Ebook",
    descEn: "Complete evaluation frameworks and monthly performance trackers designed exclusively for medical marketers.",
    descId: "Kerangka evaluasi lengkap dan pelacak kinerja bulanan yang dirancang khusus untuk pemasar medis.",
    link: "http://lynk.id/dikdokhealthcare/y91827zgd703",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/14lZpKTej1z4EiQe6pq05LUcs9CnbPg21",
    originalPrice: "Rp265.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "sales-guide-v2",
    titleEn: "Clinic and Hospital Sales Team Guide Packages Ebook",
    titleId: "Panduan Tim Sales Klinik dan Rumah Sakit Packages Ebook",
    descEn: "Ethical cooperation structures and physician liaison tactics to expand professional referral networks safely.",
    descId: "Struktur kerja sama yang etis dan taktik penghubung dokter untuk memperluas jaringan rujukan secara aman.",
    link: "http://lynk.id/dikdokhealthcare/3jv8z6w88wn3",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Sales"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Sales"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1CgBSCkUvwsgGFJYEkZBgKZAdD2H0tn5y",
    originalPrice: "Rp265.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "manager-guide-v2",
    titleEn: "Healthcare Sales & Marketing Manager Guide Packages Ebook",
    titleId: "Panduan Sales & Marketing Manager Layanan Kesehatan Packages Ebook",
    descEn: "Advanced campaign alignment templates and direct budgeting systems for clinical business development directors.",
    descId: "Templat penyelarasan kampanye tingkat lanjut dan sistem penganggaran langsung untuk direktur pengembangan bisnis.",
    link: "http://lynk.id/dikdokhealthcare/z02kv0nkxmre",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Sales", "Management"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Sales", "Management"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1FgJrYoPZb60FXMLhc99GeQAXijVVdxSl",
    originalPrice: "Rp285.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "nurse-guide-v2",
    titleEn: "Nurse Communication Guide Packages Ebook",
    titleId: "Panduan Komunikasi Perawat Packages Ebook",
    descEn: "Standardized operating communication sequences to handle patient anxiety and boost in-clinic satisfaction.",
    descId: "Urutan komunikasi operasi standar untuk menangani kecemasan pasien dan meningkatkan kepuasan klinik.",
    link: "http://lynk.id/dikdokhealthcare/gjy08j756qkq",
    categoriesEn: ["Clinic", "Hospital", "Nurse", "Strategy", "Communication"],
    categoriesId: ["Klinik", "Rumah Sakit", "Perawat", "Strategi", "Komunikasi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1nyOygzq5kaYhuDLShY-42HRRwA4SBbte",
    originalPrice: "Rp215.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "dental-assistant-guide-v2",
    titleEn: "Dental Assistant Communication Guide Packages Ebook",
    titleId: "Panduan Komunikasi Asisten Dokter Gigi Packages Ebook",
    descEn: "Advanced patient reassurance protocols and chair-side presentation frameworks for dental support staff.",
    descId: "Protokol penjaminan pasien tingkat lanjut dan kerangka presentasi untuk staf pendukung gigi.",
    link: "http://lynk.id/dikdokhealthcare/g6lk86gz6nd2",
    categoriesEn: ["Clinic", "Hospital", "Nurse", "Strategy", "Communication"],
    categoriesId: ["Klinik", "Rumah Sakit", "Perawat Gigi", "Strategi", "Komunikasi"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1wCIICQVw7CCbU5MMWyHxrl6bzwcocgzy",
    originalPrice: "Rp215.000",
    currentPrice: "Rp 50k"
  },
  {
    id: "quality-service-v2",
    titleEn: "Healthcare Quality Improvement Guide for All Teams Packages Ebook",
    titleId: "Panduan Peningkatan Kualitas Semua Tim Layanan Kesehatan Packages Ebook",
    descEn: "Continuous improvement systems and patient experience training loops for multi-department hospital environments.",
    descId: "Sistem peningkatan berkelanjutan dan siklus pelatihan pengalaman pasien untuk lingkungan rumah sakit.",
    link: "http://lynk.id/dikdokhealthcare/zm9ywmo8v4mp",
    categoriesEn: ["Clinic", "Hospital", "Marketing", "Strategy", "Sales", "Management"],
    categoriesId: ["Klinik", "Rumah Sakit", "Marketing", "Strategi", "Sales", "Management"],
    priceType: "PAID",
    thumbnail: "https://lh3.googleusercontent.com/d/1coJfRrIG8EKEe7canVpEsAg8V4Vyad5Q",
    originalPrice: "Rp295.000",
    currentPrice: "Rp 50k"
  }
];

export const ebooksData: EbookItem[] = rawEbooksData.map(item => {
  const endsWithFreeEn = item.titleEn.endsWith("Free Ebook");
  const endsWithFreeId = item.titleId.endsWith("Free Ebook");
  const endsWithPackagesEn = item.titleEn.endsWith("Packages Ebook");
  const endsWithPackagesId = item.titleId.endsWith("Packages Ebook");

  return {
    ...item,
    titleEn: item.priceType === "FREE"
      ? (endsWithFreeEn ? item.titleEn : `${item.titleEn} Free Ebook`)
      : (endsWithPackagesEn ? item.titleEn : `${item.titleEn} Packages Ebook`),
    titleId: item.priceType === "FREE"
      ? (endsWithFreeId ? item.titleId : `${item.titleId} Free Ebook`)
      : (endsWithPackagesId ? item.titleId : `${item.titleId} Packages Ebook`),
  };
});
