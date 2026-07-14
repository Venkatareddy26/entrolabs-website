import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        // Run with a tiny timeout to allow page layout transition to settle
        const timer = setTimeout(() => {
          const headerOffset = 90; // offset height of fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // easeOutQuart
      }}
      className="flex-grow pt-[88px]" // Offset header height
    >
      {children}
    </motion.div>
  );
}
