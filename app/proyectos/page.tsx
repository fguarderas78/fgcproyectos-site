export const metadata = { title: "Proyectos | FGC Proyectos" };

const proyectos = [
  { title: "Proyecto comercial", desc: "Dirección, planificación y control." },
  { title: "Proyecto industrial", desc: "Ingeniería y gerencia de construcción." },
  { title: "Proyecto inmobiliario", desc: "Diseño y coordinación técnica." },
];

export default function Page() {
  return (
    <section className="bg-white text-slate-900">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#123147]">Proyectos</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Selección de proyectos representativos. Próximamente añadiremos fichas técnicas y galerías detalladas.
        </p>

        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {proyectos.map((p) => (
            <li key={p.title} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-slate-700">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}