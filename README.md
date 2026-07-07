# Casa de Luz — Control de Cobros (versión en vivo)

Esta versión guarda todo en una base de datos Postgres (Neon/Vercel Postgres) en vez
de guardarlo solo en tu navegador, así que varias laptops pueden ver y actualizar
los mismos datos al mismo tiempo.

## Pasos para desplegar (una sola vez)

### 1. Crear el proyecto en Vercel y subir estos archivos
La forma más simple:
1. Ve a https://vercel.com y crea una cuenta gratis (o inicia sesión)
2. Sube esta carpeta a un repositorio nuevo en GitHub (o usa "Import" con drag & drop
   si Vercel te lo permite para tu cuenta)
3. En Vercel, click en **"Add New… → Project"** e importa ese repositorio

### 2. Crear la base de datos
1. Dentro de tu proyecto en Vercel, ve a la pestaña **Storage**
2. Click en **"Create Database" → Postgres** (esto crea una base Neon administrada
   por Vercel automáticamente)
3. Conéctala a tu proyecto cuando te lo pida (esto crea solo la variable
   `DATABASE_URL` automáticamente en tu proyecto)

### 3. Crear la tabla
1. En la misma sección de Storage, abre el **"Query" / SQL Editor** de tu base
2. Copia y pega todo el contenido de `schema.sql` (está en esta carpeta) y ejecútalo
   — esto crea la tabla donde vive toda la información del evento

### 4. Desplegar
1. Vuelve a la pestaña principal del proyecto en Vercel y click en **"Deploy"**
   (o simplemente espera — Vercel despliega solo cuando conectas un repo)
2. Cuando termine, te da una URL tipo `https://casa-de-luz-cobros.vercel.app`

### 5. Usarla el día del evento
- Abre esa URL en la laptop de cobros
- Todo lo que registres queda guardado en la base de datos
- Si abres la misma URL en otra laptop, se sincroniza automáticamente cada
  8 segundos (o puedes refrescar la página para verlo al instante)

## Notas importantes

- **No hay contraseña/login**: cualquiera con el link puede ver y editar los datos.
  Para un evento de un día esto suele ser aceptable, pero no compartas el link
  fuera de tu equipo de logística.
- **Última escritura gana**: si dos personas editan exactamente al mismo segundo,
  se guarda la última. Para el volumen de un pop up de un día esto no debería
  ser un problema real.
- Si necesitas ayuda en cualquier paso (por ejemplo, crear el repositorio de
  GitHub si no tienes uno), dime y seguimos desde ahí.
