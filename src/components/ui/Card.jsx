import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  variant = "glass", // glass, flat, outline, dark
  hoverEffect = true,
  onClick,
}) {
  const baseStyle = "relative rounded-3xl overflow-hidden p-6 md:p-8 transition-all duration-300";

  const variants = {
    glass:
      "bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-sm",
    flat:
      "bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900",
    outline:
      "bg-transparent border border-slate-200 dark:border-slate-800",
    dark:
      "bg-brand-dark text-white border border-brand-border/15 shadow-2xl",
  };

  const hoverStyle = hoverEffect
    ? "hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary-soft/10 hover:shadow-primary/5 dark:hover:shadow-primary-soft/3"
    : "";

  return (
    <motion.div
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${hoverStyle} ${className}`}
      whileHover={hoverEffect ? { y: -6 } : {}}
      transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {/* Subtle overlay glow */}
      {hoverEffect && (
        <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
