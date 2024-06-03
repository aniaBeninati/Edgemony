const nameUser = prompt("Inserisci il tuo nome");
const surnameUser = prompt("Inserisci il tuo cognome");
 /*Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
 - Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;*/

 /*if(nameUser !== null && nameUser.length >= 3 && surnameUser !== null && surnameUser.length >= 3){
console.log("Puoi procedere");
 }else {
    alert("errore");
 }*/

 /* ma la consegna dice più errori e la ricarica della pagina: 
 -Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
- Se abbiamo mostrato un errore ricarichiamo la pagina usando `window.location.reload()`; 

QUINDI CONTINUA SOTTO*/
if(nameUser !== null){
    console.log("Puoi procedere il nome è diverso da null");
    if(nameUser.length>= 3){
        console.log("puoi procedere il nome contiene più di tre caratteri");
        if(surnameUser !== null){
            console.log("Puoi procedere il cognome è diverso da null"); 
            if(surnameUser.length >=3){
                console.log("Puoi procedere il cognome contiene più di tre caratteri: hai finito.");
            } else {
                alert("Errore: Il cognome è troppo breve");
                window.location.reload();
            }
        } else {
            alert("Errore: il cognome è vuoto");
            window.location.reload();
        }
    } else {
        alert("Errore: il nome è troppo breve");
        window.location.reload();
    }
     }else {
        alert("Errore: il nome è vuoto");
        window.location.reload();
     }

     const nameUpper = nameUser[0].toUpperCase();
     console.log(nameUpper);

     //Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola

     const surnameUpper = surnameUser[0].toUpperCase();
     console.log(surnameUpper);

     //Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola

     alert("Ciao "+nameUser + " " +surnameUser);

     //Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"

     console.clear();

     let score = 0;

     //Creiamo una variabile `let score = 0

     let rispostaUno = prompt("Qual è la capitale dell'Italia?");
     let rispostaDue = prompt("Chi ha dipinto la Gioconda?");
     let rispostaTre = prompt("Chi è l'autore di 'La Divina Commedia'?");
     let rispostaQuattro = prompt("Qual è la capitale del Giappone?");

     //Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili

     if(rispostaUno.toUpperCase() === "ROMA"){
        score= score+3;
     } else {
        score= score-1;
     }
     if (rispostaDue.toUpperCase()==="LEONARDO DA VINCI"){
        score= score+3;
     } else {
        score= score-1;
     }
     if (rispostaTre.toUpperCase()==="DANTE ALIGHIERI"){
        score= score+3;
     } else {
        score= score-1;
     }
     if (rispostaQuattro.toUpperCase()==="TOKYO"){
        score= score+3;
     } else {
        score= score-1;
     }

     console.log("Punteggio finale:" + score);


     //Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto
     //Alla fine delle 4 domande mostriamo il pungeggio complessivo

     if(score===12){
        alert("Sei il nuovo campione!");
     }

     //Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!<