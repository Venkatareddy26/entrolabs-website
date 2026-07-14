import RevealOnScroll from "../components/animations/RevealOnScroll";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { CAREERS_BENEFITS, OPEN_POSITIONS } from "../data/siteData";
import { Home, TrendingUp, Heart, BookOpen, PartyPopper, DollarSign, MapPin, Briefcase, ArrowRight } from "lucide-react";

export default function Careers() {
  const getIcon = (iconName) => {
    const props = { className: "h-6 w-6" };
    switch (iconName) {
      case "Home": return <Home {...props} />;
      case "TrendingUp": return <TrendingUp {...props} />;
      case "Heart": return <Heart {...props} />;
      case "BookOpen": return <BookOpen {...props} />;
      case "PartyPopper": return <PartyPopper {...props} />;
      case "DollarSign": return <DollarSign {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200">

      {/* Page Hero */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/50 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(80,200,106,0.06),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-left relative z-10">
          <Badge variant="success">We're Hiring</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Join Our Team
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Build enterprise software that powers governments and industries. Grow your career alongside passionate engineers.
          </p>
        </div>
      </section>

      {/* Culture Statement */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center space-y-6">
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Work That Matters</h2>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={0.2}>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            At EntroLabs, we believe great software starts with great people. We foster a culture of collaboration, continuous learning, and ownership. Every engineer, designer, and analyst contributes directly to systems that serve millions.
          </p>
        </RevealOnScroll>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/40 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="primary">Perks</Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Why You'll Love It Here</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAREERS_BENEFITS.map((benefit, idx) => (
              <RevealOnScroll key={benefit.title} direction="up" delay={0.08 * idx}>
                <Card variant="glass" className="h-full text-left space-y-4 p-8">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-primary-soft/10 flex items-center justify-center text-primary dark:text-primary-soft">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <Badge variant="secondary">Open Roles</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Current Openings</h2>
        </div>

        <div className="space-y-4">
          {OPEN_POSITIONS.map((pos, idx) => (
            <RevealOnScroll key={pos.title} direction="up" delay={0.06 * idx}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md hover:border-primary/20 dark:hover:border-primary-soft/10 transition-all duration-300 group">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-300">{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{pos.dept}</span>
                    <span>{pos.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{pos.location}</span>
                  </div>
                </div>
                <Button to="/contact" variant="outline" size="sm" icon={<ArrowRight className="h-3.5 w-3.5" />}>
                  Apply
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Fallback CTA */}
        <div className="text-center pt-8">
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <Button href="mailto:support@entrolabs.com" variant="primary" size="lg">
              Send Your Resume
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
