
/**
 * 
 * @param {verificaSePalindroma} parola 
 * @returns 
 */
function verificaSePalindroma(parola) {

    const parolaFormattata = parola.toLowerCase();

    const parolaInvertita = parolaFormattata.split('').reverse().join('');

    return parolaFormattata === parolaInvertita;

}