const productos = [
    { id: 1, nombre: "Laptop", precio: 2500 },
    { id: 2, nombre: "Mouse", precio: 80 },
    { id: 3, nombre: "Teclado", precio: 150 }
];

console.log("VALIDACIÓN DE PRODUCTOS");

productos.forEach(producto => {
    if (
        producto.id > 0 &&
        producto.nombre !== "" &&
        producto.precio > 0
    ) {
        console.log(producto.nombre + " es válido");
    } else {
        console.log(producto.nombre + " NO es válido");
    }
});

const numeros = new Set([1, 2, 2, 3, 4]);

console.log(numeros);

numeros.add(10);

console.log(numeros.has(3));

numeros.delete(2);

numeros.forEach(numero => {
    console.log(numero);
});

const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorio", "Mouse");
categorias.set("Periférico", "Teclado");

categorias.forEach((producto, categoria) => {
    console.log(categoria + ": " + producto);
});
