// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

const DOMAIN_NAME = "CEMETERY_MANAGEMENT_SYSTEM";
const VALUE_LABEL = "espacios funerarios";
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================

const items = [
  { id: 1, name: "Lote Familiar A1", price: 5_000_000, active: true, type: "familiar", maintenanceFee: 200_000 },
  { id: 2, name: "Nicho B2", price: 2_000_000, active: true, type: "individual" },
  { id: 3, name: "Bóveda C3", price: 3_500_000, active: false, type: "bóveda", maintenanceFee: 150_000 },
  { id: 4, name: "Lote Premium D4", price: 8_000_000, active: true, type: "premium" },
  { id: 5, name: "Nicho Económico E5", price: 1_500_000, active: false, type: "individual" },
  { id: 6, name: "Bóveda Familiar F6", price: 6_000_000, active: true, type: "familiar", maintenanceFee: 250_000 }
];

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ Límite alcanzado");
    return;
  }

  if (!item.id || !item.name || !item.price) {
    console.log("❌ Item inválido");
    return;
  }

  items.push(item);
  console.log(`✅ Item agregado: ${item.name}`);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const getActive = () => {
  return items.filter(item => item.active);
};

const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

const formatItem = (item) => {
  const maintenance = item.maintenanceFee ?? 0;

  return `${item.id.toString().padEnd(3)} | ${item.name.padEnd(25)} | $${item.price.toLocaleString()} | ${
    item.active ? "ACTIVO" : "INACTIVO"
  } | Mant: $${maintenance.toLocaleString()}`;
};

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  console.log("\n📋 LISTADO:");
  items.forEach(item => console.log(formatItem(item)));

  const active = getActive();
  console.log(`\n✅ Activos: ${active.length}`);
  console.log(`❌ Inactivos: ${items.length - active.length}`);

  const stats = calculateStats("price");
  console.log("\n📊 ESTADÍSTICAS:");
  console.log(`Total: $${stats.total.toLocaleString()}`);
  console.log(`Promedio: $${stats.avg.toFixed(2)}`);
  console.log(`Máximo: $${stats.max.toLocaleString()}`);
  console.log(`Mínimo: $${stats.min.toLocaleString()}`);

  console.log("\n🔍 Propiedades del primer elemento:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });

  console.log("\n📦 Total elementos:", items.length);
  console.log("=".repeat(50));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(50));
console.log(`  ${DOMAIN_NAME}`);
console.log("=".repeat(50));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado");
console.log("");

// Paso 2
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3
const filtered = filterByField("type", "familiar");
console.log(`Filtro tipo=familiar: ${filtered.length} resultados`);
console.log("");

// Paso 4
const updated = updateItem(1, { price: 9_999_999 });
console.log(`Actualizado id=1: $${updated.find(i => i.id === 1)?.price}`);
console.log("");

// Paso 5
const stats = calculateStats("price");
console.log(`Estadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
console.log("");

// Paso 6
buildReport();

// Paso 7
addItem({
  id: 7,
  name: "Nicho Nuevo G7",
  price: 1_000_000,
  active: true,
  type: "individual"
});