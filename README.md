# Castor Buscador de YouTube (Frontend)

Frontend en Angular para autenticación de usuarios y búsqueda de videos en YouTube, siguiendo principios SOLID, Clean Code, YAGNI y KISS. Interfaz amigable, sutil y moderna con colores pastel y acento rojo.

## Requisitos
- Node.js >= 16
- Angular CLI >= 16

## Instalación
1. Clona el repositorio y entra a la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Instala Angular Material (si no está instalado):
   ```bash
   ng add @angular/material
   ```
   Elige un tema pastel (ejemplo: rosa, lila, rojo claro) y activa animaciones.

## Ejecución
```bash
ng serve
```
Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## Flujo de la aplicación
- **Pantalla de inicio:** Login.
- **Registro:** Permite crear una cuenta nueva.
- **Login:** Acceso con usuario y contraseña.
- **Búsqueda de YouTube:** Solo accesible si el usuario está autenticado. Permite buscar videos y ver resultados con miniatura, título y enlace a YouTube.
- **Protección de rutas:** Si no has iniciado sesión, no puedes acceder a la búsqueda.
- **Mensajes:** Todos los mensajes y feedback son amigables y sutiles en español.

## Estructura principal
- `src/app/auth/`: Módulo de autenticación (login, registro, guard, interceptor)
- `src/app/youtube/`: Módulo de búsqueda de YouTube
- `src/app/app.module.ts`: Módulo raíz y configuración de providers
- `src/app/app.routes.ts`: Definición de rutas y protección

## Notas
- El backend debe estar corriendo en `http://localhost:8080` y exponer los endpoints `/api/auth/register`, `/api/auth/login` y `/api/youtube/search`.
- El token JWT se almacena en `localStorage` y se adjunta automáticamente a las peticiones protegidas.

---

¿Dudas o sugerencias? ¡No dudes en preguntar!
