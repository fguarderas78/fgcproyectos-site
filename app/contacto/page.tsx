export const metadata = { title: "Contacto | FGC Proyectos" };

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contáctenos</h1>
      <p className="mt-2 text-slate-300">¿Quiere que seamos parte de su proyecto? Escríbanos.</p>

      <form className="mt-8 grid gap-4 max-w-xl">
        <input className="border rounded-xl px-4 py-3 bg-slate-900 border-white/10 text-white placeholder:text-slate-400" placeholder="Nombre" name="nombre" required />
        <input className="border rounded-xl px-4 py-3 bg-slate-900 border-white/10 text-white placeholder:text-slate-400" placeholder="Email" type="email" name="email" required />
        <input className="border rounded-xl px-4 py-3 bg-slate-900 border-white/10 text-white placeholder:text-slate-400" placeholder="Teléfono" name="telefono" />
        <textarea className="border rounded-xl px-4 py-3 bg-slate-900 border-white/10 text-white placeholder:text-slate-400" placeholder="Mensaje" rows={6} name="mensaje"></textarea>
        <button className="btn-primary w-fit" type="submit">Enviar</button>
      </form>

      <div className="mt-10 text-sm text-slate-300">
        <p><strong>Correo:</strong> info@fgcproyectos.com</p>
        <p><strong>Teléfono:</strong> +593 4 225 0482</p>
        <p><strong>Dirección:</strong> C.C. Plaza Siete y Medio Of. 7 (Km. 7.5 Vía a Daule)</p>
      </div>
    </div>
  );
}
