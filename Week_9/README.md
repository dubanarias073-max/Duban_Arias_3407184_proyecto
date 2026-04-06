📦 Proyecto Semana 09: Catálogo de Elementos
🪦 Sistema de Gestión de Cementerios

Este proyecto consiste en la implementación de un catálogo por consola en JavaScript, enfocado en la gestión de espacios funerarios dentro de un cementerio.

El sistema permite administrar información como precios en pesos colombianos (COP), disponibilidad y características de cada espacio (lotes, nichos, bóvedas, etc.).

🎯 Objetivo del Proyecto

Aplicar conceptos fundamentales de JavaScript relacionados con objetos y arrays, incluyendo:

Creación de objetos literales
Uso de métodos de Object
Iteración de objetos
Manipulación de arrays
Uso del operador spread
🧱 Estructura del Catálogo

El catálogo está compuesto por un array de objetos llamado items, donde cada objeto representa un espacio funerario con las siguientes propiedades:

id → Identificador único
name → Nombre del espacio
price → Valor en pesos colombianos (COP)
available → Disponibilidad (true/false)
type → Tipo de espacio (familiar, individual, bóveda, etc.)
maintenanceFee (opcional) → Costo de mantenimiento
⚙️ Funcionalidades Implementadas
🔍 Inspección de Objetos
Uso de Object.keys() para obtener propiedades
Uso de Object.values() para cálculos estadísticos
Uso de Object.entries() para mostrar información formateada
✅ Validación de Propiedades
Uso de Object.hasOwn() para verificar propiedades opcionales
🔁 Iteración
Uso de for...in para recorrer propiedades de objetos
🧬 Spread Operator
Creación de copias de objetos
Actualización inmutable de datos
🔧 Operaciones sobre Arrays
filter() → Filtrar elementos disponibles
find() → Buscar por ID
map() → Agregar propiedad calculada (precio con impuesto)
sort() → Ordenar por precio sin modificar el array original
📊 Reporte Final

El sistema genera un reporte en consola que incluye:

Total de elementos
Cantidad de espacios disponibles
Estadísticas (precio total, promedio, máximo y mínimo)
Listado ordenado por precio
Elemento más caro y más barato
🧠 ¿Qué aprendí?

Durante este proyecto aprendí a:

Trabajar con estructuras de datos complejas (arrays de objetos)
Usar métodos nativos de Object para analizar información
Aplicar buenas prácticas como la inmutabilidad con el spread operator
Manipular datos usando funciones como map, filter, find y sort
Validar propiedades opcionales correctamente
Organizar código de forma clara y modular
Generar reportes útiles desde la consola

Además, comprendí mejor cómo modelar un sistema real (en este caso, un cementerio) utilizando programación.