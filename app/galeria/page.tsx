ï»¿import Gallery from "../../components/Gallery";

export const metadata = { title: "GalerÃ­a de Proyectos | FGC Proyectos" };

const images = [
  { src: "/galeria/obra1.jpg", alt: "Obra 1", caption: "Proyecto comercial â€“ Obra 1" },
  { src: "/galeria/obra2.jpg", alt: "Obra 2", caption: "Proyecto industrial â€“ Obra 2" },
  { src: "/galeria/obra3.jpg", alt: "Obra 3", caption: "Arquitectura â€“ Obra 3" },
  { src: "/galeria/obra4.jpg", alt: "Obra 4", caption: "Infraestructura â€“ Obra 4" },
  { src: "/galeria/obra5.jpg", alt: "Obra 5", caption: "Retail â€“ Obra 5" },
  { src: "/galeria/obra6.jpg", alt: "Obra 6", caption: "Corporativo â€“ Obra 6" },
  { src: "/galeria/obra7.jpg", alt: "Obra 7", caption: "Residencial â€“ Obra 7" },
  { src: "/galeria/obra8.jpg", alt: "Obra 8", caption: "Comercial â€“ Obra 8" },
  { src: "/galeria/obra9.jpg", alt: "Obra 9", caption: "Industrial â€“ Obra 9" },
  { src: "/galeria/obra10.jpg", alt: "Obra 10", caption: "Arquitectura â€“ Obra 10" },
  { src: "/galeria/obra11.jpg", alt: "Obra 11", caption: "Infraestructura â€“ Obra 11" },
  { src: "/galeria/obra12.jpg", alt: "Obra 12", caption: "Corporativo â€“ Obra 12" },
];

export default function Page() {
  return (
    <section className="bg-white text-slate-800">
      <div className="container py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">GalerÃ­a de Proyectos</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Un vistazo a algunas obras y entregables. PrÃ³ximamente subiremos mÃ¡s fotografÃ­as y fichas tÃ©cnicas.
        </p>

        <div className="mt-8">
          <Gallery images={images} />
        </div>
      </div>
    </section>
  );
}
