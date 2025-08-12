export const metadata = { title: "Clientes | FGC Proyectos" };

type Cliente = { name: string; href?: string; local?: string; logo?: string; desc?: string; };

const clientes: Cliente[] = [
  // Con logos locales en /public/clientes/*.png (recomendado)
  { name: "BRENNTAG", href: "https://www.brenntag.com/", local: "/clientes/brenntag.png", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Brenntag_Logo_2022.svg", desc: "Distribución global de químicos e ingredientes." },
  { name: "CALBAQ", href: "https://calbaq.com/", local: "/clientes/calbaq.png", desc: "Fabricación, importación y distribución de marcas multicategoría." },
  { name: "FIDUNEGOCIOS", href: "https://fidunegocios.com/", local: "/clientes/fidunegocios.png", desc: "Servicios fiduciarios." },
  { name: "GRUPO CARAL", href: "https://www.grupocaral.com.pe/", local: "/clientes/caral.png", desc: "Desarrollo inmobiliario en la región." },
  { name: "SUPAN", href: "https://www.supancorp.com/", local: "/clientes/supan.png", desc: "Alimentos y panificación." },
  { name: "CAPEBSA", href: "#", local: "/clientes/capebsa.png", desc: "Empresa del sector industrial/servicios." },
  { name: "IDE – Instituto de Dirección de Empresas", href: "https://www.ide.edu.ec/", local: "/clientes/ide.png", desc: "Escuela de negocios (IDE Business School)." },

  // Con respaldo público si no hay PNG local
  { name: "AGRIPAC", href: "https://agripac.com.ec/", logo: "https://agripac.com.ec/wp-content/uploads/2022/06/agripac-logotipo-700x233-1.svg", desc: "Insumos agroindustriales (agrícola, pecuario y acuícola)." },
  { name: "PAPELERA NACIONAL", href: "https://papeleranacional.com/", logo: "https://papeleranacional.com/wp-content/uploads/2024/04/papelera-2.png", desc: "Papel kraft y soluciones de empaque." }
];

/* === Franja (marquesina) de logos === */
function LogosMarquee() {
  const logos = clientes.map(c => ({ src: c.local || c.logo, alt: c.name, href: c.href || "#" })).filter(l => !!l.src);
  if (!logos.length) return null;
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="marquee" aria-label="Clientes">
        <div className="marquee-track">
          <ul className="marquee-group">
            {logos.map((l) => (
              <li key={"a-" + l.alt} className="mx-6">
                <a href={l.href} target={l.href !== "#" ? "_blank" : undefined} rel={l.href !== "#" ? "noopener noreferrer" : undefined}>
                  <img src={l.src!} alt={l.alt} className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition" loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
          {/* Duplicado para loop continuo */}
          <ul className="marquee-group" aria-hidden="true">
            {logos.map((l) => (
              <li key={"b-" + l.alt} className="mx-6">
                <a href={l.href} target={l.href !== "#" ? "_blank" : undefined} rel={l.href !== "#" ? "noopener noreferrer" : undefined}>
                  <img src={l.src!} alt={l.alt} className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition" loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <section className="bg-white text-slate-800">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">Clientes</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Algunos de los clientes con los que hemos colaborado en proyectos públicos y privados.
        </p>

        <LogosMarquee />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {clientes.map((c) => (
            <li key={c.name} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
              <a href={c.href || "#"} target={c.href ? "_blank" : undefined} rel={c.href ? "noopener noreferrer" : undefined} className="flex items-center gap-4">
                {(c.local || c.logo) ? (
                  <img src={c.local || c.logo} alt={`Logo ${c.name}`} className="h-12 w-auto object-contain" loading="lazy" />
                ) : (
                  <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-semibold">
                    {c.name.split(" ").map(w => w[0]).join("").slice(0,3)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-900">{c.name}</p>
                  {c.desc ? <p className="text-sm text-slate-600">{c.desc}</p> : null}
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs text-slate-500">
          *Logos con fines referenciales. Podemos reemplazarlos por archivos oficiales/autorizados cuando nos los envíen.
        </p>
      </div>
    </section>
  );
}
