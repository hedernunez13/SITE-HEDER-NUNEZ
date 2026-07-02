export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
]

export const siteConfig = {
  name: "Heder Nunez Fotografia",
  shortName: "Heder Nunez",
  location: "Salvador, Bahia",
  whatsapp: "5571992234769",
  whatsappDisplay: "+55 71 99223-4769",
  email: "contato@hedernunez.com.br",
  instagram: "https://instagram.com/hedernunezfotografia",
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
