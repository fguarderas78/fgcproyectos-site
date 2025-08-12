export const metadata = { title: "Servicios Potenciados con Inteligencia Artificial | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Servicios Potenciados con Inteligencia Artificial</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Herramientas de IA para estimar, anticipar riesgos y automatizar reportes con trazabilidad.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Estimación asistida:</strong> Modelos que aceleran y documentan estimaciones de costos/tiempos con históricos y supuestos.</li>
          <li><strong>Alertas predictivas:</strong> Detección temprana de retrasos y sobrecostos con modelos de riesgo y umbrales de alerta.</li>
          <li><strong>Lectura de normativa:</strong> NLP para analizar normativas y permisos; extracción de requisitos y matcheo con el proyecto.</li>
          <li><strong>Visión por computador:</strong> Reconocimiento de imágenes para avance, calidad y seguridad (fotografías, drones, cámaras).</li>
          <li><strong>Reportes automáticos:</strong> Generación de informes periódicos con datos en vivo y auditoría de cambios.</li>
          <li><strong>Integraciones:</strong> Conectores con hojas, ERPs o plataformas del cliente para evitar re-trabajo.</li>
          <li><strong>Copiloto de obra:</strong> Asistente conversacional con contexto del proyecto, documentos y planos (bajo permisos).</li>
          <li><strong>Gobernanza y privacidad:</strong> Políticas de datos, controles de acceso y cumplimiento contractual.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Tableros de estimación y seguimiento</li>
          <li>Configuración de alertas y reportes automáticos</li>
          <li>Asistente/canal conversacional (si aplica)</li>
          <li>Integraciones y documentación técnica</li>
          <li>Políticas de gobernanza de datos</li>
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

