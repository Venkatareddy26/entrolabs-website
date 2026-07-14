export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  pulse = false,
}) {
  const baseStyle =
    "inline-flex items-center gap-1.5 font-semibold rounded-full tracking-wider uppercase select-none";

  const variants = {
    primary:
      "bg-primary/10 text-primary border border-primary/20",
    secondary:
      "bg-secondary/10 text-secondary border border-secondary/20",
    success:
      "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20",
    warning:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
    info:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    muted:
      "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3.5 py-1 text-[11px]",
    lg: "px-4.5 py-1.5 text-xs",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            variant === "primary" ? "bg-primary" : 
            variant === "secondary" ? "bg-secondary" : 
            variant === "success" ? "bg-green-500" : "bg-primary"
          }`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${
            variant === "primary" ? "bg-primary" : 
            variant === "secondary" ? "bg-secondary" : 
            variant === "success" ? "bg-green-500" : "bg-primary"
          }`}></span>
        </span>
      )}
      {children}
    </span>
  );
}
