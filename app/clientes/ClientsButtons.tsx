"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Cliente = {
  name: string;
  slug: string;
  logo?: string;
};

type Props = { clientes: Cliente[] };

export default function ClientsButtons({ clientes }: Props) {
  const [order, setOrder] = useState<"az" | "za">("az");
  const [density, setDensity] = useState<"compact" | "comfy">("comfy");

  const sorted = useMemo(() => {
    const arr = [...clientes];
    arr.sort((a, b) =>
      order === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    return arr;
  }, [clientes, order]);

  // Estilos de densidad (no cambia el concepto, solo spacing/altura visual)
  const cardPadding = density === "compact" ? "p-4" : "p-6";
  const logoBoxH = density === "compact" ? "h-16" : "h-20";
  const titleSize = density === "compact" ? "text-sm md:text-base" : "text-base md:text-lg";

  return (
    <section className="mt-8">
      {/* Barrita de organización visual (opcional) */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2">
          <span className="text-sm text-slate-600">Orden</span>
          <div className="inline-flex rounded-xl border overflow-hidden">
            <button
              onClick={() => setOrder("az")}
              className={`px-3 py-1.5 text-sm ${order === "az" ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
              aria-pressed={order === "az"}
            >
              A–Z
            </button>
            <button
              onClick={() => setOrder("za")}
              className={`px-3 py-1.5 text-sm ${order === "za" ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
              aria-pressed={order === "za"}
            >
              Z–A
            </button>
          </div>
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="text-sm text-slate-600">Densidad</span>
          <div className="inline-flex rounded-xl border overflow-hidden">
            <button
              onClick={() => setDensity("compact")}
              className={`px-3 py-1.5 text-sm ${density === "compact" ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
              aria-pressed={density === "compact"}
            >
              Compacta
            </button>
            <button
              onClick={() => setDensity("comfy")}
              className={`px-3 py-1.5 text-sm ${density === "comfy" ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
              aria-pressed={density === "comfy"}
            >
              Cómoda
            </button>
          </div>
        </div>
      </div>

      {/* MISMO CONCEPTO: “BOTONES” de clientes */}
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/proyectos/${c.slug}`}
              className={`group block rounded-2xl border border-slate-200 bg-white ${cardPadding} shadow hover:shadow-md transition`}
              title={`Ver proyectos de ${c.name}`}
            >
              <div className="flex items-center gap-4">
                {/* Logo (si existe) o iniciales */}
                <div
                  className={`relative ${logoBoxH} w-24 flex-shrink-0 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center`}
                >
                  {c.logo ? (
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain p-2 transition-transform group-hover:scale-105"
                      sizes="96px"
                      priority
                    />
                  ) : (
                    <span className="text-slate-700 font-semibold text-lg">
                      {getInitials(c.name)}
                    </span>
                  )}
                </div>

                {/* Texto (sigue siendo “botón” con prioridad visual al nombre) */}
                <div className="min-w-0">
                  <h3 className={`${titleSize} font-semibold text-slate-900 truncate`}>
                    {c.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ver proyectos →
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
