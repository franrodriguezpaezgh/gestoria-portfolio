import { Building2, Mail, Phone, MapPin, AtSign, Send, Share2 } from "lucide-react"

const socials = [
  { label: "LinkedIn", href: "#", icon: Share2 },
  { label: "Instagram", href: "#", icon: AtSign },
  { label: "Boletín", href: "#", icon: Send },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold">Gestoría Novara</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Tu gestoría de confianza para trámites administrativos. Rápidos, transparentes y sin complicaciones.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                +34 900 123 456
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                hola@gestorianovara.es
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                Calle Mayor 12, 28013 Madrid
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Síguenos
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Gestoría Novara. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Aviso legal
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
