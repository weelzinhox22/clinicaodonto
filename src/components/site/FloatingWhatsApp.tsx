import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 3000);
    const hide = setTimeout(() => setShowTip(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(hide); };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-background border shadow-lg rounded-xl px-4 py-2.5 text-sm font-medium text-foreground whitespace-nowrap"
          >
            Fale conosco agora
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 size-3 bg-background border-r border-b rotate-45 -z-0" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="relative grid place-items-center size-14 rounded-full bg-[var(--whatsapp)] text-white shadow-[var(--shadow-elegant)] shrink-0"
        style={{ animation: "pulse-ring 2.4s infinite" }}
      >
        <MessageCircle className="size-7" />
      </motion.a>
    </div>
  );
}
