export const metadata = { title: "Servicios | FGC Proyectos" };

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Nuestros servicios</h1>
      <p className="mt-4 max-w-3xl text-slate-200">
        Soluciones integrales en gerencia de proyectos, asesorías y diseño técnico. Incorporamos
        herramientas y plataformas con Inteligencia Artificial para acelerar decisiones y controlar
        costos, plazos y calidad.
      </p>

      {/* Construcción de Obras */}
      <div id="construccion" className="mt-10">
        <h2 className="text-2xl font-semibold">Construcción de Obras</h2>
        <ul className="mt-3 list-disc ml-6 space-y-1 text-slate-300">
          <li>Planificación (cronograma maestro, frentes de trabajo y ruta crítica).</li>
          <li>Presupuesto, contratos, compras y logística de materiales/equipos.</li>
          <li>Seguridad y salud ocupacional (SST) y control de calidad (QA/QC).</li>
          <li>Permisos, licencias y coordinación con fiscalización/municipios.</li>
          <li>Supervisión de obra, control de cambios y reportes de avance.</li>
          <li>Recepción, cierre técnico/administrativo y postventa/mantenimiento.</li>
        </ul>
      </div>

      {/* Gerencia de Proyectos */}
      <div id="gerencia" className="mt-10">
        <h2 className="text-2xl font-semibold">Gerencia de Proyectos de Construcción</h2>
        <p className="mt-2 text-slate-300">
          Gestión integral de alcance, costos, tiempos y riesgos; administración de contratistas y proveedores.
        </p>
      </div>

      {/* Mantenimiento Preventivo */}
      <div id="mantenimiento" className="mt-10">
        <h2 className="text-2xl font-semibold">Mantenimiento Preventivo de Infraestructuras</h2>
        <p className="mt-2 text-slate-300">
          Planes de mantenimiento, priorización técnico�?"presupuestaria y ejecución con métricas.
        </p>
      </div>

      {/* Inspección Técnica de Obras */}
      <div id="ito" className="mt-10">
        <h2 className="text-2xl font-semibold">Inspección Técnica de Obras (ITO)</h2>
        <p className="mt-2 text-slate-300">
          Informes de estado, hallazgos y recomendaciones con evidencia fotográfica y trazabilidad.
        </p>
      </div>

      {/* Búsqueda e Inspección */}
      <div id="busqueda" className="mt-10">
        <h2 className="text-2xl font-semibold">Búsqueda e Inspección de Locales y Terrenos</h2>
        <p className="mt-2 text-slate-300">
          Análisis de usos de suelo, normas y requisitos legales; evaluación técnica del estado del inmueble.
        </p>
      </div>

      {/* Complementarios */}
      <div id="complementarios" className="mt-10">
        <h2 className="text-2xl font-semibold">Servicios Complementarios para Proyectos Inmobiliarios</h2>
        <ul className="list-disc ml-6 mt-2 text-slate-300 space-y-1">
          <li>Plan comercial y marketing.</li>
          <li>Gestión de ventas, crédito y cobranza.</li>
          <li>Posventa y gestión de cambios.</li>
          <li>Paisajismo y mantenimiento de áreas verdes.</li>
        </ul>
      </div>

      {/* Asesoría en Desarrollo */}
      <div id="asesoria" className="mt-10">
        <h2 className="text-2xl font-semibold">Asesoría en Desarrollo de Proyectos</h2>
        <p className="mt-2 text-slate-300">
          Viabilidad y factibilidad técnica�?"económica, revisión normativa, análisis de proveedores y documentación.
        </p>
      </div>

      {/* IA */}
      <div id="ia" className="mt-10">
        <h2 className="text-2xl font-semibold">Servicios potenciados con IA</h2>
        <ul className="mt-3 list-disc ml-6 space-y-1 text-slate-300">
          <li>Estimaciones de costo/tiempo más rápidas y trazables.</li>
          <li>Alertas tempranas de riesgos de retraso y sobrecosto.</li>
          <li>Lectura de normativas, permisos y compatibilidad de uso de suelo.</li>
          <li>Control de avance con evidencia y reportes automáticos.</li>
        </ul>
      </div>
    </div>
  );
}
