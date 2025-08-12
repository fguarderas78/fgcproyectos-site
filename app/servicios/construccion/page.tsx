export const metadata = { title: "Construcción de Obras | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Construcción de Obras</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Ejecución integral de obra con planificación, control y calidad para cumplir alcance, costo, tiempo y seguridad.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Planificación y programación:</strong> Estructura de Desglose del Trabajo (WBS), cronograma base, ruta crítica (CPM) y secuencia de frentes de obra para optimizar recursos y minimizar interferencias.</li>
          <li><strong>Presupuestos y contratación:</strong> Elaboración/validación del presupuesto, TDRs, procesos de licitación, comparativos técnicos�?"económicos y contratos con KPIs y cláusulas de desempeño.</li>
          <li><strong>Compras y logística:</strong> Plan de abastecimiento, control de almacén, recepción de materiales y coordinación de equipos considerando lead times, transporte, maniobras y restricciones de sitio.</li>
          <li><strong>Seguridad y salud (SST):</strong> IPER, permisos de trabajo, inducción, inspecciones, control de EPP y planes de emergencia, conforme a normativa local y estándares del cliente.</li>
          <li><strong>Calidad (QA/QC):</strong> Plan de calidad, ITPs, checklists, ensayos y liberaciones por etapas; gestión de no conformidades y punch list hasta su cierre.</li>
          <li><strong>Permisos y relaciones:</strong> Gestiones con municipios, fiscalización y utilities (agua, energía, telecom). Seguimiento documental y trazabilidad.</li>
          <li><strong>Supervisión y cambios:</strong> RFI, órdenes de cambio, control de avance físico vs. programado, hitos y mitigación de desvíos.</li>
          <li><strong>Cierre y postventa:</strong> As-built, manuales O&M, garantías, entrega formal y plan de postventa/mantenimiento.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Acta de inicio, Plan de Obra y WBS</li>
          <li>Cronograma base (MS Project/Primavera) y curvas S</li>
          <li>Presupuesto control con registro de órdenes de cambio</li>
          <li>Planes SST y QA/QC (ITPs, checklists y ensayos)</li>
          <li>Informes semanales/mensuales con evidencia fotográfica</li>
          <li>Dossier de cierre: planos as-built, O&M y garantías</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">¿Por qué con FGC?</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
                <li>Metodología, trazabilidad y reportes claros para la toma de decisiones.</li>
                <li>Equipo multidisciplinario con más de 43 años de experiencia acumulada.</li>
                <li>Integración de herramientas digitales e IA cuando aporta valor real.</li>
                <li>Enfoque en seguridad, calidad, plazo y costo �?" sin sorpresas.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://wa.me/=Hola%2c+me+interesa+agendar+una+reunion+con+FGC+Proyectos." target="_blank" rel="noopener noreferrer" className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition">
              Solicitar una reunión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

