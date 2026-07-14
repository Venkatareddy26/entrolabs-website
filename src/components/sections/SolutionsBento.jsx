import RevealOnScroll from "../animations/RevealOnScroll";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { SOLUTIONS } from "../../data/siteData";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SolutionsBento() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-y border-slate-200/40 dark:border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <Badge variant="secondary">What We Build</Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Solutions Engineered for Scale
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              Domain platforms tailored for compliance, high traffic, and mission-critical enterprise tasks.
            </p>
          </RevealOnScroll>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SOLUTIONS.map((sol, idx) => {
            const isLarge = sol.size === "large";
            
            return (
              <RevealOnScroll
                key={sol.title}
                direction="up"
                delay={0.15 * (idx % 3)}
                className={isLarge ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <Link to="/services">
                  <Card
                    variant="glass"
                    className="h-full flex flex-col group cursor-pointer relative overflow-hidden"
                  >
                    {/* Visual Media Cover */}
                    <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950/50 mb-6 aspect-[16/9] md:aspect-[21/9]">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback visual if CDN breaks */}
                      <div className="hidden absolute inset-0 bg-gradient-to-tr from-brand-dark to-slate-900 items-center justify-center p-6 text-white text-4xl">
                        {sol.title.includes("Governance") ? "🏛️" : 
                         sol.title.includes("Ticketing") ? "🎫" : 
                         sol.title.includes("POS") ? "💳" : 
                         sol.title.includes("QA") ? "✅" : 
                         sol.title.includes("SIS") ? "📚" : "📡"}
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2 group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-300">
                          {sol.title}
                          <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary dark:text-primary-soft" />
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-2 font-sans">
                          {sol.desc}
                        </p>
                      </div>

                      <div className="pt-2 text-xs font-semibold text-primary dark:text-primary-soft uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                        Explore Platform <span>→</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* View All Services Footer Redirect */}
        <div className="text-center pt-8">
          <RevealOnScroll direction="up" delay={0.2}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-soft border-b-2 border-slate-200 hover:border-primary dark:hover:border-primary-soft pb-1 transition-all duration-300"
            >
              View Our Full Capabilities List
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
