import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: ShieldCheck, label: "Trato confidencial" },
  { icon: Clock, label: "Respuesta en 24 h" },
  { icon: CheckCircle2, label: "Sin desplazamientos" },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1 text-xs font-medium text-primary">
            Gestoría de trámites administrativos
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Gestionamos tu papeleo para que tú no pierdas el tiempo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nos ocupamos de tus trámites administrativos con rigor, transparencia y trato cercano.
            Tú nos cuentas qué necesitas y nosotros lo resolvemos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contacto">Solicitar cita</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
