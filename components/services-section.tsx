import { FileText, Car, Landmark, Home, Briefcase, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Certificados y documentación",
    description:
      "Obtención y renovación de certificados, compulsas y presentación de documentación ante organismos oficiales.",
  },
  {
    icon: Car,
    title: "Trámites de tráfico",
    description:
      "Transferencias de vehículos, cambios de titularidad, duplicados de permisos y bajas ante la DGT.",
  },
  {
    icon: Landmark,
    title: "Impuestos y tasas",
    description:
      "Presentación de impuestos, pago de tasas y gestiones tributarias con la administración pública.",
  },
  {
    icon: Home,
    title: "Trámites de vivienda",
    description:
      "Cambios de titularidad de suministros, empadronamientos y gestiones de alquiler o compraventa.",
  },
  {
    icon: Briefcase,
    title: "Autónomos y empresas",
    description:
      "Altas y bajas de actividad, gestiones ante la Seguridad Social y presentación de escritos.",
  },
  {
    icon: Users,
    title: "Extranjería y residencia",
    description:
      "Solicitud y renovación de permisos, citas previas y acompañamiento en trámites de extranjería.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trámites que gestionamos
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Cubrimos las gestiones administrativas más habituales para particulares, autónomos y empresas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <CardTitle className="mt-4 text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
