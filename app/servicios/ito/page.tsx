ï»¿export const metadata = { title: "InspecciÃ³n TÃ©cnica de Obras (ITO) | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de tÃ­tulo */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">InspecciÃ³n TÃ©cnica de Obras (ITO)</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Control independiente de calidad, seguridad y avance con reportes verificables.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>DiagnÃ³stico inicial:</strong> Levantamiento de estado, revisiÃ³n de documentos y plan de inspecciones.</li>
          <li><strong>Control de especificaciones:</strong> VerificaciÃ³n de materiales, mÃ©todos y tolerancias conforme a planos y normas.</li>
          <li><strong>Avance fÃ­sico vs. programado:</strong> ComparaciÃ³n de mediciones con cronograma, hitos y valorizaciones.</li>
          <li><strong>No conformidades:</strong> Registro, seguimiento y cierre de NCs con acciones correctivas y evidencias.</li>
          <li><strong>Seguridad y ambiente:</strong> Observaciones de SST y ambiente con medidas de mitigaciÃ³n.</li>
          <li><strong>Valorizaciones y pagos:</strong> RevisiÃ³n de metrados, cÃ³mputos, valorizaciones y sustentos.</li>
          <li><strong>RecepciÃ³n y punch list:</strong> Listas de pendientes, pruebas, puesta en marcha y aceptaciÃ³n.</li>
          <li><strong>Informes tÃ©cnicos:</strong> Reportes periÃ³dicos con fotografÃ­as, hallazgos y recomendaciones.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables tÃ­picos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Informe diagnÃ³stico y plan de inspecciones</li>
          <li>Registros de verificaciÃ³n e ITPs</li>
          <li>Reportes de avance y valorizaciones revisadas</li>
          <li>Registro de no conformidades y punch list</li>
          <li>Informe final de recepciÃ³n</li>
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

