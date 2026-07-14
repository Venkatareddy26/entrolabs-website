import { motion } from "framer-motion";
import { ABOUT } from "../../data/siteData";
import RevealOnScroll from "../animations/RevealOnScroll";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function AboutOverview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-brand-dark overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/3 dark:bg-primary-soft/1 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-soft">
              {ABOUT.label}
            </span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              {ABOUT.title}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base md:text-lg">
              {ABOUT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.4} className="pt-4">
            <Button to="/about" variant="primary" size="lg" icon={<ArrowRight className="h-4.5 w-4.5" />}>
              More About Us
            </Button>
          </RevealOnScroll>
        </div>

        {/* Visual/Image Area */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <RevealOnScroll direction="scale" delay={0.2} className="relative">
            {/* Ambient visual shadow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[32px] blur-2xl opacity-70" />
            
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-white/5 shadow-2xl bg-slate-100 dark:bg-slate-900">
              <img
                src={ABOUT.image}
                alt="About EntroLabs"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-[1/1] hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback layout if CDN image fails to load */}
              <div className="hidden absolute inset-0 bg-gradient-to-tr from-brand-dark to-slate-950 flex-col items-center justify-center p-8 text-center text-white">
                <span className="text-6xl mb-4">🏢</span>
                <span className="text-xl font-bold">Premium Enterprise Partner</span>
                <span className="text-slate-400 text-sm mt-2">Hyderabad HQ</span>
              </div>
            </div>

            {/* Floating Stat Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/10 p-5 rounded-3xl shadow-xl flex items-center gap-4 z-20 backdrop-blur-xl"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                🚀
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-slate-800 dark:text-white">
                  {ABOUT.stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {ABOUT.stat.label}
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
