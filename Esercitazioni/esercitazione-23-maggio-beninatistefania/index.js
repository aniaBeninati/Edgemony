//Usando il querySelector prendiamo l'elemento con id `heading` ed eseguiamo un console.log


console.log(document.body.querySelector("#heading"));

// output <h1>...</h1>

//Per ogni elemento `button` presente in pagina stampiamo in console il suo testo.

const buttonsEls = document.body.querySelectorAll('button');
console.log(buttonsEls)
for (let buttonEl of buttonsEls){
    console.log(buttonEl.innerHTML);
}

// output 
// cancel
// Click me!


/* Contatore

- salviamo due variabili con dentro i riferimenti ai due button della pagina `resetBtn` e `clickBtn`;
- inseriamo una function dentro l'evento `onclick` di `clickBtn` e per ogni click:
- leggiamo il valore attuale del proprio innerHTML
    - convertiamo il valore a numero, se NaN portiamolo a 0;
    - incrementiamo il valore precedente e salviamolo in innerHTML;

- inseriamo una function dentro l'evento `onclick` di `resetBtn`. Per ogni click di resetBtnn impostiamo innerHTML di `clickBtn` a "0";*/

const resetBtn = document.querySelector(".container button");
const clickBtn = document.querySelectorAll(".contain


clickBtn.onclick=function(){
    const valore = clickBtn.innerHTML;
    let valoreAnumero = Number (valore)
    if (isNaN(valoreAnumero)){
        valoreAnumero=0;
    }
    valoreAnumero= valoreAnumero+1;    
    console.log (valoreAnumero);
    clickBtn.innerHTML= valoreAnumero;
}


resetBtn.onclick=function(){
    clickBtn.innerHTML=0;
}