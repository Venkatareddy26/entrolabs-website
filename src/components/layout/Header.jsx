import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../../data/siteData";
import Button from "../ui/Button";
import logoBlack from "../../assets/logo-black.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // default to white theme/light mode
  const [scrollProgress, setScrollProgress] = useState(0);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Sync dark mode class
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTechDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/5 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-primary-soft transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoBlack}
            alt="EntroLabs"
            className="h-12 w-auto dark:brightness-0 dark:invert transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            if (link.isCTA) return null;
            
            const isActive = location.pathname === link.path;
            
            if (link.children) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setTechDropdownOpen(true)}
                  onMouseLeave={() => setTechDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1.5 transition-all duration-200 hover:bg-slate-100/50 dark:hover:bg-white/5 ${
                      location.pathname.startsWith(link.path)
                        ? "text-primary dark:text-primary-soft font-semibold"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${techDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  <AnimatePresence>
                    {techDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shadow-xl p-2 z-50 backdrop-blur-xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-soft hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-slate-100/50 dark:hover:bg-white/5 ${
                  isActive
                    ? "text-primary dark:text-primary-soft font-semibold"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/5 dark:bg-primary-soft/5 rounded-full border border-primary/10 dark:border-primary-soft/10 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side buttons: Darkmode & Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Button to="/contact" variant="primary" size="md">
            Contact Us
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full inset-x-0 bg-white dark:bg-brand-dark border-t border-slate-200/50 dark:border-white/5 z-40 overflow-y-auto block lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => {
                  if (link.isCTA) return null;
                  
                  return (
                    <div key={link.label} className="border-b border-slate-100 dark:border-slate-800/40 pb-3">
                      {link.children ? (
                        <div>
                          <span className="text-base font-semibold text-slate-400 dark:text-slate-600 block mb-2">
                            {link.label}
                          </span>
                          <div className="pl-4 flex flex-col gap-2.5">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.path}
                                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-soft transition-colors duration-200"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`text-lg font-semibold flex justify-between items-center ${
                            location.pathname === link.path
                              ? "text-primary dark:text-primary-soft"
                              : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
              
              <div className="mt-4">
                <Button to="/contact" variant="primary" size="lg" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
