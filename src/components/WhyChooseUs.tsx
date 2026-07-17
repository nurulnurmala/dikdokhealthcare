import { Heart, LineChart, Puzzle, Settings2 } from "lucide-react";
import { CORE_STRENGTHS } from "../data";

export default function WhyChooseUs() {
  const iconMap: Record<string, any> = {
    Heart: Heart,
    LineChart: LineChart,
    Puzzle: Puzzle,
    Settings2: Settings2
  };

  return (
    <section className="bg-white py-20 md:py-28 text-left relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
            Differentiating Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
            Why Healthcare Providers <br />
            Choose <span className="text-primary bg-clip-text">DIKDOK</span>
          </h2>
          <p className="text-sm font-medium text-gray-500 max-w-lg mx-auto">
            We are not design hobbyists. We are healthcare-dedicated engineers specializing in conversion structures that support sustainable clinical operations.
          </p>
        </div>

        {/* Bento grid style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_STRENGTHS.map((strength, index) => {
            const Icon = iconMap[strength.icon] || Settings2;
            return (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-50/75 to-white/30 border border-gray-150 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-gray-150/50 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-150 shadow-sm flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-6 h-6 stroke-2 text-primary" />
                    </div>
                    <span className="text-[10px] font-black font-mono tracking-widest text-[#8E23A4] uppercase bg-purple-50 border border-purple-100 px-3 py-1 rounded-lg">
                      {strength.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {strength.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Aesthetic background indicator */}
                <div className="mt-8 pt-4 border-t border-dashed border-gray-100 flex items-center gap-2 text-[10px] font-bold text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Verified Operational System</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
