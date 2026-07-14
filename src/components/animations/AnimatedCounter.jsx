import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ value, duration = 1.5, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 16; // ~60fps
    const totalSteps = Math.ceil(totalMiliseconds / incrementTime);
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Easing function (easeOutQuad)
      const t = currentStep / totalSteps;
      const easedT = t * (2 - t);
      
      const currentVal = Math.round(end * easedT);
      setCount(currentVal);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  );
}
