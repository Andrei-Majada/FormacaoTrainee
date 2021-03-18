//Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
const productCategory = [];

productCategory.push({ id: 1, name: "Bikes", status: "ativo" });
productCategory.push({ id: 2, name: "Veiculos", status: "inativo" });
productCategory.push({ id: 3, name: "Eletrônicos", status: "ativo" });
productCategory.push({ id: 4, name: "Móveis", status: "inativo" });
productCategory.push({ id: 5, name: "Camping", status: "ativo" });

//Na lista "categoria de produtos" adicionar para cada uma 3 produtos (com id, nome e preço)
productCategory[0].products = [
  { id: 1, name: "Capacete", price: 15 },
  { id: 2, name: "Lanternas", price: 23.3 },
  { id: 3, name: "Pedivela", price: 100 },
];
productCategory[1].products = [
  { id: 1, name: "Vidro", price: 16 },
  { id: 2, name: "Retrovisor", price: 50.7 },
  { id: 3, name: "Volante", price: 120 },
];
productCategory[2].products = [
  { id: 1, name: "Mouse", price: 5.6 },
  { id: 2, name: "Monitor", price: 4 },
  { id: 3, name: "Teclado", price: 8.9 },
];
productCategory[3].products = [
  { id: 1, name: "Mesa", price: 5.6 },
  { id: 2, name: "Cadeira", price: 60.3 },
  { id: 3, name: "Sofa", price: 400 },
];
productCategory[4].products = [
  { id: 1, name: "Barraca", price: 5.6 },
  { id: 2, name: "Cordas", price: 60.3 },
  { id: 3, name: "Lanterna", price: 15 },
];

//Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
const productName = productCategory.map((item) => {
  if (item.name === "Eletrônicos") {
    item.products.map((itemName) => {
      console.log(itemName.name);
    });
  }
});

//Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
const lowPricedCategories = productCategory.map((item) => {
  const products = item.products;
  const lessthenten = products.some((product) => {
    return product.price < 10;
  });
  if (lessthenten) {
    console.log(item.name);
  }
});

//Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
const unactiveCat = productCategory.map((item) => {
  if (item.status === "inativo") {
    item.products.map((itemName) => {
      console.log(itemName.name);
    });
  }
});

//Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
const countProducts = productCategory.map((item) => {
  item.quantity = item.products.length;
});
