🪦 Sistema de Gestión de Cementerios

Este proyecto consiste en el desarrollo de una aplicación de consola en JavaScript que simula un sistema de gestión de espacios funerarios dentro de un cementerio.

El sistema permite administrar información como precios en pesos colombianos (COP), disponibilidad y características de cada espacio (lotes, nichos, bóvedas, etc.), aplicando todos los conceptos aprendidos en las semanas 01–09 del bootcamp.

🎯 Objetivo

Integrar y aplicar los fundamentos de JavaScript en una sola aplicación funcional, utilizando:

Variables (const, let)
Tipos de datos
Condicionales
Funciones
Arrays y objetos
Métodos de arrays
Métodos de Object
Spread operator
Optional chaining (?.) y nullish coalescing (??)
🧱 Modelo de Datos

El sistema utiliza un array llamado items, donde cada objeto representa un espacio funerario.

Propiedades:
id → Identificador único
name → Nombre del espacio
price → Valor en pesos colombianos (COP)
active → Estado (activo/inactivo)
type → Tipo de espacio (familiar, individual, bóveda, etc.)
maintenanceFee (opcional) → Costo de mantenimiento
⚙️ Funcionalidades Implementadas
🔧 CRUD
addItem(item) → Agrega nuevos elementos
findById(id) → Busca por identificador
getActive() → Obtiene elementos activos
filterByField(field, value) → Filtra por propiedad
📊 Análisis de Datos
updateItem(id, changes) → Actualiza con spread (inmutable)
calculateStats(field) → Calcula mínimo, máximo, promedio y total
🖥️ Visualización
formatItem(item) → Formatea datos en consola
buildReport() → Genera reporte completo del sistema
🧠 ¿Qué aprendí?

Durante este proyecto aprendí a:

Integrar múltiples conceptos de JavaScript en una sola aplicación
Diseñar un sistema basado en un dominio real
Manipular arrays de objetos con métodos como:
map()
filter()
find()
reduce()
Usar correctamente:
Object.entries()
Spread operator (...)
Optional chaining (?.)
Nullish coalescing (??)
Aplicar buenas prácticas como:
Inmutabilidad de datos
Código modular
Uso de funciones reutilizables
Generar reportes claros en consola
🧪 Ejecución

Para ejecutar el proyecto:

node 3-proyecto/starter/app.js
📊 Checklist de Requisitos
Semana	Técnica	✔
01–02	const/let, tipos, separadores numéricos	✔
03	Operadores aritméticos y lógicos	✔
04	Template literals, padEnd	✔
05	Condicionales (if/else)	✔
06	Iteración (forEach)	✔
07	Arrow functions, ?, ??	✔
08	map, filter, find, sort	✔
09	Object.keys/values/entries, spread	✔