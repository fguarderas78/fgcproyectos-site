export const metadata = { title: "Servicios Complementarios para Proyectos Inmobiliarios | FGC Proyectos" };

export default function Page() {
  return (
    <section className="bg-white text-slate-900">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#123147]">Servicios Complementarios</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Apoyo integral en etapas previas y posteriores a obra para asegurar continuidad operativa.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-semibold">Servicios</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              <li>Levantamientos, topografía y catastros.</li>
              <li>Plan de mantenimiento y manuales.</li>
              <li>Due diligence técnico.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Resultados</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              <li>Documentación completa y trazable.</li>
              <li>Mejor control de costos y plazos.</li>
              <li>Transición ordenada a operación.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}