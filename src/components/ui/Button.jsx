import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  icon,
}) {
  const baseStyle =
    "relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_14px_rgba(35,141,69,0.25)] hover:shadow-[0_6px_20px_rgba(35,141,69,0.4)] hover:-translate-y-0.5",
    secondary:
      "bg-secondary text-white hover:bg-secondary-deep shadow-[0_4px_14px_rgba(11,159,211,0.25)] hover:shadow-[0_6px_20px_rgba(11,159,211,0.4)] hover:-translate-y-0.5",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(35,141,69,0.25)]",
    outlineSecondary:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(11,159,211,0.25)]",
    white:
      "bg-white text-brand-dark hover:bg-slate-50 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5",
    dark:
      "bg-brand-dark text-white hover:bg-slate-900 border border-brand-border/10 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,15,26,0.3)]",
    ghost:
      "text-brand-text hover:text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const content = (
    <motion.span
      className="flex items-center gap-2"
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </motion.span>
  );

  const innerBtn = (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      {content}
    </>
  );

  const fullClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} group ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClassName} onClick={onClick}>
        {innerBtn}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={fullClassName} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {innerBtn}
      </a>
    );
  }

  return (
    <button type={type} className={fullClassName} onClick={onClick} disabled={disabled}>
      {innerBtn}
    </button>
  );
}
