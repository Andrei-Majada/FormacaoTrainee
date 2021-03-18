//6-refatorar para promises

const list = [];

const databaseInsert = (data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      list.push(data);
      if (data) {
        resolve(data);
      } else {
        reject(new Error("data not informed!"));
      }
    }, 0);
  });
  return promise;
};

databaseInsert({ meuobjeto: "a" })
  .then((result) => console.log("Resolved: ", result))
  .catch((error) => console.log("Rejected: ", error));

console.log("lista: ", list);
