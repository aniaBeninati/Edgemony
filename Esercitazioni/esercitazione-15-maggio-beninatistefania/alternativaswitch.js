let score = 0;

     //Creiamo una variabile `let score = 0

     let rispostaUno = prompt("Qual è la capitale dell'Italia?");
     let rispostaDue = prompt("Chi ha dipinto la Gioconda?");
     let rispostaTre = prompt("Chi è l'autore di 'La Divina Commedia'?");
     let rispostaQuattro = prompt("Qual è la capitale del Giappone?");

     //Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili

     /*if(rispostaUno.toUpperCase() === "ROMA"){
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

     console.log("Punteggio finale:" + score);*/

     switch(rispostaUno.toUpperCase()){
        case 'ROMA' :{
            score= score+3;
            break;
        } default: {
            score=score-1;
        }
     }
     
     switch(rispostaUno.toUpperCase()){
        case 'LEONARDO DA VINCI' :{
            score= score+3;
            break;
        } default: {
            score=score-1;
        }
     }

     switch(rispostaUno.toUpperCase()){
        case 'DANTE ALIGHIERI' :{
            score= score+3;
            break;
        } default: {
            score=score-1;
        }
     }

     switch(rispostaUno.toUpperCase()){
        case 'TOKYO' :{
            score= score+3;
            break;
        } default: {
            score=score-1;
        }
     }

     console.log("Punteggio finale:" + score);

     //Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto
     //Alla fine delle 4 domande mostriamo il pungeggio complessivo

     if(score===12){
        alert("Sei il nuovo campione!");
     }

     //Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!<