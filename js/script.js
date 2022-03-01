//QUESTO è LO SNACK NUMERO 1

// const num1 = parseInt(prompt('NUmero 1:'));
// const num2 = parseInt(prompt('NUmero 2:'));

// if (num1 > num2) {
//     console.log(num1);
// } else if (num1 < num2) {
//     console.log(num2);
// } else {
//     console.log('i numeri sono uguali');
// }




//QUESTO è LO SNACK NUMERO 2

// let parolaNumero1 = prompt('scrivi una parola');
// let parolaNumero2 = prompt('scrivi la seconda parola');


// if (parolaNumero1.length > parolaNumero2.length) {
//     document.writeln(parolaNumero2);
//     document.writeln(`<br>`);
//     document.writeln(parolaNumero1);

// } else if (parolaNumero1.length < parolaNumero2.length) {

//     document.writeln(parolaNumero1);
//     document.writeln(`<br>`);
//     document.writeln(parolaNumero2);

// } else {

//     console.log('le parole hanno la stessa lunghezza');

// }




//QUESTO è LO SNACK NUMERO 3
// let arrNum = [];

// for (let i = 0; i < 10; i++) {

//     let userNumber = parseInt(prompt('scrivi un numero'))
//     arrNum.push(userNumber);
// }

// console.log(arrNum);


// let somma = 0;
// for (let i = 0; i < arrNum.length; i++) {
//     somma = somma + arrNum[i];
// }

// console.log(somma);





//QUESTO è LO SNACK NUMERO 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.



// const arrNomiInvitati = ['samuele', 'mauro', 'henry', 'gabriel', 'chiara', 'marco', 'paolo', 'giovanni', 'ettore'];

// let nomeUser = prompt('scrivi il tuo nome');



// let nomePresenteLista = false;

// for (let index = 0; index < arrNomiInvitati.length; index++) {

//     if (arrNomiInvitati[index].toLowerCase() == nomeUser.toLowerCase()) {
//         nomePresenteLista = true;
//     }
// }


// if (nomePresenteLista) {
//     console.log(nomeUser);
//     console.log('il tuo nome è presente nella lista');

// } else {
//     console.log(nomeUser);
//     console.log('mi dispiace, ma non sei stato invitato alla festa');
// }











//QUESTO è LO SNACK NUMERO 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.



// let arrNumeri = [];

// for (let index = 0; index < 6; index++) {

//     let numeroUser = parseInt(prompt('scrivi un numero'));

//     if (numeroUser % 2 == 1) {

//         arrNumeri.push(numeroUser);

//     }

// }


// console.log(arrNumeri);












//QUESTO è LO SNACK NUMERO 6
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


// let numeroUser = parseInt(prompt('scrivi un numero di 4 cifre'));

// if (numeroUser.toString().length < 4) {
//     console.log('hai scritto un numero troppo corto')

// } else if (numeroUser.toString().length > 4) {
//     console.log('hai scritto un numero troppo lungo')

// } else {
//     console.log(numeroUser);
// }




// let arrNumeriDati = [];

// let sommaNumeri = 0;

// let numeroSpecifico;

// for (let index = 0; index < 4; index++) {

//     numeroSpecifico = numeroUser.toString().charAt(index);
//     // console.log(numeroSpecifico);

//     arrNumeriDati.push(numeroSpecifico);

// }


// // console.log(arrNumeriDati);


// for (let index = 0; index < arrNumeriDati.length; index++) {

//     sommaNumeri = sommaNumeri + parseInt(arrNumeriDati[index]);

// }


// console.log(sommaNumeri);












// QUESTO è LO SNACK NUMERO 1.9

// somma = 0;

// for (let index = 0; index <= 10; index++) {
//     somma += index;
// }

// console.log(somma);
// let mediaNumeri = somma / 10;
// console.log(mediaNumeri);



// somma = 0;
// let index = 0;

// while (index <= 10) {

//     somma += index;
//     index++
// }

// console.log(somma);
// let mediaNumeri = somma / 10;
// console.log(mediaNumeri);
















// QUESTO è LO SNACK NUMERO 2.1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.



// let somma = 0;

// for (let index = 0; index < 5; index++) {
//     let numeroUser = parseInt(prompt('scrivi un numero'));
//     somma += numeroUser;
// }

// console.log(somma);




// let somma = 0;
// let index = 1

// while (index < 6) {
//     let numeroUser = parseInt(prompt('scrivi un numero'));
//     somma += numeroUser;
//     index++;
// }

// console.log(somma);












// QUESTO è LO SNACK 2.2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// let numeroUser = parseInt(prompt('dimmi un numero'));

// if (numeroUser % 2 == 0) {
//     console.log(numeroUser)

// } else {
//     console.log(numeroUser + 1)
// }









// QUESTO è LO SNACK 2.3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.

const arrayNomi = ['samuele', 'henry', 'mauro', 'gabriel', 'chiara', 'francesco'];
const arrayCognomi = ['derossi', 'montella', 'pellegrini', 'totti', 'perrotta', 'tommasi', 'candela', 'dimarco', 'del piero'];


const arrayFalsaLista = [];

while (arrayFalsaLista.length < 3) {

    let indexNomi = Math.floor(Math.random() * 6);
    let indexCognomi = Math.floor(Math.random() * 9);

    let NomeCognomeInventato = arrayNomi[indexNomi] + ' ' + arrayCognomi[indexCognomi];
    arrayFalsaLista.push(NomeCognomeInventato);
}

console.log(arrayFalsaLista);