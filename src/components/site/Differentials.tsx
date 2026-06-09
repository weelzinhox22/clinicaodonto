import { motion } from "framer-motion";
import { Heart, Cpu, Sofa, CreditCard, Clock, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";

const items = [
  { icon: Heart, t: "Atendimento humanizado", d: "Cada paciente é único e merece escuta atenta." },
  { icon: Cpu, t: "Equipamentos modernos", d: "Tomografia 3D, scanner intraoral e microscopia." },
  { icon: Sofa, t: "Ambiente confortável", d: "Estrutura premium pensada para sua tranquilidade." },
  { icon: CreditCard, t: "Facilidade no pagamento", d: "Parcelamos em até 12x e aceitamos convênios." },
  { icon: Clock, t: "Horários flexíveis", d: "Atendimento estendido inclusive aos sábados." },
  { icon: GraduationCap, t: "Equipe especializada", d: "Profissionais com pós em diversas áreas." },
];

export function Differentials() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Diferenciais"
        title="Por que escolher a Sorriso Vivo."
        subtitle="Tudo o que faz a diferença em uma experiência odontológica verdadeiramente premium."
      />
      <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden border bg-border" stagger={0.07}>
        {items.map((i) => (
          <FadeUpItem key={i.t} className="h-full">
            <motion.div
              whileHover={{ backgroundColor: "var(--color-secondary)" }}
              transition={{ duration: 0.3 }}
              className="bg-background p-7 md:p-9 h-full cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="inline-block mb-4"
              >
                <i.icon className="size-7 text-violet" />
              </motion.div>
              <div className="font-display text-xl">{i.t}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.d}</p>
            </motion.div>
          </FadeUpItem>
        ))}
      </Stagger>
    </Section>
  );
}
