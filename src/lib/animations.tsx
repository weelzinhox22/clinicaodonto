import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

/* ─── Shared easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Reusable variants ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};



/* ─── ScrollReveal wrapper ─── */
interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  /** Tailwind duration class e.g. "duration-700" */
  duration?: number;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** Once true, never re-animate */
  once?: boolean;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className = "",
  duration = 0.7,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      transition={{ duration, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger wrapper ─── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0.1,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Fade-up child (use inside Stagger) ─── */
export function FadeUpItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.6, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

