import Link from "next/link";

type Servicio = {
  title: string;
  href: string;
  items: string[];
};

const serviciosMenu: Servicio[] = [
  {
    title: "Construcción de Obras",
    href: "/servicios/construccion",
    items: [
      "Planificación y cronogramas",
      "Compras, permisos y contratistas",
      "Seguridad, calidad y cierre de obra",
    ],
  },
  {
    title: "Gerencia de Proyectos de Construcción",
    href: "/servicios/gerencia",
    items: [
      "Alcance, costo y tiempo",
      "Riesgos y comunicación",
      "Control de contratistas y avances",
    ],
  },
  {
    title: "Mantenimiento Preventivo de Infraestructuras",
    href: "/servicios/mantenimiento",
    items: [
      "Planes y rutinas",
      "Priorización según riesgo y presupuesto",
      "Indicadores y reportes",
    ],
  },
  {
    title: "Servicios Potenciados con Inteligencia Artificial",
    href: "/servicios/ia",
    items: [
      "Estimaciones y control con IA",
      "Detección de riesgos y alertas",
      "Reportes automáticos y tableros",
    ],
  },
  {
    title: "Asesoría en Desarrollo de Proyectos",
    href: "/servicios/asesoria",
    items: [
      "Viabilidad técnica y económica",
      "Revisión normativa y permisos",
      "Anteproyecto y plan de acción",
    ],
  },
  {
    title: "Inspección Técnica de Obras (ITO)",
    href: "/servicios/ito",
    items: [
      "Inspecciones en sitio",
      "Informes con evidencias",
      "Recomendaciones y seguimiento",
    ],
  },
  {
    title: "Búsqueda e Inspección de Locales y Terrenos",
    href: "/servicios/busqueda",
    items: [
      "Usos de suelo y factibilidades",
      "Evaluación técnica del inmueble",
      "Requisitos municipales y servicios",
    ],
  },
  {
    title: "Servicios Complementarios para Proyectos Inmobiliarios",
    href: "/servicios/complementarios",
    items: [
      "Comercial y marketing del proyecto",
      "Soporte de ventas y posventa",
      "KPIs y reportes para dirección",
    ],
  },
];

export default function Page() {
  return (
    <section>
      {/* HERO (sin botón debajo del “Acompáñanos…”) */}
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
            Construcción, Diseño y Gerencia de Proyectos
          </h1>

          <p className="mt-6 md:mt-8 max-w-3xl text-2xl md:text-3xl text-white/90 text-center mx-auto font-medium">
            Acompáñanos en el desarrollo de soluciones innovadoras y eficientes.
          </p>
        </div>

        <svg
          className="block w-[200%] h-[64px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,48 C240,120 480,0 720,48 C960,96 1200,72 1440,24 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

{/* QUIÉNES SOMOS (sin título, solo párrafos, centrados) */}
      <div className="bg-white">
        <div className="container py-9 space-y-6 text-center flex flex-col items-center">
          <p className="max-w-4xl text-lg text-slate-800 mx-auto">
            FGC Proyectos ofrece soluciones integrales en Construcción, Diseño y
            Gerencia de Proyectos para desarrollos residenciales, comerciales y
            corporativos. Brindamos asesoramiento técnico especializado que
            abarca todo el ciclo del proyecto: desde el pre-proyecto (análisis
            normativo, permisos municipales y estudios de factibilidad) hasta la
            ejecución, supervisión, control de calidad y cierre de obra,
            garantizando los más altos estándares en cada etapa.
          </p>

          <p className="max-w-4xl text-base md:text-lg text-slate-700 mx-auto">
            Hemos desarrollado múltiples proyectos públicos y privados, dentro y
            fuera de Guayaquil, que incluyen complejos habitacionales, centros
            comerciales, edificios corporativos e infraestructura pública. Esta
            trayectoria nos ha permitido perfeccionar nuestros procesos,
            establecer alianzas estratégicas confiables y desarrollar un profundo
            conocimiento del mercado local.
          </p>

          <p className="max-w-4xl text-base md:text-lg text-slate-700 mx-auto">
            Nuestro trabajo se fundamenta en tres pilares esenciales:{" "}
            <strong>transparencia, cumplimiento y resultados</strong>. Mantenemos
            una comunicación abierta y detallada con nuestros clientes,
            cumplimos rigurosamente con plazos y especificaciones técnicas, y
            entregamos resultados que superan expectativas. Esto nos consolida
            como un socio estratégico confiable para materializar proyectos
            arquitectónicos y empresariales con la garantía de experiencia y
            profesionalismo que nos caracteriza.
          </p>
        </div>
      </div>

      {/* SERVICIOS PRINCIPALES */}
      <div id="servicios" className="bg-white">
        <div className="container py-9">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Servicios principales
          </h2>
          <p className="mt-2 text-base md:text-lg text-slate-700">
            Selecciona un servicio para ver su alcance y entregables.
          </p>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {serviciosMenu.map((s) => (
              <li key={s.title}>
                <Link
                  href={s.href}
                  className="group block rounded-2xl border border-slate-300 bg-gradient-to-b from-slate-200 to-slate-300 p-5 shadow hover:shadow-md hover:from-slate-200 hover:to-slate-400 transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-brand-navy">
                        {s.title}
                      </h3>
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
                      className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-slate-300 bg-white shadow-sm"
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

      {/* CONTACTO (sección; el CTA global está en el HEADER via layout) */}
      <section id="contacto" className="bg-white">
        <div className="container py-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Contáctanos
          </h2>
          <p className="mt-2 text-slate-700">
            La forma más rápida es por WhatsApp. También estamos en Instagram y
            teléfono convencional.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/593994352979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl bg-green-600 text-white px-5 py-3 font-semibold hover:bg-green-700"
            >
              WhatsApp +593 99 435 2979
            </a>

            {/* Instagram con icono SVG inline */}
            <a
              href="https://instagram.com/fgcproyectosgye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
              @fgcproyectosgye
            </a>

            <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800">
              ☎ Tel. convencional: 04 454 0921
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
