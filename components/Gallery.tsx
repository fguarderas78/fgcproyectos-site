'use client';

import Image from "next/image";

export type GalleryItem = { src: string; alt?: string; caption?: string };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {items.map((img) => (
        <li
          key={img.src}
          className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          {img.caption && <div className="p-3 text-sm text-slate-700">{img.caption}</div>}
        </li>
      ))}
    </ul>
  );
}