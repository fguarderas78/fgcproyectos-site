"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1 hover:underline"
      >
        Servicios
        <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden className="opacity-80">
          <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 pt-2">
          <div
            className="min-w-[360px] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
            role="menu"
            aria-label="Servicios"
          >
            <ul className="grid grid-cols-1 gap-1 text-slate-800">
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/construccion"    onClick={() => setOpen(false)}>Construcción de Obras</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/gerencia"        onClick={() => setOpen(false)}>Gerencia de Proyectos de Construcción</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/mantenimiento"   onClick={() => setOpen(false)}>Mantenimiento Preventivo de Infraestructuras</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/ia"              onClick={() => setOpen(false)}>Servicios Potenciados con Inteligencia Artificial</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/asesoria"        onClick={() => setOpen(false)}>Asesoría en Desarrollo de Proyectos</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/ito"             onClick={() => setOpen(false)}>Inspección Técnica de Obras (ITO)</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/busqueda"        onClick={() => setOpen(false)}>Búsqueda e Inspección de Locales y Terrenos</Link></li>
              <li><Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" href="/servicios/complementarios" onClick={() => setOpen(false)}>Servicios Complementarios para Proyectos Inmobiliarios</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
