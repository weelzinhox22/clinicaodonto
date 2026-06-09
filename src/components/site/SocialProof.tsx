import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";

const reviews = [
  {
    name: "Mariana Costa",
    role: "Lentes de contato dental",
    text: "Atendimento excepcional do início ao fim. A Dra. Helena explicou cada etapa e o resultado superou minhas expectativas.",
  },
  {
    name: "Rafael Almeida",
    role: "Implante dental",
    text: "Ambiente acolhedor e equipe extremamente profissional. Voltei a sorrir com confiança depois de anos.",
  },
  {
    name: "Beatriz Lima",
    role: "Ortodontia invisível",
    text: "Tecnologia de ponta e um cuidado humano que faz toda diferença. Recomendo de olhos fechados.",
  },
];

const insurers = [
  { name: "Allianz", src: "/convenios/Allianz.png" },
  { name: "Bradesco Saúde", src: "/convenios/bradesco-saude.png" },
  { name: "Amil Dental", src: "/convenios/hl-amildental.png" },
  { name: "Dental Uni", src: "/convenios/Logo-Dental-Uni.png" },
  { name: "Unimed", src: "/convenios/Logo_unimed1.svg.png" },
  { name: "Odontoprev", src: "/convenios/odontoprev.png" },
  { name: "Porto Seguro", src: "/convenios/porto-seguro-420.png" },
  { name: "SulAmérica", src: "/convenios/SulAmerica-Saude-Logo.png" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SocialProof() {
  return (
    <Section className="bg-secondary/40 overflow-hidden">
      <SectionHeader
        eyebrow="Prova social"
        title="Quem confia, recomenda."
        subtitle="Avaliação média de 4.9 estrelas entre mais de 1.200 pacientes."
      />

      <Stagger className="grid md:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((r) => (
          <FadeUpItem key={r.name}>
            <motion.article
              whileHover={{ y: -6, boxShadow: "var(--shadow-elegant)" }}
              transition={{ duration: 0.35, ease }}
              className="rounded-2xl bg-background border p-6 h-full cursor-default"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-mint text-mint" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t">
                <div className="font-medium text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </motion.article>
          </FadeUpItem>
        ))}
      </Stagger>

      {/* Marquee logos */}
      <div className="mt-12 md:mt-16 relative">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Aceitamos os principais convênios
        </p>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to_right,transparent,black,transparent)",
            WebkitMaskImage: "linear-gradient(to_right,transparent,black,transparent)",
          }}
        >
          <div
            className="flex items-center whitespace-nowrap"
            style={{
              width: "max-content",
              animation: "marquee 30s linear infinite",
            }}
          >
            {[...insurers, ...insurers].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain shrink-0 select-none opacity-60 hover:opacity-100 transition-opacity"
                style={{ padding: "0 2rem" }}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
