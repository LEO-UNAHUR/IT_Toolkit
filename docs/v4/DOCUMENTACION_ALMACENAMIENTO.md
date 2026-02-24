# 📚 Documentación de Almacenamiento - IT Toolkit v4

## 🗄️ Sistema de Persistencia

El IT Toolkit utiliza **localStorage del navegador** para guardar todos los datos del usuario de forma local. No requiere servidor backend.

---

## 💾 Comandos Personalizados CRUD (COMPOSE)

### **Ubicación de Almacenamiento**
```javascript
Key: 'itk_custom_cmds'
Location: localStorage (navegador)
```

### **Estructura de Datos**
Cada comando personalizado se guarda como un objeto JSON con la siguiente estructura:

```json
{
  "id": "cc_1708626000000",           // ID único (timestamp o increment)
  "s": "n1-red",                      // Sección destino (n1-red, n1-sis, n2-disk, etc)
  "t": "tn",                          // Tipo/categoría (tn, ts, td, tp, tu, etc)
  "os": "win lin mac",                // SO soportados (separados por espacio)
  "sec": "Red",                       // Nombre sección (descriptivo)
  "name": "Mi Comando Personalizado", // Nombre del comando
  "tag": "CUSTOM",                    // Etiqueta/categoría
  "desc": "Descripción del comando",  // Descripción breve
  "code": "comando1\ncomando2"        // Código (multilinea, separado por \n)
}
```

### **Cómo se Guardan**
1. Usuario completa el formulario COMPOSE en "Mis Comandos"
2. Presiona botón "GUARDAR" 
3. Función `saveCustomCmd()` valida datos
4. Se agrega/actualiza en array `CUSTOM_CMDS`
5. Se ejecuta `saveCustomCmds()`:
```javascript
function saveCustomCmds() {
  localStorage.setItem('itk_custom_cmds', JSON.stringify(CUSTOM_CMDS));
}
```

### **Cómo se Cargan**
1. Al cargar la página: `loadCustomCmds()` se ejecuta
```javascript
function loadCustomCmds() {
  try {
    const raw = localStorage.getItem('itk_custom_cmds');
    const parsed = raw ? JSON.parse(raw) : [];
    CUSTOM_CMDS = Array.isArray(parsed) ? parsed : [];
  } catch(e) { CUSTOM_CMDS = []; }
}
```
2. Se parsean desde JSON a objetos JavaScript
3. Se renderizan en la página con `renderCustomList()` y `renderCommandCards()`

### **Límite de Datos**
- El historial se limita a **200 últimas entradas** para evitar saturar localStorage
- `localStorage.setItem(CUSTOM_CMDS_KEY, JSON.stringify(CUSTOM_CMDS.slice(0,200)));`

---

## 🕒 Historial de Comandos

### **Ubicación**
```javascript
Key: 'itk_history'
Location: localStorage
```

### **Estructura**
```json
{
  "name": "🔵 Ping Básico",
  "code": "ping google.com -t",
  "sec": "Red",
  "os": "win lin mac",
  "ts": "2026-02-23T18:30:45.123Z"  // ISO timestamp
}
```

### **Guardado Automático**
Se ejecuta cada vez que se copia un comando:
```javascript
function logHistory(entry) {
  history.unshift({...entry, ts: new Date().toISOString()});
  saveHistory();  // → localStorage.setItem()
}
```

### **Borrado**
- Máximo 200 registros: `history.slice(0,200)`
- Usuario puede limpiar todo manualmente con botón "Limpiar Historial"

---

## ⭐ Favoritos

### **Ubicación**
```javascript
Key: 'itk_favs'
Location: localStorage
```

### **Estructura**
```json
{
  "name": "GPO & Directivas",
  "code": "gpupdate /force\ngpresult /R\n...",
  "sec": "Active Directory",
  "os": "win",
  "desc": "Actualiza y audita directivas...",
  "tag": "POLICY",
  "obs": "<span class='ob ob-w'>🪟WIN</span>",
  "cls": "ta"  // clase CSS para color
}
```

### **Guardado**
```javascript
function toggleFav(btn) {
  // 1. Extrae datos de la tarjeta
  // 2. Agrega/quita del array 'favs'
  // 3. Guarda en localStorage
  saveFavs(); // → localStorage.setItem('itk_favs', JSON.stringify(favs))
}
```

---

## 📝 Notas del Usuario

### **Ubicación**
```javascript
Key: 'itk_notes'
Location: localStorage
```

### **Estructura**
```json
{
  "id": "note_1708626000000",
  "title": "Mi Nota",
  "content": "Contenido de la nota...",
  "ts": "2026-02-23T18:30:45.123Z"
}
```

### **Funciones**
- `loadNotes()` - Carga todas las notas
- `saveNote()` - Guarda nueva nota
- `editNote(i)` - Edita nota por índice
- `delNote(i)` - Elimina nota
- `exportNotas()` - Descargar como JSON

---

## 🎯 Incidentes SLA

### **Ubicación**
```javascript
Key: 'itk_incidents'
Location: localStorage
```

### **Estructura**
```json
{
  "id": "inc_1708626000000",
  "ticket": "INC-2026-001",
  "user": "Juan Pérez",
  "category": "Red",
  "priority": "alta",
  "sla": "4h",
  "startTime": "2026-02-23T10:00:00Z",
  "status": "En Progreso"
}
```

---

## 🎨 Tema y Preferencias

### **Ubicaciones**
```javascript
Key: 'itk_theme'        // "dark" o "light"
Key: 'itk_env'          // "default", "win", "lin", "mac", "ad", etc
Key: 'itk_schema_v'     // Versión de schema (para migraciones)
```

---

## 📊 Estadísticas Totales

| Dato | Clave localStorage | Límite | Notas |
|------|-------------------|--------|-------|
| **Comandos Personalizados** | `itk_custom_cmds` | - | Se carga dinámicamente |
| **Historial** | `itk_history` | 200 max | Se limpia automáticamente |
| **Favoritos** | `itk_favs` | - | Sin límite (generalmente <50) |
| **Notas** | `itk_notes` | - | Sin límite |
| **Incidentes** | `itk_incidents` | - | Sin límite |
| **Tema** | `itk_theme` | - | String ("dark"/"light") |
| **Entorno** | `itk_env` | - | String (nombre del entorno) |

---

## 🔐 Ejemplo: Extrae todos los datos

```javascript
// Obtener todos los datos personalizados del usuario
const allData = {
  customCmds: JSON.parse(localStorage.getItem('itk_custom_cmds') || '[]'),
  history: JSON.parse(localStorage.getItem('itk_history') || '[]'),
  favs: JSON.parse(localStorage.getItem('itk_favs') || '[]'),
  notes: JSON.parse(localStorage.getItem('itk_notes') || '[]'),
  incidents: JSON.parse(localStorage.getItem('itk_incidents') || '[]'),
  theme: localStorage.getItem('itk_theme') || 'dark',
  env: localStorage.getItem('itk_env') || 'default'
};

console.log(allData);
```

---

## 📤 Backup/Restore

### **Función Backup**
```javascript
function backupAll() {
  // Exporta un JSON con TODOS los datos del usuario
  const data = {
    favs: JSON.parse(localStorage.getItem('itk_favs') || '[]'),
    history: JSON.parse(localStorage.getItem('itk_history') || '[]'),
    notes: JSON.parse(localStorage.getItem('itk_notes') || '[]'),
    incidents: JSON.parse(localStorage.getItem('itk_incidents') || '[]'),
    customCmds: JSON.parse(localStorage.getItem('itk_custom_cmds') || '[]'),
    timestamp: new Date().toISOString()
  };
  // Descargar como archivo .json
}
```

### **Función Restore**
```javascript
function restoreAll() {
  // El usuario carga un archivo .json con todos los datos
  // Se parsea y se restaura en localStorage
  // Requiere confirmación para no perder datos actuales
}
```

---

## ⚙️ Limitaciones y Consideraciones

1. **localStorage es por navegador/equipo**: Si el usuario cambia de navegador o equipo, pierde los datos
2. **Límite de espacio**: Típicamente **5-10 MB** por dominio en navegadores modernos
3. **Sin sincronización**: No se sincroniza entre pestañas automáticamente
4. **Borrado del historial del navegador**: Si el usuario limpia "localStorage" en ajustes, pierde TODO
5. **Datos públicos**: No es seguro guardar datos muy sensibles (contraseñas, tokens)

---

## 📢 ACTUALIZACIÓN v4.1 - CAMBIOS EN FILTROS

Se implementó la **Opción 1+2** del análisis de filtros para mejorar la UX:

### **Cambios Principales**

✅ **Eliminados**: Tabs redundantes (🪟 Windows, 🐧 Linux, 🍎 macOS)  
✅ **Agregado**: Barra **SISTEMA** dedicada para filtro de SO  
✅ **Mejorado**: Independencia total entre entorno y SO  

### **Cómo Usar Ahora**

| Elemento | Función |
|----------|---------|
| **Tabs de Entorno** | Solo cambian el tema/contexto visual |
| **Barra SISTEMA** | Filtra realmente por SO (✓ TODOS, 🪟 WIN, 🐧 LIN, 🍎 MAC) |

### **Referencia**

- Detalles técnicos: [CHANGELOG_v4.1.md](CHANGELOG_v4.1.md)
- Análisis completo: [ANALISIS_FILTROS.md](ANALISIS_FILTROS.md)
- README actualizado: [README.md](../../README.md)

---

## 🚀 SOLUCIONES RECOMENDADAS PARA TÉCNICOS CON PENDRIVES

> **Escenario**: El técnico accede desde el pendrive en diferentes equipos/navegadores

### **SOLUCIÓN 1: Export/Import JSON (RECOMENDADO - Implementado)**

La más simple y portable sin dependencias.

#### **Características**
- ✅ Exportar todos los comandos a archivo `mi-comandos.json`
- ✅ Importar desde `mi-comandos.json` en cualquier equipo
- ✅ Guardar en el pendrive junto con el HTML
- ✅ Cero dependencias, funciona offline

#### **Flujo de Uso**
1. Técnico en **Equipo A**:
   - Crea comandos en COMPOSE
   - Botón "💾 Descargar Mis Comandos" → descarga `mis-comandos.json`
   - Copia el archivo al pendrive

2. Técnico en **Equipo B** (diferente navegador/SO):
   - Abre IT_Toolkit desde el pendrive
   - Botón "📤 Cargar Comandos" → selecciona `mis-comandos.json`
   - Todos sus comandos aparecen instantáneamente

#### **Implementación**
```javascript
// EXPORTAR
function exportCustomCmds() {
  const customCmds = JSON.parse(localStorage.getItem('itk_custom_cmds') || '[]');
  const data = {
    version: "4.0",
    timestamp: new Date().toISOString(),
    commands: customCmds,
    count: customCmds.length
  };
  
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mis-comandos-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast(`✅ Descargados ${customCmds.length} comandos`);
}

// IMPORTAR
function importCustomCmds() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const data = JSON.parse(event.target.result);
        if (!Array.isArray(data.commands)) throw new Error('Formato inválido');
        
        localStorage.setItem('itk_custom_cmds', JSON.stringify(data.commands));
        CUSTOM_CMDS = data.commands;
        renderCustomList();
        renderAllCards();
        toast(`✅ Importados ${data.commands.length} comandos`);
      } catch(err) {
        toast(`❌ Error: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}
```

**Ventajas:**
- 📦 Completamente portátil
- 🔒 Sin dependencias externas
- ⚡ Instant access
- 💾 Archivos pequeños (<1MB típicamente)

**Desventajas:**
- 🔄 Sincronización manual
- ⚠️ Sin backup automático

---

### **SOLUCIÓN 2: IndexedDB (MEJOR QUE localStorage)**

Base de datos local en el navegador, más robusta y con más espacio.

#### **Ventajas sobre localStorage**
| Aspecto | localStorage | IndexedDB |
|--------|-------------|----------|
| **Espacio** | 5-10 MB | 50+ MB |
| **Velocidad** | Sincrónica (lenta) | Asincrónica (rápida) |
| **Estructura** | String plano | Objetos complejos |
| **Índices** | No | Sí |
| **Transacciones** | No | Sí |
| **Portabilidad entre navegadores** | No | No (igual problema) |

#### **Implementación Mínima**
```javascript
const DB_NAME = 'ITToolkit';
const DB_VERSION = 1;
const STORE_NAME = 'commands';

let db = null;

// Inicializar IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      db = req.result;
      resolve(db);
    };
    
    req.onupgradeneeded = e => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('name', 'name', { unique: false });
        store.createIndex('section', 's', { unique: false });
      }
    };
  });
}

// Guardar comando
async function saveCommandToDB(cmd) {
  const store = db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME);
  return new Promise((resolve, reject) => {
    const req = store.put(cmd);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Cargar todos los comandos
async function loadCommandsFromDB() {
  const store = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME);
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
```

**Ventajas:**
- 📊 Mejor para datos reales
- ⚡ Más rápido
- 💾 Mucho más espacio
- 🔍 Búsquedas indexadas

**Desventajas:**
- 🔄 Sigue siendo local del navegador
- 📚 Curva de aprendizaje

---

### **SOLUCIÓN 3: URL Shareable (Con hash codificado)**

Almacenar comandos en la URL del navegador.

#### **Ejemplo**
```
https://localhost/IT_Toolkit_v4.html#cmds=eyJjb21tYW5kcyI6W3...]}
```

#### **Ventajas**
- 🔗 Compartible por email/chat
- 📦 Portable en la URL
- ✅ Sin archivos adicionales

#### **Desventajas**
- ⚠️ Límite de URL (~2000 caracteres)
- 🔍 Comandos visibles en URL
- 📱 Poco práctico para muchos comandos

---

### **SOLUCIÓN 4: Watchdog Local (Recomendado para Pendrives)**

Script complementario que monitorea un archivo `comandos.json` en la misma carpeta del HTML.

#### **Flujo**
1. Crear `comandos.json` al lado di `IT_Toolkit_v4.html`
2. Al abrir el HTML, detecta automáticamente `comandos.json`
3. Carga los comandos automáticamente
4. Cada nuevo comando se sincroniza al archivo

#### **Implementación**
```javascript
// Al inicio de la página
async function detectExternalCommandsFile() {
  try {
    // Intenta cargar comandos.json desde la URL actual
    const response = await fetch('./comandos.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data.commands)) {
        // Merge con comandos existentes
        const existing = JSON.parse(localStorage.getItem('itk_custom_cmds') || '[]');
        const merged = [...new Map(
          [...existing, ...data.commands].map(item => [item.id, item])
        ).values()];
        
        localStorage.setItem('itk_custom_cmds', JSON.stringify(merged));
        CUSTOM_CMDS = merged;
        toast(`📁 Sincronizados comandos del pendrive`);
      }
    }
  } catch(e) {
    console.log('No se encontró comandos.json (normal)');
  }
}

// Auto-exportar cuando añaden comando
window.addEventListener('comandoSaved', () => {
  const cmds = JSON.parse(localStorage.getItem('itk_custom_cmds') || '[]');
  // Guardar localmente (requeriría backend o extensión)
  // Para pendrives sin servidor, usar SOLUCIÓN 1
});
```

**Ventajas:**
- 🔄 Auto-sync
- 📦 Portable
- 🚀 Transparente para el usuario

**Desventajas:**
- 🔐 Requiere CORS (puede fallar en algunos setups)
- 📝 No guarda automáticamente cambios sin backend

---

## 📋 RECOMENDACIÓN FINAL PARA TU CASO

### **Arquitectura Híbrida (MEJOR OPCIÓN)**

```
┌─────────────────────────────────────┐
│  PENDRIVE DEL TÉCNICO               │
├─────────────────────────────────────┤
│ ├─ IT_Toolkit_v4.html               │
│ ├─ mis-comandos.json  (auto-sync)   │ ← Tu copia actual
│ ├─ mi-notas.json                    │
│ └─ backup-completo.json             │
└─────────────────────────────────────┘
         ↓
  ┌──────────────────────┐
  │ NAVEGADOR ACTUAL     │
  ├──────────────────────┤
  │ localStorage         │ ← Rápido en el navegador
  │ IndexedDB            │ ← Más datos, mejor perf
  └──────────────────────┘
         ↓
  ┌──────────────────────┐
  │ AL CAMBIAR EQUIPO    │
  ├──────────────────────┤
  │ "Cargar comandos"    │
  │ Selecciona JSON      │
  │ Restaurar al instante│
  └──────────────────────┘
```

### **Implementación Mínima (FASE 1)**

Añade estos 2 botones en el panel "Mis Comandos":

```html
<button onclick="exportCustomCmds()" class="btn">💾 Descargar Mis Comandos</button>
<button onclick="importCustomCmds()" class="btn">📤 Cargar Comandos</button>
```

**Beneficios:**
- ✅ Cero cambios en infraestructura
- ✅ Totalmente portátil
- ✅ Funciona offline
- ✅ Técnicos controlan sus backups
- ✅ Compatible con pendrives

### **Fase 2 (Futuro)**

- Migrar a IndexedDB para mejor rendimiento
- Auto-generar backups diarios
- Sincronización en nube opcional (Google Drive/Dropbox)

---

¿Quieres que **implemente la SOLUCIÓN 1 ahora** (export/import) + le agregue? Es la más inmediata y práctica para tu caso de uso.


---

## 🛡️ Recomendaciones

- ✅ Hacer backup regularmente (botón "Exportar Backup")
- ✅ No guardar contraseñas reales en comandos personalizados
- ✅ Usar nombres descriptivos en comandos para fácil búsqueda
- ✅ Limpiar historial periódicamente si usas mucho
- ✅ Probar backup/restore en otro equipo antes de confiar en él

---

## 📍 Referencias en Código

Búsqueda rápida de funciones:

| Función | Línea | Propósito |
|---------|-------|----------|
| `loadCustomCmds()` | ~1491 | Cargar comandos personalizados |
| `saveCustomCmds()` | ~1499 | Guardar comandos personalizados |
| `saveCustomCmd()` | ~1586 | Guardar UN comando nuevo |
| `loadHistory()` | ~2007 | Cargar historial |
| `logHistory()` | ~2023 | Registrar un comando copiado |
| `loadFavs()` | ~1943 | Cargar favoritos |
| `toggleFav()` | ~1964 | Agregar/quitar favorito |
| `backupAll()` | ~1177 | Exportar backup completo |
| `restoreAll()` | ~1198 | Importar backup |

