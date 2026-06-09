import { motion } from "framer-motion";
import {
  Sparkles, Smile, Wrench, AlignCenter, Eye, Palette,
  HeartPulse, Layers, Baby, Activity, ArrowRight
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";
import { whatsappUrl } from "@/lib/site";

const treatments = [
  { icon: Sparkles, title: "Limpeza e Prevenção", desc: "Profilaxia profissional e protocolos preventivos.", benefits: ["Gengiva saudável", "Hálito fresco"] },
  { icon: Smile, title: "Clareamento Dental", desc: "Técnicas seguras para um sorriso até 8 tons mais claro.", benefits: ["Resultado rápido", "Sem sensibilidade"] },
  { icon: Wrench, title: "Implantes", desc: "Implantes com guia 3D e carga imediata quando indicada.", benefits: ["Mastigação natural", "Duradouro"] },
  { icon: AlignCenter, title: "Ortodontia", desc: "Aparelhos estéticos e alinhadores invisíveis.", benefits: ["Discreto", "Acompanhamento digital"] },
  { icon: Eye, title: "Lentes de Contato Dental", desc: "Sorriso harmônico com mínimo desgaste dental.", benefits: ["Estética premium", "Resultado imediato"] },
  { icon: Palette, title: "Harmonização Facial", desc: "Procedimentos integrados ao sorriso.", benefits: ["Equilíbrio facial", "Naturalidade"] },
  { icon: HeartPulse, title: "Canal (Endodontia)", desc: "Tratamento microscópico de alta precisão.", benefits: ["Sem dor", "Recuperação rápida"] },
  { icon: Layers, title: "Prótese", desc: "Próteses fixas e removíveis em materiais premium.", benefits: ["Conforto", "Estética refinada"] },
  { icon: Baby, title: "Odontopediatria", desc: "Cuidado especializado e lúdico para crianças.", benefits: ["Ambiente acolhedor", "Educação preventiva"] },
  { icon: Activity, title: "Periodontia", desc: "Saúde da gengiva e dos tecidos de suporte.", benefits: ["Tratamento gengival", "Prevenção de perda óssea"] },
];

export function Treatments() {
  return (
    <Section id="tratamentos" className="bg-secondary/40">
      <SectionHeader
        eyebrow="Nossos tratamentos"
        title="Um portfólio completo para cada sorriso."
        subtitle="Da prevenção à estética avançada, oferecemos todos os tratamentos com tecnologia de ponta e protocolos individualizados."
      />

      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" stagger={0.06}>
        {treatments.map((t) => (
          <FadeUpItem key={t.title}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group p-6 md:p-7 rounded-2xl bg-background border hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all h-full cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="size-11 rounded-xl bg-[var(--gradient-accent)] grid place-items-center mb-5 opacity-90"
              >
                <t.icon className="size-5 text-white" />
              </motion.div>
              <h3 className="font-display text-xl">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {t.benefits.map((b) => (
                  <li key={b} className="text-xs text-foreground/70 flex items-center gap-2">
                    <span className="size-1 rounded-full bg-mint" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(`Olá! Tenho interesse em ${t.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
              >
                Saiba mais <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          </FadeUpItem>
        ))}
      </Stagger>
    </Section>
  );
}
