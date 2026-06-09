import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV = [
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className={`hdr-root ${scrolled ? "hdr-scrolled" : ""} ${open ? "hdr-open" : ""}`}
      >
        <div className="hdr-inner">
          {/* Logo */}
          <Link to="/" className="hdr-logo">
            <div className="hdr-logo-mark">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1C5 1 2.5 3.2 2.5 6c0 1.8.9 3.4 2.3 4.4L8 15l3.2-4.6C12.6 9.4 13.5 7.8 13.5 6 13.5 3.2 11 1 8 1z"
                  fill="white"
                  fillOpacity="0.95"
                />
              </svg>
            </div>
            <span className="hdr-logo-text">
              Sorriso<span className="hdr-logo-accent">Vivo</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hdr-nav">
            {NAV.map((n) => {
              const sectionId = n.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a key={n.href} href={n.href} className={`hdr-link ${isActive ? "hdr-link-active" : ""}`}>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="hdr-link-bg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="hdr-link-text">{n.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hdr-cta-wrap">
            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(20,149,255,0.22)" }}
              whileTap={{ scale: 0.97 }}
              className="hdr-cta"
            >
              Agendar avaliação
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            className="hdr-hamburger"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="hdr-hamburger-icon" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="hdr-hamburger-icon" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease }}
            className="hdr-mobile-menu"
            onClick={() => setOpen(false)}
          >
            <div className="hdr-mobile-inner" onClick={(e) => e.stopPropagation()}>
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 + 0.08, duration: 0.3, ease }}
                  className="hdr-mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </motion.a>
              ))}
              <motion.a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV.length * 0.04 + 0.08, duration: 0.3, ease }}
                className="hdr-mobile-cta"
                onClick={() => setOpen(false)}
              >
                Agendar avaliação
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: (NAV.length + 1) * 0.04 + 0.08, duration: 0.3 }}
                className="hdr-mobile-footer"
              >
                <span>Salvador, BA</span>
                <span className="hdr-mobile-separator">•</span>
                <span>Clínica Premium</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ── ROOT ── */
        .hdr-root {
          position: fixed;
          top: 0;
          left: 0; right: 0;
          z-index: 50;
          transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
        }
        .hdr-scrolled {
          background: color-mix(in oklab, var(--background) 80%, transparent);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          box-shadow: 0 1px 0 oklch(0.18 0.04 250 / 0.06), 0 4px 24px -4px rgba(15,23,42,0.08);
        }

        /* ── INNER ── */
        .hdr-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.25rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        @media (min-width: 768px) { .hdr-inner { padding: 0 2rem; } }
        @media (min-width: 1280px) { .hdr-inner { padding: 0 3rem; } }

        /* ── LOGO ── */
        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hdr-logo-mark {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, oklch(0.28 0.09 258) 0%, oklch(0.42 0.12 258) 100%);
          display: grid;
          place-items: center;
          box-shadow: 0 4px 12px rgba(20,40,100,0.18);
        }
        .hdr-logo-text {
          font-family: var(--font-display);
          font-size: 1.15rem;
          letter-spacing: -0.03em;
          font-weight: 500;
          color: var(--foreground);
        }
        .hdr-logo-accent {
          color: var(--mint);
        }

        /* ── DESKTOP NAV ── */
        .hdr-nav {
          display: none;
          align-items: center;
          gap: 0.125rem;
          flex: 1;
          justify-content: center;
        }
        @media (min-width: 1024px) { .hdr-nav { display: flex; } }

        .hdr-link {
          position: relative;
          padding: 0.45rem 0.85rem;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 450;
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }
        .hdr-link:hover { color: var(--foreground); }
        .hdr-link-active { color: var(--primary); font-weight: 500; }
        .hdr-link-bg {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: oklch(0.28 0.09 258 / 0.07);
          display: block;
        }
        .hdr-link-text { position: relative; z-index: 1; }

        /* ── DESKTOP CTA ── */
        .hdr-cta-wrap { display: none; flex-shrink: 0; }
        @media (min-width: 768px) { .hdr-cta-wrap { display: block; } }

        .hdr-cta {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1.3rem;
          border-radius: 100px;
          font-size: 0.84rem;
          font-weight: 550;
          font-family: var(--font-sans);
          background: linear-gradient(135deg, oklch(0.28 0.09 258) 0%, oklch(0.40 0.12 258) 100%);
          color: #fff;
          text-decoration: none;
          transition: all 0.25s ease;
          letter-spacing: 0.005em;
        }
        .hdr-cta:hover { opacity: 0.92; }

        /* ── HAMBURGER ── */
        .hdr-hamburger {
          display: grid;
          place-items: center;
          padding: 0.4rem;
          border: none;
          background: transparent;
          cursor: pointer;
          color: var(--foreground);
          border-radius: 8px;
          transition: background 0.2s ease;
        }
        .hdr-hamburger:hover { background: oklch(0.18 0.04 250 / 0.06); }
        .hdr-hamburger-icon { width: 22px; height: 22px; }
        @media (min-width: 1024px) { .hdr-hamburger { display: none; } }

        /* ── MOBILE MENU (FULL SCREEN) ── */
        .hdr-root.hdr-open {
          background: transparent !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          box-shadow: none !important;
        }
        .hdr-open .hdr-cta-wrap {
          display: none !important;
        }

        .hdr-mobile-menu {
          position: fixed;
          inset: 0;
          height: 100dvh;
          width: 100vw;
          z-index: 45;
          background: color-mix(in oklab, var(--background) 95%, black 5%);
          backdrop-filter: blur(32px) saturate(190%);
          -webkit-backdrop-filter: blur(32px) saturate(190%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hdr-mobile-inner {
          width: 100%;
          max-width: 28rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .hdr-mobile-link {
          padding: 0.5rem 2rem;
          font-size: 2.25rem;
          font-weight: 400;
          font-family: var(--font-display);
          color: var(--foreground);
          text-decoration: none;
          text-align: center;
          letter-spacing: -0.02em;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .hdr-mobile-link:hover {
          color: var(--primary);
          transform: scale(1.04);
        }
        .hdr-mobile-cta {
          margin-top: 1.5rem;
          padding: 0.9rem 2.5rem;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          text-align: center;
          background: linear-gradient(135deg, oklch(0.28 0.09 258) 0%, oklch(0.40 0.12 258) 100%);
          color: #fff;
          text-decoration: none;
          box-shadow: 0 10px 30px oklch(0.28 0.09 258 / 0.2);
          transition: all 0.25s ease;
        }
        .hdr-mobile-cta:hover {
          opacity: 0.95;
          transform: translateY(-1px);
          box-shadow: 0 12px 35px oklch(0.28 0.09 258 / 0.3);
        }
        .hdr-mobile-footer {
          margin-top: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          color: var(--muted-foreground);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .hdr-mobile-separator {
          color: var(--mint);
        }
      `}</style>
    </>
  );
}
