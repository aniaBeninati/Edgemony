/*Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
Usiamo il metodo document.createElement per creare i vari elementi 
Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.
*/

let elementoH1 = document.createElement("h1");
let elementoP = document.createElement("p");

document.body.insertAdjacentElement("afterbegin", elementoH1);
document.body.append(elementoP);

elementoH1.innerHTML = "Ciao";
elementoP.innerText = "Questo è un paragrafo";

/* Button contatore dinamico:

- Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
- Al button associamo un evento `onmouseenter` che cambierà lo style del button (sperimentiamo un po');
- Al button associamo un altro evento `onclick` che al click aumenta di uno il numero inserito nel proprio innerHTML;
*/

let buttonNew = document.createElement("button");
document.body.append(buttonNew);
buttonNew.onmouseenter = function (){
    console.log(buttonNew);
    buttonNew.style.width = "200px";
    buttonNew.style.height = "50px";
}

buttonNew.innerHTML = "0";
buttonNew.onclick = function (){
let numeroTesto = Number(buttonNew.textContent);
buttonNew.innerHTML = numeroTesto + 1;
}

//Lista di nomi: Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:

/*Usiamo JS per inserire all'evento `onsubmit` una function che:
- previene il comportamento di default del form.
- Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
- Se il valore è valido creare un elemento <li> e inserirlo dentro l'elemento `.list` (vedi HTML)
- Aggiungere una function al `onclick` del nuovo elemento <li> e stampare un console.log () quando viene eseguito il click.
*/

const formEl = document.querySelector('form');
const inputEl = document.querySelector("#nomi");

formEl.onsubmit = function (evento) {
    console.log(evento);
    evento.preventDefault();
    if (typeof inputEl.value === "string" &&  inputEl.value.length > 0){
        let liEl = document.createElement("li");
        let listEl = document.querySelector(".list")
        listEl.append(liEl);
        liEl.onclick = function(){
            console.log("click");
        }
    }
}

// aggiunto commento per esercitazione su GitHub
