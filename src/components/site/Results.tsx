import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";

const counters = [
  { v: 12000, suffix: "+", l: "Pacientes atendidos" },
  { v: 1200, suffix: "+", l: "Avaliações positivas" },
  { v: 18, suffix: " anos", l: "De mercado" },
  { v: 35000, suffix: "+", l: "Procedimentos realizados" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function Results() {
  return (
    <Section id="resultados">
      <SectionHeader
        eyebrow="Resultados e números"
        title="Quase duas décadas transformando sorrisos."
      />
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" stagger={0.1}>
        {counters.map((c) => (
          <FadeUpItem key={c.l}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02, boxShadow: "var(--shadow-elegant)" }}
              transition={{ duration: 0.3, ease }}
              className="p-7 md:p-9 rounded-2xl border bg-background text-center cursor-default"
            >
              <div className="font-display text-4xl md:text-5xl text-gradient">
                <Counter value={c.v} suffix={c.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-2">{c.l}</div>
            </motion.div>
          </FadeUpItem>
        ))}
      </Stagger>
    </Section>
  );
}
