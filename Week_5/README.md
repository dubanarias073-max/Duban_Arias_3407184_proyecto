# 🪦 Proyecto Semana 05: Clasificador  
## Sistema de Gestión de Cementerios

---

## 🎯 Objetivo

Desarrollar un sistema de clasificación utilizando estructuras condicionales en JavaScript (`if/else`, operador ternario, `switch`, `??` y `?.`), aplicado a un sistema de gestión de cementerios.

---

## 🏛️ Dominio del Proyecto

El proyecto se enfoca en la gestión de **lotes o espacios dentro de un cementerio**, permitiendo clasificar su estado, tipo y nivel de ocupación.

---

## ⚙️ Funcionalidades Implementadas

### 📌 1. Definición de datos del elemento
Se modela un lote del cementerio con las siguientes propiedades:
- Nombre o identificador del lote
- Estado (ocupado o disponible)
- Nivel de ocupación (valor numérico)
- Tipo de lote (individual, familiar, mausoleo)
- Información adicional opcional

---

### 📊 2. Clasificación con `if / else if / else`
Se clasifica el nivel de ocupación del lote en:
- Alta ocupación
- Ocupación media
- Baja ocupación

---

### 🔁 3. Estado con operador ternario
Se determina si el lote está:
- Ocupado
- Disponible

---

### 🔀 4. Clasificación de tipo con `switch`
Se identifica el tipo de lote:
- Tumba individual
- Lote familiar
- Mausoleo
- Tipo desconocido (por defecto)

---

### 🛟 5. Valores por defecto con `??`
Se manejan valores nulos o indefinidos para:
- Nombre del lote
- Información adicional

---

### 🔐 6. Acceso seguro con `?.`
Se accede de forma segura a propiedades del objeto opcional sin generar errores.

---

### 🧾 7. Ficha de salida
Se imprime un resumen en consola con:
- Nombre
- Estado
- Clasificación
- Tipo
- Detalles
- Responsable

---

## 🛠️ Tecnologías Utilizadas

- JavaScript (ES2020)
- Node.js

---

## ▶️ Cómo ejecutar el proyecto

1. Abrir la terminal
2. Navegar a la carpeta del proyecto
3. Ejecutar el siguiente comando:

```bash
node starter/script.js