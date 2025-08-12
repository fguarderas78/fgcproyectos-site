export const metadata = { title: "Quienes somos | FGC Proyectos" };

const WHATSAPP = "https://wa.me/593999999999?text=Hola%2C%20me%20interesa%20agendar%20una%20reunion%20con%20FGC%20Proyectos.";

export default function Page() {
  return (
    <section className="bg-white text-slate-800">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">Quienes somos</h1>

        {/* PERFIL (foto + bio + CTA) */}
        <div className="mt-8 grid items-start gap-8 md:grid-cols-[280px,1fr]">
          {/* Foto/placeholder */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
            <img
              src="/perfil.jpg" // coloca tu foto en /public/perfil.jpg
              alt="Perfil FGC"
              className="w-full h-[320px] object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
              Francisco Guarderas
            </h2>
            <p className="text-slate-600">Director de Proyectos en FGC Proyectos</p>

            <p className="mt-4 max-w-3xl text-lg">
              Ingenieria, gestion y diseno al servicio de nuestros clientes. Lidero equipos de obra y
              consultoria para asegurar alcance, costo, tiempo y calidad, desde el pre–proyecto hasta el cierre.
            </p>

            {/* Bullets del perfil */}
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>— 43+ anos de experiencia en proyectos publicos y privados.</li>
              <li>— Enfoque en cumplimiento normativo, seguridad y control de calidad.</li>
              <li>— Uso de herramientas de IA para estimaciones, riesgos y reportes.</li>
            </ul>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-2xl bg-[#123147] text-white px-5 py-3 font-medium hover:opacity-90 transition"
              >
                Solicitar una reunion (WhatsApp)
              </a>
              <a
                href="/cv.pdf" // opcional: coloca tu CV en /public/cv.pdf
                className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        {/* ENFOQUE / COMO TRABAJAMOS */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy">Enfoque y metodologia</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-900">Direccion y gobierno del proyecto</h4>
              <p className="text-slate-700 mt-1">
                Definicion de alcance, plan maestro, ruta critica, paquetes de trabajo y gestion de contratistas.
              </p>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Control de avances y costos</li>
                <li>Riesgos y cambios</li>
                <li>Comunicaciones y stakeholders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Calidad, seguridad y cumplimiento</h4>
              <p className="text-slate-700 mt-1">
                Normativa, permisos, especificaciones tecnicas y aseguramiento de la calidad en obra.
              </p>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Plan de calidad y HSE</li>
                <li>Ensayos y recepciones</li>
                <li>Cierre tecnico–administrativo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">IA aplicada al proyecto</h4>
              <p className="text-slate-700 mt-1">
                Estimaciones, analitica y reportes automatizados para decisiones mas rapidas y trazables.
              </p>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Prediccion de plazos y costos</li>
                <li>Alertas tempranas</li>
                <li>Tableros ejecutivos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Relacion de largo plazo</h4>
              <p className="text-slate-700 mt-1">
                Acompanar despues de la entrega con mantenimiento, mejoras y soporte de postventa.
              </p>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                <li>Planes preventivos</li>
                <li>Optimizacion operativa</li>
                <li>Capacitacion al equipo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LINEA DE TIEMPO (hitos resumidos) */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy">Linea de tiempo</h3>
          <ol className="mt-6 border-l-2 border-slate-200 pl-6 space-y-6">
            <li>
              <div className="-ml-[10px] h-2 w-2 rounded-full bg-brand-navy" />
              <p className="mt-2 text-slate-900 font-medium">Direccion de proyectos clave (sector industrial y comercial)</p>
              <p className="text-slate-700">Planificacion, contratacion y control de obra con equipos multidisciplina.</p>
            </li>
            <li>
              <div className="-ml-[10px] h-2 w-2 rounded-full bg-brand-navy" />
              <p className="mt-2 text-slate-900 font-medium">Consultoria y diseno</p>
              <p className="text-slate-700">Anteproyecto, tramites y especificaciones para licitacion y construccion.</p>
            </li>
            <li>
              <div className="-ml-[10px] h-2 w-2 rounded-full bg-brand-navy" />
              <p className="mt-2 text-slate-900 font-medium">Implementacion de herramientas de IA</p>
              <p className="text-slate-700">Reportes automaticos y analitica de obra para decisiones con datos.</p>
            </li>
          </ol>
        </div>

        {/* DATOS RAPIDOS */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy">Datos rapidos</h3>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-slate-600">Proyectos gestionados</dt>
              <dd className="text-3xl font-bold text-brand-navy">100+</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Sectores</dt>
              <dd className="text-3xl font-bold text-brand-navy">Publico / Privado</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Alcance</dt>
              <dd className="text-3xl font-bold text-brand-navy">Ecuador y region</dd>
            </div>
          </dl>
        </div>

        {/* CTA final */}
        <div className="mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#123147] text-white px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Agenda una reunion por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
