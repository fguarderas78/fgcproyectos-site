export const metadata = { title: "Inspección Técnica de Obras (ITO) | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Inspección Técnica de Obras (ITO)</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Control independiente de calidad, seguridad y avance con reportes verificables.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Diagnóstico inicial:</strong> Levantamiento de estado, revisión de documentos y plan de inspecciones.</li>
          <li><strong>Control de especificaciones:</strong> Verificación de materiales, métodos y tolerancias conforme a planos y normas.</li>
          <li><strong>Avance físico vs. programado:</strong> Comparación de mediciones con cronograma, hitos y valorizaciones.</li>
          <li><strong>No conformidades:</strong> Registro, seguimiento y cierre de NCs con acciones correctivas y evidencias.</li>
          <li><strong>Seguridad y ambiente:</strong> Observaciones de SST y ambiente con medidas de mitigación.</li>
          <li><strong>Valorizaciones y pagos:</strong> Revisión de metrados, cómputos, valorizaciones y sustentos.</li>
          <li><strong>Recepción y punch list:</strong> Listas de pendientes, pruebas, puesta en marcha y aceptación.</li>
          <li><strong>Informes técnicos:</strong> Reportes periódicos con fotografías, hallazgos y recomendaciones.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Informe diagnóstico y plan de inspecciones</li>
          <li>Registros de verificación e ITPs</li>
          <li>Reportes de avance y valorizaciones revisadas</li>
          <li>Registro de no conformidades y punch list</li>
          <li>Informe final de recepción</li>
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

