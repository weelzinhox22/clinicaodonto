import { motion } from "framer-motion";
import { Section } from "./Section";

const steps = [
  {
    n: "01",
    title: "Agendamento",
    desc: "Pelo WhatsApp ou formulário online, em menos de 2 minutos.",
  },
  {
    n: "02",
    title: "Avaliação",
    desc: "Anamnese completa com exame clínico e tecnologia digital.",
  },
  {
    n: "03",
    title: "Plano",
    desc: "Proposta detalhada, transparente e totalmente personalizada.",
  },
  {
    n: "04",
    title: "Tratamento",
    desc: "Procedimentos com protocolos de excelência e cuidado humano.",
  },
  {
    n: "05",
    title: "Acompanhamento",
    desc: "Suporte contínuo para preservar e evoluir seu sorriso.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* subtle vertical rhythm offsets — creates visual wave */
const yOffsets = [0, 24, 12, 24, 0];

export function HowItWorks() {
  return (
    <Section className="hiw-section overflow-hidden">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="hiw-eyebrow-wrap"
      >
        <span className="hiw-eyebrow">Como funciona</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease, delay: 0.08 }}
        className="hiw-title"
      >
        Da primeira consulta ao
        <br />
        <span className="hiw-title-accent">seu novo sorriso</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.16 }}
        className="hiw-subtitle"
      >
        Um processo transparente pensado para entregar segurança e previsibilidade.
      </motion.p>

      {/* Cards grid */}
      <div className="hiw-grid">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.65, ease }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(15,23,42,0.13)" }}
            style={{ marginTop: yOffsets[i] }}
            className="hiw-card"
          >
            <span className="hiw-number">{s.n}</span>
            <h3 className="hiw-card-title">{s.title}</h3>
            <p className="hiw-card-desc">{s.desc}</p>

            {/* Subtle connector dot between cards (desktop) */}
            {i < steps.length - 1 && (
              <span className="hiw-connector" aria-hidden />
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        /* ── SECTION OVERRIDE ── */
        .hiw-section {
          background: oklch(0.975 0.006 250);
        }

        /* ── EYEBROW ── */
        .hiw-eyebrow-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .hiw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--mint);
        }
        .hiw-eyebrow::before,
        .hiw-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--mint);
          opacity: 0.5;
        }

        /* ── HEADING ── */
        .hiw-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 3rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-weight: 500;
          color: var(--foreground);
          text-align: center;
          margin: 0 auto 1.25rem;
        }
        .hiw-title-accent {
          background: linear-gradient(135deg, var(--mint) 0%, oklch(0.42 0.12 258) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* ── SUBTITLE ── */
        .hiw-subtitle {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted-foreground);
          text-align: center;
          max-width: 44ch;
          margin: 0 auto 4rem;
        }

        /* ── GRID ── */
        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          max-width: 72rem;
          margin: 0 auto;
          align-items: start;
        }
        @media (min-width: 640px) {
          .hiw-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .hiw-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
          }
        }

        /* ── CARD ── */
        .hiw-card {
          position: relative;
          background: oklch(1 0 0);
          border: 1px solid oklch(0.92 0.012 250);
          border-radius: 24px;
          padding: 2rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 2px 12px rgba(15,23,42,0.05);
        }
        .hiw-card:hover {
          border-color: oklch(0.85 0.025 200);
        }

        /* ── NUMBER ── */
        .hiw-number {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 600;
          line-height: 1;
          color: oklch(0.28 0.09 258 / 0.08);
          letter-spacing: -0.04em;
          display: block;
          margin-bottom: 0.5rem;
        }

        /* ── CARD TITLE ── */
        .hiw-card-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--foreground);
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* ── CARD DESC ── */
        .hiw-card-desc {
          font-size: 0.82rem;
          line-height: 1.65;
          color: var(--muted-foreground);
          margin: 0;
        }

        /* ── CONNECTOR DOT ── */
        .hiw-connector {
          display: none;
          position: absolute;
          right: -0.6rem;
          top: 50%;
          transform: translateY(-50%);
          width: 8px; height: 8px;
          border-radius: 50%;
          background: oklch(0.88 0.025 200);
          z-index: 2;
        }
        @media (min-width: 1024px) {
          .hiw-connector { display: block; }
        }
      `}</style>
    </Section>
  );
}
