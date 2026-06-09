import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";

const team = [
  {
    img: d1,
    name: "Dra. Helena Ribeiro",
    role: "Estética & Lentes de Contato",
    bio: "Especialista em odontologia estética com mais de 15 anos de experiência. Mestre pela UFBA.",
    certs: ["CRO-BA 12345", "Mestre UFBA", "Especialista Lentes"],
  },
  {
    img: d2,
    name: "Dr. Lucas Andrade",
    role: "Implantodontia",
    bio: "Referência em implantes com cirurgia guiada e reabilitação oral complexa.",
    certs: ["CRO-BA 23456", "Especialista Implantes", "Membro ITI"],
  },
  {
    img: d3,
    name: "Dra. Camila Souza",
    role: "Ortodontia & Invisalign",
    bio: "Provider Diamond Invisalign com foco em ortodontia digital e estética.",
    certs: ["CRO-BA 34567", "Diamond Invisalign", "Pós em Ortodontia"],
  },
];

export function Team() {
  return (
    <Section id="equipe" className="bg-secondary/40">
      <SectionHeader
        eyebrow="Conheça os dentistas"
        title="Mãos experientes, olhar atento."
        subtitle="Profissionais de referência, em constante atualização, dedicados ao seu sorriso."
      />
      <Stagger className="grid md:grid-cols-3 gap-6 md:gap-8" stagger={0.12}>
        {team.map((m) => (
          <FadeUpItem key={m.name}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-default"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-5">
                <motion.img
                  src={m.img}
                  alt={m.name}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="text-xs text-mint uppercase tracking-widest">{m.role}</div>
              <h3 className="font-display text-2xl mt-1">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.certs.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background border">
                    <Award className="size-3 text-violet" /> {c}
                  </span>
                ))}
              </div>
            </motion.article>
          </FadeUpItem>
        ))}
      </Stagger>
    </Section>
  );
}
