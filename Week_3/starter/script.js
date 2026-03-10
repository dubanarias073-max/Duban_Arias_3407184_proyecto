// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// Dominio: Sistema de Gestión de Cementerios
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Precio de una sepultura
const GRAVE_PRICE = 3_500_000;

// Capacidad máxima del cementerio
const MAX_GRAVES = 1_000;

// Sepulturas ocupadas actualmente
const OCCUPIED_GRAVES = 620;

// Costo de mantenimiento por sepultura
const MAINTENANCE_COST = 50_000;


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// calcular sepulturas disponibles
const availableGraves = MAX_GRAVES - OCCUPIED_GRAVES;
console.log("Sepulturas disponibles:", availableGraves);

// calcular ingresos por venta de sepulturas
const gravesSold = 10;
const totalRevenue = GRAVE_PRICE * gravesSold;
console.log("Ingresos por venta:", totalRevenue);

// calcular costo total de mantenimiento
const totalMaintenance = OCCUPIED_GRAVES * MAINTENANCE_COST;
console.log("Costo total de mantenimiento:", totalMaintenance);

// calcular promedio de mantenimiento por sector (4 sectores)
const averageMaintenance = totalMaintenance / 4;
console.log("Promedio mantenimiento por sector:", averageMaintenance);

// resto de sepulturas si se agrupan en bloques de 7
const remainderGraves = MAX_GRAVES % 7;
console.log("Resto de sepulturas en bloques de 7:", remainderGraves);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// valor acumulado de ingresos
let revenueTotal = 0;

revenueTotal += 3_500_000;
console.log("Ingreso tras primera venta:", revenueTotal);

revenueTotal += 3_500_000;
console.log("Ingreso tras segunda venta:", revenueTotal);

// aplicar descuento del 10%
revenueTotal *= 0.90;
console.log("Ingreso con descuento:", revenueTotal);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// verificar si el cementerio está lleno
const isFull = OCCUPIED_GRAVES === MAX_GRAVES;
console.log("¿Cementerio lleno?", isFull);

// verificar si más de la mitad está ocupada
const isHalfFull = OCCUPIED_GRAVES >= MAX_GRAVES / 2;
console.log("¿Más de la mitad ocupado?", isHalfFull);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// cliente compra varias sepulturas
const gravesRequested = 6;

// descuento si compra más de 5 y hay disponibilidad
const hasDiscount = gravesRequested > 5 && availableGraves > 0;
console.log("¿Aplica descuento?", hasDiscount);

// promoción si compra muchas sepulturas o el cementerio está casi lleno
const specialPromotion = gravesRequested > 20 || isHalfFull;
console.log("¿Promoción especial?", specialPromotion);

// verificar si NO hay disponibilidad
const noAvailability = !availableGraves;
console.log("¿Sin disponibilidad?", noAvailability);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Capacidad total:", MAX_GRAVES);
console.log("Sepulturas ocupadas:", OCCUPIED_GRAVES);
console.log("Sepulturas disponibles:", availableGraves);
console.log("Ingresos estimados por venta:", totalRevenue);
console.log("Costo total de mantenimiento:", totalMaintenance);

console.log("");