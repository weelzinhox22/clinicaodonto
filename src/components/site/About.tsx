import { motion } from "framer-motion";
import { Heart, Target, Award, Shield } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { ScrollReveal, Stagger, FadeUpItem } from "@/lib/animations";
import clinicReception from "@/assets/clinic-reception.jpg";

const pillars = [
  { icon: Heart, title: "Missão", text: "Cuidar de cada sorriso com excelência, ética e empatia genuína." },
  { icon: Target, title: "Visão", text: "Ser referência em odontologia premium humanizada no Brasil." },
  { icon: Award, title: "Valores", text: "Transparência, inovação, acolhimento e resultados duradouros." },
  { icon: Shield, title: "Diferenciais", text: "Equipe especializada, tecnologia 3D e protocolos exclusivos." },
];

export function About() {
  return (
    <Section id="sobre">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/5]"
            >
              <img
                src={clinicReception}
                alt="Recepção elegante da clínica"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]"
            >
              <div className="font-display text-2xl text-primary">18+</div>
              <div className="text-xs text-muted-foreground">anos cuidando de sorrisos</div>
            </motion.div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
            <SectionHeader
              align="left"
              eyebrow="Sobre a clínica"
              title={<>Excelência odontológica com <em className="not-italic text-gradient">alma</em>.</>}
              subtitle="Fundada em 2007, a Sorriso Vivo nasceu do desejo de unir a melhor tecnologia odontológica a um atendimento profundamente humano. Mais que uma clínica, somos um espaço de acolhimento, onde cada paciente é tratado com atenção, escuta e cuidado integral."
            />
          </ScrollReveal>
          <Stagger className="grid sm:grid-cols-2 gap-5" stagger={0.08}>
            {pillars.map((p) => (
              <FadeUpItem key={p.title}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "var(--color-mint)" }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 rounded-2xl border bg-background cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="inline-block mb-3"
                  >
                    <p.icon className="size-5 text-mint" />
                  </motion.div>
                  <div className="font-display text-lg">{p.title}</div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.text}</p>
                </motion.div>
              </FadeUpItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
