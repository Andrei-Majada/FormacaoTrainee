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

async function doWork() {
    try {
        const res1 = await loginApi(william.username, william.password);
        if (res1.includes(res)) {
            loginsOk.push(res1);
        }
    } catch (err) {
        loginsError.push(err);
    }

    try {
        const res2 = await loginApi(victor.username, victor.password);
        if (res2.includes(res)) {
            loginsOk.push(res2);
        }
    } catch (err) {
        loginsError.push(err);
    }

    try {
        const res3 = await loginApi(karina.username, karina.password);
        if (res3.includes(res)) {
            loginsOk.push(res3);
        }
    } catch (err) {
        loginsError.push(err);
    }

    console.log("loginsOk: ", loginsOk);
    console.log("loginsError: ", loginsError);
}

doWork();

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
