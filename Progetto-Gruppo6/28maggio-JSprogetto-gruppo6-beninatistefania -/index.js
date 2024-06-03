import { artistForFun } from "./data/ArtistForFun.js";
import { cardElGen, cardListGen } from "./modules/components.js";

// generare tante card quanti sono i DJ nella lista

const newArtist = { 
    id: 10,
    name: 'Ben Klock',
    type: 'Techno',
    image: "./img/Klock.webp",
}


const cardsSectionEl = document.querySelector('.main')
const btnAdd = document.querySelector('.btn-add');


const renderListCard = () => {
    //resettiamo ed aggiorniamo la visualizzazione delle card
    cardsSectionEl.innerHTML =""
    const cardList = cardListGen();
    for (let i = 0; i <= artistForFun.length -1; i++) {
        const cardEl = cardElGen(artistForFun[i])
        cardList.append(cardEl)
    }
    return cardList
}
window.onload = cardsSectionEl.append(renderListCard())

btnAdd.addEventListener("click", function () {
    //aggiungiamo il nuovo dj all'array
    artistForFun.push(newArtist)
    // Questo passaggio è necessario per evitare duplicati delle card già esistenti.
    cardsSectionEl.append(renderListCard())
})
