import RevealOnScroll from "../animations/RevealOnScroll";
import AnimatedCounter from "../animations/AnimatedCounter";
import { STATS } from "../../data/siteData";
import { Calendar, CheckCircle2, Users, Smartphone } from "lucide-react";

export default function StatsGrid() {
  const getIcon = (iconName) => {
    const props = { className: "h-6 w-6 text-white" };
    switch (iconName) {
      case "Calendar":
        return <Calendar {...props} />;
      case "CheckCircle":
        return <CheckCircle2 {...props} />;
      case "Users":
        return <Users {...props} />;
      case "Smartphone":
        return <Smartphone {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-tr from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
      {/* Abstract structural overlay graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
        {STATS.map((stat, idx) => (
          <RevealOnScroll
            key={stat.label}
            direction="up"
            delay={0.1 * idx}
            className="flex flex-col items-center text-center space-y-3 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
          >
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
              {getIcon(stat.icon)}
            </div>
            <div className="text-4xl md:text-5xl font-black tracking-tight flex items-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs md:text-sm font-semibold tracking-wider text-slate-100 uppercase">
              {stat.label}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
