"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Sistema de Gestión de Cementerios";
const VALUE_LABEL = "precio de mantenimiento";

// Formateador global COP
const formatCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0
});

// Array de tumbas / lotes
const items = [
  { id: 1, name: "Tumba Familiar Gómez", category: "familiar", value: 500000, active: true },
  { id: 2, name: "Nicho 102-A", category: "nicho", value: 150000, active: true },
  { id: 3, name: "Lote Individual Pérez", category: "individual", value: 300000, active: false },
  { id: 4, name: "Mausoleo Rodríguez", category: "mausoleo", value: 1200000, active: true },
  { id: 5, name: "Nicho 203-B", category: "nicho", value: 180000, active: false }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (grave) =>
  `🪦 ${grave.name} [${grave.category}] — 💰 ${formatCOP.format(grave.value)}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el costo total con recargo opcional (ej: mora)
const calculateValue = (baseValue, surchargePct = 0) =>
  +(baseValue * (1 + surchargePct / 100)).toFixed(2);

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Verifica si la tumba está activa (disponible / al día)
const isValid = (grave) => grave.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea valores monetarios correctamente en COP
const formatWithDefault = (value, label = VALUE_LABEL) => {
  return `${label}: ${formatCOP.format(value)}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay registros de tumbas.");
} else {

  // --- Listado ---
  console.log("\n📋 Listado de espacios:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\n✅ Espacios activos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    // Ejemplo: 10% de recargo por mantenimiento
    totalValue += calculateValue(item.value, 10);
  }

  console.log(formatWithDefault(totalValue, "Total recaudado con recargo"));
}

console.log(`\n${"═".repeat(45)}\n`);