let inizio = "Ciao Mondo!";
let secondo = 'Mio zio viene dalla città di l\'Aquila';
let backtick = `${inizio}
${secondo}`; // con il backtick andiamo a capo senza utilizzare lo /n, mentre /n lo utilizziamo nelle stringhe classiche 

console.log(backtick);

/*- definiamo variabile che contiene una stringa
    - Usiamo i doppi apici e salviamo la stringa: Ciao Mondo!
    - Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
        - Occhio ad usare un escape per i singoli apici dentro la stringa!!
    - Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo"
    */

let nuovaInMaiuscolo = inizio.toUpperCase();
console.log(nuovaInMaiuscolo);

let utente = prompt("Come ti chiami?");
console.log(utente.toLowerCase());

/*Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase()) 
- Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt()
    - Facciamo un console.log del dato precedento portato a lowercase */

let numeroUtente = prompt("Inserisci un numero da 1 a 10");
if(numeroUtente>7){
    console.log("hai vinto!")
}

/*- Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!*/