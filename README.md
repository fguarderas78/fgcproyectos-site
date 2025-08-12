# FGC Proyectos - Sitio Web (Next.js 14 + App Router + Tailwind)

## Desarrollo local
```bash
npm install
npm run dev
```
Visita http://localhost:3000

## Deploy en Vercel
1. Sube este repo a GitHub.
2. En Vercel: New Project → importa el repo → Framework Next.js → Deploy.
3. Agrega los dominios `fgcproyectos.com` y `www.fgcproyectos.com` en Settings → Domains.
4. En Squarespace (DNS):
   - A (apex `fgcproyectos.com`) → 76.76.21.21
   - CNAME (`www`) → cname.vercel-dns.com

## Personalización
- Colores en `tailwind.config.js`.
- Contenidos en `/app/*`.
- Reemplaza `/public/logo.png` por tu logo en alta resolución.
