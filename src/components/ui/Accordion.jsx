import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md transition-colors duration-300"
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300 hover:text-primary dark:hover:text-primary-soft focus:outline-none"
            >
              <span className="text-base md:text-lg pr-4">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="flex-shrink-0 text-slate-400 dark:text-slate-600"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="px-6 pb-6 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-200/20 dark:border-slate-800/10 pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
