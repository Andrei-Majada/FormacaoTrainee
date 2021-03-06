//Criar uma lista vazia de "categoria de produtos" (com id, nome) e adicionar 5 categorias.
const productCategory = [];

productCategory.push({ id: 1, name: "Bikes" });
productCategory.push({ id: 2, name: "Veiculos" });
productCategory.push({ id: 3, name: "Eletrônicos" });
productCategory.push({ id: 4, name: "Imóveis" });
productCategory.push({ id: 5, name: "Periféricos" });

//Percorrer a lista e mostrar no console só o nome da categoria.
const nameCategory = productCategory.forEach((item) => console.log(item.name));

//Percorrer a lista e mostrar no console só a categoria "Eletrônicos".
const findCategory = productCategory.find((item) => {
  return item.name === "Eletrônicos";
});

console.log(findCategory);