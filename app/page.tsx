import Link from "next/link";

const serviciosMenu = [
  { title: "Construcción de Obras", href: "/servicios/construccion", desc: "Planificación, compras, seguridad, calidad, permisos, ejecución y cierre." },
  { title: "Gerencia de Proyectos de Construcción", href: "/servicios/gerencia", desc: "Alcance, costo, tiempo, riesgos y gestión de contratistas." },
  { title: "Mantenimiento Preventivo de Infraestructuras", href: "/servicios/mantenimiento", desc: "Planes, priorización técnico–presupuestaria y métricas." },
  { title: "Servicios Potenciados con Inteligencia Artificial", href: "/servicios/ia", desc: "Estimaciones, riesgos, reportes automáticos y analítica aplicada a obra." },
  { title: "Asesoría en Desarrollo de Proyectos", href: "/servicios/asesoria", desc: "Viabilidad y factibilidad técnica y económica; revisión normativa." },
  { title: "Inspección Técnica de Obras (ITO)", href: "/servicios/ito", desc: "Informes con evidencia, hallazgos y recomendaciones." },
  { title: "Búsqueda e Inspección de Locales y Terrenos", href: "/servicios/busqueda", desc: "Usos de suelo, normas, requisitos y evaluación técnica del inmueble." },
  { title: "Servicios Complementarios para Proyectos Inmobiliarios", href: "/servicios/complementarios", desc: "Comercial, marketing, ventas, posventa y reportes." },
];

export default function Page() {
  return (
    <section>
      {/* HERO (Soluciones) - AZUL */}
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
            Soluciones integrales en construcción, diseño y gerencia de proyectos.
          </h1>
          <p className="mt-3 max-w-3xl text-lg md:text-xl text-slate-200 text-center mx-auto">
            Acompañamos a nuestros clientes con dirección de proyectos, asesorías y diseño técnico,
            respaldados por metodologías y datos para que sus obras avancen con calidad, costo y plazo controlados.
          </p>

          {/* línea divisoria */}
          <div className="mt-5 flex justify-center">
            <span className="inline-block h-[2px] w-40 md:w-56 rounded-full bg-white/50" />
          </div>
        </div>

        {/* OLA hacia FONDO BLANCO */}
        <svg className="block w-[200%] h-[64px]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,48 C240,120 480,0 720,48 C960,96 1200,72 1440,24 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* QUIÉNES SOMOS - BLANCO */}
      <div className="bg-white">
        <div className="container py-9">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">Quiénes somos</h2>
          <p className="mt-3 max-w-4xl text-lg text-slate-800">
            FGC Proyectos ofrece soluciones integrales en <span className="font-medium text-brand-navy">construcción, diseño y gerencia de proyectos</span>
            para desarrollos residenciales, comerciales y corporativos. Brindamos asesoramiento técnico desde el
            pre–proyecto (normativa, permisos, factibilidades) hasta la ejecución, control y cierre de obra.
          </p>
          <p className="mt-3 max-w-4xl text-base md:text-lg text-slate-700">
            Contamos con <span className="font-medium text-brand-navy">más de 43 años de experiencia</span> en proyectos públicos y privados,
            dentro y fuera de Guayaquil, con un enfoque en transparencia, cumplimiento y resultados.
          </p>

          <div className="mt-5">
            <Link
              href="/quienes-somos"
              className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICIOS PRINCIPALES - BLANCO */}
      <div id="servicios" className="bg-white">
        <div className="container py-9">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">Servicios principales</h2>
          <p className="mt-2 text-base md:text-lg text-slate-700">
            Seleccione un servicio para ver su alcance y entregables.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              serviciosMenu[0], // Construcción
              serviciosMenu[1], // Gerencia
              serviciosMenu[2], // Mantenimiento
              serviciosMenu[3], // IA
              serviciosMenu[4],
              serviciosMenu[5],
              serviciosMenu[6],
              serviciosMenu[7],
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <h3 className="text-base md:text-lg font-semibold text-brand-navy leading-snug tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-600">{s.desc}</p>
                <span className="mt-4 inline-block text-sm md:text-base text-brand-navy underline-offset-2 hover:underline">
                  Ver detalle →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
