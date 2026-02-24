# 🔧 IT TOOLKIT
## Desktop Edition | Mobile PWA | Pendrive Ready

> **Referencia de comandos completamente offline, portable y personalizable para técnicos de IT.**  
> **Ahora disponible en Desktop (v4.1) y Mobile PWA (v5.0)**

![Version Desktop](https://img.shields.io/badge/desktop-v4.1-blue?style=flat-square)
![Version Mobile](https://img.shields.io/badge/mobile-v5.0-green?style=flat-square)
![Status](https://img.shields.io/badge/status-production-green?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)
![Platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20Linux%20%7C%20macOS%20%7C%20Android%20%7C%20iOS-purple?style=flat-square)

---

## 📋 Índice
- [Elige Tu Versión](#-elige-tu-versión)
- [Características](#características-principales)
- [¿Para Quién?](#para-quién)
- [Inicio Rápido](#-inicio-rápido)
- [Versiones Disponibles](#-versiones-disponibles)
- [Estructura de la App](#estructura-de-la-app)
- [Entornos de Trabajo](#entornos-de-trabajo)
- [Almacenamiento de Datos](#-almacenamiento-de-datos)
- [Comandos Personalizados (COMPOSE)](#-comandos-personalizados-compose)
- [Guía de Uso](#guía-de-uso)
- [FAQs](#faqs)

---

## � Elige Tu Versión

### 💻 Desktop (v4.1) - Recomendado para PC/Laptop
**Mejor para:** Trabajo en escritorio, múltiples monitores, uso intensivo  
**Archivo:** `IT_Toolkit_v4.html`

✅ Diseño optimizado para pantallas grandes  
✅ Sidebar fijo de 270px  
✅ Grids de 2-3 columnas  
✅ Ideal para copiar comandos al terminal abierto  
✅ 100% funcional offline desde pendrive  

**[📥 Abrir IT_Toolkit_v4.html](IT_Toolkit_v4.html)**

---

### 📱 Mobile PWA (v5.0) - Recomendado para Móviles/Tablets
**Mejor para:** Soporte in-situ, trabajo de campo, tablets, smartphones  
**Archivo:** `IT_Toolkit_v5.html`

✅ Responsive 100% (320px → ∞)  
✅ Drawer navigation con menú hamburguesa  
✅ Bottom navigation bar  
✅ Touch-optimized (botones 48px)  
✅ Instalable como PWA en Android/iOS  
✅ Service Worker para offline 100%  
✅ Compatible con Desktop también  

**[📥 Abrir IT_Toolkit_v5.html](IT_Toolkit_v5.html)** | **[📖 Guía Instalación PWA](INSTALL_v5.md)**

---

### 🤔 ¿Cuál Elegir?

| Situación | Versión Recomendada |
|-----------|---------------------|
| Trabajo diario en PC/Laptop | 💻 **Desktop v4.1** |
| Soporte técnico in-situ | 📱 **Mobile v5.0** |
| Tablet (iPad, Surface) | 📱 **Mobile v5.0** |
| Smartphone (Android/iOS) | 📱 **Mobile v5.0** |
| Quiero instalar como app | 📱 **Mobile v5.0** |
| Uso en pendrive USB | 💻 **Desktop v4.1** (o ambas) |
| Varios dispositivos | 💻 + 📱 **Ambas** |

**Nota:** Ambas versiones son 100% compatibles entre sí (localStorage, favoritos, comandos personalizados).

---

## �🚀 Características Principales

### ⚡ **Velocidad & Portabilidad**
- ✅ Funciona **100% offline** sin requiere internet
- ✅ Ejecutable desde **pendrive USB** sin instalación
- ✅ Compatible con **Windows, Linux, macOS**
- ✅ Archivo HTML único, fácil de copiar

### 🎯 **Base de Datos Exhaustiva**
- ✅ **180+ comandos** preinstalados y categorizados
- ✅ Separación por **Sistema Operativo** (WIN | LIN | MAC)
- ✅ Filtros por **entorno** (Helpdesk, AD, Corporativo, Seguridad, Redes)
- ✅ Búsqueda rápida con **información contextual**

### 🛠️ **Personalización Total**
- ✅ **COMPOSE**: Crea tus propios comandos y guárdalos localmente
- ✅ **FAVORITOS**: Marca tus comandos más usados (⭐)
- ✅ **COPIAS RÁPIDAS**: Un clic para copiar al portapapeles (⧉)
- ✅ **HISTORIAL**: Rastrea tus últimos 200 comandos copiados

### 💾 **Sincronización Entre Equipos**
- ✅ **Descargar** tus comandos personalizados como JSON
- ✅ **Cargar** comandos desde otro equipo al instante
- ✅ **Sin límites** de tamaño o sincronización manual

### 🎨 **Interfaz Moderna**
- ✅ Tema **claro/oscuro** dinámico
- ✅ Responsivo y optimizado para **cualquier pantalla**
- ✅ **Tooltips informativos** en cada botón
- ✅ Diseño profesional y minimalista

---

## 👤 ¿Para Quién?

**IT TOOLKIT está diseñado para:**

| Rol | Beneficio |
|-----|-----------|
| 🏥 **Técnico Helpdesk N1** | Comandos básicos de diagnóstico sin buscar en internet |
| 🔧 **Técnico N2/N3** | Herramientas avanzadas de AD, servidores y seguridad |
| 🏛️ **Admin Corporativo** | Gestión de usuarios, GPO, replicación AD |
| 🔐 **Especialista en Seguridad** | Firewall, Defender, auditoría, certificados |
| 📡 **Admin de Redes** | Diagnóstico de red, VPN, DHCP, DNS |
| 🐧 **Sys Admin Linux/Mac** | Comandos específicos para Unix/BSD |

---

## 🏃 Inicio Rápido

### Opción A: Desktop (v4.1)

#### 1️⃣ **Obtener la App**
```bash
# Descargar desde pendrive o cloud
IT_Toolkit_v4.html
```

#### 2️⃣ **Abrir en Navegador**
```
Doble clic en IT_Toolkit_v4.html
# Se abre automáticamente en tu navegador predeterminado
```

#### 3️⃣ **Empezar a Usar**
- 🔍 **Buscar**: Escribe en el buscador superior (Ctrl+K)
- 🌐 **Filtrar por Entorno**: Selecciona tab arriba (General, AD, Corporativo, etc.)
- 💻 **Filtrar por SO**: Usa barra SISTEMA (✓ TODOS, 🪟 WIN, 🐧 LIN, 🍎 MAC)
- ⭐ **Guardar Favoritos**: Haz clic en la estrella
- 📋 **Copiar Comando**: Haz clic en el botón ⧉

---

### Opción B: Mobile PWA (v5.0) 📱

#### 1️⃣ **Abrir en Navegador**
```bash
# Desktop o Mobile - Abre el archivo
IT_Toolkit_v5.html
```

#### 2️⃣ **Instalar como PWA (Opcional pero Recomendado)**

**En Android (Chrome/Edge):**
1. Toca menú ⋮ → "Agregar a pantalla de inicio"
2. Confirma la instalación
3. Aparecerá como app en tu launcher

**En iOS (Safari):**
1. Toca botón Compartir 🔼
2. "Agregar a pantalla de inicio"
3. Dale un nombre y confirma

**En Desktop (Chrome/Edge):**
1. Click en ⊕ en la barra de direcciones
2. "Instalar IT Support Toolkit"
3. Se instalará como app independiente

📖 **[Guía completa de instalación PWA](INSTALL_v5.md)**

#### 3️⃣ **Navegar en Mobile**
- 🍔 **Menú Hamburguesa (☰)**: Abre el drawer lateral
- 📊 **Bottom Navigation**: 5 accesos rápidos siempre visibles
  - 🏠 Inicio | 🔍 Buscar | ⭐ Favoritos | 🧰 Tools | ☰ Menú
- 👆 **Touch-Friendly**: Botones grandes optimizados para táctil

---

### 4️⃣ **Crear Comandos Personalizados** (Ambas versiones)
- Ve a la sección **"Mis Comandos"**
- Completa el formulario COMPOSE
- El comando se guarda automáticamente en tu navegador
- 💾 Descárgalo para llevarlo a otros equipos

---

## 📦 Versiones Disponibles

### 💻 Versión Desktop: **v4.1** (Enero 2026)
- ✅ Filtros refactorizados y optimizados
- ✅ UI mejorada con barra SISTEMA independiente
- ✅ Botón de ayuda para activar/desactivar tooltips
- ✅ Plataforma estable y robusta
- 💻 **Optimizada para DESKTOP**
- 📄 **Archivo:** `IT_Toolkit_v4.html`

**[📖 Documentación completa](docs/v4/CHANGELOG_v4.1.md)**

---

### 📱 Versión Mobile PWA: **v5.0** (Febrero 2026) ✨ **NUEVO**

#### **MOBILE-FIRST IMPLEMENTATION**

La v5 transforma IT Toolkit en una **Progressive Web App (PWA)** totalmente responsive:

| Feature | Estado |
|---------|--------|
| Diseño Responsive | ✅ **Completado** |
| Drawer Navigation | ✅ **Completado** |
| Bottom Navbar Móvil | ✅ **Completado** |
| Touch Optimization (48px) | ✅ **Completado** |
| PWA (Offline/Install) | ✅ **Completado** |
| Service Worker | ✅ **Completado** |
| Manifest.json | ✅ **Completado** |
| Android/iOS Compatible | ✅ **Completado** |
| Gestures (Swipe) | 🔄 Roadmap v5.1 |
| Voice Search | 🔄 Roadmap v5.1 |

#### 📊 Comparación v4.1 vs v5.0

```
ASPECTO                 v4.1         v5.0
─────────────────────────────────────────────
Dispositivos           Desktop       Desktop + Mobile + Tablet
Responsivo             Parcial       Total (mobile-first)
Sidebar                Fix (270px)   Drawer móvil
Navigación Bot          ✗             ✅ (Móvil)
Tamaño botones          32-44px       48px+ (táctil)
Pantalla búsqueda       Normal        Fullscreen móvil
Offline                 Básico        PWA completo
Instalable              ✗             ✅ App-like
Lighthouse              N/A           >90
Plataformas             Win/Mac/Lx    + iOS/Android
```

#### 🎯 Beneficios de v5
- 📱 **Funciona en cualquier dispositivo** (320px → ∞)
- ⚡ **Instalable como app** (sin app store)
- 🔌 **Offline 100% funcional** con Service Worker
- 👆 **Optimizado para tablets y teléfonos**
- 🚀 **Performance mejorado** (PWA completo)
- 🎨 **UI táctil-friendly** (botones 48x48px mínimo)
- 🍔 **Drawer navigation** deslizable
- 📊 **Bottom nav bar** con 5 accesos rápidos
- 🔄 **100% compatible** con v4.1 (localStorage compartido)

#### 📄 Archivos v5.0
- 📱 **IT_Toolkit_v5.html** - Aplicación principal
- ⚙️ **manifest.json** - Configuración PWA
- 🔧 **service-worker.js** - Cache offline
- 📖 **INSTALL_v5.md** - Guía de instalación
- 📋 **RELEASE_v5_SUMMARY.md** - Resumen de construcción

#### 🚀 Estado: **LANZADO** (Febrero 2026)

**[📖 Guía de Instalación](INSTALL_v5.md)** | **[📋 Roadmap Detallado](docs/v5/ROADMAP_v5_MOBILE.md)** | **[✅ Checklist Técnico](docs/v5/CHECKLIST_v5_TECHNICAL.md)**

---

## �📐 Estructura de la App

### **Jerarquía de Navegación**

```
IT TOOLKIT v4
│
├── 🎯 ENTORNOS / CONTEXTOS (Tabs superiores)
│   ├── ⚡ General (Todos los comandos sin filtrado)
│   ├── 🏢 Active Directory (Herramientas de dominio)
│   ├── 🏛️ Corporativo (Gestión empresarial)
│   ├── 🎧 Service Desk (Soporte y helpdesk)
│   ├── 🔐 Seguridad (Firewall, defensa, auditoría)
│   └── 📡 Redes (Diagnóstico y configuración)
│
├── 💻 SISTEMA / SO (Barra de filtro - Independiente)
│   ├── ✓ TODOS (Muestra todos los SO)
│   ├── 🪟 WIN (Windows only)
│   ├── 🐧 LIN (Linux only)
│   └── 🍎 MAC (macOS only)
│
├── 📂 MENÚ LATERAL (Navegación Principal)
│   ├── 🏠 Inicio (Home)
│   ├── ⭐ Favoritos (Tus comandos favoritos)
│   ├── 📂 Historial (Últimos 200 comandos)
│   │
│   ├── N1 - HELPDESK
│   │   ├── 🌐 Red & Conectividad (Ping, DNS, Traceroute, Puertos)
│   │   ├── 💻 Sistema & SO (Info, Updates, Boot, RDP)
│   │   ├── 👤 Usuarios & Cuentas (Crear/editar usuarios)
│   │   └── ✅ Checklists (Protocolos paso a paso)
│   │
│   ├── N2 - TÉCNICO
│   │   ├── 💾 Disco & Storage (Particiones, SMART, TRIM)
│   │   ├── ⚙️ Procesos & Servicios (Top CPU, Tareas)
│   │   ├── 📋 Logs & Eventos (Event Viewer, búsquedas)
│   │   └── 🔗 Acceso Remoto (RDP, SSH, PowerShell)
│   │
│   ├── N3 - ESPECIALISTA
│   │   ├── 🏢 Active Directory (Usuarios, GPO, Replicación)
│   │   ├── 🔐 Seguridad (Firewall, Defender, UAC)
│   │   ├── 🖥️ Servidores & VM (IIS, Hyper-V, Docker)
│   │   └── 📜 Scripts PowerShell (Automatización)
│   │
│   └── 🧰 Software & Herramientas (Portables útiles)
│
└── 🛠️ FUNCIONALIDADES
    ├── 📝 Mis Comandos (COMPOSE - personalización)
    ├── ⭐ Favoritos (Quick access)
    ├── 📂 Historial (Auditoría de uso)
    └── 🧮 Utilidades (Calculadoras, timers, reportes)
```

### **Niveles de Soporte**

```
┌─────────────────────────────────────────────────────┐
│ 🏥 N1 - HELPDESK (Helpdesk Edition)                │
│ • Diagnóstico básico de red y sistema              │
│ • Gestión de usuarios locales                       │
│ • Checklists y protocolos comunes                   │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 🔧 N2 - TÉCNICO (Helpdesk+, especialización)       │
│ • Administración de discos y almacenamiento        │
│ • Gestión de procesos y servicios                   │
│ • Análisis de logs y eventos                        │
│ • Acceso remoto (RDP, SSH)                          │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 👨‍💼 N3 - ESPECIALISTA (Corporativo)                  │
│ • Active Directory y gestión de dominio             │
│ • Seguridad avanzada y políticas                    │
│ • Administración de servidores                      │
│ • Scripting y automatización                        │
└─────────────────────────────────────────────────────┘
```

---

## 🌍 Entornos de Trabajo

### **¿Qué es un "Entorno"?**

Los entornos son **contextos temáticos** que actúan como vistas tematizadas de la aplicación. Cambiar de entorno altera el color del tema pero **NO filtra los comandos** (el filtrado por SO es independiente).

**Nota importante:** La Opción 1+2 fue implementada - El filtrado por SO es **completamente independiente** de los tabs de entorno. Puedes cambiar de entorno sin afectar tu selección de SO.

| Entorno | 🎯 Propósito | 👥 Ideal Para | 📊 Descripción |
|---------|------------|-------------|---|
| **⚡ General** | Vista predeterminada | Exploración, referencia rápida | Todos los comandos, sin filtrado |
| **🏢 Active Directory** | Gestión de dominio | Domain admin, AD specialist | Usuarios AD, GPO, replicación, auditoría |
| **🏛️ Corporativo** | Entorno empresarial | Admin corporativo, CTO | Backup, políticas, licencias, compliance |
| **🎧 Service Desk** | Soporte al usuario | Help Desk, soporte técnico | Diagnóstico, tickets, resets |
| **🔐 Seguridad** | Seguridad y defensa | Security team, CISO | Firewall, antivirus, auditoría, UAC |
| **📡 Redes** | Gestión de redes | Network admin, engineer | TCP/IP, DNS, DHCP, VPN, routing |

### **Filtro de SO - INDEPENDIENTE**

Usa la barra **SISTEMA** (bajo los tabs de entorno) para filtrar por Sistema Operativo:
- **✓ TODOS** - Muestra comandos para Windows, Linux y macOS
- **🪟 WIN** - Solo comandos de Windows
- **🐧 LIN** - Solo comandos de Linux
- **🍎 MAC** - Solo comandos de macOS

**Esto es independiente del entorno seleccionado**, lo que permite:
- Estar en cualquier entorno temático
- Elegir qué SO ver
- Los filtros se combinan sin conflictos

---

## 📊 Almacenamiento de Datos

### **Ubicaciones de Almacenamiento**

Toda la información se guarda **localmente en el navegador** usando `localStorage` de HTML5.

```
┌──────────────────────────────────────────────┐
│         NAVEGADOR DEL USUARIO                │
├──────────────────────────────────────────────┤
│                                              │
│  localStorage (Hasta 5-10 MB)                │
│  ├─ itk_custom_cmds      [Tu COMPOSE]       │
│  ├─ itk_history          [Últimos 200]      │
│  ├─ itk_favs             [⭐ Favoritos]     │
│  ├─ itk_notes            [📝 Notas]         │
│  ├─ itk_incidents        [🎯 Incidentes]    │
│  ├─ itk_theme            [🌙 Tema]          │
│  └─ itk_env              [ENTORNO actual]    │
│                                              │
└──────────────────────────────────────────────┘
```

### **Mapeo de Datos**

| Clave | Contenido | Estructura | Límite | Notas |
|-------|-----------|-----------|--------|-------|
| `itk_custom_cmds` | Comandos personalizados | Array de objetos | Ilimitado | Se carga al inicio |
| `itk_history` | Historial de comandos | Array de objetos | 200 entradas | Se auto-limpia |
| `itk_favs` | Comandos favoritos | Array de objetos | Ilimitado | Acceso rápido |
| `itk_notes` | Notas del usuario | Array de JSON | Ilimitado | Persistencia manual |
| `itk_incidents` | Incidentes SLA | Array de JSON | Ilimitado | Tracking de tickets |
| `itk_theme` | Preferencia de tema | String (dark/light) | 1 entrada | Se carga al inicio |
| `itk_env` | Entorno seleccionado | String | 1 entrada | Se carga al inicio |

---

## 💾 Comandos Personalizados (COMPOSE)

### **¿Qué es COMPOSE?**

**COMPOSE** es la interfaz que permite **crear y guardar tus propios comandos** personalizados. Ideal para:

- Comandos que usas frecuentemente pero no están en la BD
- Comandos específicos de tu infraestructura
- Aliases y variaciones personalizadas
- Documentar procesos internos

### **Estructura de un Comando Personalizado**

Cuando guardas un comando en COMPOSE, se almacena en `localStorage.itk_custom_cmds` con esta estructura:

```json
{
  "id": "cc_1708626000000",
  "s": "n1-red",
  "t": "tn",
  "os": "win lin mac",
  "sec": "Red",
  "name": "🔵 Mi Comando Custom",
  "tag": "CUSTOM",
  "desc": "Descripción técnica de qué hace",
  "code": "🪟 comando-windows\n🐧 comando-linux\n🍎 comando-macos"
}
```

### **Campos Explicados**

| Campo | Tipo | Ejemplo | Descripción |
|-------|------|---------|-------------|
| `id` | String | `cc_1708626000000` | ID único basado en timestamp |
| `s` | String | `n1-red` | Sección destino (n1-red, n1-sis, n2-disk, n3-ad) |
| `t` | String | `tn` | Tipo (tn=network, ts=system, etc) |
| `os` | String | `win lin mac` | Plataformas soportadas (space-separated) |
| `sec` | String | `Red` | Nombre descriptivo de sección |
| `name` | String | `GPO Audit Completo` | Nombre del comando |
| `tag` | String | `POLICY` | Etiqueta/categoría operativa |
| `desc` | String | `Audita todas las GPO aplicadas` | Descripción breve |
| `code` | String | `🪟 gpresult /H\n🐧 ...` | Código multilinea con emojis de SO |

### **Ciclo de Vida de un Comando COMPOSE**

```
┌─────────────────────────┐
│ 1. CREAR               │
│ ├─ Abrir "Mis Comandos"│
│ ├─ Llenar formulario   │
│ └─ Clic "GUARDAR"      │
└──────────┬──────────────┘
           ↓
┌─────────────────────────┐
│ 2. GUARDAR             │
│ ├─ saveCustomCmd()     │
│ ├─ Generar ID único    │
│ ├─ Agregar a array     │
│ └─ saveCustomCmds()    │
└──────────┬──────────────┘
           ↓
┌─────────────────────────┐
│ 3. ALMACENAR           │
│ └─ localStorage.setItem │
│    ('itk_custom_cmds') │
└──────────┬──────────────┘
           ↓
┌─────────────────────────┐
│ 4. USAR                │
│ ├─ Aparece en lista    │
│ ├─ Buscable            │
│ ├─ Copiable            │
│ └─ Editable/Deleteable │
└──────────┬──────────────┘
           ↓
┌─────────────────────────┐
│ 5. SINCRONIZAR         │
│ ├─ 💾 Descargar JSON   │
│ ├─ 📤 Cargar en otros  │
│ └─ Llevar en pendrive  │
└─────────────────────────┘
```

### **Ejemplo Práctico: Crear comando personalizado**

**Escenario**: Necesitas auditar GPO cada semana, siempre con los mismos parámetros.

```
Nombre: "Auditar GPO Completo"
Descripción: "Genera reporte HTML de GPO aplicadas e historial"
Sección: "Active Directory"
Tag: "POLICY"
Plataforma: Windows

Código:
🪟 gpupdate /force
🪟 gpresult /H C:\gpo-report_$(Get-Date -f yyyyMMdd).html
🪟 start C:\gpo-report_*.html
```

**Ahora:**
- ✅ Lo tendrás siempre disponible en "Mis Comandos"
- ✅ Lo podrás copiar en un clic
- ✅ Podrás descargarlo como JSON
- ✅ Podrás llevarlo a cualquier otro equipo

---

## 📖 Guía de Uso

### **Búsqueda Rápida**

```
Atajo: Ctrl+K
├─ Escribe cualquier palabra clave
├─ Filtra en tiempo real
├─ Busca en nombre, descripción, código
└─ Presiona Enter para ir al comando
```

**Ejemplos de búsquedas:**
- `ping` → Todos los comandos con Ping
- `dns` → DNS Lookup, Flush DNS, etc
- `gpo` → Todos los comandos GPO
- `backup` → Backup, restore, snapshots

### **Copiar Comandos**

1. Haz clic en el botón **⧉** (Copiar)
2. El comando se copia al portapapeles **con emojis**
3. Se registra automáticamente en **Historial**
4. Pega en tu terminal/PowerShell

**Ventaja**: Los emojis (🪟🐧🍎) indican el SO, útil si trabajas multisistema.

### **Crear Favoritos**

1. Haz clic en **⭐** en cualquier tarjeta
2. Se agrega a tu sección **FAVORITOS**
3. Acceso rápido sin buscar
4. Persiste entre sesiones

### **Gestionar Mis Comandos**

```
CREAR
├─ Ve a "Mis Comandos" (Sidebar)
├─ Completa COMPOSE
└─ Guardar

EDITAR
├─ Haz clic en el comando en lista
├─ Modifica campos
└─ Guardar

ELIMINAR
├─ Haz clic en "🗑️ Eliminar"
├─ Confirma
└─ Listo

DESCARGAR (Llevar a otro equipo)
├─ Botón "💾 Descargar Mis Comandos"
├─ Se descarga JSON
└─ Guarda en pendrive

CARGAR (Desde otro equipo)
├─ Botón "📤 Cargar Comandos"
├─ Selecciona archivo JSON
└─ Se importan automáticamente
```

### **Sincronizar Entre Equipos**

**Equipo A (Creas comandos):**
```
1. Diseña en COMPOSE
2. Botón "💾 Descargar Mis Comandos"
3. Se descarga → mis-comandos-2024-02-23.json
4. Copia al pendrive
```

**Equipo B (Recuperas comandos):**
```
1. Abre IT_Toolkit desde el pendrive
2. Botón "📤 Cargar Comandos"
3. Selecciona mis-comandos-2024-02-23.json
4. ¡Todos tus comandos aparecen!
```

---

## 🎨 Interfaz & Funcionalidades

### **Temas**

```
🌙 Modo Oscuro (Predeterminado)
   └─ Colores oscuros, menos fatiga ocular
   └─ Ideal para ambientes con poca luz
   └─ Alto contraste

☀️ Modo Claro
   ├─ Colores claros, estilo diario
   ├─ Mejor para proyectores
   └─ Contraste optimizado
```

**Cambiar tema**: Clic en botón 🌙/☀️ (esquina superior)

### **Responsivo**

- ✅ Funciona en **desktop 1920x1080**
- ✅ Funciona en **tablets 768px**
- ✅ Funciona en **móviles 375px** (aunque no es ideal)

### **Elementos de UI**

```
┌─────────────────────────────────────────┐
│ TOP BAR                                 │
├─ Logo IT TOOLKIT                       │
├─ ENTORNO tabs (General, Windows, etc)  │
├─ BUSCADOR                              │
└─ Botones: Tema 🌙, Menú ☰             │
│
├─────────────────────────────────────────┤
│ SIDEBAR IZQUIERDA                       │
├─ Navegación por niveles (N1, N2, N3)  │
├─ Secciones específicas                 │
├─ Contador de items (Favs, Historial)  │
└─ Collapsible en móvil                  │
│
├─────────────────────────────────────────┤
│ CONTENIDO PRINCIPAL                     │
├─ Grid de tarjetas de comandos          │
├─ Filtros por SO (Windows, Linux, Mac)  │
├─ Tarjeta = Nombre + Desc + Código      │
└─ Botones: ⭐ Favorito, ⧉ Copiar        │
│
└─────────────────────────────────────────┘
```

### **Tarjeta de Comando**

```
┌─────────────────────────────────────────┐
│ 🔵 Ping Básico              [ICMP]   ⭐⧉ │
├─────────────────────────────────────────┤
│ Verifica conectividad y mide latencia   │
│ hacia un host remoto.                   │
├─────────────────────────────────────────┤
│ 🪟 ping google.com -t                   │
│ 🐧 ping -c 4 google.com                 │
│ 🍎 ping -c 4 -i 0.5 google.com          │
├─────────────────────────────────────────┤
│                    🪟WIN 🐧LIN 🍎MAC   │
└─────────────────────────────────────────┘
```

---

## ⚙️ Configuración Técnica

### **Requisitos**

```
Navegador  → Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
Memoria    → Mínimo 50 MB RAM disponible
Almacén    → localStorage habilitado (generalmente por defecto)
Conexión   → NO REQUERIDA (100% offline)
Pendrive   → Mínimo 2 MB de espacio libre
```

### **Inicialización**

Al abrir `IT_Toolkit_v4.html`:

```javascript
1. Carga COMMANDS_DB (180+ comandos, 100KB)
2. Lee localStorage (CUSTOM_CMDS, historial, etc)
3. Aplica tema guardado (dark/light)  
4. Carga entorno seleccionado
5. Establece filtro SO a "TODOS" (usuario puede cambiar)
6. Renderiza interfaz
7. Listo para usar ✓
```

**Tiempo de carga**: ~500ms

### **Ciclo de Guardar Datos**

```
EVENTO DE USUARIO
    ↓
saveCustomCmd()
    ↓
Validar datos
    ↓
Generar ID único
    ↓
Agregar a array CUSTOM_CMDS[]
    ↓
saveCustomCmds()
    ↓
localStorage.setItem('itk_custom_cmds', JSON.stringify(...))
    ↓
Toast "✅ Guardado"
    ↓
Renderizar interfaz
```

### **CAMBIOS RECIENTES (v4.1)**

✅ **Opción 1+2 Implementada:**
- Eliminados tabs redundantes: 🪟 Windows, 🐧 Linux, 🍎 macOS
- Mantienen tabs temáticos: ⚡ General + 5 contextos
- Filtro SO ahora **INDEPENDIENTE** en barra SISTEMA
- NO hay sincronización automática entre entorno y SO
- Mejor UX: Usuario controla qué ve sin conflictos

---

## 🆘 FAQs

### **General**

**P: ¿Cuál es la diferencia entre v4.1 y v5.0?**
> R: 
> - **v4.1 (Desktop)**: Optimizada para PC/Laptop, sidebar fijo, grids de 2-3 columnas
> - **v5.0 (Mobile PWA)**: Responsive 100%, drawer navigation, bottom nav bar, instalable como app
> - **Compatibilidad**: Ambas versiones comparten localStorage (favoritos, comandos personalizados, historial)
> - **Recomendación**: Usa v4.1 en escritorio y v5.0 en móviles/tablets (o instala v5 como PWA para todo)

**P: ¿Puedo usar ambas versiones?**
> R: ¡Sí! Ambas son 100% compatibles. Puedes usar v4.1 en tu PC y v5.0 en tu móvil, compartiendo el mismo localStorage si es el mismo navegador, o sincronizando comandos personalizados mediante JSON.

**P: ¿Necesito Internet para usar IT TOOLKIT?**
> R: No. Ambas versiones funcionan 100% offline. Solo necesitas un navegador web. v5.0 además tiene Service Worker para cache offline mejorado.

**P: ¿Dónde se guardan mis comandos personalizados?**
> R: En `localStorage` del navegador. Persisten entre sesiones pero son locales del navegador/equipo.

**P: ¿Puedo usar la misma copia en múltiples equipos?**
> R: Sí. Es un archivo HTML único. Cópialo a tu pendrive y abre desde cualquier lado.

**P: ¿Qué pasa si borro el historial del navegador?**
> R: Se borran tus comandos personalizados. Por eso te recomendamos descargar JSON regularmente.

**P: ¿Hay límite de comandos personalizados que puedo crear?**
> R: No hay límite teórico. localStorage típicamente soporta 5-10 MB, que son ~50,000 comandos promedio.

### **Sincronización**

**P: Creé un comando en la Oficina (PC1), ¿puedo usarlo en Casa (PC2)?**
> R: Sí. 
> 1. En PC1: Botón "💾 Descargar Mis Comandos"
> 2. Copia el JSON a tu pendrive
> 3. En PC2: Botón "📤 Cargar Comandos"
> 4. Selecciona el JSON
> 5. ¡Listo!

**P: ¿Se sincronizan automáticamente los cambios?**
> R: No. La sincronización es manual (descargar/cargar JSON). Ideal para workflow de pendrive.

### **Comandos**

**P: ¿Por qué algunos comandos tienen múltiples emojis (🪟🐧🍎)?**
> R: Porque funcionan en Windows, Linux y macOS. Elige la que te corresponda según tu SO.

**P: Busqué "GPO" pero no encuentro el comando que necesito.**
> R: Prueba con otras palabras: "policy", "group", "directiva", "auditar". O créalo en COMPOSE si es específico.

**P: ¿Can I edit the commands in the database?**
> R: No directamente. Pero puedes crear variaciones en COMPOSE. La BD base es de solo lectura.

### **Técnico**

**P: ¿Cuál es la diferencia entre `itk_custom_cmds` e `itk_history`?**
> - `itk_custom_cmds`: Comandos que TÚ creaste y guardaste (editable, límite: ilimitado)
> - `itk_history`: Comandos que COPIASTE (automático, límite: 200 más recientes)

**P: ¿Qué es "Corporativo"?**
> R: Un entorno filtrado para herramientas empresariales: Backup, GPO, licencias, compliance, sincronización, etc. Ideal para CTO/Admin Corporativo.

**P: ¿Puedo exportar el historial?**
> R: Actualmente no, pero puedes acceder a él vía DevTools (F12 → Application → localStorage).

---

## 📑 Mapa de Secciones

### **N1 - HELPDESK**

| Sección | Comandos | Ejemplos |
|---------|----------|----------|
| 🌐 **Red & Conectividad** | 16 | Ping, Traceroute, DNS, Puertos, WiFi, ARP |
| 💻 **Sistema & SO** | 20 | Info Sistema, Updates, Boot, RDP, BitLocker |
| 👤 **Usuarios & Cuentas** | 12 | Crear usuario, Reset pwd, GPO, Sessiones |
| ✅ **Checklists** | 8 | Procedimientos paso a paso |

### **N2 - TÉCNICO**

| Sección | Comandos | Ejemplos |
|---------|----------|----------|
| 💾 **Disco & Storage** | 16 | Particiones, SMART, TRIM, Copia, NTFS |
| ⚙️ **Procesos & Servicios** | 8 | Top CPU, Servicios, Tareas programadas |
| 📋 **Logs & Eventos** | 12 | Event Viewer, búsqueda, exportar, BSOD |
| 🔗 **Acceso Remoto** | 5 | RDP, SSH, PowerShell Remoting, SCP |

### **N3 - ESPECIALISTA**

| Sección | Comandos | Ejemplos |
|---------|----------|----------|
| 🏢 **Active Directory** | 10 | Usuarios AD, GPO, Replicación, Audit |
| 🔐 **Seguridad** | 12 | Firewall, Defender, UAC, Auditpol |
| 🖥️ **Servidores & VM** | 7 | IIS, DNS, Hyper-V, Docker, Exchange |
| 📜 **Scripts PowerShell** | 6 | Automatización, funciones reutilizables |

---

## 📞 Soporte & Feedback

**Versión**: 4.0  
**Última actualización**: 2026-02-23  
**Licencia**: MIT  
**Plataforma**: Standalone HTML5  

### **Sugerencias de Mejora**

Si tienes ideas:
1. Crear nuevo comando en COMPOSE
2. Tomar nota del uso actual
3. Proponer cambio/mejora

### **Reportar Problemas**

Si encuentras un bug:
1. Anota los pasos para reproducir
2. Revisa F12 → Console (errores JavaScript)
3. Intenta vaciar localStorage y reintentar

---

## 🎯 Roadmap Futuro

- 🚀 **v4.1**: Migración a IndexedDB (más espacio)
- 🌐 **v4.2**: Función export completo (favs + historial)
- ☁️ **v5.0**: Sincronización en nube (Google Drive/Dropbox)
- 📱 **v5.1**: Aplicación mobile nativa
- 🤖 **v6.0**: IA para sugerir comandos (ChatGPT integration)

---

## 📄 Licencia

MIT License - Libre para usar, modificar y distribuir.

---

<div align="center">

### 🔧 **IT TOOLKIT v5.0 Mobile + v4.1 Desktop** 🔧

**Hecho por técnico, para técnicos. Ahora en cualquier dispositivo.**

Desktop: [📥 IT_Toolkit_v4.html](IT_Toolkit_v4.html)  
Mobile: [📱 IT_Toolkit_v5.html](IT_Toolkit_v5.html) | [📖 Guía PWA](INSTALL_v5.md)

Descárgalo hoy y llévalo a todos lados en tu pendrive o instálalo como app en tu móvil.

</div>

---

## 📂 Estructura del Proyecto

```
📁 IT Support Toolkit/
│
├── 📱 IT_Toolkit_v5.html          ← v5.0 Mobile PWA (Responsive, instalable)
├── 💻 IT_Toolkit_v4.html          ← v4.1 Desktop (Optimizado PC/Laptop)
│
├── ⚙️  manifest.json               ← Configuración PWA
├── 🔧 service-worker.js           ← Cache offline para PWA
│
├── 📖 README.md                   ← Este archivo
├── 📱 INSTALL_v5.md               ← Guía instalación PWA
├── 📋 RELEASE_v5_SUMMARY.md       ← Resumen construcción v5
│
└── 📁 docs/
    ├── 📁 v4/                     ← Documentación v4.1
    │   ├── CHANGELOG_v4.1.md
    │   ├── ANALISIS_FILTROS.md
    │   └── DOCUMENTACION_ALMACENAMIENTO.md
    │
    └── 📁 v5/                     ← Documentación v5.0
        ├── ROADMAP_v5_MOBILE.md
        ├── CHECKLIST_v5_TECHNICAL.md
        ├── SPRINT_PLAN_v5.md
        └── V5_SUMMARY.md
```

### Archivos Principales

| Archivo | Descripción | Uso |
|---------|-------------|-----|
| `IT_Toolkit_v4.html` | Versión Desktop optimizada | PC, Laptop, pantallas grandes |
| `IT_Toolkit_v5.html` | Versión Mobile PWA responsive | Móviles, tablets, cualquier tamaño |
| `manifest.json` | Metadatos PWA (iconos, config) | Requerido para instalar v5 como app |
| `service-worker.js` | Cache offline | Permite funcionar sin internet (v5) |
| `INSTALL_v5.md` | Guía de instalación v5 | Cómo instalar PWA en Android/iOS |

---

**Última actualización**: 2026-02-23  
**Versiones actuales**: Desktop v4.1 | Mobile v5.0  
**Idioma**: Español (Spanish)
