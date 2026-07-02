import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { services } from "@/data/services"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  nome: z.string().min(2, "Conte seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
  whatsapp: z.string().min(8, "Digite um WhatsApp válido, com DDD"),
  tipoServico: z.string().min(1, "Selecione o tipo de serviço"),
  dataPrevista: z.string().optional(),
  local: z.string().optional(),
  mensagem: z.string().min(10, "Conte um pouco mais sobre o seu projeto"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      tipoServico: "",
      dataPrevista: "",
      local: "",
      mensagem: "",
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitted(true)
    reset()
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-5 border border-warmgray/25 bg-cream px-8 py-14 sm:px-12"
          >
            <span className="flex size-11 items-center justify-center border border-gold text-gold">
              <Check className="size-5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-serif text-2xl text-ink">Mensagem enviada com sucesso.</h3>
              <p className="mt-2 text-sm text-ink/65">Em breve entrarei em contato.</p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs tracking-[0.2em] text-editorial uppercase underline underline-offset-4 hover:text-ink"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <Field label="Nome" error={errors.nome?.message}>
              <Input {...register("nome")} placeholder="Seu nome completo" className={fieldClass} />
            </Field>

            <Field label="E-mail" error={errors.email?.message}>
              <Input {...register("email")} type="email" placeholder="seu@email.com" className={fieldClass} />
            </Field>

            <Field label="WhatsApp" error={errors.whatsapp?.message}>
              <Input {...register("whatsapp")} placeholder="(71) 99999-9999" className={fieldClass} />
            </Field>

            <Field label="Tipo de serviço" error={errors.tipoServico?.message}>
              <Controller
                control={control}
                name="tipoServico"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className={cn(fieldClass, "w-full justify-between")}>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field label="Data prevista" error={errors.dataPrevista?.message} optional>
              <Input {...register("dataPrevista")} type="date" className={fieldClass} />
            </Field>

            <Field label="Local" error={errors.local?.message} optional>
              <Input {...register("local")} placeholder="Cidade / local do evento" className={fieldClass} />
            </Field>

            <Field label="Mensagem" error={errors.mensagem?.message} full>
              <Textarea
                {...register("mensagem")}
                rows={5}
                placeholder="Conte um pouco sobre o seu projeto, evento ou ensaio. Quanto mais detalhes você enviar, melhor será o direcionamento da proposta."
                className={cn(fieldClass, "min-h-32")}
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center border border-ink bg-ink px-8 py-4 text-xs tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-transparent hover:text-ink disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

const fieldClass =
  "h-auto rounded-none border-0 border-b border-warmgray/40 bg-transparent px-0 py-3 text-ink placeholder:text-ink/35 focus-visible:border-ink focus-visible:ring-0"

function Field({
  label,
  error,
  optional,
  full,
  children,
}: {
  label: string
  error?: string
  optional?: boolean
  full?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-2", full && "sm:col-span-2")}>
      <Label className="text-xs tracking-[0.15em] text-ink/50 uppercase">
        {label}
        {optional && <span className="normal-case text-ink/30"> (opcional)</span>}
      </Label>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  )
}
