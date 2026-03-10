// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 DOMINIO: Sistema de Gestión de Cementerios
// ============================================


// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Sistema de Gestión de Cementerios";

// Nombre de la sepultura registrada
const itemName = "Sepultura Familiar García";

// Tipo de sepultura
const itemCategory = "Sepultura familiar";

// Capacidad de la sepultura
const itemQuantity = 4;

// Estado de disponibilidad
const isItemAvailable = true;

// Responsable de mantenimiento aún no asignado
const caretakerAssigned = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:    ${itemName}`);
console.log(`Categoría: ${itemCategory}`);
console.log(`Capacidad: ${itemQuantity} espacios`);
console.log(`Disponible: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:      ", typeof itemName);
console.log("typeof itemQuantity:  ", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);

console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertir número a texto
const capacityText = String(itemQuantity);

console.log("Capacidad como texto:", capacityText);
console.log("typeof capacityText:", typeof capacityText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Responsable asignado:", caretakerAssigned);
console.log("typeof null:", typeof caretakerAssigned);
console.log("¿Es null?:", caretakerAssigned === null);

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");