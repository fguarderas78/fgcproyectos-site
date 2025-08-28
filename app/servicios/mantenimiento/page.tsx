export const metadata = { title: "Mantenimiento Preventivo de Infraestructuras | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Mantenimiento Preventivo de Infraestructuras</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Estrategia y ejecución del mantenimiento para extender vida útil, reducir paradas y controlar costos.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Inventario y criticidad:</strong> Levantamiento de activos, clasificación por criticidad, historial y condiciones actuales.</li>
          <li><strong>Plan maestro de PM:</strong> Rutinas, frecuencias y ventanas de intervención (lubricación, ajustes, calibraciones, pruebas).</li>
          <li><strong>Inspecciones programadas:</strong> Checklists por sistema/área, inspecciones predictivas (si aplica) y criterios de aceptación.</li>
          <li><strong>�"rdenes de trabajo y CMMS:</strong> Gestión digital de OT, priorización, trazabilidad de repuestos, tiempos y costos.</li>
          <li><strong>Repuestos y presupuestos:</strong> Stocks mínimos, repuestos críticos, lead times y presupuesto anual por centro de costo.</li>
          <li><strong>Contratos de servicio:</strong> Terceros especializados con SLAs, alcances claros y penalidades por incumplimiento.</li>
          <li><strong>KPIs de mantenimiento:</strong> Disponibilidad, MTBF, MTTR, cumplimiento del plan y costo de mantenimiento/activo.</li>
          <li><strong>Seguridad y normativa:</strong> Permisos de trabajo, bloqueos/etiquetados (LOTO) y cumplimiento legal aplicable.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Inventario de activos y matriz de criticidad</li>
          <li>Plan maestro de mantenimiento (PM) y checklists</li>
          <li>�"rdenes de trabajo estandarizadas (CMMS)</li>
          <li>Reportes periódicos de ejecución y KPIs</li>
          <li>Presupuesto anual y plan de repuestos críticos</li>
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

