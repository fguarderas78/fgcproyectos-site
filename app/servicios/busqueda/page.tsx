ï»¿export const metadata = { title: "BÃºsqueda e InspecciÃ³n de Locales y Terrenos | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de tÃ­tulo */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">BÃºsqueda e InspecciÃ³n de Locales y Terrenos</h1>
          <p className="mt-2 text-white/80 max-w-3xl">SelecciÃ³n tÃ©cnica y normativa de predios o locales alineados al plan del cliente.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Requisitos del cliente:</strong> UbicaciÃ³n, Ã¡rea, accesos, servicios, restricciones y presupuesto objetivo.</li>
          <li><strong>BÃºsqueda y shortlist:</strong> ProspecciÃ³n del mercado, filtros y lista corta comparativa.</li>
          <li><strong>EvaluaciÃ³n tÃ©cnica:</strong> Estado del inmueble, estructura, instalaciones y riesgos fÃ­sicos.</li>
          <li><strong>Uso de suelo y compatibilidad:</strong> ValidaciÃ³n normativa, condicionantes y limitaciones de proyecto.</li>
          <li><strong>Costos de adecuaciÃ³n:</strong> EstimaciÃ³n CAPEX de adecuaciones y tiempos de intervenciÃ³n.</li>
          <li><strong>Due diligence y negociaciÃ³n:</strong> VerificaciÃ³n documental, riesgos legales y soporte en negociaciÃ³n.</li>
          <li><strong>Plan de implementaciÃ³n:</strong> Etapas, permisos y cronograma de obras/traslados.</li>
          <li><strong>RecomendaciÃ³n final:</strong> Informe con calificaciÃ³n y justificaciÃ³n tÃ©cnicaâ€“econÃ³mica.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables tÃ­picos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Matriz de requisitos y shortlist</li>
          <li>Informes de inspecciÃ³n y compatibilidad normativa</li>
          <li>EstimaciÃ³n CAPEX de adecuaciones</li>
          <li>AnÃ¡lisis de riesgos y soporte de negociaciÃ³n</li>
          <li>Informe de recomendaciÃ³n final</li>
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

