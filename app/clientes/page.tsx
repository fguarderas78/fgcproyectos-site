export const metadata = { title: "Clientes | FGC Proyectos" };

type Cliente = {
  name: string;
  href?: string;
  logo: string;   // usa rutas locales en /public/clientes o URLs públicas
  desc?: string;
};

const clientes: Cliente[] = [
  { name: "AGRIPAC", href: "https://agripac.com.ec/", logo: "/clientes/agripac.png", desc: "Insumos agroindustriales." },
  { name: "CALBAQ", href: "https://calbaq.com/", logo: "/clientes/calbaq.png", desc: "Marcas multicategoría." },
  { name: "BRENNTAG", href: "https://www.brenntag.com/", logo: "/clientes/brenntag.png", desc: "Distribución de químicos e ingredientes." },
  { name: "PAPELERA NACIONAL", href: "https://papeleranacional.com/", logo: "/clientes/papeleranacional.png", desc: "Papel kraft y empaque." },
  { name: "FIDUNEGOCIOS", href: "https://fidunegocios.com/", logo: "/clientes/fidunegocios.png", desc: "Servicios fiduciarios." },
  { name: "GRUPO CARAL", href: "https://www.grupocaral.com.pe/", logo: "/clientes/caral.png", desc: "Desarrollo inmobiliario." },
  { name: "SUPAN", href: "https://www.supancorp.com/", logo: "/clientes/supan.png", desc: "Alimentos y panificación." },
  { name: "CAPEBSA", href: "#", logo: "/clientes/capebsa.png", desc: "Sector industrial/servicios." },
  { name: "IDE", href: "https://www.ide.edu.ec/", logo: "/clientes/ide.png", desc: "Instituto de Dirección de Empresas." },
];

export default function Page() {
  return (
    <section className="bg-white text-slate-900">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#123147]">Clientes</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Trabajamos con empresas líderes del sector industrial, comercial y de servicios. A continuación, una
          selección de clientes con los que hemos colaborado en Gerencia, Consultoría, Diseño y Construcción.
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clientes.map((c) => (
            <li
              key={c.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition"
            >
              <a
                href={c.href || "#"}
                target={c.href ? "_blank" : undefined}
                rel={c.href ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-28 flex items-center justify-center overflow-hidden">
                  <img
                    src={c.logo}
                    alt={`Logo ${c.name}`}
                    className="max-h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900">{c.name}</p>
                  {c.desc && <p className="text-sm text-slate-600">{c.desc}</p>}
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


