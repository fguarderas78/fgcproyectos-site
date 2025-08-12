ï»¿export const metadata = { title: "Gerencia de Proyectos de ConstrucciÃ³n | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de tÃ­tulo */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Gerencia de Proyectos de ConstrucciÃ³n</h1>
          <p className="mt-2 text-white/80 max-w-3xl">DirecciÃ³n integral del proyecto para alinear objetivos, gestionar riesgos y asegurar resultados medibles.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Alcance y objetivos:</strong> Acta de constituciÃ³n, definiciÃ³n de entregables, criterios de aceptaciÃ³n y lÃ­nea base de alcance.</li>
          <li><strong>Estructura del trabajo (WBS):</strong> DescomposiciÃ³n jerÃ¡rquica, paquetes de trabajo y asignaciÃ³n de responsabilidades (RACI).</li>
          <li><strong>GestiÃ³n de plazos:</strong> Cronograma maestro, hitos, seguimiento y control de variaciones usando tÃ©cnicas de Valor Ganado (EVM).</li>
          <li><strong>GestiÃ³n de costos:</strong> Presupuesto base, control de costos, flujo de caja y proyecciones al tÃ©rmino (EAC).</li>
          <li><strong>GestiÃ³n de riesgos:</strong> Registro de riesgos, anÃ¡lisis cualitativo/cuantitativo, respuestas y planes de contingencia.</li>
          <li><strong>Stakeholders y comunicaciones:</strong> Matriz de interesados, plan de comunicaciones, reportes y gobernanza de reuniones.</li>
          <li><strong>Contratistas y adquisiciones:</strong> Estrategia de contrataciÃ³n, evaluaciones, KPIs y administraciÃ³n de contratos.</li>
          <li><strong>Cierre y lecciones:</strong> Acta de cierre, liberaciÃ³n de recursos, lecciones aprendidas y traspaso a operaciÃ³n/mantenimiento.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables tÃ­picos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Acta de constituciÃ³n y WBS</li>
          <li>Plan de gestiÃ³n (alcance, cronograma, costos, calidad, riesgos)</li>
          <li>Matriz de stakeholders y plan de comunicaciones</li>
          <li>Reportes de desempeÃ±o (EVM) y tablero de control</li>
          <li>Cierre del proyecto y lecciones aprendidas</li>
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

