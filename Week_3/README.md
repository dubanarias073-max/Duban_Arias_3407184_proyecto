# 🏛️ Proyecto Semana 03: Calculadora de Dominio

> **Dominio:** Sistema de Gestión de Cementerios  
> **Objetivo:** Construir una calculadora multi-operación aplicada al dominio, usando operadores aritméticos, de asignación compuesta, comparaciones estrictas y lógicos.

---

## 📋 Estructura del Proyecto


3-proyecto/
├── README.md ← Este archivo
├── starter/
│ └── script.js ← Tu script de calculadora de dominio
└── solution/
└── script.js ← Referencia del instructor (no copiar)


---

## 🎯 Objetivos del Script

- Calcular ingresos por venta de sepulturas o nichos.
- Determinar sepulturas ocupadas y disponibles.
- Aplicar descuentos o ajustes con operadores aritméticos y de asignación compuesta.
- Validar condiciones con comparación estricta (`===`, `!==`) y operadores lógicos (`&&`, `||`, `!`).
- Mostrar resultados claros y organizados en consola usando `console.log()`.

---

## 💡 Ejemplo de Operaciones Aplicadas

- **Ingresos por venta de nichos:**  
  `totalRevenue = gravesSold * PRICE_PER_GRAVE`  

- **Sepulturas restantes:**  
  `remainingGraves = MAX_GRAVES - OCCUPIED_GRAVES`  

- **Cálculo de mantenimiento:**  
  `maintenanceCost = OCCUPIED_GRAVES * COST_PER_GRAVE`  

- **Descuentos o promociones:**  
  `totalRevenue *= 0.90` si se cumple condición  

- **Validaciones lógicas:**  
  `canReserve = requestedGraves <= remainingGraves && isOpen`

---

## 📝 Ejemplo de salida en consola


=== Operaciones básicas ===
Ingresos totales: 3_480_000
Sepulturas restantes: 33

=== Asignación compuesta ===
Total actualizado con descuentos: 3_132_000

=== Validaciones con ===
¿Cementerio lleno?: false
¿Tiene multa por exceso?: true

=== Condiciones lógicas ===
¿Puede reservar nuevo lote?: true

=== Resumen ===
Ingresos finales: 3_132_000
Total nichos ocupados: 87
Total nichos disponibles: 33


---

## 🚀 Cómo ejecutar

1. Abre VS Code en la carpeta del proyecto.
2. Ejecuta el script:

```bash
cd 3-proyecto/starter
node script.js

Verifica que la salida sea coherente con tu dominio y que no haya errores.

📊 Criterios de Evaluación
Criterio	Puntos
La calculadora funciona sin errores	20
Uso correcto de operadores aritméticos	20
Uso de asignación compuesta (mínimo 2)	15
Uso de comparación estricta (===, !==)	15
Uso de operadores lógicos (&&, `	
Coherencia con el dominio asignado	10
Comentarios en español explicando la lógica	10
Total	100

Mínimo para aprobar: 70 puntos
⚠️ Penalizaciones: -5 pts por cada uso de var o ==