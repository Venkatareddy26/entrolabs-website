import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RevealOnScroll({
  children,
  direction = "up",
  delay = 0.2,
  duration = 0.6,
  className = "",
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // premium cubic-bezier ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
