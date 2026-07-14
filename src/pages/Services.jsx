import RevealOnScroll from "../components/animations/RevealOnScroll";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { SOLUTIONS, SERVICES } from "../data/siteData";
import { Monitor, Layers, Smartphone, Box, Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const getIcon = (iconName) => {
    const props = { className: "h-6 w-6 text-primary dark:text-primary-soft" };
    switch (iconName) {
      case "Monitor":
        return <Monitor {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Smartphone":
        return <Smartphone {...props} />;
      case "Box":
        return <Box {...props} />;
      case "Building2":
        return <Building2 {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200">
      
      {/* Page Hero */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/50 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(35,141,69,0.05),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4 text-left relative z-10">
          <Badge variant="primary">What We Offer</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Our Services
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-sans">
            End-to-end IT capabilities designed to scale, maintain compliance, and solve operational complexity.
          </p>
        </div>
      </section>

      {/* Feature Services List */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="secondary">Core Services</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Featured Capabilities</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            From design to launch and maintenance, we offer expertise across multiple technical layers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <RevealOnScroll key={srv.title} direction="up" delay={0.1 * idx}>
              <Card variant="glass" className="h-full space-y-4 text-left p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {getIcon(srv.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{srv.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Button to="/contact" variant="ghost" size="sm" className="px-0 group" icon={<ArrowRight className="h-4 w-4" />}>
                    Inquire service
                  </Button>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Solutions Detail Grid */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/40 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge variant="primary">Targeted Platforms</Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Industry Specific Solutions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              Custom specialized software engineered for specific verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SOLUTIONS.map((sol, idx) => (
              <RevealOnScroll key={sol.title} direction="up" delay={0.1 * (idx % 2)}>
                <Card variant="glass" className="p-8 flex flex-col md:flex-row items-center gap-6 text-left">
                  <div className="h-20 w-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex-shrink-0">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.innerHTML = "<div class='h-full w-full flex items-center justify-center text-2xl bg-brand-dark text-white'>📱</div>";
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{sol.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                      {sol.desc}
                    </p>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* SLA Commitment Callout Banner */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <RevealOnScroll direction="scale" delay={0.15}>
          <div className="rounded-[36px] bg-gradient-to-tr from-primary via-primary/95 to-secondary text-white p-8 md:p-14 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Scale Your Infrastructure with Us
            </h2>
            <p className="text-slate-100 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-sans">
              We leverage years of experience in web &amp; application maintenance, secure hosting support, and custom platform integrations.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="white" size="lg">
                Talk to our Team
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
