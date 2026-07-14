import { motion } from "framer-motion";
import { ArrowRight, Server, Smartphone, Cpu, Shield } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { HERO } from "../../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mesh-bg py-20 px-6 md:px-12 border-b border-slate-200/50 dark:border-white/5">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 dark:bg-primary-soft/5 blur-[80px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-[100px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Content Block */}
        <div className="lg:col-span-7 text-left space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="primary" pulse={true} className="shadow-sm">
              {HERO.badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
          >
            We Help Bridging <span className="bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">Businesses</span> &amp; <span className="bg-gradient-to-r from-secondary to-primary-soft bg-clip-text text-transparent">Industries</span> with Our Software Tech.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-sans"
          >
            {HERO.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="h-4.5 w-4.5" />}>
              {HERO.cta.primary}
            </Button>
            <Button to="/services" variant="outline" size="lg">
              {HERO.cta.secondary}
            </Button>
          </motion.div>
        </div>

        {/* Visual Block (Orbital Diagram) */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[350px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center rounded-full border border-slate-200/50 dark:border-white/5 bg-white/20 dark:bg-slate-900/10 backdrop-blur-3xl shadow-2xl shadow-primary/5"
          >
            {/* Core Label */}
            <div className="text-center z-10 p-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary dark:text-primary-soft">
                Ecosystem
              </span>
              <div className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mt-1">
                ENTRO LABS
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                Live Systems
              </div>
            </div>

            {/* Orbit paths & tech nodes */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 dark:border-primary-soft/10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-secondary/20 dark:border-secondary/10 animate-[spin_25s_linear_infinite_reverse]" />

            {/* Floating nodes with icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 left-1/3 flex flex-col items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3 shadow-lg"
            >
              <Smartphone className="h-5 w-5 text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Mobility</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 -right-6 flex flex-col items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3 shadow-lg"
            >
              <Server className="h-5 w-5 text-secondary" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Cloud</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 left-1/4 flex flex-col items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3 shadow-lg"
            >
              <Cpu className="h-5 w-5 text-primary-soft" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">IoT Dev</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-1/2 -left-6 flex flex-col items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3 shadow-lg"
            >
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Secured</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal text ticker */}
      <div className="absolute bottom-0 inset-x-0 bg-slate-100/50 dark:bg-white/3 border-t border-slate-200/50 dark:border-white/5 py-4 overflow-hidden">
        <div className="flex w-max gap-12 text-slate-600 dark:text-slate-400 font-medium text-sm tracking-wide uppercase select-none animate-[marquee_20s_linear_infinite]">
          {HERO.ticker.concat(HERO.ticker).map((text, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee keyframe css injected inline for portability */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
