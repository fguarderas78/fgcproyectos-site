import { NextResponse } from "next/server";

type Payload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    const nombre = (data.nombre || "").trim();
    const email = (data.email || "").trim();
    const telefono = (data.telefono || "").trim();
    const mensaje = (data.mensaje || "").trim();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // --- Enviar con Resend (requiere RESEND_API_KEY) ---
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO || "info@fgcproyectos.com";
    if (!RESEND_API_KEY) {
      // Si no hay API key, solo log y responder OK para pruebas locales
      console.log("[CONTACTO] Sin RESEND_API_KEY. Payload:", { nombre, email, telefono, mensaje });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FGC Proyectos <noreply@fgcproyectos.com>",
        to: [TO],
        reply_to: email,
        subject: `Nuevo contacto desde la web - ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email}\nTelÃ©fono: ${telefono}\n\nMensaje:\n${mensaje}`,
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("Resend error:", t);
      return NextResponse.json({ ok: false, error: "No se pudo enviar el correo." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Error de servidor." }, { status: 500 });
  }
}
