import RevealOnScroll from "../components/animations/RevealOnScroll";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import { PROCESS_STEPS, TEAM } from "../data/siteData";
import { ArrowRight, Compass, Eye, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  const values = [
    { title: "Trust & Transparency", desc: "Stable commits and transparent workflows since 2015.", icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
    { title: "Client First", desc: "Collaborative partnership aimed at solving domain complexity.", icon: <Heart className="h-6 w-6 text-secondary" /> },
    { title: "Agility at Scale", desc: "Deploying rapid iterations without breaking system compliance.", icon: <Compass className="h-6 w-6 text-primary-soft" /> },
  ];

  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200">
      
      {/* Page Hero */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/50 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(35,141,69,0.05),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4 text-left relative z-10">
          <Badge variant="primary">About Us</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            About Company
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-sans">
            Bridging businesses and industries with premium technologies. Discover our history, values, and team.
          </p>
        </div>
      </section>

      {/* Main Section Detail */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-soft">
            Overview
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Choose Us and Co-Work with us
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-sans">
            Entro Labs transforms business enterprises with next-generation digital capabilities. We offer end-to-end support on next generation, innovative, and competitive digital capabilities. We help businesses across different sectors to navigate new possibilities, and achieve higher quality and greater operational efficiency.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-sans">
            We prefer stable, long-term client commitments. The majority of our clients have been with us since the company was founded. Our IT competencies cover Enterprise Application Services, Software Product Engineering, Mobility Solutions, Business Process Services, and Industry-specific solutions.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[32px] blur-xl opacity-60 pointer-events-none" />
          <div className="relative rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-white/5 shadow-2xl">
            <img
              src="https://entrolabs.com/assets/images/updated-branding.jpg"
              alt="About company"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-[1/1]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/40 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          <RevealOnScroll direction="up" delay={0.1}>
            <Card variant="glass" className="h-full space-y-4 text-left p-8">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                To simplify complex operations for businesses and government sectors with secure, reliable, and compliant digital software.
              </p>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <Card variant="glass" className="h-full space-y-4 text-left p-8">
              <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                To become the premier trusted tech partner for enterprise-scale systems globally, prioritizing stability, collaboration, and quality.
              </p>
            </Card>
          </RevealOnScroll>

        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary">Core Beliefs</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <RevealOnScroll key={val.title} direction="up" delay={0.1 * idx}>
              <Card variant="glass" className="h-full text-center space-y-4 flex flex-col items-center p-8">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{val.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-sans">{val.desc}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Stepper process section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/40 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge variant="secondary">Methodology</Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Delivery Process</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              A structured lifecycle designed to ensure transparency and compliant delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <RevealOnScroll key={step.num} direction="up" delay={0.1 * idx} className="relative">
                <div className="space-y-4 text-left">
                  <div className="text-5xl font-black text-primary/10 dark:text-primary-soft/10">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary">Talent Pool</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Team Structure</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => (
            <RevealOnScroll key={member.name} direction="up" delay={0.1 * idx}>
              <Card variant="glass" className="h-full text-center space-y-3 flex flex-col justify-center py-10">
                <div className="text-4xl font-extrabold text-primary dark:text-primary-soft">
                  {member.count}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-white">
                  {member.name}
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-600 font-sans px-4">
                  {member.desc}
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>

    </div>
  );
}
