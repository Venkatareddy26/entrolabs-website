import RevealOnScroll from "../animations/RevealOnScroll";
import Button from "../ui/Button";
import { ArrowRight, Mail } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll direction="scale" delay={0.15}>
          <div className="relative rounded-[40px] overflow-hidden bg-white dark:bg-white border border-slate-200 dark:border-slate-200 shadow-2xl p-8 md:p-16 text-center space-y-8">
            {/* Background mesh glow inside the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Let's Partner Up
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-slate-900">
                Ready to transform your business operations?
              </h2>
              <p className="text-slate-500 dark:text-slate-500 text-sm md:text-base leading-relaxed">
                Join our smart missions. Drop us a mail about your project requirements, and we'll arrange a call to connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="h-4.5 w-4.5" />}>
                Start a Conversation
              </Button>
              <Button href="mailto:support@entrolabs.com" variant="outline" size="lg" icon={<Mail className="h-4.5 w-4.5" />}>
                Email support@entrolabs.com
              </Button>
            </div>

            {/* Float details list */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-600 dark:text-slate-600 text-xs md:text-sm font-semibold max-w-3xl mx-auto relative z-10">
              <div className="flex items-center justify-center gap-2">
                <span>⚡</span> Rapid Setup Discovery
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>🛡️</span> Compliant &amp; Secure
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>🤝</span> Stable SLA Commitments
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
