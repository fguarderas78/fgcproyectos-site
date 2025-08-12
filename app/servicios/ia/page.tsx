ï»¿export const metadata = { title: "Servicios Potenciados con Inteligencia Artificial | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de tÃ­tulo */}
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
          <li><strong>EstimaciÃ³n asistida:</strong> Modelos que aceleran y documentan estimaciones de costos/tiempos con histÃ³ricos y supuestos.</li>
          <li><strong>Alertas predictivas:</strong> DetecciÃ³n temprana de retrasos y sobrecostos con modelos de riesgo y umbrales de alerta.</li>
          <li><strong>Lectura de normativa:</strong> NLP para analizar normativas y permisos; extracciÃ³n de requisitos y matcheo con el proyecto.</li>
          <li><strong>VisiÃ³n por computador:</strong> Reconocimiento de imÃ¡genes para avance, calidad y seguridad (fotografÃ­as, drones, cÃ¡maras).</li>
          <li><strong>Reportes automÃ¡ticos:</strong> GeneraciÃ³n de informes periÃ³dicos con datos en vivo y auditorÃ­a de cambios.</li>
          <li><strong>Integraciones:</strong> Conectores con hojas, ERPs o plataformas del cliente para evitar re-trabajo.</li>
          <li><strong>Copiloto de obra:</strong> Asistente conversacional con contexto del proyecto, documentos y planos (bajo permisos).</li>
          <li><strong>Gobernanza y privacidad:</strong> PolÃ­ticas de datos, controles de acceso y cumplimiento contractual.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables tÃ­picos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Tableros de estimaciÃ³n y seguimiento</li>
          <li>ConfiguraciÃ³n de alertas y reportes automÃ¡ticos</li>
          <li>Asistente/canal conversacional (si aplica)</li>
          <li>Integraciones y documentaciÃ³n tÃ©cnica</li>
          <li>PolÃ­ticas de gobernanza de datos</li>
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

