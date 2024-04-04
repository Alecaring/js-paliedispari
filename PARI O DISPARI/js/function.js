







/**
 * Genera un numero casuale tra min e max, inclusi.
 * @param {number} min - Il valore minimo che può essere generato.
 * @param {number} max - Il valore massimo che può essere generato.
 * @returns {number} Un numero casuale tra min e max.
 */
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




/**
 * Determina se un numero è pari.
 * @param {number} numero - Il numero da controllare.
 * @returns {boolean} True se il numero è pari, altrimenti false.
 */
function isEven(numero) {
    return numero % 2 === 0;
}
