# 📋 CHECKLIST TÉCNICO - v5 MOBILE IMPLEMENTATION

## ✅ PRE-DESARROLLO (Preparación)

- [ ] Crear rama `develop-v5` en GitHub
- [ ] Crear archivo `IT_Toolkit_v5.html` (copia de v4.1)
- [ ] Actualizar versión en código (4.1 → 5.0)
- [ ] Crear manifest.json
- [ ] Crear service-worker.js
- [ ] Documentación técnica de cambios

---

## 🎯 FASE 1: ESTRUCTURA RESPONSIVE

### CSS Media Queries
- [ ] Crear variables CSS por breakpoint
  - [ ] `--sw` (sidebar width)
  - [ ] `--rh` (header height)
  - [ ] `--sh` (env-bar height)
  - [ ] `--font-size-base` (16px mobile → 12px desktop)

- [ ] Implementar breakpoints:
  ```
  Mobile: 0-767px
  Tablet: 768px-1199px
  Desktop: 1200px+
  ```

- [ ] Agregar media queries a cada regla CSS que lo necesite
- [ ] Testear en DevTools responsive mode

### HTML Actualizaciones
- [ ] Agregar `<meta name="viewport">` mejorado
- [ ] Agregar `<meta name="apple-mobile-web-app-capable">`
- [ ] Agregar `<meta name="mobile-web-app-capable">`
- [ ] Agregar `<link rel="manifest">`
- [ ] Agregar `<link rel="apple-touch-icon">`

### Sidebar → Drawer
- [ ] Crear `<button id="hamburger" class="hamburger">`
- [ ] Crear CSS estado `.drawer-open`
- [ ] Crear CSS `.drawer` (posición fixed)
- [ ] Implementar overlay/backdrop
- [ ] JavaScript: `toggleDrawer()` función
- [ ] JavaScript: `closeDrawer()` al seleccionar item
- [ ] JavaScript: `closeDrawer()` al clickear overlay

### Header Responsive
- [ ] Reducir padding en mobile (20px → 12px)
- [ ] Responder a hamburger
- [ ] Esconder `.logo p` en <450px
- [ ] Search bar 100% width en mobile

---

## 🎯 FASE 2: BOTTOM NAVIGATION

### HTML Structure
- [ ] Crear `<nav class="bottom-nav">`
- [ ] 5 items con estructura:
  ```html
  <a class="nav-item-mobile" data-nav="home">🏠</a>
  <a class="nav-item-mobile" data-nav="search">🔍</a>
  <a class="nav-item-mobile" data-nav="favorites">📌</a>
  <a class="nav-item-mobile" data-nav="settings">⚙️</a>
  <a class="nav-item-mobile" data-nav="help">❓</a>
  ```

### CSS
- [ ] `.bottom-nav` estilos:
  - [ ] `position: fixed; bottom: 0`
  - [ ] `height: 56px`
  - [ ] `display: none` en desktop
  - [ ] `display: flex` en mobile

- [ ] `.nav-item-mobile` estilos:
  - [ ] `width: calc(100% / 5)`
  - [ ] `height: 56px`
  - [ ] `display: flex; align-items: center; justify-content: center`
  - [ ] `.active` state with highlight

- [ ] Agregar padding-bottom al `.content` en mobile (56px)

### JavaScript
- [ ] `function setActiveMobileNav(itemId)`
- [ ] Listener en cada item del bottom nav
- [ ] Sincronizar con sidebar activo en desktop
- [ ] Prevenir scroll sobre navbar

---

## 🎯 FASE 3: TOUCH-FRIENDLY COMPONENTS

### Button Sizes
- [ ] Todos los buttons: minimum 44x44px
- [ ] Preferible: 48x48px
- [ ] Actualizar `.ico-btn`, `.env-tab`, `.os-pill`

### Spacing
- [ ] Touch targets: gap mínimo 8px
- [ ] Padding aumentado en mobile

### Tabs Entorno
- [ ] Opción 1: Dropdown select en mobile
- [ ] Opción 2: Horizontal scroll mejorado
- [ ] Elección: Mantener scroll pero mejorable

### Command Cards
- [ ] Font size: 14px body en mobile
- [ ] Code blocks: max-width 100% con scroll horizontal
- [ ] Padding dentro de cards: 12px en mobile

### Search Input
- [ ] Tamaño mínimo: 44px height
- [ ] Font size: 16px (previene auto-zoom iOS)
- [ ] `autocomplete="off"` si necesario

---

## 🎯 FASE 4: PWA SETUP

### manifest.json
- [ ] Crear con estructura:
  ```json
  {
    "name": "IT Toolkit",
    "short_name": "ITK",
    "description": "Comprehensive IT Command Reference",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#0e0f12",
    "theme_color": "#45d6c6",
    "scope": "/",
    "icons": [
      { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
      { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" },
      { "src": "icon-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
    ]
  }
  ```
- [ ] Crear/generar icons (192x192, 512x512, maskable)
- [ ] Subir icons al servidor

### Service Worker
- [ ] Crear `sw.js` con:
  - [ ] Cache strategy (cache-first o network-first)
  - [ ] Cache versioning
  - [ ] Offline fallback
  
- [ ] Minimal implementation:
  ```javascript
  const CACHE = 'itk-v5-1';
  
  self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then(cache => {
      return cache.addAll([...urls]);
    }));
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request)
      .then(r => r || fetch(e.request))
      .catch(() => new Response('Offline'))
    );
  });
  ```

- [ ] Registrar en HTML:
  ```javascript
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
  ```

### Install Prompt
- [ ] Listen `beforeinstallprompt` event
- [ ] Mostrar custom install button (opcional)
- [ ] Handle `appinstalled` event

---

## 🎯 FASE 5: PERFORMANCE OPTIMIZATION

### Code Splitting (Opcional para v5.1)
- [ ] Identificar bloques de código removibles
- [ ] Lazy load si necesario

### Minification
- [ ] CSS minificado (si aplica)
- [ ] JavaScript minificado (si aplica)
- [ ] HTML minificado (si aplica)

### Image Optimization
- [ ] Si hay imágenes: webp format
- [ ] Lazy loading `loading="lazy"`

### Caching Strategy
- [ ] localStorage para datos pequeños
- [ ] IndexedDB para datos grandes (v5.1)
- [ ] Cache versionado en SW

### Lighthouse Audit
- [ ] Ejecutar Lighthouse
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90
- [ ] PWA score > 90

---

## 📱 FASE 6: TESTING CHECKLIST

### Device Testing (Real Devices)
- [ ] iPhone 12 (390x844px)
- [ ] iPhone 14 Pro (393x852px)
- [ ] Samsung Galaxy S21 (360x800px)
- [ ] iPad (768x1024px)
- [ ] iPad Pro (1024x1366px)
- [ ] Generic 10\" tablet

### Browser Testing
- [ ] Safari iOS 14+
- [ ] Chrome Android
- [ ] Firefox Android
- [ ] Samsung Internet
- [ ] Edge Mobile

### Viewport Testing (DevTools)
- [ ] 320px (small phones)
- [ ] 480px (regular phones)
- [ ] 768px (tablets)
- [ ] 1024px (large tablets)
- [ ] 1920px (desktop)

### Functionality Testing
- [ ] Sidebar toggle works
- [ ] Bottom nav navigation works
- [ ] Search functionality
- [ ] Copy commands works
- [ ] Theme toggle works
- [ ] Favorites save/load
- [ ] Custom commands add/delete
- [ ] History tracking
- [ ] Incidents tracking
- [ ] Offline functionality

### Touch Testing
- [ ] All buttons tapeable (48x48px+)
- [ ] No hover states interferen con touch
- [ ] Swipe scroll smooth
- [ ] Double-tap zoomable (si aplica)
- [ ] Long-press feedback

### Keyboard Testing
- [ ] Tab navigation funciona
- [ ] Enter en inputs funciona
- [ ] Escape cierra modales/search
- [ ] Virtual keyboard no oculta contenido

### Accessibility Testing
- [ ] ARIA labels presentes
- [ ] Color contrast sufficient
- [ ] Focus visible en teclado
- [ ] Screen reader compatible (NVDA, JAWS)

---

## 🚀 PRE-RELEASE

### Documentation
- [ ] Update README.md con v5 info
- [ ] Crear MIGRATION_GUIDE.md (v4 → v5)
- [ ] Update CHANGELOG.md
- [ ] Create MOBILE_FEATURES.md

### Code Review
- [ ] Peer review completo
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Security check

### Deploy
- [ ] Crear GitHub release
- [ ] Tag de versión `v5.0.0`
- [ ] Deploy a producción
- [ ] Versión anterior accesible

### Post-Release
- [ ] Monitor error tracking
- [ ] Recopilar user feedback
- [ ] Planificar v5.1 features

---

## 📊 ESTADO ACTUAL

```
Fase 1: Estructura Responsive   [████░░░░░░] 0%
Fase 2: Bottom Navigation       [░░░░░░░░░░] 0%
Fase 3: Touch Components        [░░░░░░░░░░] 0%
Fase 4: PWA Setup               [░░░░░░░░░░] 0%
Fase 5: Performance             [░░░░░░░░░░] 0%
Fase 6: Testing                 [░░░░░░░░░░] 0%
Pre-Release                     [░░░░░░░░░░] 0%

─────────────────────────────────
TOTAL:                          [░░░░░░░░░░] 0%
```

---

## 🔗 ARCHIVOS RELACIONADOS

- [ROADMAP_v5_MOBILE.md](ROADMAP_v5_MOBILE.md) - Plan general
- [IT_Toolkit_v5.html](IT_Toolkit_v5.html) - (Será creado)
- [manifest.json](manifest.json) - PWA manifest
- [sw.js](sw.js) - Service Worker

---

**Checklist última actualización:** 23 de febrero de 2026  
**Status:** 📋 Listo para comenzar desarrollo