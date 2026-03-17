# 📦 Sistema de Gestión de Cementerios — Inventario

## 📌 Descripción

Este proyecto implementa un sistema básico de **gestión de inventario** utilizando JavaScript, aplicado al dominio de un **Sistema de Gestión de Cementerios**.

Permite administrar espacios como tumbas, nichos y mausoleos mediante el uso de arrays y sus principales métodos para manipulación, búsqueda y transformación de datos.

---

## 🎯 Objetivo

Aplicar los métodos de arrays vistos en clase para:

* Gestionar un inventario de espacios funerarios
* Realizar operaciones de mutación (agregar, eliminar, modificar)
* Buscar y filtrar información
* Transformar datos con `map`
* Generar reportes claros en consola

---

## 🏗️ Estructura del Proyecto

```bash id="g4k92f"
3-proyecto/
└── starter/
    └── script.js
```

---

## 📊 Modelo de Datos

Cada elemento del inventario representa un espacio del cementerio con las siguientes propiedades:

* `id`: identificador único
* `name`: nombre del espacio
* `type`: tipo (nicho, familiar, mausoleo, etc.)
* `price`: costo del espacio (propiedad numérica)
* `capacity`: capacidad de ocupación
* `active`: estado (activo/inactivo) (propiedad booleana)

---

## ⚙️ Funcionalidades Implementadas

### 🔧 Métodos de mutación

* `push` → agregar nuevos espacios
* `unshift` → agregar espacios prioritarios
* `splice` → eliminar por posición
* `pop` → eliminar el último elemento

---

### 🔍 Métodos de búsqueda y filtrado

* `find` → buscar un espacio por nombre
* `filter` → obtener espacios activos

---

### 🔁 Métodos de iteración

* `forEach` → recorrer e imprimir el inventario
* `map` → transformar datos (nombres, precios)

---

### 📸 Spread Operator

Se utiliza `...` para crear copias del inventario sin modificar el original (snapshot).

---

## ▶️ Ejecución

Para ejecutar el proyecto:

```bash id="r8m2zp"
node script.js
```

---

## 📈 Ejemplo de salida

```id="l29sdf"
==================================================
📦 GESTIÓN DE SISTEMA DE GESTIÓN DE CEMENTERIOS
==================================================

📋 Inventario inicial (5 espacios):
🪦 [1] Tumba Familiar Gómez — familiar — 💰 $500000 — Capacidad: 4 — Activo
...

--- Operaciones de mutación ---
✅ Agregado: Tumba Nueva López
⭐ Prioritario agregado: Mausoleo VIP
🗑️ Eliminado: Lote Pérez
❌ Eliminado último: Tumba Nueva López

--- Búsqueda y filtrado ---
🔍 Búsqueda: Nicho 101-A
✅ Activos: 3

--- Transformación con map ---
📛 Nombres: [ ... ]
💰 Precios con incremento: [ ... ]

--- Resumen final ---
Total en inventario: 5 espacios
Activos: 3 | Inactivos: 2

==================================================
✅ Reporte completado
==================================================
```

---

## 🧠 Conceptos Aplicados

* Manipulación de arrays
* Programación funcional básica
* Uso de funciones reutilizables
* Inmutabilidad con spread operator
* Buenas prácticas de código

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de la **Semana 08 — Gestión de Inventario con Arrays**.

---

## ✅ Estado

✔ Cumple todos los requisitos del proyecto
✔ Código funcional sin errores
✔ Listo para evaluación

---
