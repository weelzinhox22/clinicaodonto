import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";

const faqs = [
  { q: "Vocês aceitam convênio?", a: "Sim, trabalhamos com os principais convênios odontológicos e também atendemos no modelo particular com condições facilitadas." },
  { q: "Quais as formas de pagamento?", a: "Aceitamos PIX, dinheiro, cartões de débito e crédito (com parcelamento em até 12x) e boleto." },
  { q: "Os tratamentos doem?", a: "Utilizamos protocolos modernos de anestesia e sedação consciente para garantir total conforto. A maioria dos pacientes relata uma experiência tranquila." },
  { q: "Como funciona a primeira consulta?", a: "É uma avaliação completa, com exame clínico, exames digitais quando necessário e elaboração de um plano de tratamento personalizado." },
  { q: "Qual a duração dos tratamentos?", a: "Depende do caso. Procedimentos simples são feitos em uma sessão; tratamentos como ortodontia podem variar de meses a alguns anos." },
  { q: "Posso parcelar?", a: "Sim, parcelamos em até 12x no cartão, com opções de carência conforme o tratamento." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" className="bg-secondary/40">
      <SectionHeader
        eyebrow="Perguntas frequentes"
        title="Tudo o que você precisa saber."
      />
      <div className="max-w-3xl mx-auto divide-y border-y">
        {faqs.map((f, i) => {
          const isOpen = i === open;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-display text-lg md:text-xl group-hover:text-primary transition-colors">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="shrink-0 size-9 rounded-full border grid place-items-center bg-background group-hover:border-primary/40 transition-colors"
                >
                  <Plus className="size-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed pr-12 pb-6">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
