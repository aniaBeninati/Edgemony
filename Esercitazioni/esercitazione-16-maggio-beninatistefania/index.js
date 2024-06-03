/* ESERICIZIO 1:
Rifacciamo l'esercizio del quiz di ieri nonchè:

(Quizzone - Qui usiamo lo switch dove possibile
    - Creiamo una variabile `let score = 0;`;
    - Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
    - Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
    - Alla fine delle 4 domande mostriamo il pungeggio complessivo;
    - Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!)


    PERO'
    chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
- Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
- Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array

```js
const risposte = []; // salviamo tutte le risposte
let score = 0;
let risposta;

risposta = ...;
// aggiungere al nostro array di risposte;


....

console.log() // mostriamo tutte le risposte
```

QUINDI: VEDI ESERCIZIO SOTTO 

*/
let score = 0;
     let rispostaUno = prompt("Qual è la capitale dell'Italia tra: TORINO, CAGLIARI, ROMA, PALERMO");
     let rispostaDue = prompt("Chi ha dipinto la Gioconda tra: MICHELANGELO BUONARROTI, LEONARDO DA VINCI, CLAUDE MONET, PABLO PICASSO");
     let rispostaTre = prompt("Chi è l'autore di 'La Divina Commedia' tra :DANTE ALIGHIERI, VASCO ROSSI, LUIGI PIRANDELLO, GIORGIO FALETTI");
     let rispostaQuattro = prompt("Qual è la capitale del Giappone tra: LONDRA, PARIGI, TOKYO, TORINO");

     switch(rispostaUno.toUpperCase()){
        case 'ROMA' :{
            score +=3;
            break;
        } 
        case 'CAGLIARI':
        case 'TORINO':
        case 'PALERMO':
        {
            score=score-1;
            break;
        }
        default: {
            alert('Devi rispondere con uno dei quattro precedenti!');
            score -= 1;
        }
     }
     
     switch(rispostaDue.toUpperCase()){
        case 'LEONARDO DA VINCI' :{
            score +=3;
            break;
        } 
        case 'MICHELANGELO BUONARROTI':
        case 'CLAUDE MONET':
        case 'PABLO PICASSO':
        {
            score=score-1;
            break;
        }
        default: {
            alert('Devi rispondere con uno dei quattro precedenti!');
            score -= 1;
        }
     }


     switch(rispostaTre.toUpperCase()){
        case 'DANTE ALIGHIERI' :{
            score +=3;
            break;
        } 
        case 'VASCO ROSSI':
        case 'LUIGI PIRANDELLO':
        case 'GIORGIO FALETTI':
        {
            score=score-1;
            break;
        }
        default: {
            alert('Devi rispondere con uno dei quattro precedenti!');
            score -= 1;
        }
     }

     switch(rispostaQuattro.toUpperCase()){
        case 'TOKYO' :{
            score +=3;
            break;
        } 
        case 'LONDRA':
        case 'PARIGI':
        case 'TORINO':
        {
            score=score-1;
            break;
        }
        default: {
            alert('Devi rispondere con uno dei quattro precedenti!');
            score -= 1;
        }
     }

     if(score===12){
        alert("Sei il nuovo campione!");
     } else {
        console.log(score);
     }

     let risposte = [rispostaUno,rispostaDue,rispostaTre,rispostaQuattro];
     console.log(risposte);
     console.log("lunghezza array risposte", risposte.length); // anche se già nella riga 120 stampa in console la lunghezza=4


    console.clear();

   /* score += (risposta ==='ROMA') ? 3 : -1;
    risposte.push(risposta);

    if(score=== 6){
        console.log('Sei un campione');
    }

    const totaleRisposte = risposte.length;
    const risposteToString = risposte.join("","");
    console.log('Hai risposta a  ${totaleRisposte} domande;
    le tue risposte sono state: "${risposteToSpring}"') */

/* ESERCIZIO 2:


Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" 
in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.
*/

let parola1 = prompt("Dammi una prima parola");
let parola2 = prompt("Dammi una seconda parola");
let parola3 = prompt("Dammi una terza parola");

let lettera1 = parola1.at(0);
let lettera2 = parola2.at(0);
let lettera3 = parola3.at(0);

let vocali = ["a","e","i","o","u"];

console.log(vocali.includes(lettera1) ? "vocale" : "consonante");
console.log(vocali.includes(lettera2) ? "vocale" : "consonante");
console.log(vocali.includes(lettera3) ? "vocale" : "consonante");

/* ESERCIZIO 3:

Data una parola stampiamo in console la parola al rovescio. 
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi */

let parola = prompt("dammi una parola");
let parolaArray = parola.split("");
let parolaReverse = parolaArray.reverse();
console.log(parolaReverse);