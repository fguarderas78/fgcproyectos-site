import Image from "next/image";

export const metadata = { title: "Galería de Proyectos | FGC Proyectos" };

const images = [
  { src: "/galeria/obra1.jpg", alt: "Obra 1", caption: "Proyecto comercial — Obra 1" },
  { src: "/galeria/obra2.jpg", alt: "Obra 2", caption: "Proyecto industrial — Obra 2" },
  { src: "/galeria/obra3.jpg", alt: "Obra 3", caption: "Arquitectura — Obra 3" },
  { src: "/galeria/obra4.jpg", alt: "Obra 4", caption: "Infraestructura — Obra 4" },
];

export default function Page() {
  return (
    <section className="bg-white text-slate-900">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#123147]">Galería de Proyectos</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Muestras de proyectos en los que hemos participado. Pronto añadiremos más obras y fichas técnicas.
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <li
              key={img.src}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={img.src === "/galeria/obra1.jpg"}
                />
              </div>
              <div className="p-3 text-sm text-slate-700">{img.caption}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
