# 🎯 Castor - Buscador de YouTube

Una aplicación web moderna desarrollada en Angular para buscar y gestionar videos de YouTube con autenticación de usuarios y historial de búsquedas.

## ✨ Características Principales

### 🔐 Autenticación y Seguridad
- **Sistema de login/registro** con formularios reactivos
- **Autenticación JWT** con interceptores HTTP
- **AuthGuard** para protección de rutas
- **Estado global de autenticación** con BehaviorSubject
- **Manejo de errores** con feedback visual

### 🎥 Búsqueda de YouTube
- **Integración con API de YouTube** a través de backend
- **Búsqueda en tiempo real** con parámetros configurables
- **Resultados con thumbnails** y información detallada
- **Historial de búsquedas** persistente y clickeable
- **Paginación y límites** de resultados

### 🎨 Experiencia de Usuario (UX)
- **Diseño moderno** inspirado en Material Dashboard
- **Animaciones fluidas** con Angular Animations
- **Colores pastel** con acentos azules y púrpura
- **Efectos visuales** avanzados (glassmorphism, gradientes)
- **Responsive design** para todos los dispositivos
- **Feedback visual** con spinners y snackbars

## 🏗️ Arquitectura del Proyecto

### Principios de Desarrollo
- **SOLID**: Separación de responsabilidades, interfaces claras
- **Clean Code**: Código legible, mantenible y bien estructurado
- **YAGNI**: Solo funcionalidades necesarias implementadas
- **KISS**: Simplicidad en diseño y implementación

### Estructura de Módulos
```
src/app/
├── app.module.ts              # Módulo principal
├── app.component.ts           # Componente raíz
├── app.routes.ts             # Configuración de rutas
├── auth/                     # Módulo de autenticación
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.guard.ts
│   ├── jwt.interceptor.ts
│   ├── login/
│   └── register/
└── youtube/                  # Módulo de búsqueda
    ├── youtube.module.ts
    ├── youtube.service.ts
    └── youtube-search/
```

### Tecnologías Utilizadas
- **Angular 17**: Framework principal
- **Angular Material**: Componentes UI
- **Angular Animations**: Efectos visuales
- **Reactive Forms**: Formularios reactivos
- **HTTP Client**: Comunicación con API
- **Router**: Navegación y lazy loading

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd frontend-castor-youtube-search

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

### Variables de Entorno
Crear archivo `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // URL del backend
};
```

## 🎨 Características de UX Implementadas

### Diseño Visual
- **Paleta de colores pastel**: Azules y púrpuras suaves
- **Gradientes modernos**: Efectos visuales atractivos
- **Glassmorphism**: Efectos de transparencia y blur
- **Sombras dinámicas**: Profundidad visual

### Animaciones
- **Transiciones de página**: Efectos suaves entre rutas
- **Animaciones de entrada**: Stagger para elementos
- **Efectos hover**: Interacciones responsivas
- **Partículas flotantes**: Elementos decorativos

### Componentes Mejorados
- **Barra de navegación**: Iconos y efectos hover
- **Formularios**: Campos con iconos y validación visual
- **Tarjetas de resultados**: Diseño moderno con thumbnails
- **Historial de búsquedas**: Columna independiente

## 📱 Funcionalidades Detalladas

### Autenticación
```typescript
// Login con validación
loginForm: FormGroup = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
});
```

### Búsqueda de Videos
```typescript
// Parámetros de búsqueda
searchParams = {
  query: string,
  maxResults: number,
  order: 'relevance' | 'date' | 'rating'
};
```

### Historial de Búsquedas
- Persistencia en backend
- Búsquedas clickeables
- Actualización en tiempo real
- Diseño en columna independiente

## 🔧 Configuración del Backend

### Endpoints Requeridos
```typescript
// Autenticación
POST /api/auth/login
POST /api/auth/register

// YouTube Search
GET /api/youtube/search?query=...&maxResults=...
GET /api/youtube/history
```

### CORS Configuration
El backend debe permitir requests desde `http://localhost:4200`:
```javascript
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
```

## 🧪 Testing

### Ejecutar Tests
```bash
# Tests unitarios
npm test

# Tests e2e
npm run e2e

# Coverage
npm run test:coverage
```

## 📦 Build y Deploy

### Build de Producción
```bash
# Build optimizado
npm run build

# Build con análisis de bundle
npm run build -- --stats-json
```

### Deploy
```bash
# Servir build de producción
npm run serve:prod

# Deploy a servidor estático
npm run deploy
```

## 🐛 Troubleshooting

### Errores Comunes
1. **CORS errors**: Configurar backend para permitir requests
2. **JWT errors**: Verificar token en localStorage
3. **API errors**: Revisar endpoints del backend
4. **Animation errors**: Verificar BrowserAnimationsModule

### Soluciones
```bash
# Limpiar cache
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar versión de Angular
ng version
```

## 📈 Mejoras Futuras

### Funcionalidades Planificadas
- [ ] Filtros avanzados de búsqueda
- [ ] Favoritos y playlists
- [ ] Modo oscuro/claro
- [ ] Notificaciones push
- [ ] PWA capabilities

### Optimizaciones Técnicas
- [ ] Lazy loading de imágenes
- [ ] Service Workers
- [ ] Caching inteligente
- [ ] Performance monitoring

## 🤝 Contribución

### Guías de Desarrollo
1. Seguir principios SOLID y Clean Code
2. Mantener cobertura de tests > 80%
3. Documentar cambios importantes
4. Usar conventional commits

### Estructura de Commits
```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: cambios de estilo
refactor: refactorización
test: tests
chore: tareas de mantenimiento
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👥 Autores

- **Desarrollador**: [Tu Nombre]
- **Fecha**: 2024
- **Versión**: 1.0.0

---

**¡Disfruta explorando videos de YouTube con Castor! 🎬**
