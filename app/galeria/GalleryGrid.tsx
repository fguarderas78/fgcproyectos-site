"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Teclas: Esc, ←, →
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <>
      {/* GRID */}
      <ul className="mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <li
            key={src}
            className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm cursor-pointer group"
            onClick={() => openAt(i)}
            aria-label="Abrir imagen"
            role="button"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={src}
                alt="Imagen de galería"
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={i < 4}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen grande */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={images[index]}
                alt="Imagen ampliada"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Controles */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-full bg-white text-slate-800 shadow px-3 py-2 text-sm font-medium hover:bg-slate-100"
            >
              ✕
            </button>

            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-slate-900 shadow px-3 py-2 text-base font-semibold hover:bg-white"
            >
              ‹
            </button>

            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-slate-900 shadow px-3 py-2 text-base font-semibold hover:bg-white"
            >
              ›
            </button>

            {/* Indicador */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 text-white px-3 py-1 text-xs">
              {index + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
