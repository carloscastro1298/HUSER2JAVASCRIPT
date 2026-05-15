const productos = {
    producto1: {
    id: 1,
    nombre: "Laptop",
    precio: 2500
    },

    producto2: {
    id: 2,
    nombre: "Mouse",
    precio: 80
    },

    producto3: {
    id: 3,
    nombre: "Teclado",
    precio: 150
    }
};

function validarProducto(producto) {
    return (
    typeof producto.id === "number" &&
    producto.id > 0 &&
    typeof producto.nombre === "string" &&
    producto.nombre !== "" &&
    typeof producto.precio === "number" &&
    producto.precio > 0
    );
}

console.log("VALIDACIÓN DE PRODUCTOS");

for (let clave in productos) {
    if (validarProducto(productos[clave])) {
    console.log(`${productos[clave].nombre} es válido`);
    } else {
    console.log(`${productos[clave].nombre} NO es válido`);
    }
}

const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log(numeros);

numeros.add(10);

console.log(numeros.has(3));

numeros.delete(2);

for (let numero of numeros) {
    console.log(numero);
}

const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorio", "Mouse");
categorias.set("Periférico", "Teclado");

for (let clave in productos) {
    console.log(clave, productos[clave]);
}

console.log(Object.keys(productos));

console.log(Object.values(productos));

Object.entries(productos).forEach(([clave, valor]) => {
    console.log(clave, valor);
});

categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});

    console.log(productos);

    console.log(numeros);

categorias.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});