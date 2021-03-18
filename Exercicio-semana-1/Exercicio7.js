//7-refatorar async / await
const list = [];

const databaseInsert = async (data) => {
  try {
    list.push(data);
    console.log("Resolved: ", list);
  } catch (err) {
    console.log("Rejected: ", err);
  }
};

databaseInsert({ meuobjeto: "a" });
databaseInsert({ meuobjeto: "b" });
databaseInsert({ meuobjeto: "c" });

console.log("lista: ", list);
