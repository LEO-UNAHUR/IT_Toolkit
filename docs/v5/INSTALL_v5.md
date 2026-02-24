# 📱 IT TOOLKIT v5.0 - GUÍA DE INSTALACIÓN PWA

## 🎯 ¿Qué es nuevo en v5?

IT Toolkit v5 es una **Progressive Web App (PWA)** completamente responsive y mobile-first que puede instalarse en Android, iOS, Windows, macOS y Linux.

### ✨ Características Principales

- ✅ **100% Responsive** - Se adapta a cualquier tamaño de pantalla
- ✅ **PWA Instalable** - Funciona como app nativa
- ✅ **Offline First** - Service Worker para uso sin internet
- ✅ **Drawer Navigation** - Menú lateral deslizable en mobile
- ✅ **Bottom Navigation** - Barra de navegación inferior en móviles
- ✅ **Touch Optimized** - Botones de 48x48px para fácil interacción táctil
- ✅ **Android & iOS Ready** - Compatible con ambas plataformas
- ✅ **Dark Mode** - Diseño optimizado para OLED

---

## 📲 INSTALACIÓN EN ANDROID

### Opción 1: Chrome/Edge
1. Abre `IT_Toolkit_v5.html` en **Chrome** o **Edge**
2. Toca el menú **⋮** (3 puntos)
3. Selecciona **"Agregar a pantalla de inicio"** o **"Instalar app"**
4. Confirma la instalación
5. La app aparecerá en tu pantalla de inicio

### Opción 2: Firefox
1. Abre `IT_Toolkit_v5.html` en **Firefox**
2. Toca el ícono de **casa con +** en la barra de direcciones
3. Selecciona **"Agregar a pantalla de inicio"**

---

## 🍎 INSTALACIÓN EN iOS/iPadOS

1. Abre `IT_Toolkit_v5.html` en **Safari**
2. Toca el botón **Compartir** (cuadro con flecha hacia arriba)
3. Desplázate hacia abajo y toca **"Agregar a pantalla de inicio"**
4. Dale un nombre (ej: "IT Toolkit")
5. Toca **"Agregar"**
6. La app aparecerá como ícono en tu pantalla de inicio

**Nota:** En iOS solo Safari soporta instalación PWA. Chrome/Firefox no lo permiten.

---

## 💻 INSTALACIÓN EN DESKTOP

### Windows / macOS / Linux

#### Chrome / Edge:
1. Abre `IT_Toolkit_v5.html` en el navegador
2. Haz clic en el ícono **⊕ Instalar** en la barra de direcciones
3. O ve a menú **⋮** → **"Instalar IT Support Toolkit"**
4. La app se instalará como aplicación independiente

#### Firefox:
- Firefox no soporta instalación PWA en desktop
- Pero puedes crear un acceso directo al archivo HTML

---

## 🚀 CARACTERÍSTICAS MOBILE

### 📱 Drawer Navigation
- **Hamburger menu (☰)** en la esquina superior izquierda
- Se desliza desde la izquierda
- Toca fuera del drawer o el overlay para cerrarlo
- Acceso completo a todas las secciones

### 📊 Bottom Navigation Bar
- **5 accesos rápidos** siempre visibles en la parte inferior:
  - 🏠 **Inicio** - Página principal
  - 🔍 **Buscar** - Activa el buscador global
  - ⭐ **Favoritos** - Tus comandos guardados
  - 🧰 **Tools** - Herramientas portables
  - ☰ **Menú** - Abre el drawer

### ✋ Touch-Friendly
- Todos los botones tienen **mínimo 44x44px** (recomendación iOS)
- Preferentemente **48x48px** (recomendación Android)
- Espaciado generoso para evitar toques accidentales
- Feedback visual al tocar

---

## 🔧 REQUISITOS TÉCNICOS

### Navegadores Compatibles

| Plataforma | Navegador | Versión | PWA Install |
|------------|-----------|---------|-------------|
| Android | Chrome | 73+ | ✅ Sí |
| Android | Edge | 79+ | ✅ Sí |
| Android | Firefox | 68+ | ⚠️ Limitado |
| iOS | Safari | 11.3+ | ✅ Sí |
| iOS | Chrome/Firefox | Cualquiera | ❌ No |
| Windows | Chrome | 73+ | ✅ Sí |
| Windows | Edge | 79+ | ✅ Sí |
| macOS | Chrome | 73+ | ✅ Sí |
| macOS | Edge | 79+ | ✅ Sí |
| macOS | Safari | 11.3+ | ✅ Sí |
| Linux | Chrome | 73+ | ✅ Sí |

### Tamaños de Pantalla Soportados

- 📱 **Mobile:** 320px - 767px (portrait & landscape)
- 📱 **Tablet:** 768px - 1199px
- 💻 **Desktop:** 1200px+ (mantiene diseño desktop original)

---

## 📂 ARCHIVOS NECESARIOS

Para que la PWA funcione correctamente, asegúrate de tener:

```
📁 Proyecto/
├── IT_Toolkit_v5.html      ← Archivo principal
├── manifest.json            ← Metadatos PWA
├── service-worker.js        ← Cache offline
└── icons/                   ← Iconos (opcional pero recomendado)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

**Nota:** Los iconos no son obligatorios para que funcione, pero se recomiendan para mejor experiencia de instalación.

---

## 🎨 CREAR ICONOS

Si quieres crear tus propios iconos:

### Opción 1: Online (Recomendado)
1. Ve a https://realfavicongenerator.net/
2. Sube un logo/icono base (mínimo 512x512px)
3. Configura las opciones
4. Descarga el paquete
5. Copia los PNG a tu carpeta del proyecto

### Opción 2: Manual
- Crea un ícono cuadrado de **512x512px**
- Redimensiona a los tamaños necesarios: 72, 96, 128, 144, 152, 192, 384, 512
- Guarda como PNG con transparencia
- Usa un fondo sólido para el ícono maskable

---

## 🔄 ACTUALIZACIÓN DE LA PWA

Cuando actualices el HTML o archivos:

1. **Actualiza la versión** en:
   - `service-worker.js` → `CACHE_NAME` y `CACHE_VERSION`
   - `manifest.json` → `version`

2. **Los usuarios verán la actualización** al:
   - Abrir la app después de recargar el service worker
   - Puede tomar 24-48 horas dependiendo del navegador

3. **Forzar actualización (dev):**
   - Chrome DevTools → Application → Service Workers → "Unregister"
   - O incrementa la versión del cache en service-worker.js

---

## 🐛 TROUBLESHOOTING

### La app no se instala
- ✓ Verifica que `manifest.json` esté en la misma carpeta
- ✓ Asegúrate de abrir desde un servidor web local o HTTPS
  - Archivos `file://` pueden tener limitaciones
  - Usa: `python -m http.server 8000` o Live Server en VS Code
- ✓ Revisa la consola del navegador (F12) para errores

### El Service Worker no funciona
- ✓ Verifica que `service-worker.js` esté en la misma carpeta
- ✓ Abre Chrome DevTools → Application → Service Workers
- ✓ Mira errores en la consola
- ✓ Los SW solo funcionan en HTTPS o localhost

### Drawer no se abre en mobile
- ✓ Verifica que estés en una pantalla <768px (usa DevTools responsive)
- ✓ Revisa la consola del navegador por errores JavaScript
- ✓ Asegúrate de que el JavaScript al final del HTML esté intacto

### Bottom nav no aparece
- ✓ Solo visible en pantallas <768px
- ✓ Usa Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
- ✓ Selecciona un dispositivo mobile

---

## 📊 TESTING

### Herramientas Recomendadas

1. **Chrome DevTools**
   - F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Prueba diferentes dispositivos y orientaciones

2. **Lighthouse** (Chrome DevTools)
   - F12 → Lighthouse tab
   - Run audit → PWA
   - Objetivo: >90 score

3. **Dispositivos Reales**
   - Siempre prueba en dispositivos físicos
   - Android y iOS se comportan diferente

---

## 🎯 BREAKPOINTS CSS

La v5 usa estos breakpoints:

```css
/* Mobile */
@media (max-width: 767px) { }

/* Small Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1199px) { }

/* Desktop */
@media (min-width: 1200px) { }

/* Landscape Mobile */
@media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) { }
```

---

## 📖 COMPATIBILIDAD CON v4

- ✅ **100% compatible** con v4.1
- ✅ Todas las funciones y comandos mantienen la misma funcionalidad
- ✅ localStorage sigue funcionando igual
- ✅ Exportar/importar funciona sin cambios
- ✅ Solo se agregaron mejoras responsive y PWA

---

## 🚀 PRÓXIMOS PASOS

1. **Instala la PWA** en tu dispositivo móvil
2. **Prueba offline** - Activa modo avión y verifica que funcione
3. **Reporta bugs** - Anota cualquier problema en diferentes dispositivos
4. **Optimiza iconos** - Crea iconos personalizados si es necesario
5. **Comparte** - Distribuye el HTML + manifest.json + service-worker.js

---

## 📝 NOTAS IMPORTANTES

- 📌 **Pendrive/USB:** La PWA funciona desde archivos locales, ideal para llevar en pendrive
- 📌 **Sin internet:** Todo funciona offline después de la primera carga
- 📌 **Almacenamiento:** LocalStorage mantiene tus comandos personalizados, favoritos e historial
- 📌 **Actualización automática:** El service worker detecta nuevas versiones

---

## 💡 TIPS

- En mobile, usa **landscape mode** para teclados más grandes al escribir comandos
- El **bottom nav** es más rápido que abrir el drawer para navegación frecuente
- Usa **favoritos** (⭐) para acceso rápido a comandos que usas a diario
- El **historial** guarda automáticamente cada comando que copies

---

¿Preguntas? Revisa la documentación en `docs/v5/` o consulta el ROADMAP para ver futuras features.

**¡Disfruta IT Toolkit v5 Mobile! 🚀**
