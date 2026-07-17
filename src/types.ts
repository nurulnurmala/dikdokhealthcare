export interface TrustPillar {
  title: string;
  description: string;
  icon: string;
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
  category: "Acquisition" | "Preservation" | "Strategy" | "Branding";
  description: string;
  features: string[];
  icon: string;
}

export interface CoreStrength {
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface TargetSegment {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
