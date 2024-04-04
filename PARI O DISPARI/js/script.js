


let pariStr = "pari"
let dispariStr = "dispari"

const sceltaUtente = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

const numeroComputer = rndNum(1, 5);

const sommaNumeri = numeroUtente + numeroComputer;




if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
    console.log("Non è valido!");
} else if (numeroUtente >= 1 && numeroUtente <= 5) {
    const numeroComputer = rndNum(1, 5);
    console.log(`user number: ${numeroUtente}, computer number: ${numeroComputer}`);

    const sommaNumeri = numeroUtente + numeroComputer;
    console.log(sommaNumeri);

    let result;
    if (isEven(sommaNumeri)) {
        result = "pari";
    } else {
        result = "dispari";
    }

    if (sceltaUtente === result) {
        console.log(`Hai vinto! Il risultato (${sommaNumeri}) è ${result}.`);
    } else {
        console.log(`Hai perso! Il risultato (${sommaNumeri}) è ${result}.`);
    }
} else {
    console.log("Non è valido!");
}
