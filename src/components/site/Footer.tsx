import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const treatments = [
  "Clareamento dental",
  "Implantes",
  "Ortodontia",
  "Lentes de contato",
  "Harmonização facial",
  "Odontopediatria",
];

const contactItems = [
  { Icon: MapPin, text: SITE.address },
  { Icon: Phone, text: SITE.phone },
  { Icon: Mail, text: SITE.email },
  { Icon: Clock, text: SITE.hours },
];

const infoLinks = [
  "Termos de uso",
  "Política de privacidade",
  "Aviso médico-legal",
];

export function Footer() {
  return (
    <footer className="ft-root">
      <div className="ft-container">
        <div className="ft-grid">

          {/* ── Col 1: Brand ── */}
          <div className="ft-col ft-col-brand">
            <div className="ft-logo">
              <div className="ft-logo-mark">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1C5 1 2.5 3.2 2.5 6c0 1.8.9 3.4 2.3 4.4L8 15l3.2-4.6C12.6 9.4 13.5 7.8 13.5 6 13.5 3.2 11 1 8 1z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <span className="ft-logo-text">
                Sorriso<span className="ft-logo-accent">Vivo</span>
              </span>
            </div>
            <p className="ft-brand-desc">{SITE.tagline}</p>

            {/* Social icons */}
            <div className="ft-socials">
              <a href="#" aria-label="Instagram" className="ft-social">
                <Instagram className="ft-social-icon" />
              </a>
              <a href="#" aria-label="Facebook" className="ft-social">
                <FacebookIcon className="ft-social-icon" />
              </a>
              <a
                href={whatsappUrl()}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-social ft-social-wa"
              >
                <MessageCircle className="ft-social-icon" />
              </a>
            </div>

            {/* CRO badge */}
            <div className="ft-cro-badge">
              <span className="ft-cro-label">Responsável técnica</span>
              <span className="ft-cro-name">Dra. Helena Ribeiro</span>
              <span className="ft-cro-code">CRO-BA 12345</span>
            </div>
          </div>

          {/* ── Col 2: Treatments ── */}
          <div className="ft-col">
            <h4 className="ft-col-heading">Tratamentos</h4>
            <ul className="ft-link-list">
              {treatments.map((t) => (
                <li key={t}>
                  <a href="#tratamentos" className="ft-link">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="ft-col">
            <h4 className="ft-col-heading">Contato</h4>
            <ul className="ft-contact-list">
              {contactItems.map(({ Icon, text }) => (
                <li key={text} className="ft-contact-item">
                  <Icon className="ft-contact-icon" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Info ── */}
          <div className="ft-col">
            <h4 className="ft-col-heading">Informações</h4>
            <ul className="ft-link-list">
              {infoLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="ft-link">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <span className="ft-copy">
            © {new Date().getFullYear()} SorrisoVivo. Todos os direitos reservados.
          </span>
          <span className="ft-dev">
            Desenvolvido por{" "}
            <a
              href="https://studiooryon.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-dev-link"
            >
              Studio Oryon
            </a>
          </span>
        </div>
      </div>

      <style>{`
        /* ── ROOT ── */
        .ft-root {
          background: oklch(0.16 0.05 258);
          color: oklch(1 0 0 / 0.72);
        }

        /* ── CONTAINER ── */
        .ft-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 768px) { .ft-container { padding: 0 2rem; } }
        @media (min-width: 1280px) { .ft-container { padding: 0 3rem; } }

        /* ── GRID ── */
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          padding: 4.5rem 0 3.5rem;
        }
        @media (min-width: 640px) {
          .ft-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .ft-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 3.5rem; }
        }

        /* ── COL ── */
        .ft-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .ft-col-brand { gap: 1.5rem; }

        /* ── LOGO ── */
        .ft-logo {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .ft-logo-mark {
          width: 32px; height: 32px;
          border-radius: 9px;
          background: linear-gradient(135deg, oklch(0.42 0.12 258) 0%, oklch(0.55 0.14 258) 100%);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .ft-logo-text {
          font-family: var(--font-display);
          font-size: 1.1rem;
          letter-spacing: -0.025em;
          font-weight: 500;
          color: #fff;
        }
        .ft-logo-accent {
          color: var(--mint);
        }

        /* ── BRAND DESC ── */
        .ft-brand-desc {
          font-size: 0.83rem;
          line-height: 1.65;
          color: oklch(1 0 0 / 0.42);
          max-width: 26ch;
          margin: 0;
        }

        /* ── SOCIALS ── */
        .ft-socials {
          display: flex;
          gap: 0.5rem;
        }
        .ft-social {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          color: oklch(1 0 0 / 0.5);
          border: 1px solid oklch(1 0 0 / 0.08);
          background: oklch(1 0 0 / 0.04);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ft-social:hover {
          color: oklch(1 0 0 / 0.85);
          background: oklch(1 0 0 / 0.08);
          border-color: oklch(1 0 0 / 0.14);
        }
        .ft-social-wa {
          color: var(--mint);
          border-color: oklch(0.74 0.14 165 / 0.22);
          background: oklch(0.74 0.14 165 / 0.07);
        }
        .ft-social-wa:hover {
          color: oklch(0.88 0.14 165);
          background: oklch(0.74 0.14 165 / 0.14);
          border-color: oklch(0.74 0.14 165 / 0.35);
        }
        .ft-social-icon {
          width: 15px; height: 15px;
        }

        /* ── CRO BADGE ── */
        .ft-cro-badge {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.9rem 1.1rem;
          border-radius: 14px;
          border: 1px solid oklch(1 0 0 / 0.07);
          background: oklch(1 0 0 / 0.03);
          max-width: 220px;
        }
        .ft-cro-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: oklch(1 0 0 / 0.3);
        }
        .ft-cro-name {
          font-size: 0.87rem;
          font-weight: 500;
          color: oklch(1 0 0 / 0.75);
          font-family: var(--font-display);
        }
        .ft-cro-code {
          font-size: 0.72rem;
          color: oklch(1 0 0 / 0.35);
          letter-spacing: 0.04em;
        }

        /* ── COL HEADING ── */
        .ft-col-heading {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: oklch(1 0 0 / 0.3);
          margin: 0;
        }

        /* ── LINK LIST ── */
        .ft-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ft-link {
          font-size: 0.84rem;
          color: oklch(1 0 0 / 0.52);
          text-decoration: none;
          transition: color 0.18s ease;
          line-height: 1.4;
        }
        .ft-link:hover {
          color: var(--mint);
        }

        /* ── CONTACT LIST ── */
        .ft-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.82rem;
          color: oklch(1 0 0 / 0.50);
          line-height: 1.5;
        }
        .ft-contact-icon {
          width: 14px; height: 14px;
          color: oklch(1 0 0 / 0.25);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 1.75rem 0 2rem;
          border-top: 1px solid oklch(1 0 0 / 0.07);
        }
        @media (min-width: 640px) {
          .ft-bottom { flex-direction: row; }
        }

        .ft-copy {
          font-size: 0.75rem;
          color: oklch(1 0 0 / 0.28);
          letter-spacing: 0.01em;
        }
        .ft-dev {
          font-size: 0.75rem;
          color: oklch(1 0 0 / 0.22);
        }
        .ft-dev-link {
          color: oklch(1 0 0 / 0.35);
          text-decoration: none;
          transition: color 0.18s ease;
        }
        .ft-dev-link:hover {
          color: var(--mint);
        }
      `}</style>
    </footer>
  );
}
