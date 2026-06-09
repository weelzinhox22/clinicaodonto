import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";
import reception from "@/assets/clinic-reception.jpg";
import room from "@/assets/clinic-room.jpg";
import hallway from "@/assets/clinic-hallway.jpg";
import hero from "@/assets/hero-clinic.jpg";

const photos = [
  { img: reception, label: "Recepção" },
  { img: room, label: "Consultório" },
  { img: hallway, label: "Corredor" },
  { img: hero, label: "Ambiente" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Tour() {
  const [selected, setSelected] = useState<number | null>(null);

  function prev() {
    if (selected === null) return;
    setSelected((selected - 1 + photos.length) % photos.length);
  }
  function next() {
    if (selected === null) return;
    setSelected((selected + 1) % photos.length);
  }

  return (
    <Section>
      <SectionHeader
        eyebrow="Tour da clínica"
        title="Um espaço pensado para o seu bem-estar."
        subtitle="Estrutura moderna, acolhedora e silenciosa em uma das melhores localizações da cidade."
      />

      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" stagger={0.08}>
        {photos.map((p, i) => (
          <FadeUpItem key={p.label}>
            <motion.button
              onClick={() => setSelected(i)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer block w-full text-left ${
                i === 0 ? "row-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <motion.img
                src={p.img}
                alt={p.label}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">{p.label}</span>
                  <Maximize2 className="size-4 text-white/80" />
                </div>
              </div>
            </motion.button>
          </FadeUpItem>
        ))}
      </Stagger>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 size-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="size-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition-colors z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition-colors z-10"
              aria-label="Próxima"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease }}
                className="relative max-w-5xl max-h-[80vh] w-full mx-4 md:mx-12"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[selected].img}
                  alt={photos[selected].label}
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium backdrop-blur-sm">
                  {photos[selected].label} · {selected + 1}/{photos.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
