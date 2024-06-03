//Scriviamo ed eseguiamo una funzione che permetta di fare rapidamente un console.clear()
function clearConsole() {
    console.clear();
}
clearConsole();

//Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

function capitalize(stringa) {
    if (stringa.length === 0 || typeof stringa !== "string"){ //Controllo della lunghezza della stringa e se è diverso dalla stringa
        alert("campo vuoto, riscrivi!")
        return stringa; // Se la stringa è vuota, la funzione restituisce immediatamente la stringa vuota
    }

    const firstLetter = stringa.at(0).toUpperCase(); // prende il primo carattere della stringa e lo trasforma in maiuscolo
    const restOfString = stringa.slice(1).toLowerCase(); // dal secondo carattere fino alla fine trasforma in minuscolo

    return firstLetter + restOfString; // combinazione della prima lettera maiuscolo più il resto stringa minuscolo
}

console.log(capitalize("ciao"));
console.log(capitalize("mondo"));
console.log(capitalize("Mondo"));
console.log(capitalize("TEST"));
console.log(capitalize(""));

// Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:

function min(a,b){

    if (typeof a === 'number' && typeof b === 'number'){ //verifichiamo se sono numeri
        return a < b ? a : b; // ho usato l'operatore ternario 
        } else {
            return "Entrambi i parametri devono essere numeri."; //se non sono numeri allora restituisce il messaggio
        }
} 
// ho scoperto poterlo fare anche con: function findSmallestNumber(num1, num2) { return Math.min(num1, num2);} nonchè Math.min() che è una funzione incorporata in JavaScript che restituisce il numero più piccolo tra i parametri passati.

console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20));  // 20;

//Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

function potenza(base, esponente) {
    if (typeof base === 'number' && typeof esponente === 'number'){ //verifichiamo se sono numeri
    if (esponente === 0) { // bonus point prevediamo anche l'elevamento a potenza con esponente 0.
            return 1;
    } else {
        let risultato = 1;
        for(let i=0; i < esponente; i++){
            risultato = risultato * base; //Moltiplico "base" per se stessa nonchè quante volte è l'esponente ed il risultato lo inserisco a risultato
        }
        return risultato;

    }
    } else {
            return "Entrambi i parametri devono essere numeri."; //se non sono numeri allora restituisce il messaggio
        }

}

console.log(potenza(4,2))    // 16
console.log(potenza(5,3))    // 125
console.log(potenza(1, 100)) // 1


/*Bonus point (opzionale):
il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0).
esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120

scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.
*/

function factorial (n) {
    if(typeof n!== "number" || n<0) {
        console.log("Devi inserire un numero positivo");
            return;
    }
    if (n === 0) {
        return 1;
    } // deve finire a 0

    return n * factorial(n - 1);
}

console.log (factorial(5)) // 120
console.log (factorial(4)) // 24