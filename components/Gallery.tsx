"use client";

import { useEffect, useState } from "react";

type Img = { src: string; alt: string; caption?: string };

function Thumb({ img, onOpen }: { img: Img; onOpen: () => void }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className="aspect-[4/3] rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-sm">
        Foto pronto
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block overflow-hidden rounded-xl border border-slate-200 bg-white"
      aria-label={img.alt}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="h-full w-full object-cover transition group-hover:scale-[1.02]"
        loading="lazy"
        onError={() => setBroken(true)}
      />
    </button>
  );
}

export default function Gallery({ images }: { images: Img[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={img.src} className="aspect-[4/3]">
            <Thumb img={img} onOpen={() => openAt(i)} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[idx].src}
              alt={images[idx].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            {!!images[idx].caption && (
              <div className="mt-3 text-center text-slate-200">{images[idx].caption}</div>
            )}

            {/* Controles */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 text-slate-900 px-3 py-1 shadow hover:bg-white"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={prev}
              className="absolute inset-y-0 left-0 my-auto h-12 w-12 rounded-full bg-white/90 text-slate-900 shadow hover:bg-white"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute inset-y-0 right-0 my-auto h-12 w-12 rounded-full bg-white/90 text-slate-900 shadow hover:bg-white"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
