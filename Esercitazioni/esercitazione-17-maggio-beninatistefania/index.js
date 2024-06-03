/* ESERCIZIO 1:

Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0
2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)*/

let numbers = [-1, -2, -10, 2, 5];
for (let i = 0; i < numbers.length; i++) { // fa 0,1,2,3,4 cicli partendo da 0 e finendo prima del 5.
    if (numbers[i] > 0) {
        console.log(numbers[i]);
    } //viene incrementato il contatore con i++
} // Primo ciclo: stampare in console solo i numeri > 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i]);
        break;
    }
} // Secondo ciclo: interrompere al primo numero > 0 (break)


/* ESERCIZIO 2:
Palindromi:
abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente.
Quello che dovremo fare invece è: prendere una parola dall'utente tramite prompt, scomporla in array
ed usare un for per poter controllare se è palindroma.

nel caso in cui non troviamo corrispondenza usciamo dal for e stampiamo in console.log un messaggio.
se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"
*/

console.clear();

let parolaUtente = prompt("Inserisci una parola:"); // Ottenere la parola dall'utente tramite prompt
let parolaArray = parolaUtente.toLowerCase().split(""); // "","",""...
let indiceFinale = parolaArray.length -1; //stabilisco la fine dell'array
for(let i=0; i<parolaArray.length;i++){
    if(parolaArray[i] !== parolaArray[indiceFinale - i]){
        console.log("non è palindroma");
        break;
    }
    if(i === indiceFinale){
        console.log("Successo! è un palindromo!");
    }
}