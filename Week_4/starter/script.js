// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Generar mensajes en consola
//    usando métodos de string y template literals
//    adaptados al dominio de cementerios.
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Sistema de Gestión de Cementerios";

// Nombre de la parcela o tumba
const rawEntityName = "  Panteón Familiar López  ";

// Categoría de la parcela
const entityCategory = "Parcela Familiar";

// Código identificador de la parcela
const entityCode = "PAR-045";

// Descripción de la parcela
const entityDescription = "Parcela ubicada en la sección A, con mantenimiento activo y registros históricos completos.";

// Valor numérico relevante: número de sepulturas en la parcela
const mainValue = 5;

// Estado de la parcela (activa/inactiva)
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Limpiar espacios en blanco del nombre
const entityName = rawEntityName.trim();

// Nombre en mayúsculas para encabezado
const entityNameUpper = entityName.toUpperCase();

// Nombre en minúsculas para referencias
const entityNameLower = entityName.toLowerCase();

// Prefijo del código para validaciones
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Verificar si el código empieza con el prefijo correcto
const hasValidPrefix = entityCode.startsWith(codePrefix);

// Verificar si la descripción contiene "mantenimiento"
const descriptionIsRelevant = entityDescription.includes("mantenimiento");

// Verificar si el código termina con los dígitos "045"
const hasValidSuffix = entityCode.endsWith("045");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE PARCELA
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Cantidad de sepulturas: ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'mantenimiento'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '045'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");
const notification = `📢 Nueva parcela registrada: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");