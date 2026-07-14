import RevealOnScroll from "../animations/RevealOnScroll";
import Badge from "../ui/Badge";
import Accordion from "../ui/Accordion";
import { FAQ } from "../../data/siteData";

export default function HomeFAQ() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-brand-dark overflow-hidden relative border-b border-slate-200/50 dark:border-white/5">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <Badge variant="primary">F.A.Q.</Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              Got questions about our process, support, or tech stack? We've got answers.
            </p>
          </RevealOnScroll>
        </div>

        {/* Accordions */}
        <RevealOnScroll direction="up" delay={0.2}>
          <Accordion items={FAQ} />
        </RevealOnScroll>

      </div>
    </section>
  );
}
