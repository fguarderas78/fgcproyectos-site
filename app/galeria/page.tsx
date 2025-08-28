import fs from "fs/promises";
import path from "path";
import GalleryGrid from "./GalleryGrid";

type ImgEntry = { src: string; mtimeMs: number };

async function getImages(): Promise<ImgEntry[]> {
  const dir = path.join(process.cwd(), "public", "galeria");
  try {
    const files = await fs.readdir(dir);
    const imageFiles = files.filter((f) =>
      /\.(png|jpe?g|gif|webp|avif|bmp|svg)$/i.test(f)
    );

    // Ordenar por fecha de modificación real del archivo (más reciente primero)
    const entries: ImgEntry[] = [];
    for (const f of imageFiles) {
      const full = path.join(dir, f);
      const st = await fs.stat(full).catch(() => null);
      if (st && st.isFile()) {
        entries.push({ src: `/galeria/${f}`, mtimeMs: st.mtimeMs });
      }
    }
    entries.sort((a, b) => b.mtimeMs - a.mtimeMs);
    return entries;
  } catch {
    return [];
  }
}

export const dynamic = "force-dynamic";

export default async function GaleriaPage() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-white">
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-navy">
          Galería
        </h1>

        {images.length === 0 ? (
          <p className="mt-10 text-slate-600">No hay imágenes aún.</p>
        ) : (
          <GalleryGrid images={images.map((e) => e.src)} />
        )}
      </div>
    </main>
  );
}
