"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { gym, pricingPlans } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "El nombre es requerido";
    if (!form.email.trim()) {
      errs.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Email inválido";
    }
    if (!form.phone.trim()) errs.phone = "El teléfono es requerido";
    if (!form.plan) errs.plan = "Seleccioná un plan";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass = (field: keyof FormData) =>
    cn(
      "w-full bg-background border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50",
      errors[field] ? "border-red-500" : "border-card-border focus:border-accent",
    );

  return (
    <section id="contacto" className="section-padding bg-card/30">
      <div className="container-custom">
        <SectionHeading
          label="Contacto"
          title="Empezá tu transformación"
          description="Completá el formulario o contactanos directamente. Te respondemos en menos de 24 horas."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <RevealOnScroll direction="left">
            <div className="space-y-6">
              <a
                href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent("Hola FORGE! Quiero info sobre membresías.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-green-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm text-muted">Respuesta inmediata</p>
                </div>
              </a>

              <a
                href={`tel:${gym.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">{gym.phone}</p>
                  <p className="text-sm text-muted">Lun a Vie 8:00 – 20:00</p>
                </div>
              </a>

              <a
                href={`mailto:${gym.email}`}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">{gym.email}</p>
                  <p className="text-sm text-muted">Te respondemos en 24hs</p>
                </div>
              </a>

              <div className="flex items-start gap-4 glass rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">{gym.address.street}</p>
                  <p className="text-sm text-muted">
                    {gym.address.city}, {gym.address.country}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-video border border-card-border">
                <iframe
                  title="Ubicación de FORGE Fitness Club"
                  src={`https://maps.google.com/maps?q=${gym.address.lat},${gym.address.lng}&z=15&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle className="text-accent mb-4" size={64} />
                  <h3 className="font-display text-3xl text-white tracking-wider uppercase">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-4 text-muted">
                    Te contactaremos en menos de 24 horas. Preparate para forjar
                    tu mejor versión.
                  </p>
                  <Button
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 space-y-5"
                  noValidate
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass("name")}
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass("email")}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass("phone")}
                        placeholder="+54 11 1234-5678"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-white mb-2">
                      Plan de interés
                    </label>
                    <select
                      id="plan"
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      className={inputClass("plan")}
                    >
                      <option value="">Seleccioná un plan</option>
                      {pricingPlans.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                    {errors.plan && (
                      <p className="mt-1 text-xs text-red-400">{errors.plan}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={cn(inputClass("message"), "resize-none")}
                      placeholder="Contanos sobre tus objetivos..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar consulta
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
