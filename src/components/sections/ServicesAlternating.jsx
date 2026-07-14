import { motion } from "framer-motion";
import RevealOnScroll from "../animations/RevealOnScroll";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SERVICES } from "../../data/siteData";
import { Monitor, Layers, Smartphone, Box, Building2, CheckCircle2 } from "lucide-react";

export default function ServicesAlternating() {
  const getIcon = (iconName) => {
    const props = { className: "h-5 w-5 text-white" };
    switch (iconName) {
      case "Monitor": return <Monitor {...props} />;
      case "Layers": return <Layers {...props} />;
      case "Smartphone": return <Smartphone {...props} />;
      case "Box": return <Box {...props} />;
      case "Building2": return <Building2 {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  // Render a rich, custom CSS mockup based on the index of the service
  const renderVisualMockup = (idx) => {
    switch (idx) {
      case 0: // Enterprise Application Services - Browser Dashboard Mockup
        return (
          <div className="w-full bg-slate-900 dark:bg-slate-950 rounded-2xl border border-slate-700/50 shadow-2xl p-4 space-y-3 overflow-hidden text-left">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-500 font-mono ml-2">app.entrolabs.com/dashboard</span>
            </div>
            {/* Mock Layout */}
            <div className="grid grid-cols-12 gap-3 h-48">
              <div className="col-span-3 bg-slate-800/40 rounded-xl p-2 space-y-2 border border-slate-800">
                <span className="h-2 w-full bg-slate-700 rounded block" />
                <span className="h-2 w-2/3 bg-slate-700 rounded block" />
                <span className="h-2 w-4/5 bg-slate-700 rounded block" />
              </div>
              <div className="col-span-9 bg-slate-800/20 rounded-xl p-3 border border-slate-800/50 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400">Monthly Growth Rate</span>
                  <Badge variant="success" size="sm">+24.8%</Badge>
                </div>
                {/* Mock Graph Bars */}
                <div className="flex items-end gap-2 h-24 pt-4">
                  <div className="flex-1 bg-slate-700/50 rounded-t-md h-[40%]" />
                  <div className="flex-1 bg-slate-700/50 rounded-t-md h-[60%]" />
                  <div className="flex-1 bg-primary/70 rounded-t-md h-[80%] shadow-[0_0_15px_rgba(35,141,69,0.3)] animate-pulse" />
                  <div className="flex-1 bg-slate-700/50 rounded-t-md h-[50%]" />
                  <div className="flex-1 bg-secondary/70 rounded-t-md h-[95%] shadow-[0_0_15px_rgba(11,159,211,0.3)]" />
                </div>
              </div>
            </div>
          </div>
        );
      case 1: // Software Product Engineering - Code Editor / Terminal
        return (
          <div className="w-full bg-slate-900 dark:bg-slate-950 rounded-2xl border border-slate-700/50 shadow-2xl p-4 space-y-3 overflow-hidden text-left font-mono">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-500 ml-2">api/engine.js</span>
            </div>
            {/* Mock Code Block */}
            <div className="text-[11px] leading-relaxed text-slate-400 space-y-1">
              <div><span className="text-pink-500">const</span> entrolabs = <span className="text-blue-400">require</span>(<span className="text-emerald-400">'@entrolabs/core'</span>);</div>
              <div><span className="text-pink-500">const</span> app = entrolabs.<span className="text-yellow-400">initialize</span>();</div>
              <div className="text-slate-600">// Build pipelines and deploy cloud clusters</div>
              <div>app.<span className="text-yellow-400">deploy</span>(<span className="text-orange-400">"production"</span>, &#123;</div>
              <div className="pl-4">nodes: <span className="text-purple-400">12</span>,</div>
              <div className="pl-4">scaling: <span className="text-purple-400">true</span>,</div>
              <div className="pl-4">region: <span className="text-emerald-400">'ap-south-1'</span></div>
              <div>&#125;);</div>
            </div>
            {/* Mock build output tag */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-ping" /> BUILD SUCCESSFUL</span>
              <span>12.4ms</span>
            </div>
          </div>
        );
      case 2: // Mobility Solutions - Mobile App Mockup
        return (
          <div className="flex justify-center items-center w-full">
            {/* Phone Chassis */}
            <div className="w-[180px] h-[330px] rounded-[36px] bg-slate-900 border-4 border-slate-800 shadow-2xl p-3 flex flex-col justify-between overflow-hidden relative">
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
                <span className="w-8 h-1 bg-slate-800 rounded-full" />
              </div>
              
              {/* Mock Screen Content */}
              <div className="bg-slate-950 rounded-[24px] flex-grow p-2.5 pt-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider">Metrics</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  {/* Mock Activity Circle */}
                  <div className="relative h-24 w-24 mx-auto rounded-full border border-slate-800 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-[16px] font-black text-white">98%</span>
                      <span className="text-[8px] text-slate-500 block">Performance</span>
                    </div>
                    {/* SVG ring overlay */}
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                      <circle cx="48" cy="48" r="40" stroke="url(#gradient)" strokeWidth="3" fill="transparent" strokeDasharray="250" strokeDashoffset="50" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#238d45" />
                          <stop offset="100%" stopColor="#0b9fd3" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Mock Phone Tab Bar */}
                <div className="h-8 border-t border-slate-900 flex items-center justify-around text-[9px] text-slate-600">
                  <span className="text-primary font-bold">●</span>
                  <span>■</span>
                  <span>▲</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Business Process Services - Kanban Mockup
        return (
          <div className="w-full bg-slate-900 dark:bg-slate-950 rounded-2xl border border-slate-700/50 shadow-2xl p-4 space-y-4 overflow-hidden text-left">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 justify-between">
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Process Flow</span>
            </div>
            
            {/* Kanban Columns */}
            <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold text-slate-400">
              <div className="space-y-2">
                <span className="text-[9px] text-slate-600 block uppercase">To Do</span>
                <div className="bg-slate-800/40 rounded-lg p-2 border border-slate-800 space-y-1">
                  <span className="h-1.5 w-3/4 bg-slate-700 rounded block" />
                  <span className="h-1 w-1/2 bg-slate-700/50 rounded block" />
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-[9px] text-primary block uppercase">Active</span>
                <div className="bg-primary/5 rounded-lg p-2 border border-primary/20 space-y-1 shadow-[0_0_15px_rgba(35,141,69,0.05)]">
                  <span className="h-1.5 w-full bg-primary/30 rounded block" />
                  <span className="h-1 w-2/3 bg-primary/20 rounded block" />
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-[9px] text-secondary block uppercase">Done</span>
                <div className="bg-secondary/5 rounded-lg p-2 border border-secondary/20 space-y-1 opacity-70">
                  <span className="h-1.5 w-5/6 bg-secondary/30 rounded block" />
                  <span className="h-1 w-2/5 bg-secondary/20 rounded block" />
                </div>
              </div>
            </div>
          </div>
        );
      case 4: // Industry & Platform Solutions - Ecosystem Hub
        return (
          <div className="w-full bg-slate-900 dark:bg-slate-950 rounded-2xl border border-slate-700/50 shadow-2xl p-6 overflow-hidden flex items-center justify-center min-h-[220px]">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Central node */}
              <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-primary to-primary-soft flex items-center justify-center z-10 shadow-[0_0_20px_rgba(80,200,106,0.4)] animate-pulse">
                <span className="text-white text-xs font-bold font-mono">HUB</span>
              </div>
              
              {/* Surrounding links */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-700 animate-[spin_20s_linear_infinite]" />
              
              {/* Outer nodes */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">
                🏥
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">
                🏛️
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 h-7 w-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">
                🎓
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 h-7 w-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">
                💳
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-brand-dark overflow-hidden relative border-b border-slate-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <Badge variant="primary">What We Offer</Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Enterprise Feature Services
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              End-to-end software development, support capabilities, and consulting services tailored for compliance and performance.
            </p>
          </RevealOnScroll>
        </div>

        {/* Alternating list */}
        <div className="space-y-28">
          {SERVICES.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={srv.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual side */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <RevealOnScroll direction={isEven ? "left" : "right"} delay={0.2}>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-200/50 dark:from-slate-900/40 dark:to-slate-950/20 border border-slate-200/50 dark:border-white/5 flex items-center justify-center p-6 shadow-2xl">
                      {/* Ambient visual gradient */}
                      <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent opacity-50 pointer-events-none" />
                      
                      {/* Interactive CSS Mockup */}
                      <div className="w-full relative z-10">
                        {renderVisualMockup(idx)}
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Copy side */}
                <div
                  className={`lg:col-span-7 space-y-6 text-left ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <RevealOnScroll direction="up" delay={0.15}>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-soft">
                      Service Offering
                    </span>
                  </RevealOnScroll>
                  
                  <RevealOnScroll direction="up" delay={0.2}>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                      {srv.title}
                    </h3>
                  </RevealOnScroll>

                  <RevealOnScroll direction="up" delay={0.25}>
                    <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-sans">
                      {srv.desc}
                    </p>
                  </RevealOnScroll>

                  <RevealOnScroll direction="up" delay={0.3} className="pt-2">
                    <Button to="/services" variant="outline" size="md">
                      Learn More Offering Details
                    </Button>
                  </RevealOnScroll>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
