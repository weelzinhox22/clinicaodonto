import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import smileBefore from "@/assets/smile-before.jpg";
import smileAfter from "@/assets/smile-after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <Section>
      <SectionHeader
        eyebrow="Antes e depois"
        title="Transformações reais."
        subtitle="Cada sorriso conta uma história. Arraste o controle e veja a transformação."
      />
      <div className="max-w-3xl mx-auto">
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] select-none">
          <img
            src={smileBefore}
            alt="Sorriso antes do tratamento odontológico"
            loading="lazy"
            width={1280}
            height={800}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium tracking-wide uppercase">
            Antes
          </div>

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={smileAfter}
              alt="Sorriso depois do tratamento odontológico"
              loading="lazy"
              width={1280}
              height={800}
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${(100 / Math.max(pos, 0.01)) * 100}%` }}
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wide uppercase">
              Depois
            </div>
          </div>

          <div
            className="absolute inset-y-0 w-0.5 bg-white shadow-lg pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full bg-white shadow-lg grid place-items-center text-primary">
              ⇆
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            aria-label="Comparar antes e depois"
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          *Imagens ilustrativas. Resultados variam conforme o caso clínico.
        </p>
      </div>
    </Section>
  );
}
