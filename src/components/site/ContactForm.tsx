import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { ScrollReveal, Stagger, FadeUpItem } from "@/lib/animations";
import {
  Check,
  Loader2,
  MessageCircle,
  User,
  Phone,
  Smile,
  ArrowRight,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  ClipboardList,
  FileText,
  Handshake,
  Zap,
} from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  treatment: z.string().min(1, "Selecione um tratamento"),
});

const treatments = [
  "Avaliação geral",
  "Limpeza",
  "Clareamento",
  "Implante",
  "Ortodontia",
  "Lentes de contato",
  "Harmonização",
  "Canal",
  "Prótese",
  "Odontopediatria",
];

const benefits = [
  { Icon: ClipboardList, label: "Avaliação completa" },
  { Icon: FileText, label: "Plano transparente" },
  { Icon: Handshake, label: "Sem compromisso" },
  { Icon: Zap, label: "Retorno rápido" },
];

const seals = [
  { icon: ShieldCheck, label: "Atendimento humanizado" },
  { icon: Award, label: "Especialistas certificados" },
  { icon: Sparkles, label: "Resultado personalizado" },
];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("loading");
    const msg = `Olá! Quero agendar uma avaliação.\n\nNome: ${parsed.data.name}\nTelefone: ${parsed.data.phone}\nTratamento: ${parsed.data.treatment}`;
    setTimeout(() => {
      window.open(whatsappUrl(msg), "_blank");
      setState("sent");
    }, 600);
  }

  return (
    <section id="contato" className="cf-section">
      {/* Organic background */}
      <div className="cf-bg-orb cf-bg-orb-1" />
      <div className="cf-bg-orb cf-bg-orb-2" />
      <div className="cf-bg-orb cf-bg-orb-3" />

      <div className="container-px mx-auto max-w-7xl cf-grid">
        {/* ── LEFT COLUMN ── */}
        <ScrollReveal
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
        >
          <div className="cf-left">
            {/* Eyebrow */}
            <div className="cf-eyebrow">
              <span className="cf-eyebrow-dot" />
              Agende sua avaliação
            </div>

            {/* Hero title */}
            <h2 className="cf-title">
              Seu{" "}
              <span className="cf-title-gradient">novo sorriso</span>
              <br />
              começa hoje
            </h2>

            {/* Subtitle */}
            <p className="cf-subtitle">
              Receba uma avaliação personalizada e descubra o tratamento ideal
              para você.
            </p>

            {/* Social proof */}
            <div className="cf-social-proof">
              <div className="cf-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="cf-star-icon" />
                ))}
                <span className="cf-rating">4.9</span>
              </div>
              <span className="cf-patients">+2.000 pacientes atendidos</span>
            </div>

            {/* Seals */}
            <Stagger className="cf-seals" stagger={0.07}>
              {seals.map(({ icon: Icon, label }) => (
                <FadeUpItem key={label}>
                  <div className="cf-seal">
                    <span className="cf-seal-icon-wrap">
                      <Icon className="cf-seal-icon" />
                    </span>
                    <span>{label}</span>
                  </div>
                </FadeUpItem>
              ))}
            </Stagger>

            {/* Benefit cards */}
            <Stagger className="cf-benefits-grid" stagger={0.06}>
              {benefits.map(({ Icon, label }) => (
                <FadeUpItem key={label}>
                  <div className="cf-benefit-card">
                    <span className="cf-benefit-icon-wrap">
                      <Icon className="cf-benefit-icon-svg" />
                    </span>
                    <span className="cf-benefit-label">{label}</span>
                  </div>
                </FadeUpItem>
              ))}
            </Stagger>

            {/* WhatsApp secondary CTA */}
            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="cf-whatsapp-btn"
            >
              <MessageCircle className="cf-wa-icon" />
              Prefere falar no WhatsApp?
            </motion.a>
          </div>
        </ScrollReveal>

        {/* ── RIGHT COLUMN — FORM CARD ── */}
        <ScrollReveal
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
        >
          <div className="cf-form-card">
            {/* Card header */}
            <div className="cf-form-header">
              <div className="cf-form-header-icon">
                <Smile className="cf-smile-icon" />
              </div>
              <div>
                <h3 className="cf-form-title">Agende sua avaliação</h3>
                <p className="cf-form-sub">Leva menos de 1 minuto</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="cf-form-body">
              <PremiumField
                label="Nome completo"
                name="name"
                error={errors.name}
                icon={<User className="cf-input-icon-svg" />}
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  className="cf-input"
                />
              </PremiumField>

              <PremiumField
                label="WhatsApp"
                name="phone"
                error={errors.phone}
                icon={<Phone className="cf-input-icon-svg" />}
              >
                <input
                  name="phone"
                  type="tel"
                  placeholder="(71) 99999-0000"
                  className="cf-input"
                />
              </PremiumField>

              <PremiumField
                label="Tratamento desejado"
                name="treatment"
                error={errors.treatment}
                icon={<Smile className="cf-input-icon-svg" />}
              >
                <div className="cf-select-wrap">
                  <select name="treatment" className="cf-input cf-select" defaultValue="">
                    <option value="" disabled>
                      Selecione...
                    </option>
                    {treatments.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <span className="cf-select-arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </PremiumField>

              {/* CTA */}
              <motion.button
                type="submit"
                disabled={state !== "idle"}
                whileHover={state === "idle" ? { y: -3, boxShadow: "0 12px 36px rgba(18,214,194,0.30)" } : {}}
                whileTap={state === "idle" ? { scale: 0.98 } : {}}
                className="cf-cta-btn"
              >
                {state === "loading" && <Loader2 className="size-4 animate-spin" />}
                {state === "sent" && <Check className="size-4" />}
                {state === "idle" && (
                  <>
                    Quero minha avaliação
                    <ArrowRight className="cf-cta-arrow" />
                  </>
                )}
                {state === "loading" && "Enviando..."}
                {state === "sent" && "Redirecionado para o WhatsApp"}
              </motion.button>

              {/* Microcopy */}
              <div className="cf-microcopy">
                <span>✓ Sem compromisso</span>
                <span>✓ Confirmação rápida</span>
                <span>✓ Via WhatsApp</span>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>

      {/* ─── Scoped styles ─── */}
      <style>{`
        /* ── SECTION ── */
        .cf-section {
          position: relative;
          overflow: hidden;
          padding: 5rem 0 6rem;
        }
        @media (min-width: 768px) {
          .cf-section { padding: 6rem 0 7rem; }
        }

        /* ── ORGANIC BACKGROUND ORBS ── */
        .cf-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .cf-bg-orb-1 {
          width: 520px; height: 520px;
          top: -120px; left: -160px;
          background: radial-gradient(circle, oklch(0.92 0.04 165 / 0.22) 0%, transparent 70%);
        }
        .cf-bg-orb-2 {
          width: 400px; height: 400px;
          bottom: -100px; right: -100px;
          background: radial-gradient(circle, oklch(0.80 0.06 258 / 0.15) 0%, transparent 70%);
        }
        .cf-bg-orb-3 {
          width: 300px; height: 300px;
          top: 40%; left: 45%;
          background: radial-gradient(circle, oklch(0.88 0.04 200 / 0.12) 0%, transparent 70%);
        }

        /* ── GRID ── */
        .cf-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .cf-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        /* ── LEFT COLUMN ── */
        .cf-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Eyebrow */
        .cf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--mint);
        }
        .cf-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--mint);
          display: inline-block;
        }

        /* Title */
        .cf-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.25rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-weight: 500;
          color: var(--foreground);
          margin: 0;
        }
        .cf-title-gradient {
          background: linear-gradient(135deg, #12D6C2 0%, #1495FF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Subtitle */
        .cf-subtitle {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted-foreground);
          max-width: 38ch;
          margin: 0;
        }

        /* Social proof */
        .cf-social-proof {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .cf-stars {
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }
        .cf-star-icon {
          width: 14px; height: 14px;
          fill: #f59e0b;
          stroke: #f59e0b;
        }
        .cf-rating {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--foreground);
          margin-left: 0.3rem;
        }
        .cf-patients {
          font-size: 0.8rem;
          color: var(--muted-foreground);
        }

        /* Seals */
        .cf-seals {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .cf-seal {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--foreground);
          font-weight: 500;
        }
        .cf-seal-icon-wrap {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: oklch(0.74 0.14 165 / 0.12);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .cf-seal-icon {
          width: 13px; height: 13px;
          color: var(--mint);
        }

        /* Benefits grid */
        .cf-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .cf-benefit-card {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: oklch(0.97 0.008 250 / 0.7);
          border: 1px solid oklch(0.92 0.012 250);
          border-radius: 14px;
          padding: 0.65rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--foreground);
          transition: box-shadow 0.2s ease, background 0.2s ease;
        }
        .cf-benefit-card:hover {
          background: oklch(1 0 0);
          box-shadow: 0 4px 16px rgba(15,23,42,0.07);
        }
        .cf-benefit-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: oklch(0.28 0.09 258 / 0.07);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .cf-benefit-icon-svg {
          width: 13px;
          height: 13px;
          color: oklch(0.42 0.12 258);
        }
        .cf-benefit-label {
          line-height: 1.2;
        }

        /* WhatsApp button */
        .cf-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          border: 1.5px solid oklch(0.68 0.17 145 / 0.55);
          color: oklch(0.52 0.14 145);
          border-radius: 100px;
          padding: 0.65rem 1.2rem;
          font-size: 0.82rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
          background: oklch(0.68 0.17 145 / 0.05);
        }
        .cf-whatsapp-btn:hover {
          background: oklch(0.68 0.17 145 / 0.10);
          border-color: oklch(0.68 0.17 145 / 0.8);
        }
        .cf-wa-icon {
          width: 15px; height: 15px;
        }

        /* ── FORM CARD ── */
        .cf-form-card {
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid #EAF0F5;
          box-shadow: 0 20px 60px rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.04);
          padding: 2.5rem;
        }
        @media (min-width: 768px) {
          .cf-form-card { padding: 3rem; }
        }

        /* Card header */
        .cf-form-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #EAF0F5;
        }
        .cf-form-header-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #12D6C2 0%, #1495FF 100%);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .cf-smile-icon {
          width: 22px; height: 22px;
          color: #fff;
        }
        .cf-form-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--foreground);
          letter-spacing: -0.02em;
          margin: 0;
        }
        .cf-form-sub {
          font-size: 0.78rem;
          color: var(--muted-foreground);
          margin: 0.15rem 0 0;
        }

        /* Form body */
        .cf-form-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* ── FIELD ── */
        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .cf-field-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: oklch(0.35 0.04 250);
          letter-spacing: 0.01em;
        }
        .cf-input-wrapper {
          position: relative;
        }
        .cf-input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: oklch(0.65 0.05 250);
        }
        .cf-input-icon-svg {
          width: 15px; height: 15px;
        }
        .cf-input {
          width: 100%;
          height: 58px;
          border-radius: 16px;
          border: 1px solid #E7EEF5;
          background: #FAFCFE;
          padding: 0 1rem 0 2.75rem;
          font-size: 0.88rem;
          font-family: var(--font-sans);
          color: var(--foreground);
          transition: all 0.2s ease;
          appearance: none;
          -webkit-appearance: none;
        }
        .cf-input::placeholder {
          color: oklch(0.72 0.02 250);
          font-size: 0.83rem;
        }
        .cf-input:hover {
          background: #FFFFFF;
          box-shadow: 0 2px 10px rgba(15,23,42,0.06);
        }
        .cf-input:focus {
          outline: none;
          border-color: #12D6C2;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(18,214,194,0.14);
        }

        /* Select */
        .cf-select-wrap {
          position: relative;
        }
        .cf-select {
          cursor: pointer;
          padding-right: 2.5rem;
        }
        .cf-select-arrow {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: oklch(0.55 0.04 250);
        }

        /* Error */
        .cf-error {
          font-size: 0.73rem;
          color: var(--destructive);
          margin-top: 0.15rem;
        }

        /* ── CTA BUTTON ── */
        .cf-cta-btn {
          width: 100%;
          height: 60px;
          border-radius: 18px;
          background: linear-gradient(135deg, #12D6C2 0%, #1495FF 100%);
          color: #fff;
          font-size: 0.92rem;
          font-weight: 600;
          font-family: var(--font-sans);
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          margin-top: 0.5rem;
          letter-spacing: 0.01em;
        }
        .cf-cta-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .cf-cta-arrow {
          width: 16px; height: 16px;
          opacity: 0.85;
        }

        /* ── MICROCOPY ── */
        .cf-microcopy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.72rem;
          color: oklch(0.62 0.03 250);
          text-align: center;
          margin-top: 0.25rem;
        }

        /* ── RESPONSIVE: mobile-first form on top ── */
        @media (max-width: 1023px) {
          .cf-grid {
            display: flex;
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </section>
  );
}

function PremiumField({
  label,
  name,
  error,
  icon,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="cf-field">
      <span className="cf-field-label">{label}</span>
      <div className="cf-input-wrapper">
        <span className="cf-input-icon">{icon}</span>
        {children}
      </div>
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="cf-error"
        >
          {error}
        </motion.span>
      )}
    </div>
  );
}
