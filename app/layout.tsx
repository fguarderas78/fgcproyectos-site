import "../styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServicesDropdown from "../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "FGC Proyectos | Construcción, Diseño y Gerencia",
  description:
    "Soluciones integrales en construcción, diseño y gerencia de proyectos para desarrollos residenciales, comerciales e industriales.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-slate-800">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
          <div className="container grid grid-cols-[1fr_auto_1fr] items-center py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="FGC Proyectos"
                width={112}
                height={112}
                priority
                className="h-10 w-auto md:h-12"
              />
              <span className="sr-only">FGC Proyectos</span>
            </Link>

            {/* Menú centrado */}
            <nav className="justify-self-center flex items-center gap-7 text-base md:text-lg">
              <Link href="/quienes-somos" className="hover:underline">Quiénes somos</Link>
              <ServicesDropdown />
              <Link href="/clientes" className="hover:underline">Clientes</Link>
              <Link href="/galeria" className="hover:underline">Galería</Link>
              <Link href="/proyectos" className="hover:underline">Proyectos</Link>
            </nav>

            {/* CTA derecha ⇒ abre WhatsApp */}
            <div className="justify-self-end">
              <a
                href="https://wa.me/593994352979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-2xl bg-[#123147] text-white px-4 py-2 text-sm md:text-base hover:opacity-90 transition"
                aria-label="Contactar por WhatsApp"
              >
                Contáctenos
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER (único) */}
        <footer className="mt-24 border-t border-black/5 bg-white text-slate-900">
          <div className="container py-6 text-center text-sm">
            © {new Date().getFullYear()} FGC Proyectos. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
