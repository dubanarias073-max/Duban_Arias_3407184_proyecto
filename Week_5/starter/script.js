// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Sistema de Gestión de Cementerios
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento
// ============================================

const elementName = "Lote A-102";
const elementStatus = "occupied"; // occupied / available
const elementValue = 85; // porcentaje de ocupación del sector
const elementType = "family"; // individual / family / mausoleum
const elementInfo = {
  detail: "Ubicado en zona norte",
  caretaker: "Juan Pérez"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else
// ============================================

let classification;

if (elementValue >= 80) {
  classification = "Alta ocupación";
} else if (elementValue >= 40) {
  classification = "Ocupación media";
} else {
  classification = "Baja ocupación";
}

// ============================================
// SECCIÓN 3: Estado con operador ternario
// ============================================

const statusLabel = elementStatus === "occupied"
  ? "Ocupado"
  : "Disponible";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "individual":
    typeLabel = "Tumba individual";
    break;
  case "family":
    typeLabel = "Lote familiar";
    break;
  case "mausoleum":
    typeLabel = "Mausoleo";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin identificación";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.caretaker ?? "Sin responsable asignado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Responsable: ${safeProperty}`);
console.log("=".repeat(40));