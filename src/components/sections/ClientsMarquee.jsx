import RevealOnScroll from "../animations/RevealOnScroll";
import Badge from "../ui/Badge";
import { CLIENTS } from "../../data/siteData";

export default function ClientsMarquee() {
  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950/20 overflow-hidden border-y border-slate-200/40 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <Badge variant="secondary">Trusted Partner</Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white">
              Trusted by Governments &amp; Enterprises
            </h2>
          </RevealOnScroll>
        </div>

        {/* Double-row Infinite Marquee Tickers (Moving in opposite directions) */}
        <div className="space-y-8 relative w-full overflow-hidden">
          {/* Row 1: Left */}
          <div className="flex w-max gap-12 overflow-hidden select-none py-2 hover:[animation-play-state:paused] pointer-events-auto">
            <div className="flex gap-12 animate-[marquee-left_45s_linear_infinite]">
              {CLIENTS.map((client, idx) => (
                <div
                  key={`${client.name}-1-${idx}`}
                  className="h-16 w-44 flex items-center justify-center group transition-colors duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 dark:invert-[0.2] dark:contrast-[1.2] dark:group-hover:invert-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-sm font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate for infinite loop */}
            <div className="flex gap-12 animate-[marquee-left_45s_linear_infinite]" aria-hidden="true">
              {CLIENTS.map((client, idx) => (
                <div
                  key={`${client.name}-1-dup-${idx}`}
                  className="h-16 w-44 flex items-center justify-center group transition-colors duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 dark:invert-[0.2] dark:contrast-[1.2] dark:group-hover:invert-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-sm font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right (reversed direction) */}
          <div className="flex w-max gap-12 overflow-hidden select-none py-2 hover:[animation-play-state:paused] pointer-events-auto">
            <div className="flex gap-12 animate-[marquee-right_45s_linear_infinite]">
              {[...CLIENTS].reverse().map((client, idx) => (
                <div
                  key={`${client.name}-2-${idx}`}
                  className="h-16 w-44 flex items-center justify-center group transition-colors duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 dark:invert-[0.2] dark:contrast-[1.2] dark:group-hover:invert-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-sm font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate for infinite loop */}
            <div className="flex gap-12 animate-[marquee-right_45s_linear_infinite]" aria-hidden="true">
              {[...CLIENTS].reverse().map((client, idx) => (
                <div
                  key={`${client.name}-2-dup-${idx}`}
                  className="h-16 w-44 flex items-center justify-center group transition-colors duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 dark:invert-[0.2] dark:contrast-[1.2] dark:group-hover:invert-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-sm font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticker marquee direction animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
