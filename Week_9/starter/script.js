// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

const DOMAIN_NAME = "Sistema de Gestión de Cementerios";
const VALUE_LABEL = "espacios funerarios";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  {
    id: 1,
    name: "Lote Familiar A1",
    price: 5000000,
    available: true,
    type: "familiar",
    maintenanceFee: 200000
  },
  {
    id: 2,
    name: "Nicho B2",
    price: 2000000,
    available: true,
    type: "individual"
  },
  {
    id: 3,
    name: "Bóveda C3",
    price: 3500000,
    available: false,
    type: "bóveda",
    maintenanceFee: 150000
  },
  {
    id: 4,
    name: "Lote Premium D4",
    price: 8000000,
    available: true,
    type: "premium"
  },
  {
    id: 5,
    name: "Nicho Económico E5",
    price: 1500000,
    available: false,
    type: "individual"
  },
  {
    id: 6,
    name: "Bóveda Familiar F6",
    price: 6000000,
    available: true,
    type: "familiar",
    maintenanceFee: 250000
  }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log(`Total: $${total}`);
  console.log(`Promedio: $${avg.toFixed(2)}`);
  console.log(`Máximo: $${max}`);
  console.log(`Mínimo: $${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: $${item.price}`);
  console.log(`Disponible: ${item.available}`);

  if (Object.hasOwn(item, "maintenanceFee")) {
    console.log(`Mantenimiento: $${item.maintenanceFee}`);
  } else {
    console.log("Sin costo de mantenimiento");
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);

  for (let key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.available);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    priceWithTax: item.price * 1.19
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total de elementos: ${items.length}`);

  const availableCount = getAvailable().length;
  console.log(`Disponibles: ${availableCount}`);

  calculateStats("price");

  console.log("\n📋 Listado ordenado por precio:");
  const sorted = sortByNumericProp();
  sorted.forEach(item => {
    console.log(`${item.name} - $${item.price}`);
  });

  const highest = sortByNumericProp(false)[0];
  const lowest = sortByNumericProp(true)[0];

  console.log(`\n💰 Más caro: ${highest.name} ($${highest.price})`);
  console.log(`💸 Más barato: ${lowest.name} ($${lowest.price})`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("price");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

console.log("\n🧪 Ejemplo actualización:");
const updated = updateItem(items[0], { price: 5500000 });
console.log(updated);

console.log("\n✅ Disponibles:");
console.log(getAvailable());

console.log("\n🔎 Buscar ID 2:");
console.log(findById(2));

console.log("\n🔎 Buscar ID inexistente:");
console.log(findById(999));

console.log("\n➕ Con impuesto:");
console.log(addCalculatedProp());

console.log("\n📊 Ordenados:");
console.log(sortByNumericProp());

buildReport();