ï»¿export const metadata = { title: "AsesorÃ­a en Desarrollo de Proyectos | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de tÃ­tulo */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">AsesorÃ­a en Desarrollo de Proyectos</h1>
          <p className="mt-2 text-white/80 max-w-3xl">AnÃ¡lisis tÃ©cnicoâ€“econÃ³mico y normativo para viabilizar proyectos con decisiones informadas.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Requerimientos y objetivos:</strong> Levantamiento de necesidades, restricciones y criterios de Ã©xito del cliente.</li>
          <li><strong>Factibilidad tÃ©cnica y econÃ³mica:</strong> EvaluaciÃ³n de soluciones, costos, OPEX/CAPEX y sensibilidad de escenarios.</li>
          <li><strong>Normativa y uso de suelo:</strong> Compatibilidad normativa, retranqueos, alturas, ocupaciÃ³n, impactos y permisos.</li>
          <li><strong>Estudios preliminares:</strong> TopografÃ­a, suelos, ensayos y utilidades disponibles como insumos de diseÃ±o.</li>
          <li><strong>Estrategia de contrataciÃ³n:</strong> Modalidades (llave en mano, administraciÃ³n delegada, etc.) y riesgos asociados.</li>
          <li><strong>Plan de permisos:</strong> Ruta crÃ­tica de trÃ¡mites, responsables y tiempos estimados.</li>
          <li><strong>Cronograma y costos preliminares:</strong> Hitos de preinversiÃ³n y presupuesto de factibilidades y diseÃ±os.</li>
          <li><strong>Dossier para inversiÃ³n:</strong> Paquete ejecutivo para directorio/comitÃ© con recomendaciones.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables tÃ­picos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Informe de viabilidad y factibilidad</li>
          <li>Matriz normativa y ruta de permisos</li>
          <li>EstimaciÃ³n CAPEX/OPEX y escenarios</li>
          <li>Cronograma preliminar del proyecto</li>
          <li>Dossier ejecutivo para decisiÃ³n de inversiÃ³n</li>
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

