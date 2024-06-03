/*Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"*/

function indicazioni (...directions){
    for (let i=0; i < directions.length ;++i){
        if (directions[i]==="su" || directions[i] === "giù"  || directions[i] === "sinistra" || directions[i] === "destra")
        console.log(directions[i])
    }
 return NaN
}

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'

/*  Contare le direzioni

scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.*/

function contaIndicazioni(...directions){
    const count = {
        su: 0,
        giù: 0,
        sinistra: 0,
        destra: 0
    };

    for (let i = 0; i < directions.length; ++i) {
        if (directions[i] === "su" || directions[i] === "giù" || directions[i] === "sinistra" || directions[i] === "destra") {
            count[directions[i]]++;
        }
    }

    return count;
}

/*Conta il click

scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.*/

let clickCount = 0;
function  contaClick(){
    clickCount++;
    console.log(`Numero di Click: ${clickCount}`);
}
document.body.onclick = contaClick;

/*
Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

esempio: 
a = 1;
b = 2;

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))
// output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"
*/

const indexForEachLetter = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
    n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

function alphabetPosition(stringa) {
    for (let letter of stringa.toLowerCase()) {
        if (indexForEachLetter[letter]) {
            console.log(indexForEachLetter[letter]);
        }
    }
}

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))

