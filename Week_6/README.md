# 🪦 Proyecto Semana 06: Reporte con Bucles  
## Sistema de Gestión de Cementerios

---

## 🎯 Objetivo

Desarrollar un sistema de reporte en JavaScript que procese una colección de datos utilizando diferentes tipos de bucles (`for...of`, `for clásico`) y estructuras de control como contadores y acumuladores.

---

## 🏛️ Dominio del Proyecto

El proyecto se basa en un **sistema de gestión de cementerios**, donde se administran diferentes tipos de lotes o espacios funerarios.

Cada lote tiene:
- Un nombre o identificador
- Una categoría (tipo de lote)
- Un valor numérico que representa su **capacidad**

---

## 📊 Estructura de los Datos

Se define un array de objetos donde cada elemento representa un lote:

- 🪦 Lote individual → capacidad baja
- 👨‍👩‍👧 Lote familiar → capacidad media
- 🏛️ Mausoleo → capacidad alta

---

## ⚙️ Funcionalidades Implementadas

### 📌 1. Listado completo (`for...of`)
Se recorren todos los elementos para mostrar:
- Nombre del lote
- Categoría
- Capacidad

---

### 🔢 2. Conteo por categoría (`for...of`)
Se cuenta cuántos lotes existen por cada tipo:
- Individual
- Familiar
- Mausoleo

---

### ➕ 3. Totales y promedio (acumulador)
Se calcula:
- Total de capacidad de todos los lotes
- Promedio de capacidad

---

### 📈 4. Valor máximo y mínimo
Se identifica:
- Lote con mayor capacidad
- Lote con menor capacidad

---

### 📋 5. Reporte detallado (`for clásico`)
Se genera un reporte numerado donde cada lote se clasifica como:
- Sobre el promedio
- Bajo el promedio

---

## 🛠️ Tecnologías Utilizadas

- JavaScript (ES6+)
- Node.js

---

## ▶️ Cómo ejecutar el proyecto

1. Abrir la terminal
2. Ubicarse en la carpeta del proyecto
3. Ejecutar:

```bash
node starter/script.js