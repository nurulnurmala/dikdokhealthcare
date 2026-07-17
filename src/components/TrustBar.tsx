import { BarChart3, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import { TRUST_PILLARS } from "../data";

export default function TrustBar() {
  // Map hardcoded string representations into actual imported React components
  const iconMap: Record<string, any> = {
    BarChart3: BarChart3,
    TrendingUp: TrendingUp,
    ShieldAlert: ShieldCheck,
    Activity: Activity
  };

  return (
    <section className="bg-white border-y border-gray-100 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          The Pillars of Premium Healthcare Delivery
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_PILLARS.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Activity;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 p-4 hover:bg-gray-50/50 rounded-2xl transition-all duration-150 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/10 to-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="w-6 h-6 stroke-2 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
