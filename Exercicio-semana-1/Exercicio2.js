//2 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
const productCategory = [];

productCategory.push({ id: 1, name: "Bikes", status: "ativo" });
productCategory.push({ id: 2, name: "Veiculos", status: "inativo" });
productCategory.push({ id: 3, name: "Eletrônicos", status: "ativo" });
productCategory.push({ id: 4, name: "Móveis", status: "inativo" });
productCategory.push({ id: 5, name: "Camping", status: "ativo" });

//Criar uma lista vazia de "produtos" (com id, nome e preço) e adicionar 3 produtos -> como são listas separadas, adicionei um campo para indicar o ID da categoria
const products = [];

products.push(
    { idCtg: 1, id: 1, name: "Capacete", price: 15 },
    { idCtg: 1, id: 2, name: "Lanternas", price: 23.3 },
    { idCtg: 1, id: 3, name: "Pedivela", price: 100 },
    { idCtg: 2, id: 1, name: "Vidro", price: 16 },
    { idCtg: 2, id: 2, name: "Retrovisor", price: 50.7 },
    { idCtg: 2, id: 3, name: "Volante", price: 120 },
    { idCtg: 3, id: 1, name: "Mouse", price: 5.6 },
    { idCtg: 3, id: 2, name: "Monitor", price: 4 },
    { idCtg: 3, id: 3, name: "Teclado", price: 8.9 },
    { idCtg: 4, id: 1, name: "Mesa", price: 5.6 },
    { idCtg: 4, id: 2, name: "Cadeira", price: 60.3 },
    { idCtg: 4, id: 3, name: "Sofa", price: 400 },
    { idCtg: 5, id: 1, name: "Barraca", price: 5.6 },
    { idCtg: 5, id: 2, name: "Cordas", price: 60.3 },
    { idCtg: 5, id: 3, name: "Lanterna", price: 15 }
);

const categoryNameList = [];
const lowPricedCategoriesList = [];
const unactiveCatList = [];

//Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
const categoryName = productCategory.forEach((item) => {
    if (item.name === "Eletrônicos") {
        products.map((pdcItem) => {
            if (pdcItem.idCtg == item.id) {
                categoryNameList.push(pdcItem.name);
            }
        });
    }
});

//Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
const lowPricedCategories = productCategory.forEach((item) => {
    const pdcitens = products.filter((pdc) => {
        return pdc.idCtg == item.id;
    });
    const priceditens = pdcitens.some((priced) => {
        return priced.price < 10;
    });
    if (priceditens) {
        lowPricedCategoriesList.push(item.name);
    }
});

//Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
const unactiveCat = productCategory.forEach((item) => {
    if (item.status === "inativo") {
        products.map((itemName) => {
            if (itemName.idCtg == item.id) {
                unactiveCatList.push(itemName.name);
            }
        });
    }
});

//Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
const countProducts = productCategory.forEach((item) => {
    const ProductsQuantity = products;
    const count = ProductsQuantity.filter((pdcItem) => {
        return pdcItem.idCtg == item.id;
    });
    item.quantity = count.length;
});

console.log(categoryNameList);
console.log("------------------------------");
console.log(lowPricedCategoriesList);
console.log("------------------------------");
console.log(unactiveCatList);
console.log("------------------------------");
console.log(productCategory);
