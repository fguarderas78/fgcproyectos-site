export const metadata = { title: "Quiénes somos | FGC Proyectos" };

export default function Page() {
  return (
    <section className="bg-white text-slate-800">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">Quiénes somos</h1>

        <p className="mt-5 max-w-4xl text-lg">
          FGC Proyectos ofrece <span className="font-medium text-brand-navy">soluciones integrales en construcción, diseño y gerencia de proyectos</span>,
          para clientes empresariales y particulares. Abarcamos desde pre–proyecto (normativa, permisos, factibilidades)
          hasta ejecución, control y cierre técnico–administrativo.
        </p>
        <p className="mt-4 max-w-4xl text-base md:text-lg text-slate-700">
          Con <span className="font-medium text-brand-navy">más de 43 años de experiencia</span> en proyectos públicos y privados —dentro y fuera de Guayaquil—,
          nuestro trabajo se sostiene en transparencia, cumplimiento y resultados.
        </p>

        <div className="mt-8">
          <a href="/contacto" className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition">
            Contáctenos
          </a>
        </div>
      </div>
    </section>
  );
}
