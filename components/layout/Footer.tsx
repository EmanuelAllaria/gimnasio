import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { gym, navLinks, schedule } from "@/data/gym";

const socialLinks = [
  { href: gym.social.instagram, label: "Instagram", icon: "IG" },
  { href: gym.social.facebook, label: "Facebook", icon: "FB" },
  { href: gym.social.youtube, label: "YouTube", icon: "YT" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="#inicio" className="font-display text-3xl tracking-widest text-white">
              FORGE
            </Link>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              {gym.tagline}. Transformando vidas desde {gym.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center text-xs font-bold text-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wider text-white uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wider text-white uppercase mb-4">
              Horarios
            </h3>
            <ul className="space-y-3">
              {schedule.map((item) => (
                <li key={item.days} className="flex items-start gap-2 text-sm">
                  <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-muted">
                    <span className="text-white">{item.days}:</span> {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wider text-white uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(gym.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted hover:text-accent transition-colors"
                >
                  <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                  {gym.address.full}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${gym.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  <Phone size={16} className="text-accent shrink-0" />
                  {gym.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${gym.email}`}
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  <Mail size={16} className="text-accent shrink-0" />
                  {gym.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© {currentYear} {gym.name}. Todos los derechos reservados.</p>
          <p>Diseñado para quienes no se conforman.</p>
        </div>
      </div>
    </footer>
  );
}
