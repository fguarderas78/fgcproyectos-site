import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import path from "path";
import fs from "fs/promises";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ ok: false, error: "No se recibieron archivos." }, { status: 400 });
    }

    // Carpeta de destino dentro de /public
    const uploadDir = path.join(process.cwd(), "public", "galeria");

    // Crea la carpeta si no existe
    await fs.mkdir(uploadDir, { recursive: true });

    const saved: string[] = [];

    for (const file of files) {
      // Validación básica de tipo (opcional: agrega más si quieres)
      if (!file.type.startsWith("image/")) {
        continue; // ignora no-imágenes
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Evita choques de nombre: prefijo con timestamp
      const safeName = file.name.replace(/[^\w.\-]/g, "_");
      const filename = `${Date.now()}_${safeName}`;

      const filepath = path.join(uploadDir, filename);
      await fs.writeFile(filepath, buffer);
      saved.push(`/galeria/${filename}`);
    }

    // Revalida la página de galería para que aparezcan las nuevas imágenes
    revalidatePath("/galeria");

    return NextResponse.json({ ok: true, saved });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json({ ok: false, error: err?.message ?? "Error subiendo archivo." }, { status: 500 });
  }
}