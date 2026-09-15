"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Opciones alineadas con la sección de servicios.
// El `value` es el que se guardará en la base de datos (Supabase) más adelante.
const serviceOptions = [
  { value: "certificados", label: "Certificados y documentación" },
  { value: "trafico", label: "Trámites de tráfico" },
  { value: "impuestos", label: "Impuestos y tasas" },
  { value: "vivienda", label: "Trámites de vivienda" },
  { value: "autonomos", label: "Autónomos y empresas" },
  { value: "extranjeria", label: "Extranjería y residencia" },
  { value: "otro", label: "Otro / No estoy seguro" },
]

// Estructura de datos que se enviará a Supabase.
type ContactFormData = {
  nombre: string
  email: string
  telefono: string
  servicio: string
  mensaje: string
}

const initialForm: ContactFormData = {
  nombre: "",
  email: "",
  telefono: "",
  servicio: "",
  mensaje: "",
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  function updateField<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    // TODO: Conectar con Supabase.
    // Aquí se enviará `form` a la base de datos, por ejemplo:
    //   const { error } = await supabase.from("solicitudes").insert(form)
    // Los nombres de los campos ya coinciden con las columnas previstas:
    // nombre, email, telefono, servicio, mensaje.
    console.log("[v0] Solicitud de contacto lista para enviar:", form)

    await new Promise((resolve) => setTimeout(resolve, 800))

    setStatus("success")
    setForm(initialForm)
  }

  return (
    <section id="contacto" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pt-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Solicita tu cita
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas laborables.
              Sin compromiso y con total confidencialidad.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex flex-col">
                <dt className="font-medium text-foreground">Teléfono</dt>
                <dd className="text-muted-foreground">+34 900 123 456</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-medium text-foreground">Correo</dt>
                <dd className="text-muted-foreground">hola@gestorianovara.es</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-medium text-foreground">Oficina</dt>
                <dd className="text-muted-foreground">Calle Mayor 12, 28013 Madrid</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-medium text-foreground">Horario</dt>
                <dd className="text-muted-foreground">Lunes a viernes, 9:00 – 18:00</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Solicitud recibida</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Gracias por contactar con Gestoría Novara. Te responderemos lo antes posible.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    required
                    value={form.nombre}
                    onChange={(e) => updateField("nombre", e.target.value)}
                    placeholder="Ej. María García"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="tucorreo@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={(e) => updateField("telefono", e.target.value)}
                      placeholder="600 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicio">Servicio de interés</Label>
                  <Select
                    name="servicio"
                    value={form.servicio || undefined}
                    onValueChange={(value) => updateField("servicio", (value as string) ?? "")}
                  >
                    <SelectTrigger id="servicio" className="w-full">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => updateField("mensaje", e.target.value)}
                    placeholder="Cuéntanos brevemente qué trámite necesitas gestionar."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Enviando…
                    </>
                  ) : (
                    "Enviar solicitud"
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Al enviar aceptas ser contactado por Gestoría Novara para gestionar tu solicitud.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
