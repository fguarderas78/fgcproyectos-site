export const metadata = { title: "Asesoría en Desarrollo de Proyectos | FGC Proyectos" };

export default function Page() {
  return (
    <section className="bg-white text-slate-900">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#123147]">Asesoría en Desarrollo de Proyectos</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Estudios de factibilidad, normativa y permisos; especificaciones técnicas y soporte para decisiones de inversión.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-semibold">Alcance</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              <li>Factibilidad técnica–económica.</li>
              <li>Levantamiento de requisitos y restricciones.</li>
              <li>Carpetas para permisos y licencias.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Entregables</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              <li>Informe ejecutivo y matriz de riesgos.</li>
              <li>Plan de trabajo y cronograma base.</li>
              <li>Memorias y especificaciones técnicas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}