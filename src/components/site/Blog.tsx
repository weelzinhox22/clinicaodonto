import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Stagger, FadeUpItem } from "@/lib/animations";

const posts = [
  {
    cat: "Cuidados",
    title: "5 hábitos diários que preservam seu sorriso por décadas",
    excerpt: "Pequenas mudanças na rotina geram resultados duradouros.",
    date: "12 jun 2025",
    image: "/capas%20blog/5habitos.png",
  },
  {
    cat: "Dicas",
    title: "Clareamento dental: o que esperar antes, durante e depois",
    excerpt: "Tudo o que você precisa saber para um sorriso mais branco.",
    date: "28 mai 2025",
    image: "/capas%20blog/clareamento.png",
  },
  {
    cat: "Tratamentos",
    title: "Lentes de contato dental: mitos e verdades",
    excerpt: "Entenda quando esse procedimento é realmente indicado.",
    date: "10 mai 2025",
    image: "/capas%20blog/lentes.png",
  },
];

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeader
        eyebrow="Blog"
        title="Conteúdo para você sorrir melhor."
      />
      <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
        {posts.map((p) => (
          <FadeUpItem key={p.title}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border bg-background overflow-hidden"
            >
              {/* Cover image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-foreground/70 border border-black/5">
                  {p.cat}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Ler mais <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </motion.article>
          </FadeUpItem>
        ))}
      </Stagger>
    </Section>
  );
}
