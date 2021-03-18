/*5 - Corrigir as duas últimas linhas para mostrar a lista corretamente*/
const list = [];
const databaseInsert = function (data, callback) {
  setTimeout(function () {
    list.push(data);
    if (callback) {
      callback();
    }
  }, 0);
};

databaseInsert({ meuobjeto: "a" }, () => console.log("lista: ", list));
console.log("lista: ", list);
