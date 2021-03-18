const loginApi = (username, password) =>
    new Promise((resolve, reject) => {
        if (
            (username === "william" && password == "123456") ||
            (username === "victor" && password == "654321") ||
            (username === "karina" && password == "558877")
        ) {
            resolve("login.ok." + username);
        } else {
            reject("invalid.password.for." + username);
        }
    });
const loginsOk = [];
const loginsError = [];
const william = {
    username: "william",
    password: "123456",
};
const victor = {
    username: "victor",
    password: "548712",
};
const karina = {
    username: "karina",
    password: "558877",
};

const res = "login.ok.";

// loginApi(william.username, william.password)
//     .then((resultado1) => {
//         if (resultado1.includes(res)) {
//             loginsOk.push(resultado1);
//         }
//         loginApi(victor.username, victor.password)
//             .then((resultado2) => {
//                 if (resultado2.includes(res)) {
//                     loginsOk.push(resultado2);
//                 }
//             })
//             .catch((err) => {
//                 loginsError.push(err);
//             })
//             .then(() => {
//                 loginApi(karina.username, karina.password)
//                     .then((resultado3) => {
//                         if (resultado3.includes(res)) {
//                             loginsOk.push(resultado3);
//                         }
//                     })
//                     .catch((err) => {
//                         loginsError.push(err);
//                     })
//                     .then(() => {
//                         console.log("loginsOk: ", loginsOk);
//                         console.log("loginsError: ", loginsError);
//                     });
//             });
//     })
//     .catch((err) => {
//         loginsError.push(err);
//     });

const res1 = loginApi(william.username, william.password)
    .then((resultado1) => {
        if (resultado1.includes(res)) {
            loginsOk.push(resultado1);
        }
    })
    .catch((err) => {
        loginsError.push(err);
    });

const res2 = loginApi(victor.username, victor.password)
    .then((resultado2) => {
        if (resultado2.includes(res)) {
            loginsOk.push(resultado2);
        }
    })
    .catch((err) => {
        loginsError.push(err);
    });

const res3 = loginApi(karina.username, karina.password)
    .then((resultado3) => {
        if (resultado3.includes(res)) {
            loginsOk.push(resultado3);
        }
    })
    .catch((err) => {
        loginsError.push(err);
    });

Promise.all([res1, res2, res3])
    .then((result) => {
        console.log("loginsOk: ", loginsOk);
        console.log("loginsError: ", loginsError);
    })
    .catch((err) => console.log(err));

/***
 * Chamar a loginApi para os usuarios william, victor, karina
 *
 * se o login der certo adicionar no array loginsOk o retorno da promisse
 * se o login der errado adicionar no array loginsError o retorno da promisse
 *
 * APÓS chamar a api para os 3 users fazer um console.log nos arrays
 *
 *
 * Qdo acabarem ele, convertam para async await
 *
 * ****/
