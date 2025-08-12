export const metadata = { title: "Búsqueda e Inspección de Locales y Terrenos | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Búsqueda e Inspección de Locales y Terrenos</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Selección técnica y normativa de predios o locales alineados al plan del cliente.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Requisitos del cliente:</strong> Ubicación, área, accesos, servicios, restricciones y presupuesto objetivo.</li>
          <li><strong>Búsqueda y shortlist:</strong> Prospección del mercado, filtros y lista corta comparativa.</li>
          <li><strong>Evaluación técnica:</strong> Estado del inmueble, estructura, instalaciones y riesgos físicos.</li>
          <li><strong>Uso de suelo y compatibilidad:</strong> Validación normativa, condicionantes y limitaciones de proyecto.</li>
          <li><strong>Costos de adecuación:</strong> Estimación CAPEX de adecuaciones y tiempos de intervención.</li>
          <li><strong>Due diligence y negociación:</strong> Verificación documental, riesgos legales y soporte en negociación.</li>
          <li><strong>Plan de implementación:</strong> Etapas, permisos y cronograma de obras/traslados.</li>
          <li><strong>Recomendación final:</strong> Informe con calificación y justificación técnica–económica.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Matriz de requisitos y shortlist</li>
          <li>Informes de inspección y compatibilidad normativa</li>
          <li>Estimación CAPEX de adecuaciones</li>
          <li>Análisis de riesgos y soporte de negociación</li>
          <li>Informe de recomendación final</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">¿Por qué con FGC?</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
                <li>Metodología, trazabilidad y reportes claros para la toma de decisiones.</li>
                <li>Equipo multidisciplinario con más de 43 años de experiencia acumulada.</li>
                <li>Integración de herramientas digitales e IA cuando aporta valor real.</li>
                <li>Enfoque en seguridad, calidad, plazo y costo — sin sorpresas.</li>
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

