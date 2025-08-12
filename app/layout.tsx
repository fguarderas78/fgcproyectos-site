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

            {/* CTA derecha */}
            <div className="justify-self-end">
              <Link
                href="/contacto"
                className="inline-block rounded-2xl bg-[#123147] text-white px-4 py-2 text-sm md:text-base hover:opacity-90 transition"
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER con texto oscuro */}
        <footer className="mt-24 border-t border-black/5 bg-white text-slate-900">
          <div className="container py-10 text-sm">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="font-semibold">FGC Proyectos</p>
                <p>Soluciones integrales en construcción, diseño y gerencia.</p>
              </div>
              <div>
                <p className="font-semibold">Contacto</p>
                <p>info@fgcproyectos.com</p>
                <p>+593 4 225 0482</p>
                <p>C.C. Plaza Siete y Medio Of. 7 (Km. 7.5 Vía a Daule)</p>
              </div>
              <div>
                <p className="font-semibold">Navegación</p>
                <ul className="space-y-1">
                  <li><Link href="/quienes-somos" className="hover:underline">Quiénes somos</Link></li>
                  <li><Link href="/servicios" className="hover:underline">Servicios</Link></li>
                  <li><Link href="/clientes" className="hover:underline">Clientes</Link></li>
                  <li><Link href="/galeria" className="hover:underline">Galería</Link></li>
                  <li><Link href="/proyectos" className="hover:underline">Proyectos</Link></li>
                  <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
                </ul>
              </div>
            </div>
            <p className="mt-6">© {new Date().getFullYear()} FGC Proyectos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
