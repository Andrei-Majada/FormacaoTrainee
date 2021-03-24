/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
    return new Promise((resolve, reject) => {
        promise
            .then((result) => {
                try {
                    resolve(transformer(result));
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => reject(error));
    });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
    return numberPromise.then((result) => {
        if (typeof result == "number") {
            return Math.pow(result, 2);
        } else {
            if (!isNaN(parseInt(result))) {
                return Math.pow(Number(result), 2);
            } else {
                return Promise.reject(
                    `Cannot convert '${result}' to a number!`
                );
            }
        }
    });
}
//2
/*const number = Number(data)
 if (Number.isNaN(number)) {​​​​​
 return Promise.reject(`Cannot convert '${​​​​​data}​​​​​' to a number!`);
 }​​​​​ else {​​​​​
 return Math.pow(number, 2);
 }​​​​​*/

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
    return squarePromise(promise).catch(() => 0);
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
    return promise.then(
        (res) => {
            return Promise.reject(res);
        },
        (rej) => {
            return Promise.resolve(rej);
        }
    );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
    mapPromise,
    squarePromise,
    squarePromiseOrZero,
    switcheroo,
};
