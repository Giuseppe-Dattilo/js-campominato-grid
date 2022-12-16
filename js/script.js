// console.log('JS OK');

/*
Griglia Campo Minato

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella cliccata.

MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo 
nell'immagine allegata.

MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle 
tramite JS. Al click del bottone play, vengono generate 100 celle in 10 
righe da 10 celle ciascuna.

MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi
 coloriamo la cella d'azzurro!

BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta
 tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100,
 divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81,
 divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, 
divise in 7 caselle per 7 righe;
*/

const createCell = (content) => {
    const cell = document.createElement('div');
    cell.append(content)
    cell.classList.add('cell');
    return cell; 
}

// Prendo gli elementi dal DOM
const grid = document.getElementById('grid');
const levelElement = document.getElementById('level');
const buttonElement = document.getElementById('play');
const beginElement = document.getElementById('begin');

// Aggancio l'evento al click del bottone
buttonElement.addEventListener('click', () => {

    grid.innerHTML = "";
        
    beginElement.classList.add('d-none');
    let rows = levelElement.value;
    let cols = levelElement.value;
    const totalCells = rows * cols;
    // console.log(rows, cols);

    for(let i = 1; i <= totalCells; i++){
    
        // Creo una cella
        const cell = createCell(i);
        // console.log(i);
    
        // aggiungo l'event listener
        cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        });
    
        // appendo in pagina
        grid.appendChild(cell);
    
    };
    
});


