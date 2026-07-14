import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary-soft/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg space-y-8 relative z-10"
      >
        {/* Giant 404 */}
        <div className="relative">
          <span className="text-[140px] md:text-[180px] font-black tracking-tighter leading-none bg-gradient-to-r from-primary via-secondary to-primary-soft bg-clip-text text-transparent select-none">
            404
          </span>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-4 right-4 text-5xl"
          >
            🛸
          </motion.div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Lost in the Digital Cosmos
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button to="/" variant="primary" size="lg" icon={<Home className="h-4.5 w-4.5" />}>
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" size="lg" icon={<ArrowLeft className="h-4.5 w-4.5" />}>
            Contact Support
          </Button>
        </div>

        {/* Quick links */}
        <div className="pt-8 border-t border-slate-200/40 dark:border-white/5">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider mb-3">Try these instead</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              { label: "Services", to: "/services" },
              { label: "About", to: "/about" },
              { label: "Technologies", to: "/technologies" },
              { label: "Careers", to: "/careers" },
            ].map(link => (
              <Button key={link.label} to={link.to} variant="ghost" size="sm">
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
