import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "id";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProblemCard {
  title: string;
  description: string;
  stat?: string;
  impact?: string;
}

export interface FrameworkStep {
  pillar: string;
  title: string;
  description: string;
  details: string[];
}

export interface ServiceItem {
  title: string;
  category: "Acquisition" | "Branding" | "Conversion" | "Strategy" | "Courses";
  description: string;
  features: string[];
  icon: string;
  isSpecialHighlight?: boolean;
}

export interface TargetSegment {
  title: string;
  description: string;
  icon: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    services: string;
    promo: string;
    about: string;
    faq: string;
    contact: string;
    freeConsultation: string;
  };
  hero: {
    sparkleTag: string;
    headline: string;
    subheadline: string;
    description: string;
    ctaButton: string;
    ctaConsultation: string;
    ctaEbook: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  whyDikdok: {
    sectionTitle: string;
    sectionDesc: string;
    col1Badge: string;
    col1Title: string;
    col1Subtitle: string;
    col1Desc: string;
    col1Text1: string;
    col1Text2: string;
    col1Metric1: string;
    col1Metric2: string;
    col1Metric3: string;
    col1Metric4: string;
    col2Title: string;
    col2Desc: string;
    col2Item1: string;
    col2Item2: string;
    col2Item3: string;
    col3Title: string;
    col3Desc: string;
  };
  problems: {
    tag: string;
    title: string;
    titleHighlight: string;
    desc: string;
    impactLabel: string;
    hideLabel: string;
    auditLabel: string;
    interventionLabel: string;
    auditSummaryTag: string;
    auditSummaryText: string;
    auditSummaryLoader: string;
    cards: ProblemCard[];
    diagnostics: string[];
  };
  framework: {
    tag: string;
    title: string;
    desc: string;
    activePhase: string;
    specLabel: string;
    activitiesLabel: string;
    paradigmTag: string;
    paradigmText: string;
    paradigmSubtext: string;
    steps: FrameworkStep[];
  };
  services: {
    tag: string;
    title: string;
    titleHighlight: string;
    desc: string;
    categories: {
      All: string;
      Acquisition: string;
      Branding: string;
      Conversion: string;
      Strategy: string;
      Courses: string;
    };
    deliverablesLabel: string;
    specialHighlightTag: string;
    list: ServiceItem[];
  };
  promo: {
    tag: string;
    title: string;
    titleHighlight: string;
    desc: string;
    downloadBtn: string;
    formatEn: string;
    formatId: string;
    targets: Array<{ en: string; id: string }>;
  };
  whoWeWorkWith: {
    title: string;
    desc: string;
    segments: TargetSegment[];
  };
  about: {
    tag: string;
    headline: string;
    paragraph: string;
    stat1Val: string;
    stat1Lbl: string;
    stat2Val: string;
    stat2Lbl: string;
    stat3Val: string;
    stat3Lbl: string;
  };
  faq: {
    tag: string;
    title: string;
    desc: string;
    notAnsweredQ: string;
    notAnsweredA: string;
    ctaButton: string;
    items: FAQItem[];
  };
  contact: {
    tag: string;
    title: string;
    titleHighlight: string;
    desc: string;
    ctaButton: string;
    formTitle: string;
    formSubtitle: string;
    lblRepName: string;
    phRepName: string;
    lblClinicName: string;
    phClinicName: string;
    lblSelectedService: string;
    lblLivePreview: string;
    liveDraftTag: string;
    draftIntro: string;
    draftRepName: string;
    draftClinic: string;
    draftService: string;
    draftOutro: string;
    draftThankYou: string;
  };
  modal: {
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePH: string;
    role: string;
    roleOwner: string;
    roleManager: string;
    roleOthers: string;
    roleOthersPH: string;
    clinicName: string;
    clinicNamePH: string;
    clinicAddress: string;
    clinicAddressPH: string;
    socialMedia: string;
    socialMediaPH: string;
    whatsapp: string;
    whatsappPH: string;
    picName: string;
    picNamePH: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    close: string;
    orRedirect: string;
  };
  footer: {
    desc: string;
    complianceNote: string;
    complianceText: string;
    navTitle: string;
    contactTitle: string;
    hqTitle: string;
    territoryLbl: string;
    territoryVal: string;
    philosophyLbl: string;
    philosophyVal: string;
    copyright: string;
    privacy: string;
    legalSeparator: string;
    medicalCode: string;
  };
}

const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      promo: "Ebook",
      about: "About",
      faq: "FAQ",
      contact: "Contact Us",
      freeConsultation: "Free Consultation"
    },
    hero: {
      sparkleTag: "Growth Marketing Partner for Healthcare",
      headline: "Trusted Partner for Growth",
      subheadline: "Clinics & Hospital",
      description: "We empower medical professionals, clinics, hospitals, and healthcare organizations to achieve sustainable growth through data driven marketing, patient acquisition & retention systems, and excellence in communication",
      ctaButton: "Claim Free Consultation",
      ctaConsultation: "Claim Free Consultation",
      ctaEbook: "Claim Free Ebook",
      card1Title: "Doctor Personal Branding",
      card1Desc: "Build authority & reputation",
      card2Title: "Digital Marketing",
      card2Desc: "Increase patient visits",
      card3Title: "Virtual Assistance for Healthcare",
      card3Desc: "Online operational support"
    },
    whyDikdok: {
      sectionTitle: "WHY DIKDOK HEALTHCARE?",
      sectionDesc: "A dedicated healthcare performance accelerator executing beyond conventional partners.",
      col1Badge: "MURI Record Winner",
      col1Title: "In the List of MURI Records",
      col1Subtitle: "A Milestone in Healthcare Engagement in Indonesia",
      col1Desc: "Officially Registered National Record Holder",
      col1Text1: "In 2023, Dikdok successfully organized a 100-day Instagram Live Marathon featuring 100 healthcare professionals from across Indonesia.",
      col1Text2: "This initiative is In the List of MURI Records (Indonesian World Records Museum) as a form of recognition for its impact, consistency, and dedication to promoting health education for the community.",
      col1Metric1: "100 Healthcare Professionals Involved",
      col1Metric2: "100 Consecutive Days",
      col1Metric3: "100 Instagram Live Sessions",
      col1Metric4: "1 In the List of MURI Records",
      col2Title: "Trust, Growth, Impact",
      col2Desc: "Our baseline standard metrics for every single healthcare engagement.",
      col2Item1: "Data-Driven",
      col2Item2: "Growth-Oriented",
      col2Item3: "Healthcare Focus",
      col3Title: "Since 2021",
      col3Desc: "Trusted Collab with GP (General Practitioner), Dentist & Specialist"
    },
    problems: {
      tag: "Healthcare Operational Hurdles",
      title: "Healthcare Growth Requires ",
      titleHighlight: "More Than Just Marketing",
      desc: "Many healthcare providers invest in marketing but still struggle to generate consistent patient growth because they ignore gaps in the patient journey.",
      impactLabel: "Impact",
      hideLabel: "Hide",
      auditLabel: "Audit",
      interventionLabel: "DIKDOK Intervention Schema:",
      auditSummaryTag: "Audit Summary",
      auditSummaryText: `"We help healthcare providers attract more patients, improve patient experience, and grow their practice sustainably through data-driven marketing strategies and proven communication systems."`,
      auditSummaryLoader: "Analyze the Triple-Pillar Framework",
      cards: [
        {
          title: "Low Patient Inquiries",
          description: "Clinics often operate below clinical capacity because they rely exclusively on offline referrals and word-of-mouth recommendations.",
          stat: "-35% Avg Capacity",
          impact: "Unstable monthly clinic revenue"
        },
        {
          title: "High Advertising Costs",
          description: "Running marketing campaigns without custom landing pages or high-intent medical targeting results in wasted budget and high cost-per-lead.",
          stat: "3x Higher CPA",
          impact: "Inefficient and unsustainable ad budgets"
        },
        {
          title: "Poor Google Visibility",
          description: "Patients in critical need search Google first. If your practice or clinic doesn't rank on the local 3-pack or Organic SEO, your competition takes the patient.",
          stat: "74% Click Loss",
          impact: "Invisible to near-by clinic seekers"
        },
        {
          title: "Low Conversion Rates",
          description: "Generating traffic is only half the battle. If your digital touchpoints fail to build medical credibility and empathy, prospective patients bounce.",
          stat: "<1.5% Web-to-Call",
          impact: "Wasted interest and lost care opportunities"
        },
        {
          title: "Ineffective Websites",
          description: "Slow loading speeds, convoluted service menus, lack of doctor profiles, or complex appointment booking screens turn prospective patients away.",
          stat: "4s+ Load Time",
          impact: "Bounces directly to competitive clinics"
        },
        {
          title: "No Clear Growth Strategy",
          description: "Trying single channels ad-hoc without an integrated patient pipeline creates disjointed clinical messaging and unpredictable clinic growth.",
          stat: "0 Integrated KPI",
          impact: "Loss of strategic control and scaling power"
        }
      ],
      diagnostics: [
        "Most clinics rely on volatile offline recommendations. We build predictable local digital funnels that consistently feed clinic scheduling calendars.",
        "Bidding on non-specific words with stock landing pages increases patient acquisition costs. We build tight ad match structures for surgical conversion.",
        "Prospective patients trust local search map packs. We program detailed service page structures and localized reviews directories so you stand out.",
        "A contact page is not enough. We replace generic contact forms with interactive triage booking questionnaires to keep prospects engaged.",
        "Slow sites lose 50% of mobile users. We construct optimized, lightning-fast pages featuring doctor credentials, visual clinical results, and real-time support.",
        "Isolated campaigns generate noise, not patients. Our integrated Growth Framework aligns top-of-funnel ads with front-desk communication SOPs."
      ]
    },
    framework: {
      tag: "Proprietary Architecture",
      title: "The Dikdok Growth Framework™",
      desc: "Helping healthcare providers achieve sustainable patient growth through three core pillars.",
      activePhase: "Active Phase",
      specLabel: "Pillar 0{n} System Spec",
      activitiesLabel: "Operational Activities:",
      paradigmTag: "The Paradigm Shift",
      paradigmText: `"Most Healthcare Providers Focus Only on Marketing. We Focus on the Entire Patient Growth Journey."`,
      paradigmSubtext: "From initial diagnosis and strategic acquisition to conversion scripts and long-term retention.",
      steps: [
        {
          pillar: "Diagnose",
          title: "Data-Driven Insights",
          description: "Analyze marketing performance, patient acquisition channels, online visibility, and operational bottlenecks to uncover growth opportunities.",
          details: [
            "Rigorous patient acquisition funnel audits",
            "Local SEO ranking & search market analysis",
            "Analysis of medical trust barriers & bottlenecks",
            "Competitor landscape & positioning report"
          ]
        },
        {
          pillar: "Attract",
          title: "Effective Healthcare Marketing",
          description: "Generate awareness, inquiries, and appointments through strategic marketing campaigns and digital growth systems.",
          details: [
            "High-intent search campaign targeting",
            "Localized Google Maps optimization",
            "Aesthetic & clinical credibility funnels",
            "Multi-channel performance ads (Google & Meta)"
          ]
        },
        {
          pillar: "Convert",
          title: "Patient Communication Excellence",
          description: "Transform more leads into booked appointments through communication systems, SOPs, and team training.",
          details: [
            "Front-desk WhatsApp response training",
            "Medical appointment handling SOP development",
            "Response time optimization framework",
            "EHR-friendly conversion tracking loops"
          ]
        }
      ]
    },
    services: {
      tag: "Surgical Capabilities",
      title: "Our Services",
      titleHighlight: "",
      desc: "",
      categories: {
        All: "All",
        Acquisition: "Acquisition",
        Branding: "Branding",
        Conversion: "Conversion",
        Strategy: "Strategy",
        Courses: "Courses"
      },
      deliverablesLabel: "Deliverables & focus:",
      specialHighlightTag: "DOKTER PERSONAL BRANDING SPECIAL",
      list: [
        {
          title: "Personal Branding",
          category: "Branding",
          description: "High-impact, customized authority campaigns establishing medical practitioners as the benchmark choice.",
          features: [
            "Physician authority visual assets",
            "Medical thought-leadership outlines",
            "Niche specialty patient funnels",
            "Compliance audits for clinical ads"
          ],
          icon: "Sparkles",
          isSpecialHighlight: true
        },
        {
          title: "Doctor Management Team",
          category: "Conversion",
          description: "Align administrative, front-desk, and client intake staff with high-retention performance targets.",
          features: [
            "Client response metrics establishment",
            "Queue-to-admission flow tracking",
            "Integration with patient scheduling tech",
            "Administrative patient handling scripts"
          ],
          icon: "Users"
        },
        {
          title: "Virtual Assistance for Healthcare",
          category: "Conversion",
          description: "Equip medical practitioners and clinicians with certified digital assistance to streamline administrative scheduling and patient intake.",
          features: [
            "Certified medical triage assistants",
            "Patient queue & appointment streamline",
            "Omnichannel WhatsApp desk managers",
            "Daily activity logs & reporting"
          ],
          icon: "Compass"
        },
        {
          title: "Meta Ads",
          category: "Acquisition",
          description: "Target specialized healthcare demographics and local territories using clicking-to-WhatsApp visual funnels.",
          features: [
            "Hyper-local radius coordinate triggers",
            "Structured video case showcases",
            "Intelligent audience split tests",
            "Instant click-to-chat onboarding"
          ],
          icon: "Compass"
        },
        {
          title: "Google Ads",
          category: "Acquisition",
          description: "Capture high-intent queries at the exact moments patients explore medical operations and treatments.",
          features: [
            "High-intent keyword negative lists",
            "Strict medical advertising validation",
            "Elite medical-grade conversion pages",
            "Direct hotline tap integrations"
          ],
          icon: "Search"
        },
        {
          title: "SEO",
          category: "Acquisition",
          description: "Dominate search engine indexes to acquire persistent placement for critical diagnoses and procedures.",
          features: [
            "Detailed disease semantic silos",
            "Trusted review aggregation systems",
            "Optimized directory citation profiles",
            "Local Google 3-Pack prominence"
          ],
          icon: "Globe"
        },
        {
          title: "Website",
          category: "Branding",
          description: "Premium healthcare platforms programmed for maximum medical authority and fast patient intake paths.",
          features: [
            "Server rendering under 2 seconds",
            "Professional credentials showcase grid",
            "Adaptive touch booking workflows",
            "Informed consent compliance standards"
          ],
          icon: "Laptop"
        },
        {
          title: "Training Admin/Front Office",
          category: "Courses",
          description: "Comprehensive training programs to optimize patient booking conversions, front-desk hospitality, and team administrative flows.",
          features: [
            "Front-desk WhatsApp service lessons",
            "High-conversion booking script templates",
            "Patient conflict resolution & handling",
            "Daily operational efficiency framework"
          ],
          icon: "Users"
        },
        {
          title: "Public Speaking Doctor (Private Class)",
          category: "Courses",
          description: "Exclusive, personalized training for medical practitioners to build clinical authority, digital presence, and professional confidence.",
          features: [
            "Media interview & public speaking mastery",
            "Structuring high-impact healthcare content",
            "Professional vocal delivery & body language",
            "Clinical branding & thought-leadership development"
          ],
          icon: "Sparkles"
        }
      ]
    },
    promo: {
      tag: "17 JULY ANNIVERSARY CELEBRATION",
      title: "Exclusive Lead ",
      titleHighlight: "Magnets & Guides",
      desc: "To commemorate DIKDOK's Anniversary on 17 July, download our exclusive collection of 1-Page E-books to optimize your operations instantly.",
      downloadBtn: "Download Free E-book",
      formatEn: "Free E-book for {target}",
      formatId: "E-book Gratis untuk {target}",
      targets: [
        { en: "Clinics", id: "Klinik" },
        { en: "Hospitals", id: "Rumah Sakit" },
        { en: "Branding GP", id: "Branding Dokter Umum" },
        { en: "Branding Dentist", id: "Branding Dokter Gigi" },
        { en: "Branding Specialist", id: "Branding Dokter Spesialis" },
        { en: "Audit Your Clinics & Hospitals", id: "Audit Klinik & Rumah Sakit" },
        { en: "Learn Meta Ads", id: "Pelajari Meta Ads" },
        { en: "Google Ads", id: "Google Ads" },
        { en: "SEO", id: "SEO" },
        { en: "Website", id: "Website" },
        { en: "Admin Clinics & Hospitals", id: "Admin Klinik & Rumah Sakit" },
        { en: "Marketing Team", id: "Tim Pemasaran" },
        { en: "Sales Team", id: "Tim Penjualan" },
        { en: "Manager Marketing", id: "Manajer Pemasaran" },
        { en: "Nurse", id: "Perawat" },
        { en: "Dental Assistant", id: "Asisten Dokter Gigi" },
        { en: "Customer Services", id: "Layanan Pelanggan" }
      ]
    },
    whoWeWorkWith: {
      title: "Who We Work With",
      desc: "",
      segments: [
        {
          title: "Medical Practices",
          description: "Increase private patients and streamline your bookings with automated booking systems.",
          icon: "Stethoscope"
        },
        {
          title: "Specialist Clinics",
          description: "Attract targeted patients seeking specialized treatments and medical consultations.",
          icon: "Activity"
        },
        {
          title: "Dental Clinics",
          description: "Fill your appointment slots for premium and aesthetic dentistry treatments.",
          icon: "Sparkles"
        },
        {
          title: "Aesthetic Clinics",
          description: "Promote skincare and cosmetic procedures with high-visual marketing pipelines.",
          icon: "Award"
        },
        {
          title: "Healthcare Centers",
          description: "Scale public health services and multi-specialty wellness packages seamlessly.",
          icon: "Home"
        },
        {
          title: "Hospitals",
          description: "Acquire multi-ward patients, promote diagnostic packages, and manage your reputation.",
          icon: "Building"
        },
        {
          title: "Healthcare Organizations",
          description: "Build strong digital outreach for professional medical associations and groups.",
          icon: "HeartHandshake"
        },
        {
          title: "Wellness Spas & Centers",
          description: "Promote holistic wellness programs, massage treatments, and wellness packages.",
          icon: "Leaf"
        },
        {
          title: "Healthcare Communities",
          description: "Engage members and patient support groups with strategic content.",
          icon: "Users"
        },
        {
          title: "Healthcare Brands",
          description: "Strengthen brand authority and drive product distribution via health professionals.",
          icon: "Tag"
        }
      ]
    },
    about: {
      tag: "ORIGINS & COMMITMENT",
      headline: "About Dikdok Healthcare",
      paragraph: "",
      stat1Val: "1",
      stat1Lbl: "In the list of Muri Records",
      stat2Val: "100%",
      stat2Lbl: "Healthcare Focus",
      stat3Val: "10.600+",
      stat3Lbl: "Community Member"
    },
    faq: {
      tag: "",
      title: "Frequently Asked Questions",
      desc: "",
      notAnsweredQ: "Have another question not answered here?",
      notAnsweredA: "Our clinical growth strategists are available on WhatsApp for direct responses.",
      ctaButton: "Ask on WhatsApp",
      items: [
        {
          question: "Do you only work with clinics?",
          answer: "No, we work across the entire healthcare ecosystem. In addition to specialist and aesthetic clinics, we serve multi-specialty private practices, general dental studios, wellness centers, diagnostic lab networks, individual provider offices, and private regional hospitals."
        },
        {
          question: "Can we start with one service?",
          answer: "Absolutely. While our high-growth clients prefer our integrated end-to-end consulting framework (Diagnose, Attract, Convert), we understand that you may want to address immediate bottlenecks first. We offer targeted solutions like High-Intent Google Search Ads, hyper-localized SEO audits, or front-desk WhatsApp training scripts."
        },
        {
          question: "Do you provide strategy consultations?",
          answer: "Yes. Every client starts with our initial, signature strategy workshop. We audit your clinic's current online position, review competitive pricing plans, and outline an executable 90-day patient pipeline before anyone spends a single dollar on ad networks."
        },
        {
          question: "How do you measure success?",
          answer: "We avoid vanity metrics. Success is quantified directly by: 1) Cost-per-Qualified Inquiry, 2) Lead-to-Appointment Booking rate, 3) Patient Attendance rate at your clinic, and 4) Overall growth in clinic capacity utilization. We provide interactive dashboards detailing active patients down to their referral source."
        },
        {
          question: "Who are the expert team members at Dikdok Healthcare?",
          answer: "Since 2021, Dikdok Healthcare has grown rapidly as a strategic growth partner in the healthcare industry. Our excellence is backed by solid leadership, featuring a Founder with over 6 years of experience in healthcare marketing, and a Co-Founder with deep expertise as a digital marketing specialist for 3 years.\n\nWe are committed to maximizing the growth of clinics and hospitals, reinforced by our expert team:\n\nChristine: Account Manager\nNatalie: Data Specialist\nDini: Social Media Specialist\nMiftah: SEO & Web Specialist\nYassa: Ads Specialist"
        }
      ]
    },
    contact: {
      tag: "Unlock Clinical Margin & Capacity",
      title: "Ready to Attract ",
      titleHighlight: "More Patients?",
      desc: "Let's discuss your goals and identify opportunities to help your healthcare organization grow sustainably. Connect directly via WhatsApp to initiate your free audit strategy session.",
      ctaButton: "Book Free Consultation",
      formTitle: "Schedule Your Free Audit",
      formSubtitle: "Pre-populate your care inquiry to start instantly.",
      lblRepName: "Representative Name",
      phRepName: "Dr. Amanda / Admin Manager",
      lblClinicName: "Clinic Name",
      phClinicName: "Medika Dental Care / Jakarta General",
      lblSelectedService: "Selected Service",
      lblLivePreview: "Live Message Draft",
      liveDraftTag: "Live Draft",
      draftIntro: "Hi Dikdok Team,",
      draftRepName: "Representative Name:",
      draftClinic: "Clinic:",
      draftService: "Interested In:",
      draftOutro: "Looking forward to discussing how we can grow our patient acquisition.",
      draftThankYou: "Thank you."
    },
    modal: {
      title: "Request Strategic Intake Setup",
      subtitle: "To download your chosen 1-Page E-book or claim free consultation, kindly complete this credential validation form. You will be redirected to confirm your information.",
      fullName: "Full Name (Nama Lengkap)",
      fullNamePH: "e.g. Dr. Amanda Pratama",
      role: "Position / Role (Jabatan)",
      roleOwner: "Owner",
      roleManager: "Manager",
      roleOthers: "Others (Lainnya)",
      roleOthersPH: "Please specify your role description",
      clinicName: "Clinic / Hospital Name (Nama Klinik / Rumah Sakit)",
      clinicNamePH: "e.g. Medika Premium Dental",
      clinicAddress: "Clinic Address (Alamat Klinik)",
      clinicAddressPH: "e.g. Jl. Jend. Sudirman No. 12, Jakarta",
      socialMedia: "Social Media Account Link (Tautan Media Sosial)",
      socialMediaPH: "e.g. instagram.com/clinic_account",
      whatsapp: "WhatsApp Number (Nomor WhatsApp)",
      whatsappPH: "e.g. 6281234567890",
      picName: "Name of PIC - Manager or Owner (Nama PIC)",
      picNamePH: "e.g. Amanda Pratama (Owner)",
      submit: "Proceed to Access Resources",
      submitting: "Validating Credentials...",
      successTitle: "Intake Verified Successfully!",
      successDesc: "Thank you! Your information has been secured. Click below to proceed to your resource download or secure expert scheduling directly.",
      close: "Back to Page",
      orRedirect: "Submit Confirmation on Google Form"
    },
    footer: {
      desc: "DIKDOK helps clinics, specialist centers, dentist offices, and private medical groups attract more high-value patient appointments and establish long-term digital clinical authority.",
      complianceNote: "Compliance Note",
      complianceText: "All client campaigns are customized relative to local medicine laws and ethics codes regarding patient marketing.",
      navTitle: "Platform Navigation",
      contactTitle: "Consulting Headquarters",
      hqTitle: "Consulting Headquarters",
      territoryLbl: "Coverage Territory:",
      territoryVal: "Southeast Asia Primary (Indonesia Regional Focus)",
      philosophyLbl: "Philosophy:",
      philosophyVal: `"Growth Marketing Partner for Healthcare"`,
      copyright: "DIKDOK.ID Healthcare Growth Partner. All Rights Reserved.",
      privacy: "Privacy Policy",
      legalSeparator: "•",
      medicalCode: "Medical Advertising Code"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      promo: "Ebook",
      about: "Tentang Kami",
      faq: "FAQ",
      contact: "Hubungi Kami",
      freeConsultation: "Konsultasi Gratis"
    },
    hero: {
      sparkleTag: "Partner Pemasaran Pertumbuhan untuk Layanan Kesehatan",
      headline: "Partner Terpercaya untuk Pertumbuhan",
      subheadline: "Klinik & Rumah Sakit",
      description: "Kami membantu profesional medis, klinik, rumah sakit, dan organisasi layanan kesehatan mencapai pertumbuhan berkelanjutan melalui strategi pemasaran berbasis data, sistem akuisisi & retensi pasien, serta keunggulan komunikasi",
      ctaButton: "Klaim Konsultasi Gratis",
      ctaConsultation: "Klaim Konsultasi Gratis",
      ctaEbook: "Klaim Ebook Gratis",
      card1Title: "Personal Branding Dokter",
      card1Desc: "Bangun otoritas & reputasi",
      card2Title: "Digital Marketing",
      card2Desc: "Tingkatkan kunjungan pasien",
      card3Title: "Virtual Assistance for Healthcare",
      card3Desc: "Bantuan operasional online"
    },
    whyDikdok: {
      sectionTitle: "MENGAPA DIKDOK HEALTHCARE?",
      sectionDesc: "Akselerator kinerja layanan kesehatan berdedikasi yang bekerja jauh melampaui mitra konvensional.",
      col1Badge: "Rilis Rekor MURI",
      col1Title: "Masuk dalam Daftar Rekor MURI",
      col1Subtitle: "Tonggak Sejarah Keterlibatan Layanan Kesehatan di Indonesia",
      col1Desc: "Pemegang Rekor Nasional Resmi Terdaftar",
      col1Text1: "Pada tahun 2023, Dikdok berhasil menyelenggarakan Maraton Instagram Live selama 100 hari yang menghadirkan 100 profesional kesehatan dari seluruh Indonesia.",
      col1Text2: "Inisiatif ini Masuk dalam Daftar Rekor MURI (Museum Rekor-Dunia Indonesia) sebagai bentuk penghargaan atas dampak, konsistensi, dan dedikasinya dalam mempromosikan edukasi kesehatan bagi masyarakat.",
      col1Metric1: "100 Profesional Kesehatan Terlibat",
      col1Metric2: "100 Hari Berturut-turut",
      col1Metric3: "100 Sesi Instagram Live",
      col1Metric4: "1 Masuk Daftar Rekor MURI",
      col2Title: "Trust, Growth, Impact",
      col2Desc: "Metrik standar acuan kami untuk setiap kolaborasi layanan kesehatan.",
      col2Item1: "Berbasis Data",
      col2Item2: "Berorientasi Pertumbuhan",
      col2Item3: "Fokus Layanan Kesehatan",
      col3Title: "Sejak 2021",
      col3Desc: "Kolaborasi Terpercaya dengan Dokter Umum, Dokter Gigi & Spesialis"
    },
    problems: {
      tag: "Hambatan Operasional Layanan Kesehatan",
      title: "Pertumbuhan Layanan Kesehatan Butuh ",
      titleHighlight: "Lebih Dari Sekadar Pemasaran",
      desc: "Banyak penyedia layanan kesehatan berinvestasi dalam pemasaran namun masih kesulitan menghasilkan pertumbuhan pasien yang konsisten karena mengabaikan celah dalam perjalanan pasien.",
      impactLabel: "Dampak",
      hideLabel: "Sembunyikan",
      auditLabel: "Audit",
      interventionLabel: "Skema Intervensi DIKDOK:",
      auditSummaryTag: "Ringkasan Audit",
      auditSummaryText: `"Kami membantu penyedia layanan kesehatan menarik lebih banyak pasien, meningkatkan pengalaman pasien, dan menumbuhkan praktik mereka secara berkelanjutan melalui strategi pemasaran berbasis data dan sistem komunikasi yang terbukti."`,
      auditSummaryLoader: "Analisis Kerangka Kerja Tiga Pilar",
      cards: [
        {
          title: "Rendahnya Pertanyaan Pasien",
          description: "Klinik sering beroperasi di bawah kapasitas klinis karena hanya mengandalkan rujukan offline dan rekomendasi dari mulut ke mulut.",
          stat: "-35% Rata-rata Kapasitas",
          impact: "Pendapatan bulanan klinik tidak stabil"
        },
        {
          title: "Biaya Iklan yang Tinggi",
          description: "Menjalankan kampanye pemasaran tanpa landing page khusus atau penargetan medis berintensitas tinggi menghasilkan pemborosan anggaran iklan.",
          stat: "3x CPA Lebih Tinggi",
          impact: "Anggaran iklan tidak efisien dan tidak berkelanjutan"
        },
        {
          title: "Visibilitas Google yang Buruk",
          description: "Pasien dalam kondisi kritis mencari di Google terlebih dahulu. Jika praktik atau klinik Anda tidak muncul di local 3-pack, kompetitor yang akan mengambil pasien.",
          stat: "74% Kehilangan Klik",
          impact: "Tidak terlihat oleh pencari klinik terdekat"
        },
        {
          title: "Tingkat Konversi Rendah",
          description: "Mendatangkan kunjungan web hanyalah setengah perjuangan. Jika titik kontak digital gagal membangun kredibilitas medis, calon pasien akan pergi.",
          stat: "<1.5% Web-ke-Telepon",
          impact: "Ketertarikan terbuang & peluang perawatan hilang"
        },
        {
          title: "Situs Web Tidak Efektif",
          description: "Kecepatan muat yang lambat, menu layanan berbelit-belit, kurangnya profil dokter, atau layar pendaftaran rumit membuat calon pasien batal mendaftar.",
          stat: "Muat 4 detik lebih",
          impact: "Calon pasien langsung kabur ke klinik pesaing"
        },
        {
          title: "Tidak Ada Strategi Pertumbuhan",
          description: "Mencoba satu saluran secara ad-hoc tanpa pipa pasien terintegrasi menciptakan pesan klinis tidak terpadu dan kuantitas pasien tidak menentu.",
          stat: "0 KPI Terintegrasi",
          impact: "Kehilangan kendali strategis dan daya penskalaan"
        }
      ],
      diagnostics: [
        "Sebagian besar klinik mengandalkan rekomendasi offline yang tidak menentu. Kami membangun corong digital lokal yang konsisten mengisi kalender klinik.",
        "Menawar kata kunci tidak spesifik dengan landing page bawaan melipatgandakan biaya akuisisi pasien. Kami membangun struktur iklan berkonversi bedah.",
        "Calon pasien sangat mempercayai ulasan lokal Google Maps. Kami memprogram struktur halaman layanan detail dan direktori ulasan agar Anda menonjol.",
        "Halaman kontak saja tidak cukup. Kami mengganti formulir kontak generik dengan kuesioner penyaringan interaktif agar prospek tetap terlibat.",
        "Situs lambat kehilangan 50% pengguna seluler. Kami membangun halaman cepat yang mengutamakan kredensial dokter, hasil visual, dan dukungan instan.",
        "Kampanye terpisah hanya menghasilkan kebisingan, bukan pasien. Framework kami menyelaraskan iklan luar dengan SOP WhatsApp staf front-desk Anda."
      ]
    },
    framework: {
      tag: "Arsitektur Kepemilikan",
      title: "The Dikdok Growth Framework™",
      desc: "Membantu penyedia layanan kesehatan mencapai pertumbuhan pasien yang berkelanjutan melalui tiga pilar inti.",
      activePhase: "Fase Aktif",
      specLabel: "Spesifikasi Sistem Pilar 0{n}",
      activitiesLabel: "Aktivitas Operasional:",
      paradigmTag: "Pergeseran Paradigma",
      paradigmText: `"Sebagian Besar Penyedia Layanan Kesehatan Hanya Fokus pada Pemasaran. Kami Fokus pada Seluruh Perjalanan Pertumbuhan Pasien."`,
      paradigmSubtext: "Mulai dari diagnosis awal dan akuisisi strategis hingga naskah konversi dan retensi jangka panjang.",
      steps: [
        {
          pillar: "Diagnose (Mendiagnosis)",
          title: "Wawasan Berbasis Data",
          description: "Menganalisis kinerja pemasaran, saluran akuisisi pasien, visibilitas online, dan hambatan operasional untuk menemukan peluang pertumbuhan.",
          details: [
            "Audit saluran akuisisi pasien yang ketat",
            "Analisis peringkat SEO Lokal & pasar pencarian",
            "Analisis hambatan kepercayaan medis & rintangan",
            "Laporan lanskap pesaing & pemosisian pasar"
          ]
        },
        {
          pillar: "Attract (Menarik)",
          title: "Pemasaran Kesehatan yang Efektif",
          description: "Menghasilkan kesadaran, pertanyaan, dan janji temu melalui kampanye pemasaran strategis dan sistem pertumbuhan digital.",
          details: [
            "Penargetan kampanye pencarian minat tinggi",
            "Optimasi Google Maps lokal secara mendalam",
            "Corong kredibilitas estetis & klinis",
            "Iklan kinerja kancah multi-saluran (Google & Meta)"
          ]
        },
        {
          pillar: "Convert (Mengonversi)",
          title: "Keunggulan Komunikasi Pasien",
          description: "Mengubah lebih banyak prospek menjadi janji temu yang terjadwal melalui sistem komunikasi, SOP, dan pelatihan tim.",
          details: [
            "Pelatihan respons WhatsApp staf front-desk",
            "Penyusunan SOP penanganan janji temu medis",
            "Kerangka kerja optimasi waktu tanggap prospek",
            "Siklus pelacakan konversi ramah EHR"
          ]
        }
      ]
    },
    services: {
      tag: "Kemampuan Bedah Medis",
      title: "Layanan Kami",
      titleHighlight: "",
      desc: "",
      categories: {
        All: "Semua",
        Acquisition: "Akuisisi",
        Branding: "Branding",
        Conversion: "Konversi (Preservation)",
        Strategy: "Strategi",
        Courses: "Kursus/Pelatihan"
      },
      deliverablesLabel: "Deliverables & fokus utama:",
      specialHighlightTag: "DOKTER PERSONAL BRANDING SPESIAL",
      list: [
        {
          title: "Personal Branding",
          category: "Branding",
          description: "Kampanye otoritas kustom berdaya dampak tinggi untuk menetapkan praktisi medis sebagai pilihan utama lokal.",
          features: [
            "Arsip aset visual otoritas dokter",
            "Garis besar kepemimpinan pemikiran medis",
            "Corong pasien khusus spesialisasi medis",
            "Audit kepatuhan kode etik iklan klinis"
          ],
          icon: "Sparkles",
          isSpecialHighlight: true
        },
        {
          title: "Doctor Management Team",
          category: "Conversion",
          description: "Menyelaraskan staf administrasi, pelayanan front-desk, dan tim penerima pasien dengan target retensi tinggi.",
          features: [
            "Penetapan metrik respons chat pasien",
            "Pelacakan alur antrean hingga admisi klinis",
            "Integrasi dengan teknologi penjadwalan",
            "SOP & naskah sapaan pasien administratif"
          ],
          icon: "Users"
        },
        {
          title: "Virtual Assistance for Healthcare",
          category: "Conversion",
          description: "Layanan asisten virtual khusus medis bersertifikat untuk merampingkan penjadwalan administrasi dan asupan pasien secara efisien.",
          features: [
            "Asisten triase medis bersertifikat",
            "Perampingan janji temu & antrean pasien",
            "Manajer meja layanan WhatsApp omnichannel",
            "Laporan & log aktivitas harian terperinci"
          ],
          icon: "Compass"
        },
        {
          title: "Meta Ads",
          category: "Acquisition",
          description: "Targetkan demografis spesifik layanan kesehatan dan wilayah lokal menggunakan corong visual klik-ke-WhatsApp.",
          features: [
            "Pemicu koordinat radius lokal presisi",
            "Pameran kasus perawatan video terstruktur",
            "Uji pemisahan audiens cerdas",
            "Penerimaan pasien instan lewat chat"
          ],
          icon: "Compass"
        },
        {
          title: "Google Ads",
          category: "Acquisition",
          description: "Tangkap kueri pencarian niat tinggi pada saat-saat kritis pasien mencari operasi spesialis atau perawatan darurat.",
          features: [
            "Daftar negatif kata kunci niat rendah",
            "Validasi iklan medis yang ketat & patuh",
            "Halaman konversi tingkat medis premium",
            "Integrasi pemicu panggilan langsung"
          ],
          icon: "Search"
        },
        {
          title: "SEO",
          category: "Acquisition",
          description: "Dominasi indeks mesin pencarian untuk mengamankan posisi teratas persisten kueri diagnosis dan bedah klinis.",
          features: [
            "Silo semantik penyakit & penanganan medis",
            "Sistem agregasi ulasan pasien tepercaya",
            "Optimasi profil kutipan direktori lokal",
            "Keunggulan peringkat Local Google 3-Pack"
          ],
          icon: "Globe"
        },
        {
          title: "Website",
          category: "Branding",
          description: "Platform web kesehatan premium yang diprogram untuk otoritas medis tertinggi dan jalur asupan pasien tercepat.",
          features: [
            "Waktu muat server di bawah 2 detik",
            "Grid pameran kredensial dokter profesional",
            "Alur pendaftaran adaptif ramah sentuhan",
            "Standar kepatuhan kerahasiaan data pasien"
          ],
          icon: "Laptop"
        },
        {
          title: "Training Admin/Front Office",
          category: "Courses",
          description: "Program pelatihan komprehensif untuk mengoptimalkan konversi janji temu pasien, hospitalitas front-desk, dan alur administrasi tim.",
          features: [
            "Materi pelayanan WhatsApp front-desk",
            "Templat naskah konversi booking pasien",
            "Resolusi konflik & penanganan pasien sulit",
            "Kerangka kerja efisiensi operasional harian"
          ],
          icon: "Users"
        },
        {
          title: "Public Speaking Doctor (Kelas Privat)",
          category: "Courses",
          description: "Pelatihan eksklusif dan personal bagi praktisi medis untuk membangun otoritas klinis, kehadiran digital, serta kepercayaan diri profesional.",
          features: [
            "Penguasaan wawancara media & berbicara di publik",
            "Struktur penyusunan konten kesehatan berdampak tinggi",
            "Artikulasi vokal & bahasa tubuh profesional",
            "Pengembangan branding klinis & kepemimpinan pemikiran"
          ],
          icon: "Sparkles"
        }
      ]
    },
    promo: {
      tag: "PERAYAAN HARI JADI 17 JULI",
      title: "e-Book Gratis ",
      titleHighlight: "Panduan Khusus Operasional",
      desc: "Untuk memperingati Hari Jadi DIKDOK pada 17 Juli, unduh koleksi eksklusif e-Book 1-Halaman kami untuk langsung mengoptimalkan operasional Anda.",
      downloadBtn: "Unduh e-Book Gratis",
      formatEn: "Free E-book for {target}",
      formatId: "E-book Gratis untuk {target}",
      targets: [
        { en: "Clinics", id: "Klinik" },
        { en: "Hospitals", id: "Rumah Sakit" },
        { en: "Branding GP", id: "Branding Dokter Umum" },
        { en: "Branding Dentist", id: "Branding Dokter Gigi" },
        { en: "Branding Specialist", id: "Branding Dokter Spesialis" },
        { en: "Audit Your Clinics & Hospitals", id: "Audit Klinik & Rumah Sakit" },
        { en: "Learn Meta Ads", id: "Pelajari Meta Ads" },
        { en: "Google Ads", id: "Google Ads" },
        { en: "SEO", id: "SEO" },
        { en: "Website", id: "Website" },
        { en: "Admin Clinics & Hospitals", id: "Admin Klinik & Rumah Sakit" },
        { en: "Marketing Team", id: "Tim Pemasaran" },
        { en: "Sales Team", id: "Tim Penjualan" },
        { en: "Manager Marketing", id: "Manajer Pemasaran" },
        { en: "Nurse", id: "Perawat" },
        { en: "Dental Assistant", id: "Asisten Dokter Gigi" },
        { en: "Customer Services", id: "Layanan Pelanggan" }
      ]
    },
    whoWeWorkWith: {
      title: "Siapa Saja yang Kami Bantu",
      desc: "",
      segments: [
        {
          title: "Praktik Medis",
          description: "Tingkatkan pasien pribadi dan mudahkan reservasi dengan sistem otomatis.",
          icon: "Stethoscope"
        },
        {
          title: "Klinik Spesialis",
          description: "Tarik pasien spesifik yang mencari perawatan ahli dan konsultasi medis khusus.",
          icon: "Activity"
        },
        {
          title: "Klinik Gigi",
          description: "Penuhi slot jadwal perawatan untuk kedokteran gigi premium dan estetika.",
          icon: "Sparkles"
        },
        {
          title: "Klinik Estetika",
          description: "Promosikan perawatan kulit dan estetika dengan corong pemasaran visual tinggi.",
          icon: "Award"
        },
        {
          title: "Pusat Kesehatan",
          description: "Skalakan layanan kesehatan umum dan paket kebugaran terpadu dengan lancar.",
          icon: "Home"
        },
        {
          title: "Rumah Sakit",
          description: "Dapatkan pasien rujukan, promosikan medical check-up, dan kelola reputasi digital.",
          icon: "Building"
        },
        {
          title: "Organisasi Kesehatan",
          description: "Bangun jangkauan digital yang kuat untuk asosiasi dan serikat medis profesional.",
          icon: "HeartHandshake"
        },
        {
          title: "Pusat Kebugaran & Spa (Wellness)",
          description: "Promosikan program kebugaran holistik, spa terapeutik, dan paket relaksasi.",
          icon: "Leaf"
        },
        {
          title: "Komunitas Kesehatan",
          description: "Tingkatkan keterlibatan anggota dan kelompok pendukung pasien secara dinamis.",
          icon: "Users"
        },
        {
          title: "Brand Kesehatan",
          description: "Perkuat otoritas merek dan dorong distribusi produk melalui tenaga medis ahli.",
          icon: "Tag"
        }
      ]
    },
    about: {
      tag: "ASAL-USUL & KOMITMEN",
      headline: "Tentang Dikdok Healthcare",
      paragraph: "",
      stat1Val: "1",
      stat1Lbl: "Dalam daftar Rekor Muri",
      stat2Val: "100%",
      stat2Lbl: "Fokus Layanan Kesehatan",
      stat3Val: "10.600+",
      stat3Lbl: "Anggota Komunitas"
    },
    faq: {
      tag: "",
      title: "Pertanyaan yang Sering Diajukan",
      desc: "",
      notAnsweredQ: "Punya pertanyaan lain yang belum terjawab di sini?",
      notAnsweredA: "Ahli strategi pertumbuhan klinis kami tersedia di WhatsApp untuk tanggapan langsung.",
      ctaButton: "Tanyakan di WhatsApp",
      items: [
        {
          question: "Apakah Anda hanya bekerja dengan klinik?",
          answer: "Tidak, kami bekerja di seluruh ekosistem layanan kesehatan. Selain klinik spesialis dan estetika, kami melayani dokter praktik mandiri multi-spesialisasi, studio gigi umum, pusat kebugaran (wellness), jaringan laboratorium diagnostik, serta rumah sakit swasta berskala regional."
        },
        {
          question: "Bisakah kita mulai dengan satu layanan saja?",
          answer: "Tentu saja. Meskipun klien dengan pertumbuhan pesat lebih menyukai kerangka kerja konsultasi ujung-ke-ujung terintegrasi (Diagnose, Attract, Convert), kami memahami Anda mungkin ingin mengatasi hambatan yang mendesak terlebih dahulu. Kami menawarkan solusi terarah seperti Iklan Google Search minatan tinggi, audit SEO lokal, atau skrip pelatihan WhatsApp staf front-desk."
        },
        {
          question: "Apakah Anda menyediakan konsultasi strategi?",
          answer: "Ya. Setiap kerja sama dimulai dari lokakarya audit strategi awal kami. Kami mengaudit posisi online klinik Anda saat ini, menganalisis profil keunggulan pesaing, dan merumuskan rencana aksi pemolesan pipa pasien 90 hari sebelum mengeluarkan biaya periklanan."
        },
        {
          question: "Bagaimana Anda mengukur kesuksesan?",
          answer: "Kami menghindari metrik kesenangan semata. Keberhasilan diukur secara transparan lewat: 1) Biaya per prospek terverifikasi, 2) Tingkat konversi prospek menjadi janji medis, 3) Angka kedatangan janji temu fisik di klinik Anda, dan 4) Pertumbuhan okupansi kapasitas operasional klinik. Kami menyediakan dashboard interaktif real-time."
        },
        {
          question: "Siapa saja team expert di Dikdok Healthcare?",
          answer: "Sejak tahun 2021, Dikdok Healthcare telah berkembang pesat sebagai mitra pertumbuhan strategis di industri kesehatan. Keunggulan kami didukung oleh kepemimpinan yang solid, dengan Founder yang memiliki pengalaman lebih dari 6 tahun di bidang healthcare marketing, serta Co-Founder dengan keahlian mendalam sebagai digital marketing specialist selama 3 tahun.\n\nKami berkomitmen untuk memaksimalkan pertumbuhan klinik dan Rumah Sakit dengan diperkuat tim ahli kami:\n\nChristine: Account Manager\nNatalie: Data Specialist\nDini: Social Media Specialist\nMiftah: SEO & Web Specialist\nYassa: Ads Specialist"
        }
      ]
    },
    contact: {
      tag: "Buka Kapasitas & Margin Klinis",
      title: "Siap Menarik ",
      titleHighlight: "Lebih Banyak Pasien?",
      desc: "Mari diskusikan sasaran Anda dan temukan peluang nyata untuk menumbuhkan klinik Anda secara etis dan berkelanjutan. Hubungi kami lewat WhatsApp untuk memulai sesi audit strategi gratis.",
      ctaButton: "Jadwalkan Konsultasi",
      formTitle: "Jadwalkan Audit Gratis Anda",
      formSubtitle: "Isi draf detail di bawah untuk memulai instan.",
      lblRepName: "Nama Perwakilan",
      phRepName: "dr. Amanda / Manajer Admin",
      lblClinicName: "Nama Klinik",
      phClinicName: "Medika Dental Care / RS Hermina",
      lblSelectedService: "Layanan Pilihan",
      lblLivePreview: "Draf Pesan Instan",
      liveDraftTag: "Draf Aktif",
      draftIntro: "Halo Tim Dikdok,",
      draftRepName: "Nama Perwakilan:",
      draftClinic: "Klinik:",
      draftService: "Layanan yang Diminati:",
      draftOutro: "Saya ingin berkonsultasi mengenai pertumbuhan fungsional akuisisi pasien klinik kami.",
      draftThankYou: "Terima kasih."
    },
    modal: {
      title: "Formulir Validasi Kredensial",
      subtitle: "Untuk mengunduh e-Book pilihan Anda atau mengklaim sesi konsultasi gratis, mohon lengkapi formulir validasi kredensial klinik berikut. Tindakan ini memicu asupan prospek terstruktur secara instan.",
      fullName: "Nama Lengkap",
      fullNamePH: "contoh: dr. Amanda Pratama",
      role: "Jabatan / Jabatan di Klinik",
      roleOwner: "Dokter Owner / Pemilik",
      roleManager: "Manajer Operasional / Klinik",
      roleOthers: "Lainnya",
      roleOthersPH: "Sebutkan detail jabatan Anda",
      clinicName: "Nama Klinik / Rumah Sakit",
      clinicNamePH: "contoh: Medika Premium Dental",
      clinicAddress: "Alamat Klinik",
      clinicAddressPH: "contoh: Jl. Jend. Sudirman No. 12, DKI Jakarta",
      socialMedia: "Tautan Akun Media Sosial Klinik",
      socialMediaPH: "contoh: instagram.com/klinik_kami",
      whatsapp: "Nomor WhatsApp Kontak",
      whatsappPH: "contoh: 6281234567890",
      picName: "Nama Lengkap Owner atau Manajer PIC",
      picNamePH: "contoh: Amanda Pratama (Owner)",
      submit: "Klaim Sumber Daya & Lanjutkan",
      submitting: "Memverifikasi Kredensial Medis...",
      successTitle: "Kredensial Terverifikasi!",
      successDesc: "Terima kasih! Data asupan strategis Anda telah kami amankan. Hubungi kami atau selesaikan draf untuk pengunduhan e-book Anda.",
      close: "Kembali ke Halaman",
      orRedirect: "Kirim Konfirmasi melalui Google Form"
    },
    footer: {
      desc: "DIKDOK membantu klinik, pusat spesialis, studio kedokteran gigi, dan praktik mandiri untuk menarik lebih banyak kunjungan pasien fisik dengan tetap mengedepankan etika medis.",
      complianceNote: "Catatan Kepatuhan",
      complianceText: "Semua kampanye dirancang ramah etis, mematuhi standar perundang-undangan kesehatan lokal serta regulasi periklanan profesi medis.",
      navTitle: "Navigasi Platform",
      contactTitle: "Markas Besar Konsultasi",
      hqTitle: "Markas Besar Konsultasi",
      territoryLbl: "Cakupan Wilayah:",
      territoryVal: "Utama Asia Tenggara (Fokus Regional Indonesia)",
      philosophyLbl: "Filosofi Kerja:",
      philosophyVal: `"Mitra Pertumbuhan Pemasaran Kesehatan Anda"`,
      copyright: "DIKDOK.ID Healthcare Growth Partner. Semua Hak Dilindungi. (Bukan Agensi)",
      privacy: "Kebijakan Privasi",
      legalSeparator: "•",
      medicalCode: "Kode Etik Iklan Medis"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
  getFormLink: (targetResourceName?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id"); // Default to Indonesian matching brand origin

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "id" : "en"));
  };

  const getFormLink = (targetResourceName?: string) => {
    // Elegant generation of prefilled Google Form Links
    // In production, these lead to specific Google Forms
    const baseUrl = language === "en" 
      ? "https://docs.google.com/forms/d/e/1FAIpQLSciqg3mWeK0kMId8EAd_eN_FormEn/viewform"
      : "https://docs.google.com/forms/d/e/1FAIpQLScyvIdpUa_FormId_Indonesian/viewform";
    
    if (targetResourceName) {
      return `${baseUrl}?entry.123456789=${encodeURIComponent(targetResourceName)}`;
    }
    return baseUrl;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, getFormLink }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
