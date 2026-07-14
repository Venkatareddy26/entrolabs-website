import { useState } from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "../components/animations/RevealOnScroll";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import { TECHNOLOGIES, TECH_STACK } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Mobile", "Cloud", "DevOps", "Database"];
  const filteredTech = activeCategory === "All" ? TECH_STACK : TECH_STACK.filter(t => t.category === activeCategory);

  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200">

      {/* Page Hero */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/50 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,159,211,0.06),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-left relative z-10">
          <Badge variant="secondary">Engineering Stack</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Technologies
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Modern frameworks, cloud infrastructure, and database engineering powering every solution we ship.
          </p>
        </div>
      </section>

      {/* Three Technology Verticals */}
      <div className="max-w-7xl mx-auto divide-y divide-slate-100 dark:divide-slate-800/40">
        {TECHNOLOGIES.map((tech, idx) => {
          const isEven = idx % 2 === 0;
          const sectionId = idx === 0 ? "mobile" : idx === 1 ? "web" : "api";
          return (
            <section
              key={tech.title}
              id={sectionId}
              className="py-24 px-6 md:px-12 space-y-12 scroll-mt-24"
            >
              {/* Overview block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-5 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                  <RevealOnScroll direction={isEven ? "left" : "right"} delay={0.15}>
                    <div className="relative rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-white/5 shadow-2xl bg-slate-100 dark:bg-slate-900 aspect-video">
                      <img src={tech.image} alt={tech.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                  </RevealOnScroll>
                </div>
                <div className={`lg:col-span-7 space-y-5 text-left ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                  <RevealOnScroll direction="up" delay={0.1}>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-secondary">Vertical {String(idx + 1).padStart(2, "0")}</span>
                  </RevealOnScroll>
                  <RevealOnScroll direction="up" delay={0.2}>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">{tech.overviewTitle}</h2>
                  </RevealOnScroll>
                  <RevealOnScroll direction="up" delay={0.25}>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{tech.overviewDesc}</p>
                  </RevealOnScroll>
                </div>
              </div>

              {/* Sub-items Grid */}
              <div className="space-y-6 pt-6">
                <div className="text-left border-b border-slate-100 dark:border-slate-800/40 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Core Services &amp; Tools</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tech.items.map((item, itemIdx) => (
                    <RevealOnScroll key={item.name} direction="up" delay={0.05 * itemIdx}>
                      <div className="bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-white/5 rounded-2xl p-6 text-left h-full flex flex-col justify-between hover:border-primary/20 dark:hover:border-primary-soft/10 transition-all duration-300">
                        <div className="space-y-2">
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h3>
                          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{item.desc}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Try Our Service Callout Banner */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll direction="scale" delay={0.15}>
            <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#200547] via-[#3a1078] to-[#110227] p-10 md:p-16 text-center text-white space-y-6 shadow-2xl">
              {/* Background abstract overlay ring */}
              <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight relative z-10">Try our service now!</h2>
              <p className="text-slate-200 text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed relative z-10">
                We are happy to answer all your questions. Drop us a mail about your requirement.
              </p>
              <div className="pt-4 relative z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-3.5 bg-[#37c116] hover:bg-[#43d620] text-black font-bold text-sm tracking-wide rounded-full shadow-[0_4px_14px_rgba(55,193,22,0.35)] hover:shadow-[0_6px_20px_rgba(55,193,22,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Interactive Tech Matrix */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/40 dark:border-white/5">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="primary">Capabilities</Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Full Technology Matrix</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button key={cat} type="button" onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 ${activeCategory === cat ? "bg-primary text-white shadow-md shadow-primary/25" : "bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTech.map(tech => (
                <motion.div key={tech.name} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2 }}
                  className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/40 dark:border-white/5 rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:border-primary/20 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-300">{tech.name}</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-600 uppercase font-semibold mt-1">{tech.category}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
