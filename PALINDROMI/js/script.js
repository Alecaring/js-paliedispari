"use strict"
const arrNumUser = [];
console.log(arrNumUser);

const parolaUtente = prompt("inserisci");
const risultato = verificaSePalindroma(parolaUtente);

if (risultato) {
    arrNumUser.push(parolaUtente)
    console.log(`${parolaUtente} è una parola palindroma.`);
} else {
    console.log(`${parolaUtente} è una parola non palindroma.`);
}

