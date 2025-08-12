'use client';

import { useState } from "react";

export default function ClientLogo({
  name,
  local,
  logo,
  className = "h-12 w-auto object-contain",
}: {
  name: string;
  local?: string;
  logo?: string;
  className?: string;
}) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 3);
  const first = local || logo || "";
  const [src, setSrc] = useState<string>(first);
  const [failed, setFailed] = useState<boolean>(!first);

  if (failed) {
    return (
      <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-semibold">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Logo ${name}`}
      className={className}
      loading="lazy"
      onError={() => {
        if (src !== logo && logo) setSrc(logo);
        else setFailed(true);
      }}
    />
  );
}
