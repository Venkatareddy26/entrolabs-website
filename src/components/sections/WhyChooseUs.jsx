import RevealOnScroll from "../animations/RevealOnScroll";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { WHY_US } from "../../data/siteData";
import { Check, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-brand-dark overflow-hidden relative">
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-secondary/3 dark:bg-secondary/1 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Copy side */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <RevealOnScroll direction="up" delay={0.1}>
            <Badge variant="primary">{WHY_US.label}</Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              {WHY_US.title}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.25}>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {WHY_US.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Staggered checkmark items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {WHY_US.checks.map((check, idx) => (
              <RevealOnScroll
                key={check}
                direction="up"
                delay={0.08 * idx}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-semibold"
              >
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{check}</span>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll direction="up" delay={0.3} className="pt-4">
            <div className="p-5 border border-primary/20 dark:border-primary-soft/10 bg-primary/3 dark:bg-primary-soft/1 rounded-2xl">
              <p className="text-slate-700 dark:text-slate-200 text-sm md:text-base italic leading-relaxed">
                "{WHY_US.highlight}"
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.35} className="pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="h-4.5 w-4.5" />}>
              Get in Touch
            </Button>
          </RevealOnScroll>
        </div>

        {/* Visual/Image side */}
        <div className="lg:col-span-5">
          <RevealOnScroll direction="scale" delay={0.2} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/15 to-primary/5 rounded-[32px] blur-2xl opacity-60 pointer-events-none" />
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-white/5 shadow-2xl bg-slate-100 dark:bg-slate-900">
              <img
                src="https://entrolabs.com/assets/images/updated-branding.jpg"
                alt="EntroLabs Branding"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-[1/1] hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback layout */}
              <div className="hidden absolute inset-0 bg-gradient-to-tr from-brand-dark to-slate-950 flex-col items-center justify-center p-8 text-center text-white">
                <span className="text-6xl mb-4">🚀</span>
                <span className="text-xl font-bold">Years of Trust</span>
                <span className="text-slate-400 text-sm mt-2">Hyderabad Tech Partner</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
