export const metadata = { title: "Servicios Complementarios para Proyectos Inmobiliarios | FGC Proyectos" };

export default function Page() {
  return (
    <section>
      {/* Franja azul de título */}
      <div className="bg-brand-navy text-white">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Servicios Complementarios para Proyectos Inmobiliarios</h1>
          <p className="mt-2 text-white/80 max-w-3xl">Soporte comercial y posventa para cerrar el ciclo del proyecto con clientes satisfechos.</p>
        </div>
      </div>

      {/* Contenido en blanco */}
      <div className="bg-white">
        <div className="container py-10 text-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy">Alcance del servicio</h2>
          <ul className="mt-4 list-disc ml-6 space-y-2">
          <li><strong>Plan comercial y marketing:</strong> Posicionamiento, canales, pauta y calendario de lanzamientos.</li>
          <li><strong>Branding del proyecto:</strong> Nombre, identidad visual, piezas y aplicación en sala de ventas.</li>
          <li><strong>Gestión de ventas y CRM:</strong> Embudo, seguimiento de leads, contratos y reportería por etapas.</li>
          <li><strong>Atención al cliente y posventa:</strong> Canales de contacto, gestión de cambios y garantías.</li>
          <li><strong>Crédito y cobranza:</strong> Políticas de evaluación, gestión de documentos y cobro.</li>
          <li><strong>Reportes a stakeholders:</strong> Indicadores comerciales y financieros para directorio/inversores.</li>
          <li><strong>Paisajismo y áreas verdes:</strong> Diseño, ejecución y mantenimiento de espacios comunes.</li>
          <li><strong>Mantenimiento post–entrega:</strong> Planes de cuidado inicial y manuales para propietarios.</li>
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">Entregables típicos</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
          <li>Plan comercial/marketing y cronograma</li>
          <li>Manual de marca y piezas base</li>
          <li>Reportes de ventas (CRM) y KPIs</li>
          <li>Plan de posventa y gestión de cambios</li>
          <li>Plan de paisajismo/mantenimiento</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-navy">¿Por qué con FGC?</h3>
              <ul className="mt-3 list-disc ml-6 space-y-2">
                <li>Metodología, trazabilidad y reportes claros para la toma de decisiones.</li>
                <li>Equipo multidisciplinario con más de 43 años de experiencia acumulada.</li>
                <li>Integración de herramientas digitales e IA cuando aporta valor real.</li>
                <li>Enfoque en seguridad, calidad, plazo y costo — sin sorpresas.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://wa.me/=Hola%2c+me+interesa+agendar+una+reunion+con+FGC+Proyectos." target="_blank" rel="noopener noreferrer" className="inline-block rounded-2xl border border-brand-navy/30 text-brand-navy px-5 py-3 font-medium hover:bg-brand-navy hover:text-white transition">
              Solicitar una reunión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

