import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "../animations/RevealOnScroll";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { TECHNOLOGIES, TECH_STACK } from "../../data/siteData";

export default function TechStaggered() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Mobile", "Cloud", "DevOps", "Database"];

  const filteredTech = activeCategory === "All"
    ? TECH_STACK
    : TECH_STACK.filter(tech => tech.category === activeCategory);

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/40 dark:border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <Badge variant="secondary">Engineered Stack</Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Pioneering Technologies
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              We leverage modern frameworks, cloud systems, and database engineering to build stable architectures.
            </p>
          </RevealOnScroll>
        </div>

        {/* Staggered Tech Vertical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TECHNOLOGIES.map((tech, idx) => (
            <RevealOnScroll
              key={tech.title}
              direction="up"
              delay={0.15 * idx}
              className={`flex ${idx === 1 ? "lg:-translate-y-6" : ""}`} // staggered look
            >
              <Card variant="glass" className="flex flex-col group h-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-900">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* fallback block */}
                  <div className="hidden absolute inset-0 bg-gradient-to-tr from-slate-900 to-brand-dark items-center justify-center p-6 text-white text-3xl">
                    🖥️
                  </div>
                </div>
                <div className="text-left space-y-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {tech.desc}
                  </p>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        {/* Interactive Tag Grid */}
        <div className="pt-12 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Technical Capabilities Matrix
            </span>
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-1.5 rounded-full text-xs font-semibold select-none cursor-pointer transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list of tech */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {filteredTech.map((tech, idx) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/40 dark:border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:border-primary/20 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300"
              >
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-600 uppercase font-semibold mt-1">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
