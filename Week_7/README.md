# 🪦 Sistema de Gestión de Cementerios

## 📌 Descripción

Este proyecto consiste en una librería de funciones reutilizables desarrollada en JavaScript, aplicada al dominio de un **Sistema de Gestión de Cementerios**.

Permite gestionar información sobre tumbas, nichos, mausoleos y lotes, incluyendo su estado, tipo y costos de mantenimiento. Además, genera un reporte automatizado utilizando funciones puras, validaciones y formateo de datos.

---

## 🎯 Objetivo del Proyecto

Aplicar conceptos fundamentales de JavaScript como:

* Funciones puras
* Arrow functions
* Parámetros por defecto
* Separación de lógica y presentación
* Uso de estructuras de control (`for...of`)
* Buenas prácticas de código (clean code)

---

## 🏗️ Estructura del Proyecto

```
3-proyecto/
└── starter/
    └── script.js
```

---

## ⚙️ Funcionalidades

### 1. 📊 Datos del dominio

Se define un conjunto de espacios del cementerio (tumbas, nichos, mausoleos, etc.) con propiedades como:

* `id`: identificador único
* `name`: nombre del espacio
* `category`: tipo (nicho, familiar, mausoleo, etc.)
* `value`: costo de mantenimiento
* `active`: estado (activo/inactivo)

---

### 2. 🧾 Función de formato

Convierte cada elemento en un texto legible para mostrar en consola.

```js
const formatItem = (grave) =>
  `🪦 ${grave.name} [${grave.category}] — 💰 $${grave.value}`;
```

---

### 3. 🧮 Función de cálculo

Calcula el valor total con un recargo opcional (por ejemplo, mora o mantenimiento adicional).

```js
const calculateValue = (baseValue, surchargePct = 0) =>
  +(baseValue * (1 + surchargePct / 100)).toFixed(2);
```

---

### 4. ✅ Función de validación

Determina si un espacio está activo.

```js
const isValid = (grave) => grave.active === true;
```

---

### 5. 🔧 Función con parámetro por defecto

Formatea valores monetarios usando una moneda por defecto (COP).

```js
const formatWithDefault = (value, label = "precio", currency = "COP") => {
  return `${label}: ${currency} ${value.toLocaleString()}`;
};
```

---

### 6. 📋 Generación de reporte

El sistema:

* Lista todos los espacios
* Cuenta los espacios activos
* Calcula el total recaudado
* Muestra un resumen final

---

## ▶️ Ejecución

Para ejecutar el proyecto, usa Node.js:

```bash
node script.js
```

---

## 📈 Ejemplo de salida

```
═════════════════════════════════════════════
   REPORTE — Sistema de Gestión de Cementerios
═════════════════════════════════════════════

📋 Listado de espacios:
  1. 🪦 Tumba Familiar Gómez [familiar] — 💰 $500000
  2. 🪦 Nicho 102-A [nicho] — 💰 $150000
  ...

✅ Espacios activos: 3 / 5
Total recaudado con recargo: COP 2,310,000
═════════════════════════════════════════════
```

---

## 🧠 Conceptos aplicados

* Programación funcional básica
* Reutilización de código
* Separación de responsabilidades
* Manejo de arrays de objetos
* Uso de template literals

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de la **Semana 07 — Librería de Funciones Reutilizables**.

---

## ✅ Estado

✔ Proyecto funcional
✔ Cumple todos los requisitos del entregable
✔ Listo para evaluación

---
