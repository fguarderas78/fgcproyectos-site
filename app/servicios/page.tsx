export const metadata = { title: "Servicios | FGC Proyectos" };

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Nuestros servicios</h1>
      <p className="mt-4 max-w-3xl text-slate-200">
        Soluciones integrales en gerencia de proyectos, asesorÃ­as y diseÃ±o tÃ©cnico. Incorporamos
        herramientas y plataformas con Inteligencia Artificial para acelerar decisiones y controlar
        costos, plazos y calidad.
      </p>

      {/* ConstrucciÃ³n de Obras */}
      <div id="construccion" className="mt-10">
        <h2 className="text-2xl font-semibold">ConstrucciÃ³n de Obras</h2>
        <ul className="mt-3 list-disc ml-6 space-y-1 text-slate-300">
          <li>PlanificaciÃ³n (cronograma maestro, frentes de trabajo y ruta crÃ­tica).</li>
          <li>Presupuesto, contratos, compras y logÃ­stica de materiales/equipos.</li>
          <li>Seguridad y salud ocupacional (SST) y control de calidad (QA/QC).</li>
          <li>Permisos, licencias y coordinaciÃ³n con fiscalizaciÃ³n/municipios.</li>
          <li>SupervisiÃ³n de obra, control de cambios y reportes de avance.</li>
          <li>RecepciÃ³n, cierre tÃ©cnico/administrativo y postventa/mantenimiento.</li>
        </ul>
      </div>

      {/* Gerencia de Proyectos */}
      <div id="gerencia" className="mt-10">
        <h2 className="text-2xl font-semibold">Gerencia de Proyectos de ConstrucciÃ³n</h2>
        <p className="mt-2 text-slate-300">
          GestiÃ³n integral de alcance, costos, tiempos y riesgos; administraciÃ³n de contratistas y proveedores.
        </p>
      </div>

      {/* Mantenimiento Preventivo */}
      <div id="mantenimiento" className="mt-10">
        <h2 className="text-2xl font-semibold">Mantenimiento Preventivo de Infraestructuras</h2>
        <p className="mt-2 text-slate-300">
          Planes de mantenimiento, priorizaciÃ³n tÃ©cnicoâ€“presupuestaria y ejecuciÃ³n con mÃ©tricas.
        </p>
      </div>

      {/* InspecciÃ³n TÃ©cnica de Obras */}
      <div id="ito" className="mt-10">
        <h2 className="text-2xl font-semibold">InspecciÃ³n TÃ©cnica de Obras (ITO)</h2>
        <p className="mt-2 text-slate-300">
          Informes de estado, hallazgos y recomendaciones con evidencia fotogrÃ¡fica y trazabilidad.
        </p>
      </div>

      {/* BÃºsqueda e InspecciÃ³n */}
      <div id="busqueda" className="mt-10">
        <h2 className="text-2xl font-semibold">BÃºsqueda e InspecciÃ³n de Locales y Terrenos</h2>
        <p className="mt-2 text-slate-300">
          AnÃ¡lisis de usos de suelo, normas y requisitos legales; evaluaciÃ³n tÃ©cnica del estado del inmueble.
        </p>
      </div>

      {/* Complementarios */}
      <div id="complementarios" className="mt-10">
        <h2 className="text-2xl font-semibold">Servicios Complementarios para Proyectos Inmobiliarios</h2>
        <ul className="list-disc ml-6 mt-2 text-slate-300 space-y-1">
          <li>Plan comercial y marketing.</li>
          <li>GestiÃ³n de ventas, crÃ©dito y cobranza.</li>
          <li>Posventa y gestiÃ³n de cambios.</li>
          <li>Paisajismo y mantenimiento de Ã¡reas verdes.</li>
        </ul>
      </div>

      {/* AsesorÃ­a en Desarrollo */}
      <div id="asesoria" className="mt-10">
        <h2 className="text-2xl font-semibold">AsesorÃ­a en Desarrollo de Proyectos</h2>
        <p className="mt-2 text-slate-300">
          Viabilidad y factibilidad tÃ©cnicaâ€“econÃ³mica, revisiÃ³n normativa, anÃ¡lisis de proveedores y documentaciÃ³n.
        </p>
      </div>

      {/* IA */}
      <div id="ia" className="mt-10">
        <h2 className="text-2xl font-semibold">Servicios potenciados con IA</h2>
        <ul className="mt-3 list-disc ml-6 space-y-1 text-slate-300">
          <li>Estimaciones de costo/tiempo mÃ¡s rÃ¡pidas y trazables.</li>
          <li>Alertas tempranas de riesgos de retraso y sobrecosto.</li>
          <li>Lectura de normativas, permisos y compatibilidad de uso de suelo.</li>
          <li>Control de avance con evidencia y reportes automÃ¡ticos.</li>
        </ul>
      </div>
    </div>
  );
}
