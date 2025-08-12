import Link from "next/link";

type Servicio = {
  title: string;
  href: string;
  items: string[]; // 3 bullets
};

const serviciosMenu: Servicio[] = [
  {
    title: "Construccion de Obras",
    href: "/servicios/construccion",
    items: [
      "Planificacion y cronogramas",
      "Compras, permisos y contratistas",
      "Seguridad, calidad y cierre de obra",
    ],
  },
  {
    title: "Gerencia de Proyectos de Construccion",
    href: "/servicios/gerencia",
    items: [
      "Alcance, costo y tiempo",
      "Riesgos y comunicacion",
      "Control de contratistas y avances",
    ],
  },
  {
    title: "Mantenimiento Preventivo de Infraestructuras",
    href: "/servicios/mantenimiento",
    items: [
      "Planes y rutinas",
      "Priorizacion segun riesgo y presupuesto",
      "Indicadores y reportes",
    ],
  },
  {
    title: "Servicios Potenciados con Inteligencia Artificial",
    href: "/servicios/ia",
    items: [
      "Estimaciones y control con IA",
      "Deteccion de riesgos y alertas",
      "Reportes automaticos y tableros",
    ],
  },
  {
    title: "Asesoria en Desarrollo de Proyectos",
    href: "/servicios/asesoria",
    items: [
      "Viabilidad tecnica y economica",
      "Revision normativa y permisos",
      "Anteproyecto y plan de accion",
    ],
  },
  {
    title: "Inspeccion Tecnica de Obras (ITO)",
    href: "/servicios/ito",
    items: [
      "Inspecciones en sitio",
      "Informes con evidencias",
      "Recomendaciones y seguimiento",
    ],
  },
  {
    title: "Busqueda e Inspeccion de Locales y Terrenos",
    href: "/servicios/busqueda",
    items: [
      "Usos de suelo y factibilidades",
      "Evaluacion tecnica del inmueble",
      "Requisitos municipales y servicios",
    ],
  },
  {
    title: "Servicios Complementarios para Proyectos Inmobiliarios",
    href: "/servicios/complementarios",
    items: [
      "Comercial y marketing del proyecto",
      "Soporte de ventas y posventa",
      "KPIs y reportes para direccion",
    ],
  },
];

export default function Page() {
  return (
    <section>
      {/* HERO (fondo azul con imagen) */}
      <div
        className="relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(16,35,50,0.65) 0%, rgba(16,35,50,0.9) 100%), url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-12 md:py-14">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-white text-center mx-auto">
            Soluciones integrales en construccion, diseno y gerencia de proyectos.
          </h1>
          <p className="mt-3 max-w-3xl text-lg md:text-xl text-slate-200 text-center mx-auto">
            Acompanamos a nuestros clientes con direccion de proyectos, asesorias y diseno tecnico,
            respaldados por metodologias y datos para que sus obras avancen con calidad, costo y plazo controlados.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="inline-block h-[2px] w-40 md:w-56 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Separador curvo hacia secciones blancas */}
        <svg className="block w-[200%] h-[64px]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,48 C240,120 480,0 720,48 C960,96 1200,72 1440,24 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* QUIENES SOMOS (blanco) */}
      <div className="bg-white">
        <div className="container py-9">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">Quienes somos</h2>
          <p className="mt-3 max-w-4xl text-lg text-slate-800">
            FGC Proyectos ofrece <span className="font-medium text-brand-navy">soluciones integrales en construccion, diseno y gerencia de proyectos</span>
            para desarrollos residenciales, comerciales y corporativos. Brindamos asesoramiento tecnico desde el
            pre–proyecto (normativa, permisos, factibilidades) hasta la ejecucion, control y cierre de obra.
          </p>
          <p className="mt-3 max-w-4xl text-base md:text-lg text-slate-700">
            Contamos con <span className="font-medium text-brand-navy">mas de 43 anos de experiencia</span> en proyectos publicos y privados,
            dentro y fuera de Guayaquil, con un enfoque en transparencia, cumplimiento y resultados.
          </p>
          <div className="mt-5">
            <Link
              href="/quienes-somos"
              className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition"
            >
              Ver mas
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICIOS PRINCIPALES (botones con tono mas fuerte y bullets) */}
      <div id="servicios" className="bg-white">
        <div className="container py-9">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">Servicios principales</h2>
          <p className="mt-2 text-base md:text-lg text-slate-700">
            Selecciona un servicio para ver su alcance y entregables.
          </p>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {serviciosMenu.map((s) => (
              <li key={s.title}>
                <Link
                  href={s.href}
                  className="
                    group block rounded-2xl border border-slate-300
                    bg-gradient-to-b from-slate-200 to-slate-300
                    p-5 shadow
                    [box-shadow:inset_0_1px_0_rgba(255,255,255,.65),inset_0_-1px_0_rgba(0,0,0,.08)]
                    hover:shadow-md hover:from-slate-200 hover:to-slate-400
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40
                    transition-transform duration-150 hover:-translate-y-0.5
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-brand-navy">
                        {s.title}
                      </h3>

                      {/* Bullets (3 por servicio) */}
                      <ul className="mt-2 list-disc pl-5 text-sm md:text-base text-slate-800 space-y-1">
                        {s.items.map((it) => (
                          <li key={it} className="marker:text-slate-600">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span
                      aria-hidden
                      className="
                        mt-1 inline-flex h-8 w-8 items-center justify-center
                        rounded-xl border border-slate-300 bg-white
                        shadow-sm transition-transform group-hover:translate-x-0.5
                      "
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
