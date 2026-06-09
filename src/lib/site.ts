export const SITE = {
  name: "Sorriso Vivo Odontologia",
  tagline: "Odontologia premium com cuidado humano",
  phone: "+55 71 3333-4400",
  whatsappNumber: "5571988887777",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação na Sorriso Vivo.",
  email: "contato@sorrisovivo.com.br",
  address: "Av. Tancredo Neves, 1500 — Caminho das Árvores, Salvador — BA",
  hours: "Seg a Sex: 8h–20h · Sáb: 9h–14h",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Tancredo+Neves+1500,+Salvador,+Bahia&output=embed",
};

export const whatsappUrl = (msg?: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
