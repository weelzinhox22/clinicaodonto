import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { ScrollReveal, Stagger, FadeUpItem } from "@/lib/animations";
import { SITE } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Location() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeader
        eyebrow="Localização"
        title="Venha nos visitar."
        subtitle="Estamos em uma das regiões mais privilegiadas de Salvador."
      />
      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        <ScrollReveal
          variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}
          className="lg:col-span-3"
        >
          <div className="rounded-3xl overflow-hidden border shadow-[var(--shadow-soft)] min-h-[360px] h-full">
            <iframe
              src={SITE.mapsEmbed}
              title="Localização da clínica"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] border-0"
            />
          </div>
        </ScrollReveal>
        <Stagger className="lg:col-span-2 space-y-4" stagger={0.08}>
          {[
            { icon: MapPin, label: "Endereço", value: SITE.address },
            { icon: Clock, label: "Horário", value: SITE.hours },
            { icon: Phone, label: "Telefone", value: SITE.phone },
            { icon: Mail, label: "E-mail", value: SITE.email },
          ].map((i) => (
            <FadeUpItem key={i.label}>
              <motion.div
                whileHover={{ x: 4, borderColor: "var(--color-mint)" }}
                transition={{ duration: 0.25, ease }}
                className="rounded-2xl border bg-background p-5 flex gap-4 cursor-default"
              >
                <div className="size-10 rounded-xl bg-secondary grid place-items-center shrink-0">
                  <i.icon className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{i.label}</div>
                  <div className="mt-1 text-sm leading-relaxed">{i.value}</div>
                </div>
              </motion.div>
            </FadeUpItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
