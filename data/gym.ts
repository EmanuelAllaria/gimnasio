import {
  Dumbbell,
  Flame,
  Bike,
  Heart,
  Swords,
  UserCheck,
  Apple,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const gym = {
  name: "FORGE Fitness Club",
  tagline: "Forja tu mejor versión",
  headline: "NO ES UN GIMNASIO. ES TU FORJA.",
  subheadline:
    "El espacio donde la disciplina se convierte en resultados. Equipamiento de élite, entrenadores de clase mundial y una comunidad que no te deja rendirte.",
  founded: 2018,
  url: "https://forgefitness.com.ar",
  phone: "+54 11 4567-8900",
  whatsapp: "5491145678900",
  email: "hola@forgefitness.com.ar",
  address: {
    street: "Av. Corrientes 2847",
    city: "Buenos Aires",
    country: "Argentina",
    postalCode: "C1193",
    full: "Av. Corrientes 2847, Buenos Aires, Argentina",
    lat: -34.6037,
    lng: -58.4086,
  },
  social: {
    instagram: "https://instagram.com/forgefitness",
    facebook: "https://facebook.com/forgefitness",
    youtube: "https://youtube.com/@forgefitness",
    tiktok: "https://tiktok.com/@forgefitness",
  },
} as const;

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const stats = [
  { value: 2400, suffix: "+", label: "Miembros activos" },
  { value: 1800, suffix: " m²", label: "De espacio premium" },
  { value: 35, suffix: "+", label: "Clases semanales" },
  { value: 12, suffix: "", label: "Entrenadores certificados" },
] as const;

export const about = {
  title: "Más que fitness. Una filosofía.",
  paragraphs: [
    "FORGE nació en 2018 con una convicción simple: el gimnasio no debería ser un lugar donde vas porque tenés que ir. Debería ser el lugar donde te transformás.",
    "Diseñamos cada metro cuadrado pensando en tu rendimiento. Desde la selección de equipos Technogym y Rogue hasta la acústica de nuestras salas de clases, todo está pensado para que rindas al máximo.",
    "Nuestra comunidad de más de 2.400 miembros no es casualidad. Es el resultado de un ambiente donde la disciplina se celebra, los límites se rompen y cada día es una oportunidad de ser mejor.",
  ],
  values: [
    { title: "Disciplina", description: "La constancia vence al talento." },
    { title: "Comunidad", description: "Entrenamos juntos, crecemos juntos." },
    { title: "Resultados", description: "Medimos el progreso, no las excusas." },
  ],
  image:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
  imageAlt: "Sala de musculación premium de FORGE Fitness Club con equipamiento moderno",
} as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
};

export const services: Service[] = [
  {
    icon: Dumbbell,
    title: "Sala de Musculación",
    description: "200+ equipos de última generación en 800 m² dedicados a fuerza y hipertrofia.",
    highlight: "Technogym & Rogue",
  },
  {
    icon: Flame,
    title: "CrossTraining / Funcional",
    description: "WODs diarios, cajones, barras olímpicas y espacio outdoor para entrenar sin límites.",
    highlight: "Clases cada hora",
  },
  {
    icon: Bike,
    title: "Spinning & Cardio",
    description: "Sala inmersiva con pantallas LED, 40 bicicletas y zona de cintas y elípticas premium.",
    highlight: "Experiencia inmersiva",
  },
  {
    icon: Heart,
    title: "Yoga & Movilidad",
    description: "Sesiones de Vinyasa, Hatha y stretching para recuperación activa y flexibilidad.",
    highlight: "Todos los niveles",
  },
  {
    icon: Swords,
    title: "Boxeo & Kickboxing",
    description: "Ring profesional, sacos de última generación y clases de técnica y acondicionamiento.",
    highlight: "Ring profesional",
  },
  {
    icon: UserCheck,
    title: "Entrenamiento Personal",
    description: "Planes 100% personalizados con seguimiento de composición corporal y nutrición básica.",
    highlight: "Resultados garantizados",
  },
  {
    icon: Apple,
    title: "Nutrición Deportiva",
    description: "Consultas con licenciados en nutrición, planes alimenticios y seguimiento mensual.",
    highlight: "Licenciados UBA",
  },
  {
    icon: Sparkles,
    title: "Recovery Zone",
    description: "Sauna finlandesa, crioterapia, pistolas de masaje y sala de estiramientos guiados.",
    highlight: "Recuperación total",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential",
    monthlyPrice: 24900,
    description: "Todo lo que necesitás para empezar tu transformación.",
    features: [
      "Acceso a musculación y cardio",
      "Locker personal",
      "App de seguimiento FORGE",
      "1 clase grupal por semana",
      "Evaluación física inicial",
    ],
  },
  {
    id: "pro",
    name: "Forge Pro",
    monthlyPrice: 39900,
    description: "El plan favorito de quienes van en serio.",
    features: [
      "Todo lo de Essential",
      "Clases grupales ilimitadas",
      "2 sesiones de PT por mes",
      "Acceso a Recovery Zone",
      "Descuentos en nutrición",
      "Invitado gratis 1x/mes",
    ],
    highlighted: true,
    badge: "Más popular",
  },
  {
    id: "elite",
    name: "Elite",
    monthlyPrice: 59900,
    description: "La experiencia FORGE sin compromisos.",
    features: [
      "Acceso 24/7 todos los días",
      "PT ilimitado",
      "Plan nutricional personalizado",
      "Recovery Zone ilimitada",
      "Toalla y amenities premium",
      "Estacionamiento incluido",
      "Acceso a eventos exclusivos",
    ],
  },
];

export const annualDiscount = 0.2;

export type Trainer = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  certifications: string[];
};

export const trainers: Trainer[] = [
  {
    name: "Marco Vega",
    role: "Head Coach",
    specialty: "CrossTraining",
    bio: "Ex atleta de CrossFit Games. 10 años transformando cuerpos y mentes con metodología basada en ciencia.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    certifications: ["CrossFit L3", "NSCA-CSCS", "First Aid"],
  },
  {
    name: "Lucía Fernández",
    role: "Instructora Senior",
    specialty: "Yoga & Movilidad",
    bio: "500h RYT, especialista en movilidad para atletas. Combina yoga tradicional con biomecánica moderna.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    certifications: ["RYT-500", "FMS Level 2"],
  },
  {
    name: 'Diego "El Toro" Ruiz',
    role: "Coach de Combate",
    specialty: "Boxeo & Kickboxing",
    bio: "Campeón nacional de boxeo amateur. Entrena desde principiantes hasta competidores de élite.",
    image:
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80",
    certifications: ["AIBA Coach", "Kickboxing IFMA"],
  },
  {
    name: "Camila Soto",
    role: "Nutricionista Deportiva",
    specialty: "Nutrición Deportiva",
    bio: "Licenciada en Nutrición UBA. Especializada en composición corporal y nutrición para rendimiento.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    certifications: ["LN UBA", "ISSN-SNS", "Precision Nutrition L1"],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Martín Gómez",
    role: "Miembro desde 2021",
    text: "Bajé 18 kg en 8 meses y gané masa muscular. El ambiente y los coaches hacen toda la diferencia. FORGE cambió mi vida.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    result: "-18 kg en 8 meses",
  },
  {
    name: "Valentina Ruiz",
    role: "Miembro Pro",
    text: "Las clases de spinning son otro nivel. La sala inmersiva te hace sentir que estás en otra dimensión. Nunca me aburro.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    result: "Clases favoritas: Spinning",
  },
  {
    name: "Carlos Mendoza",
    role: "Miembro Elite",
    text: "El acceso 24/7 es un game changer para mi rutina. Entreno a las 5 AM antes del trabajo. Instalaciones impecables siempre.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    result: "Entrena 5 AM diario",
  },
  {
    name: "Sofía López",
    role: "Miembro desde 2023",
    text: "Empecé sin experiencia y el equipo me guió desde el día uno. Hoy levanto el doble de lo que imaginé. Gracias Marco y equipo.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    result: "Fuerza x2 en 6 meses",
  },
];

export const schedule = [
  { days: "Lunes a Viernes", hours: "6:00 – 23:00" },
  { days: "Sábados", hours: "8:00 – 20:00" },
  { days: "Domingos", hours: "9:00 – 14:00" },
  { days: "Feriados", hours: "10:00 – 14:00" },
] as const;

export const faqs = [
  {
    question: "¿Hay periodo de prueba gratuito?",
    answer:
      "Sí. Ofrecemos 3 días de prueba gratis con acceso completo a todas las instalaciones y una clase grupal. Sin compromiso ni tarjeta de crédito.",
  },
  {
    question: "¿Puedo congelar mi membresía?",
    answer:
      "Podés congelar tu membresía hasta 60 días por año por motivos médicos o viajes. Aplica para planes Pro y Elite.",
  },
  {
    question: "¿Puedo traer invitados?",
    answer:
      "Los miembros Pro tienen 1 invitado gratis por mes. Los miembros Elite tienen invitados ilimitados. Essential puede traer invitados a $5.000 por visita.",
  },
  {
    question: "¿Qué incluye la evaluación inicial?",
    answer:
      "Incluye medición de composición corporal con InBody, evaluación de movilidad, test de condición física y un plan de entrenamiento personalizado de 4 semanas.",
  },
  {
    question: "¿Tienen estacionamiento?",
    answer:
      "Sí, contamos con estacionamiento subterráneo con 80 plazas. Incluido en plan Elite, $3.000/mes para otros planes.",
  },
  {
    question: "¿Cómo cancelo mi membresía?",
    answer:
      "Podés cancelar con 30 días de anticipación sin penalización. Sin letra chica, sin ataduras. Tu decisión, tu libertad.",
  },
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920&q=80";
