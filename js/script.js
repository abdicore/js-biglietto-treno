/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.


*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.*/


/*
1- chedere all utente i km
2- calcolare il costo del viaggio in bbase alla tariffa kilometrica
3- applicare gli sconti
4- Mostrare in pagina il prezzo finale con i km
*/



// Fase di richiamo elementi del dom
resultElement = document.getElementById ('result');

// Fase di raccolta dati (chidere all'utente i km da percorrere)

const numberKm = parseInt(prompt('Quanti Kilomtreri vuoi percorrere?','30'))
console.log(numberKm)

const userAge =parseInt(prompt('Quanti hanni hai?','20'))
console.log(userAge)


// Fase elaborazione dati
const price = numberKm * 0.21
console.log('prezzo del biglietto', price )

const discountUnderage = price - ((price / 100) *20)
console.log('prezzo scontato al 20%', discountUnderage)

const discountElderly = price - ((price / 100) *40)
console.log('prezzo scontato al 40%', discountElderly)


//Fase di output
