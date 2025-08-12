'use client';

import { useState } from "react";

type Props = {
  name: string;
  src?: string;       // ruta local (/clientes/xxx.png) o URL
  href?: string;      // link a sitio del cliente (opcional)
  className?: string; // clases extra para el contenedor
};

export default function ClientLogo({ name, src, href, className }: Props) {
  const [error, setError] = useState(false);

  const initials =
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase() || "CL";

  const box = (
    <div className={`h-16 w-44 p-2 flex items-center justify-center bg-white rounded-xl border border-slate-100 ${className || ""}`}>
      {src && !error ? (
        <img
          src={src}
          alt={`Logo ${name}`}
          className="max-h-12 max-w-full object-contain"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-semibold">
          {initials}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
        {box}
      </a>
    );
  }

  return box;
}
