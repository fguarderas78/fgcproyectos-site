export const metadata = { title: "Asesoría en Desarrollo de Proyectos | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Asesoría en Desarrollo de Proyectos</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Análisis técnico�?"económico y normativo para viabilizar proyectos con decisiones informadas.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Requerimientos y objetivos:</strong> Levantamiento de necesidades, restricciones y criterios de éxito del cliente.</li>
          <li><strong>Factibilidad técnica y económica:</strong> Evaluación de soluciones, costos, OPEX/CAPEX y sensibilidad de escenarios.</li>
          <li><strong>Normativa y uso de suelo:</strong> Compatibilidad normativa, retranqueos, alturas, ocupación, impactos y permisos.</li>
          <li><strong>Estudios preliminares:</strong> Topografía, suelos, ensayos y utilidades disponibles como insumos de diseño.</li>
          <li><strong>Estrategia de contratación:</strong> Modalidades (llave en mano, administración delegada, etc.) y riesgos asociados.</li>
          <li><strong>Plan de permisos:</strong> Ruta crítica de trámites, responsables y tiempos estimados.</li>
          <li><strong>Cronograma y costos preliminares:</strong> Hitos de preinversión y presupuesto de factibilidades y diseños.</li>
          <li><strong>Dossier para inversión:</strong> Paquete ejecutivo para directorio/comité con recomendaciones.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Informe de viabilidad y factibilidad</li>
          <li>Matriz normativa y ruta de permisos</li>
          <li>Estimación CAPEX/OPEX y escenarios</li>
          <li>Cronograma preliminar del proyecto</li>
          <li>Dossier ejecutivo para decisión de inversión</li>
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

