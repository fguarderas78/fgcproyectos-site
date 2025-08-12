ï»¿export const metadata = { title: "ConstrucciÃ³n de Obras | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de tÃ­tulo */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">ConstrucciÃ³n de Obras</h1>
          <p className="mt-2 text-white/80 max-w-3xl">EjecuciÃ³n integral de obra con planificaciÃ³n, control y calidad para cumplir alcance, costo, tiempo y seguridad.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>PlanificaciÃ³n y programaciÃ³n:</strong> Estructura de Desglose del Trabajo (WBS), cronograma base, ruta crÃ­tica (CPM) y secuencia de frentes de obra para optimizar recursos y minimizar interferencias.</li>
          <li><strong>Presupuestos y contrataciÃ³n:</strong> ElaboraciÃ³n/validaciÃ³n del presupuesto, TDRs, procesos de licitaciÃ³n, comparativos tÃ©cnicosâ€“econÃ³micos y contratos con KPIs y clÃ¡usulas de desempeÃ±o.</li>
          <li><strong>Compras y logÃ­stica:</strong> Plan de abastecimiento, control de almacÃ©n, recepciÃ³n de materiales y coordinaciÃ³n de equipos considerando lead times, transporte, maniobras y restricciones de sitio.</li>
          <li><strong>Seguridad y salud (SST):</strong> IPER, permisos de trabajo, inducciÃ³n, inspecciones, control de EPP y planes de emergencia, conforme a normativa local y estÃ¡ndares del cliente.</li>
          <li><strong>Calidad (QA/QC):</strong> Plan de calidad, ITPs, checklists, ensayos y liberaciones por etapas; gestiÃ³n de no conformidades y punch list hasta su cierre.</li>
          <li><strong>Permisos y relaciones:</strong> Gestiones con municipios, fiscalizaciÃ³n y utilities (agua, energÃ­a, telecom). Seguimiento documental y trazabilidad.</li>
          <li><strong>SupervisiÃ³n y cambios:</strong> RFI, Ã³rdenes de cambio, control de avance fÃ­sico vs. programado, hitos y mitigaciÃ³n de desvÃ­os.</li>
          <li><strong>Cierre y postventa:</strong> As-built, manuales O&M, garantÃ­as, entrega formal y plan de postventa/mantenimiento.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables tÃ­picos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Acta de inicio, Plan de Obra y WBS</li>
          <li>Cronograma base (MS Project/Primavera) y curvas S</li>
          <li>Presupuesto control con registro de Ã³rdenes de cambio</li>
          <li>Planes SST y QA/QC (ITPs, checklists y ensayos)</li>
          <li>Informes semanales/mensuales con evidencia fotogrÃ¡fica</li>
          <li>Dossier de cierre: planos as-built, O&M y garantÃ­as</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Â¿Por quÃ© con FGC?</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
                <li>MetodologÃ­a, trazabilidad y reportes claros para la toma de decisiones.</li>
                <li>Equipo multidisciplinario con mÃ¡s de 43 aÃ±os de experiencia acumulada.</li>
                <li>IntegraciÃ³n de herramientas digitales e IA cuando aporta valor real.</li>
                <li>Enfoque en seguridad, calidad, plazo y costo â€” sin sorpresas.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://wa.me/=Hola%2c+me+interesa+agendar+una+reunion+con+FGC+Proyectos." target="_blank" rel="noopener noreferrer" className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition">
              Solicitar una reuniÃ³n
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

