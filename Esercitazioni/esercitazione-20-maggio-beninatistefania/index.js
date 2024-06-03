/*Dato questo object:

```js
const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};
``` */

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

/* vorrei scrivere del codice che possa:

- stampare un console.log per ogni skill presente in coder.skills 
    ```
    // output aspettato:
    'JavaScript'
    'HTML'
    'CSS'
    ```

    ANDAVA FATTO CON IL FOR OF
*/
    for (let i = 0; i < coder.skills.length; i++) { // Il ciclo for scorre l'array skills usando una variabile contatore i da 0 fino alla lunghezza dell'array, stampando ogni elemento con console.log(coder.skills[i]).
        if (typeof coder.skills[i] === 'string') {
            console.log(coder.skills[i]);
        } else {
            console.error("Tipo di dato non valido trovato in coder.skills");
        }
    } // mi assicuro che ogni elemento dia una stringa prima di stamparlo

/*
- salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street".
  Eseguiamo poi un console.log per controllare tutto sia OK. */

const country = prompt("Inserisci il paese:");
const street = prompt("Inserisci la via:");
if (country.length > 0 && street.length > 0 && typeof country === 'string' && typeof street === 'string') {
coder.address.country = country;
coder.address.street = street; // Aggiungere le nuove proprietà a coder.address
} else {
    console.error("Valori non validi inseriti per country e/o street");
}
console.log(coder)

/*
- Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
    ```
    // output aspettato:
    "firstName"
    "lastName"
    "age"
    "skills"
    "address"
    ```*/

    for(let chiave in coder){
        console.log(chiave);
    }

/*

- Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
    ```
    // output aspettato:
    age: 29
    address: [object Object]
    ```
*/

const vocali = 'aeiou';
for(let chiave in coder){
    if(vocali.includes(chiave.at(0))){
        console.log(chiave, coder[chiave]);
    }
}


/*- Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.

    ```js
    const key = prompt('...');
    const value = prompt('...');

    coder[...] = ...;
    ```
*/
const key = prompt("Inserisci la chiave della nuova proprietà:"); 
const value = prompt("Inserisci il valore della nuova proprietà:");
if(key.length>0 && value.length>0){ //if(typeof key === "string")
    coder[key] = value;
} else {
    alert("Inserisci correttamente i dati")
}
console.log(coder);

/*const key = prompt("Inserisci la chiave della nuova proprietà:"); 
while (!key) {//Controllare se la chiave è vuota o non è stata inserita
    alert("La chiave non può essere vuota!");
    key = prompt("Inserisci la chiave della nuova proprietà:");
}
const value = prompt("Inserisci il valore della nuova proprietà:");
while (value === null || value === undefined) {//Controllare se il valore è null o undefined
    alert("Il valore non può essere null o undefined!");
    value = prompt("Inserisci il valore della nuova proprietà:");
}
coder[key] = value;
console.log(coder);*/
