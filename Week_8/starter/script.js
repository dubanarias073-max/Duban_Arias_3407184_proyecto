// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Sistema de Gestión de Cementerios
// ============================================

const DOMAIN_NAME = "Sistema de Gestión de Cementerios";
const VALUE_LABEL = "espacios";

// ============================================
// FORMATO MONEDA COLOMBIANA
// ============================================

const formatCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0
});

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Tumba Familiar Gómez", type: "familiar", price: 500000, capacity: 4, active: true },
  { id: 2, name: "Nicho 101-A", type: "nicho", price: 150000, capacity: 1, active: true },
  { id: 3, name: "Lote Pérez", type: "individual", price: 300000, capacity: 1, active: false },
  { id: 4, name: "Mausoleo Rodríguez", type: "mausoleo", price: 1200000, capacity: 6, active: true },
  { id: 5, name: "Nicho 202-B", type: "nicho", price: 180000, capacity: 1, active: false }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✅ Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`❌ Eliminado último: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`⭐ Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  if (removed.length > 0) {
    console.log(`🗑️ Eliminado: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

// 🔥 FORMATO MEJORADO
const formatItem = (item) => {
  return `🪦 [${item.id}] ${item.name} — ${item.type} — 💰 ${formatCOP.format(item.price)} — Capacidad: ${item.capacity} — ${item.active ? "Activo" : "Inactivo"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Operaciones de mutación ---\n");

// push
addItem({
  id: 6,
  name: "Tumba Nueva López",
  type: "familiar",
  price: 550000,
  capacity: 3,
  active: true
});

// unshift
addPriorityItem({
  id: 0,
  name: "Mausoleo VIP",
  type: "mausoleo",
  price: 2000000,
  capacity: 8,
  active: true
});

// splice
removeByIndex(2);

// pop
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Búsqueda y filtrado ---\n");

// find
const found = findByName("Nicho 101-A");
console.log("🔍 Búsqueda:", found ? formatItem(found) : "No encontrado");

// filter
const activeItems = getActiveItems();
console.log(`✅ Activos: ${activeItems.length}`);

// spread
const snapshot = [...items, {
  id: 999,
  name: "Elemento Simulado",
  type: "temporal",
  price: 0,
  capacity: 0,
  active: false
}];

console.log(`📸 Snapshot (sin modificar original): ${snapshot.length} elementos`);

console.log("\n--- Transformación con map ---\n");

// nombres
const names = items.map(item => item.name);
console.log("📛 Nombres:", names);

// 🔥 PRECIOS CON FORMATO
const increasedPrices = items.map(item => ({
  name: item.name,
  newPrice: formatCOP.format(item.price * 1.10)
}));

console.log("💰 Precios con incremento:", increasedPrices);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

// 🔥 TOTAL GENERAL
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
console.log(`💰 Valor total inventario: ${formatCOP.format(totalPrice)}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);