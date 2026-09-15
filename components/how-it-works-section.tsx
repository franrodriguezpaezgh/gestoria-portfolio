import { MessageSquare, ClipboardList, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contacta",
    description:
      "Cuéntanos qué trámite necesitas a través del formulario o por teléfono. Sin compromiso.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Te asesoramos",
    description:
      "Analizamos tu caso, te explicamos los pasos y te indicamos qué documentación hace falta.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Gestionamos tu trámite",
    description:
      "Nos encargamos de todo el proceso y te mantenemos informado hasta que quede resuelto.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="sobre-nosotros" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Un proceso sencillo y transparente en tres pasos. Nosotros nos ocupamos del papeleo.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.step} className="relative flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-4 text-sm font-semibold tracking-widest text-primary">
                PASO {step.step}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
