# 🚀 Setup Instructions - AC Producciones

## Pre-requisitos

- Node.js 18+ (ya instalado)
- Firebase Account (ya creada)
- Google AdSense Account (opcional)
- Vercel Account (para deployment)

---

## 1️⃣ Configuración Local

### 1.1 Variables de Entorno

Copia el archivo `.env.local.example` a `.env.local`:

```bash
cp .env.local.example .env.local
```

Las variables ya están precargadas con tu Firebase config. Solo necesitas actualizar:

- `FIREBASE_PRIVATE_KEY` - Obtén tu clave privada del Firebase Console
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` - Tu Google AdSense Publisher ID (si tienes)

### 1.2 Instalar Dependencias

```bash
pnpm install
```

### 1.3 Inicializar Base de Datos (Firestore)

Una vez que tengas `.env.local` configurado, corre este comando para subir los datos iniciales:

```bash
curl -X POST http://localhost:3000/api/seed
```

O en Vercel (después del deployment):

```bash
curl -X POST https://tu-dominio.vercel.app/api/seed
```

---

## 2️⃣ Admin Dashboard

El cliente puede acceder a `/admin` para:

- ✅ Ver todos los proyectos
- ✅ Crear nuevo proyecto
- ✅ Editar proyecto existente
- ✅ Eliminar proyecto
- ✅ Subir imágenes a Firebase Storage

**Credenciales Admin:**
- Email: `admin@acproducciones.com`
- Password: La que configuraste en Firebase

### Cambiar contraseña admin

En Firebase Console → Authentication → Usuarios → Tu usuario admin → Menú de 3 puntos → Editar contraseña

---

## 3️⃣ Google Analytics

GA4 está configurado automáticamente con ID: `G-7JH6J57F1S`

Accede en: https://analytics.google.com

**Eventos rastreados automáticamente:**
- Page views
- Scroll depth
- User engagement

---

## 4️⃣ Google AdSense

### Si no tienes AdSense aún:

1. Ve a https://www.google.com/adsense
2. Aplica con tu sitio
3. Google te aprobará en 1-2 semanas
4. Una vez aprobado, obtén tu Publisher ID (`ca-pub-xxx`)

### Habilitar Ads en el sitio:

1. Actualiza `NEXT_PUBLIC_ADSENSE_CLIENT_ID` en `.env.local`
2. Actualiza el valor en `src/app/layout.tsx` en el script de AdSense
3. Actualiza el valor en `src/components/AdSense.tsx`
4. Redeploy en Vercel

---

## 5️⃣ Deployment en Vercel

### 5.1 Conectar GitHub a Vercel

1. Ve a https://vercel.com
2. Selecciona tu repo `acproducciones`
3. En "Environment Variables" agrega:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`

### 5.2 Desplegar

```bash
git add .
git commit -m "feat: add Firebase CMS, Analytics, and AdSense"
git push origin master
```

Vercel automáticamente:
- ✅ Construye el sitio
- ✅ Corre los tests (si existen)
- ✅ Deploya a producción

### 5.3 Inicializar BD en Producción

Una vez que Vercel haya desplegado, ejecuta:

```bash
curl -X POST https://tu-dominio.vercel.app/api/seed
```

---

## 6️⃣ Testing Local

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Start (producción local)
pnpm start
```

Visita:
- **Sitio:** http://localhost:3000
- **Admin:** http://localhost:3000/admin
- **Seed API:** http://localhost:3000/api/seed (POST)

---

## 7️⃣ Troubleshooting

### Error: "Firebase credentials not found"

Asegúrate que `.env.local` tiene todas las variables. Reinicia `pnpm dev`.

### Error: "Failed to seed data"

Verifica que:
1. Firestore está creada en Firebase Console
2. `FIREBASE_PRIVATE_KEY` está correctamente formateada (con `\n` para saltos de línea)
3. El usuario de Firebase tiene permisos en Firestore

### Admin dashboard no carga

- Verifica que estés logueado (email correcto)
- Revisa la consola del navegador (F12) para errores
- Limpia cookies/localStorage

---

## 📊 Próximos Pasos

1. **Monetización:** Activa Google AdSense
2. **SEO:** Mejora meta tags en `src/app/layout.tsx`
3. **Performance:** Optimiza imágenes en admin dashboard
4. **Backup:** Configura backups de Firestore

---

¿Preguntas? Contacta al equipo de desarrollo.
