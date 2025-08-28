"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Cliente = {
  name: string;
  slug: string;
  logo: string;
};

export default function ClientsGrid({ clientes }: { clientes: Cliente[] }) {
  const [view, setView] = useState<"logos" | "tarjetas">("logos");

  return (
    <section className="mt-8">
      {/* Toggle de vista */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setView("logos")}
          className={`rounded-xl px-4 py-2 text-sm border ${
            view === "logos" ? "bg-slate-900 text-white" : "bg-white text-slate-900"
          }`}
        >
          Logos
        </button>
        <button
          onClick={() => setView("tarjetas")}
          className={`rounded-xl px-4 py-2 text-sm border ${
            view === "tarjetas" ? "bg-slate-900 text-white" : "bg-white text-slate-900"
          }`}
        >
          Tarjetas
        </button>
      </div>

      {/* Vista: LOGOS */}
      {view === "logos" && (
        <ul className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {clientes.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/proyectos/${c.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-4 hover:shadow transition"
                title={`Ver proyectos de ${c.name}`}
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain p-2 transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    priority
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Vista: TARJETAS (logo + nombre + CTA) */}
      {view === "tarjetas" && (
        <ul className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {clientes.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/proyectos/${c.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 flex-shrink-0">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      {c.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      Ver sus proyectos →
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
