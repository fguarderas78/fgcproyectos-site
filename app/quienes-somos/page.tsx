import Image from "next/image";

export const metadata = { title: "Quiénes somos | FGC Proyectos" };

// Enlaces
const WHATSAPP =
  "https://wa.me/593994352979?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20FGC%20Proyectos.";
const LINKEDIN_FRANCISCO =
  "https://www.linkedin.com/in/francisco-guarderas-cueto-52766a76/";

export default function Page() {
  return (
    <section>
      {/* FRANJA AZUL */}
      <div className="bg-[#123147] text-white">
        <div className="container py-10 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold">Quiénes somos</h1>
          <p className="mt-3 max-w-3xl text-slate-200">
            Soluciones integrales en construcción, diseño y gerencia de proyectos.
            Acompañamos desde el pre–proyecto hasta el cierre técnico–administrativo,
            con foco en calidad, costo y plazo.
          </p>
        </div>
      </div>

      {/* CONTENIDO BLANCO */}
      <div className="bg-white text-slate-900">
        <div className="container py-10 md:py-12">
          {/* PERFIL */}
          <div className="grid items-start gap-8 md:grid-cols-[280px,1fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              {/* Asegúrate de tener /public/perfil.jpg */}
              <Image
                src="/perfil.jpg"
                alt="Francisco Guarderas"
                width={900}
                height={900}
                sizes="(max-width: 768px) 100vw, 280px"
                className="h-[320px] w-full object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#123147]">
                Francisco Guarderas
              </h2>
              <p className="text-slate-700">Director de Proyectos — FGC Proyectos</p>

              <p className="mt-4 max-w-3xl text-lg">
                Ingeniería, gestión y diseño al servicio de nuestros clientes. Lideramos
                equipos de obra y consultoría para asegurar alcance, costo, tiempo y calidad,
                con reportes claros y decisiones basadas en datos.
              </p>

              <ul className="mt-4 space-y-2 text-slate-800">
                <li>— Más de 43 años de experiencia en proyectos públicos y privados.</li>
                <li>— Enfoque en cumplimiento normativo, seguridad y control de calidad.</li>
                <li>— Uso de herramientas de IA para estimaciones, riesgos y reportes ejecutivos.</li>
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl bg-[#123147] text-white px-5 py-3 font-medium hover:opacity-90 transition"
                >
                  Solicitar una reunión por WhatsApp
                </a>

                {/* LinkedIn personal */}
                <a
                  href={LINKEDIN_FRANCISCO}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Francisco Guarderas"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#123147]/30 text-[#123147] px-4 py-2 font-medium hover:bg-[#123147] hover:text-white transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="opacity-90">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9V24H.5zM9 8.5h4.7v2.1h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24H19.7v-6.8c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V24H9z"
                    />
                  </svg>
                  LinkedIn Francisco
                </a>
              </div>
            </div>
          </div>

          {/* QUÉ HACEMOS */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#123147]">Qué hacemos</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-slate-900">Gerencia de proyectos</h4>
                <p className="mt-1 text-slate-700">
                  Alcance, costo, tiempo, riesgos y contratistas. Plan maestro, cronogramas y seguimiento de avances.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Consultoría y diseño</h4>
                <p className="mt-1 text-slate-700">
                  Factibilidad técnico–económica, normativa, permisos y especificaciones para construcción.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">IA aplicada a obra</h4>
                <p className="mt-1 text-slate-700">
                  Estimaciones, detección de riesgos y reportes automáticos para decisiones con trazabilidad.
                </p>
              </div>
            </div>
          </div>

          {/* CÓMO TRABAJAMOS */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#123147]">Cómo trabajamos</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-slate-900">Gobierno del proyecto</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                  <li>Paquetes de trabajo, hitos y rutas críticas.</li>
                  <li>Indicadores de avance y control de costos.</li>
                  <li>Gestión de cambios, riesgos y comunicaciones.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Calidad, seguridad y cumplimiento</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                  <li>Plan de calidad y HSE en obra.</li>
                  <li>Ensayos, recepciones y cierre técnico–administrativo.</li>
                  <li>Auditorías y trazabilidad documental.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* VALORES */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#123147]">Nuestros valores</h3>
            <ul className="mt-4 grid gap-2 md:grid-cols-2 text-slate-800">
              <li>• Transparencia y cumplimiento.</li>
              <li>• Seguridad y calidad como estándar.</li>
              <li>• Orientación a resultados medibles.</li>
              <li>• Innovación con herramientas de IA.</li>
            </ul>
          </div>

          {/* CIERRE / ENLACES */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="/clientes"
              className="inline-block rounded-2xl border border-[#123147]/30 text-[#123147] px-5 py-3 font-medium hover:bg-[#123147] hover:text-white transition"
            >
              Ver clientes
            </a>
            <a
              href="/galeria"
              className="inline-block rounded-2xl border border-[#123147]/30 text-[#123147] px-5 py-3 font-medium hover:bg-[#123147] hover:text-white transition"
            >
              Ver galería
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

