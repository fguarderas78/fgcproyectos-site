export const metadata = { title: "Gerencia de Proyectos de Construcción | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Gerencia de Proyectos de Construcción</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Dirección integral del proyecto para alinear objetivos, gestionar riesgos y asegurar resultados medibles.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Alcance y objetivos:</strong> Acta de constitución, definición de entregables, criterios de aceptación y línea base de alcance.</li>
          <li><strong>Estructura del trabajo (WBS):</strong> Descomposición jerárquica, paquetes de trabajo y asignación de responsabilidades (RACI).</li>
          <li><strong>Gestión de plazos:</strong> Cronograma maestro, hitos, seguimiento y control de variaciones usando técnicas de Valor Ganado (EVM).</li>
          <li><strong>Gestión de costos:</strong> Presupuesto base, control de costos, flujo de caja y proyecciones al término (EAC).</li>
          <li><strong>Gestión de riesgos:</strong> Registro de riesgos, análisis cualitativo/cuantitativo, respuestas y planes de contingencia.</li>
          <li><strong>Stakeholders y comunicaciones:</strong> Matriz de interesados, plan de comunicaciones, reportes y gobernanza de reuniones.</li>
          <li><strong>Contratistas y adquisiciones:</strong> Estrategia de contratación, evaluaciones, KPIs y administración de contratos.</li>
          <li><strong>Cierre y lecciones:</strong> Acta de cierre, liberación de recursos, lecciones aprendidas y traspaso a operación/mantenimiento.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Acta de constitución y WBS</li>
          <li>Plan de gestión (alcance, cronograma, costos, calidad, riesgos)</li>
          <li>Matriz de stakeholders y plan de comunicaciones</li>
          <li>Reportes de desempeño (EVM) y tablero de control</li>
          <li>Cierre del proyecto y lecciones aprendidas</li>
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

