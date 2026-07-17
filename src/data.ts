import { 
  TrustPillar, 
  ProblemCard, 
  FrameworkStep, 
  ServiceItem, 
  CoreStrength, 
  TargetSegment, 
  FAQItem 
} from "./types";

export const WHATSAPP_NUMBER = "6288808542018";
export const WHATSAPP_MESSAGE = "Hi Dikdok Team, I'd like to book a free 15-minute consultation regarding healthcare marketing.";
export const WHATSAPP_URL = "https://wa.me/6288808542018";

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Data-Driven",
    description: "Every campaign, campaign funnel, and patient acquisition system is guided by hard analytics, clinical search trends, and cost-per-appointment performance indicators.",
    icon: "BarChart3"
  },
  {
    title: "Growth-Oriented",
    description: "We focus on real metrics—patient bookings, clinic admissions, and lifelong care value—rather than vanity likes, generic views, or impressions.",
    icon: "TrendingUp"
  },
  {
    title: "Healthcare-Focused",
    description: "Our strategists understand medical ethics, healthcare regulations, disease classification, and patient empathy, ensuring perfect compliant messaging.",
    icon: "ShieldAlert"
  },
  {
    title: "End-to-End Support",
    description: "We are your fractional growth team—spanning target diagnosis, digital advertisement deployment, page design, and front-desk communication SOPs.",
    icon: "Activity"
  }
];

export const PROBLEM_CARDS: ProblemCard[] = [
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
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
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
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Google Ads",
    category: "Acquisition",
    description: "Capture high-intent medical searches at the exact moment a patient is looking for specialists, surgeries, or urgent treatments.",
    features: [
      "Medical search intent bidding",
      "Negative keyword curation",
      "Strict medical policy compliance",
      "Direct phone/message CTA setups"
    ],
    icon: "Search"
  },
  {
    title: "Meta Ads",
    category: "Acquisition",
    description: "Target specific demographics, healthcare interests, and localized areas with high-impact video and visual awareness campaigns.",
    features: [
      "Hyper-local radius targeting",
      "Custom medical audience matching",
      "Compelling patient story ads",
      "Direct click-to-WhatsApp integrations"
    ],
    icon: "Compass"
  },
  {
    title: "Website Development",
    category: "Branding",
    description: "High-speed, elite medical websites engineered with medical credibility, intuitive appointment paths, and modern design.",
    features: [
      "Page load speed optimization (< 2s)",
      "Doctor credentials display layout",
      "Intuitive navigation structures",
      "HIPAA/Privacy policy compatible"
    ],
    icon: "Laptop"
  },
  {
    title: "Landing Pages",
    category: "Branding",
    description: "Ultra-focused, high-conversion single pages tailored for specific aesthetic treatments, clinical programs, or patient packages.",
    features: [
      "Frictionless conversion flow",
      "Social-proof and reviews layout",
      "Fast consultation CTAs",
      "Fully responsive responsive code"
    ],
    icon: "Layers"
  },
  {
    title: "Local SEO",
    category: "Acquisition",
    description: "Dominate Google Maps and local 3-Pack search rankings to become the preferred and most trusted clinic in your district.",
    features: [
      "Google Business Profile optimization",
      "Localized citation syndication",
      "Review collection & response framework",
      "Local disease/treatment local keyword clusters"
    ],
    icon: "MapPin"
  },
  {
    title: "SEO",
    category: "Acquisition",
    description: "Gain long-term organic authority and search traffic for critical medical procedures, health diagnoses, and specialty wellness topics.",
    features: [
      "In-depth patient search pattern research",
      "Medical peer-review equivalent content",
      "High-authority backlink development",
      "Mobile-friendly core web vitals optimization"
    ],
    icon: "Globe"
  },
  {
    title: "Social Media Marketing",
    category: "Branding",
    description: "Educate your local community and grow your brand through authoritative, visual, and highly interactive healthcare content.",
    features: [
      "Interactive medical Q&As",
      "Provider profile videos & reels",
      "Patient care process showcases",
      "Multi-platform visual scheduling"
    ],
    icon: "Share2"
  },
  {
    title: "Communication SOP & Training",
    category: "Preservation",
    description: "Equip your clinical front-desk or administration team with scripts and protocols to confidently schedule and retain clinic leads.",
    features: [
      "Frictionless WhatsApp lead chat scripts",
      "Response-time KPI establishment",
      "Empathy-driven patient objection handling",
      "Lead status tracking dashboard training"
    ],
    icon: "MessageSquareText"
  },
  {
    title: "Growth Strategy Consulting",
    category: "Strategy",
    description: "High-level diagnostic workshops, patient lifetime value mapping, clinic location expansion frameworks, and budget planning.",
    features: [
      "Unit economics auditing",
      "Patient retention loop strategy",
      "Multi-clinic expansion frameworks",
      "Technology & EHR consulting"
    ],
    icon: "Sparkles"
  }
];

export const CORE_STRENGTHS: CoreStrength[] = [
  {
    title: "Healthcare-Focused Expertise",
    description: "Unlike generic digital agencies, DIKDOK only works under medical guidelines. We know how to map medical codes and ethically address patients.",
    highlight: "100% Medical Context",
    icon: "Heart"
  },
  {
    title: "Data-Driven Decision Making",
    description: "We measure success in booked clinic appointments, low acquisition costs, and long-term loyalty—not raw social traffic or likes.",
    highlight: "Attributable Appointments",
    icon: "LineChart"
  },
  {
    title: "End-to-End Growth Support",
    description: "Our system combines direct ad outreach with patient communication scripts, ensuring that incoming digital inquiries actually show up for physical care.",
    highlight: "Ad-to-Clinic Patient Flow",
    icon: "Puzzle"
  },
  {
    title: "Sustainable Growth Systems",
    description: "We compile repeatable, self-optimizing growth frameworks, directories, and guides that belong to your clinic forever, ensuring compounding growth.",
    highlight: "Compounding Assets",
    icon: "Settings2"
  }
];

export const TARGET_SEGMENTS: TargetSegment[] = [
  {
    title: "Medical Practices",
    description: "Primary care, multi-specialty, and family practices seeking secure pipelines of daily patient visits.",
    icon: "Stethoscope"
  },
  {
    title: "Specialist Clinics",
    description: "Pediatrics, cardiology, orthopedics, neurology, and niche, premium treatment facilities.",
    icon: "Activity"
  },
  {
    title: "Dental Clinics",
    description: "General dentistry, orthodontics, and premium cosmetic dental studios looking to attract high-value procedures.",
    icon: "Sparkles"
  },
  {
    title: "Aesthetic Clinics",
    description: "Premium wellness, anti-aging, and skin clinics looking for high-margin treatments and patient memberships.",
    icon: "Award"
  },
  {
    title: "Healthcare Centers",
    description: "Localized rehabilitation centers, diagnostic imaging spaces, and community health centers.",
    icon: "Home"
  },
  {
    title: "Hospitals",
    description: "Multi-ward private hospitals and sanitariums aiming to streamline sub-department occupancy and specialist queues.",
    icon: "Building"
  },
  {
    title: "Healthcare Organizations",
    description: "Large-scale health groups, laboratory systems, and non-profit clinical provider networks.",
    icon: "HeartHandshake"
  },
  {
    title: "Wellness",
    description: "Wellness centers, massage clinics, spas, therapeutic services, holistic health providers, and lifestyle wellness businesses.",
    icon: "Leaf"
  }
];

export const ABOUT_DIKDOK = {
  headline: "About Dikdok",
  intro: "Dikdok began as a healthcare education platform committed to making medical knowledge more accessible to the public. By creating clear, dynamic channels of clinical communication, we built massive patient and provider trust.",
  evolution: "Today, we help healthcare providers grow through strategic marketing, patient acquisition systems, and communication excellence.",
  missionLabel: "Our Mission",
  mission: "To help healthcare providers reach more patients and create greater healthcare impact.",
  founderLabel: "Founders & Team",
  founderTitle: "CEO & Peak Medical Strategist",
  founderQuote: "We bridge the gap between world-class medical skill and digital accessibility. Patients are searching for answers; our obligation is to help your clinic provide them.",
  imagePaths: {
    hero: "/src/assets/images/indonesian_doctor_hero_1781341915382.jpg",
    founder: "/src/assets/images/founder_portrait_1781340166673.jpg"
  }
};

export const FAQ_ITEMS: FAQItem[] = [
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
  }
];
