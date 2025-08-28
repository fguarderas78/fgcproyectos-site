export const metadata = { title: "Búsqueda e Inspección de Locales y Terrenos | FGC Proyectos" };

export default function Page() {
  return (
    <section className="bg-white text-slate-900">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#123147]">Búsqueda e Inspección de Locales y Terrenos</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Identificación de ubicaciones, visitas técnicas, evaluación de normativa y viabilidad constructiva.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-semibold">Qué incluye</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              <li>Preselección según requerimientos del cliente.</li>
              <li>Inspección técnica y fotográfica.</li>
              <li>Reporte con recomendaciones.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Beneficios</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              <li>Reducción de riesgos y tiempos de decisión.</li>
              <li>Visibilidad de costos y restricciones.</li>
              <li>Mayor certidumbre de ejecución.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}