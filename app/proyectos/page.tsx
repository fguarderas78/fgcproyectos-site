ï»¿export const metadata = { title: "Proyectos | FGC Proyectos" };

const proyectos = [
  { title: "Proyecto 1", img: "/proyectos/proyecto1.jpg", desc: "DescripciÃ³n breve del proyecto 1." },
  { title: "Proyecto 2", img: "/proyectos/proyecto2.jpg", desc: "DescripciÃ³n breve del proyecto 2." },
  { title: "Proyecto 3", img: "/proyectos/proyecto3.jpg", desc: "DescripciÃ³n breve del proyecto 3." },
  { title: "Proyecto 4", img: "/proyectos/proyecto4.jpg", desc: "DescripciÃ³n breve del proyecto 4." },
  { title: "Proyecto 5", img: "/proyectos/proyecto5.jpg", desc: "DescripciÃ³n breve del proyecto 5." },
  { title: "Proyecto 6", img: "/proyectos/proyecto6.jpg", desc: "DescripciÃ³n breve del proyecto 6." }
];

export default function Page() {
  return (
    <section className="bg-white text-slate-800">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">Proyectos</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Algunos trabajos representativos. Consulte la <a href="/galeria" className="underline text-brand-navy">GalerÃ­a de Proyectos</a> para mÃ¡s fotografÃ­as.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition">
              <div className="aspect-[16/10] bg-slate-100">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
