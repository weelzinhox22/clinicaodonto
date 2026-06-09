import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { whatsappUrl } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { v: "+12 mil", l: "pacientes atendidos" },
  { v: "18 anos", l: "de experiência" },
  { v: "4.9/5", l: "avaliação média" },
  { v: "100%", l: "atendimento humanizado" },
];

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const wordChild = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SplitWords({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span variants={wordReveal} initial="hidden" animate="visible" className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span variants={wordChild} transition={{ duration: 0.5, ease }} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background blobs */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, var(--mint), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, var(--violet), transparent 70%)" }}
      />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            <SplitWords text="Um sorriso que" />
            <br />
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease }}
              className="not-italic text-gradient inline-block"
            >
              transforma
            </motion.span>{" "}
            <SplitWords text="a forma como você se apresenta ao mundo." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Odontologia de alto padrão com tecnologia de ponta, equipe especializada e um cuidado humano que faz a diferença em cada consulta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
            >
              Agendar avaliação
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="size-4" />
              Falar no WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.08, type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Star className="size-4 fill-mint text-mint" />
                </motion.div>
              ))}
            </div>
            <span>4.9 · 1.200+ avaliações no Google</span>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/5] md:aspect-[5/6]">
            <img
              src={heroImg}
              alt="Recepção da clínica Sorriso Vivo"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="absolute -bottom-6 -left-6 md:-left-10 glass rounded-2xl p-4 shadow-[var(--shadow-soft)] max-w-[260px]"
          >
            <div className="text-xs text-muted-foreground">Próximo horário</div>
            <div className="font-display text-lg mt-0.5">Hoje, 16h30</div>
            <div className="text-xs text-mint mt-1 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-mint animate-pulse" />
              Vaga disponível
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="container-px mx-auto max-w-7xl mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease }}
              whileHover={{ backgroundColor: "var(--color-secondary)" }}
              className="bg-background p-5 md:p-7 transition-colors cursor-default"
            >
              <div className="font-display text-2xl md:text-3xl text-primary">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
