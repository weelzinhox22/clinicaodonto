import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { whatsappUrl, SITE } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const infos = [
  "Sem compromisso",
  "Resposta rápida",
  "Seg–Sex 8h–20h · Sáb 9h–14h",
];

export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glow1Y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={ref} className="cta-section">
      <div className="cta-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="cta-card"
        >
          {/* Ambient light orbs */}
          <motion.div
            aria-hidden
            className="cta-glow cta-glow-1"
            style={{ y: glow1Y }}
          />
          <motion.div
            aria-hidden
            className="cta-glow cta-glow-2"
            style={{ y: glow2Y }}
          />

          <div className="cta-content">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.55, ease }}
              className="cta-eyebrow"
            >
              Agende sua avaliação
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.65, ease }}
              className="cta-title"
            >
              Pronto para transformar
              <br />
              <span className="cta-title-light">seu sorriso?</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.34, duration: 0.6, ease }}
              className="cta-sub"
            >
              Nossa equipe responde rapidamente para orientar seu próximo passo.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.46, duration: 0.55, ease }}
              className="cta-btns"
            >
              <motion.a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(18,214,194,0.28)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn-primary"
              >
                Quero agendar agora
                <ArrowRight className="cta-btn-icon" />
              </motion.a>

              <motion.a
                href={`tel:${SITE.phone}`}
                whileHover={{ background: "rgba(255,255,255,0.12)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn-secondary"
              >
                <Phone className="cta-btn-icon" />
                Ligar para a clínica
              </motion.a>
            </motion.div>

            {/* Info strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="cta-info-strip"
            >
              {infos.map((t, i) => (
                <span key={t} className="cta-info-item">
                  {i > 0 && <span className="cta-info-dot" aria-hidden />}
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ── SECTION ── */
        .cta-section {
          padding: 5rem 0 6rem;
        }
        @media (min-width: 768px) { .cta-section { padding: 6rem 0 7rem; } }

        /* ── CONTAINER ── */
        .cta-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 768px) { .cta-container { padding: 0 2rem; } }
        @media (min-width: 1280px) { .cta-container { padding: 0 3rem; } }

        /* ── CARD ── */
        .cta-card {
          position: relative;
          overflow: hidden;
          border-radius: 36px;
          padding: 4rem 2rem;
          text-align: center;
          background: linear-gradient(
            160deg,
            oklch(0.24 0.08 258) 0%,
            oklch(0.20 0.07 260) 50%,
            oklch(0.16 0.06 262) 100%
          );
        }
        @media (min-width: 768px) { .cta-card { padding: 5.5rem 3rem; } }

        /* ── GLOWS ── */
        .cta-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .cta-glow-1 {
          width: 480px; height: 480px;
          top: -180px; right: -120px;
          background: radial-gradient(circle, oklch(0.74 0.14 165 / 0.18) 0%, transparent 70%);
        }
        .cta-glow-2 {
          width: 380px; height: 380px;
          bottom: -160px; left: -80px;
          background: radial-gradient(circle, oklch(0.65 0.16 290 / 0.12) 0%, transparent 70%);
        }

        /* ── CONTENT ── */
        .cta-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        /* ── EYEBROW ── */
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mint);
        }
        .cta-eyebrow::before,
        .cta-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--mint);
          opacity: 0.55;
        }

        /* ── TITLE ── */
        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.8vw, 3.25rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-weight: 500;
          color: #fff;
          margin: 0;
        }
        .cta-title-light {
          color: oklch(0.97 0 0 / 0.65);
        }

        /* ── SUBTITLE ── */
        .cta-sub {
          font-size: 1rem;
          line-height: 1.7;
          color: oklch(1 0 0 / 0.55);
          max-width: 40ch;
          margin: 0;
        }

        /* ── BUTTONS ── */
        .cta-btns {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          max-width: 400px;
        }
        @media (min-width: 640px) {
          .cta-btns {
            flex-direction: row;
            justify-content: center;
            max-width: none;
          }
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          height: 60px;
          padding: 0 2rem;
          border-radius: 18px;
          font-size: 0.92rem;
          font-weight: 600;
          font-family: var(--font-sans);
          background: linear-gradient(135deg, #12D6C2 0%, #1495FF 100%);
          color: #fff;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          height: 60px;
          padding: 0 1.75rem;
          border-radius: 18px;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: var(--font-sans);
          border: 1.5px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.07);
          text-decoration: none;
          transition: all 0.22s ease;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .cta-btn-secondary:hover {
          border-color: rgba(255,255,255,0.28);
          color: #fff;
        }

        .cta-btn-icon {
          width: 16px; height: 16px;
          flex-shrink: 0;
        }

        /* ── INFO STRIP ── */
        .cta-info-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
        }
        .cta-info-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.76rem;
          color: oklch(1 0 0 / 0.38);
          letter-spacing: 0.01em;
        }
        .cta-info-dot {
          display: inline-block;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: oklch(1 0 0 / 0.22);
        }
      `}</style>
    </section>
  );
}
