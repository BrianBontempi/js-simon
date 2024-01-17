// ! recupero l'elemento in pagina
const numbersElement = document.getElementById('numbers')

// Funzione per generare 5 numeri casuali
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 10) + 1);
    }
    return numbers;
  }
  
  
// Funzione per visualizzare i numeri e avviare il timer
function displayNumbers() {
    let numbers = generateRandomNumbers();
    numbersElement.innerText = numbers.join(' ');
  
    // Avvia il timer di 10 secondi
    setTimeout(function() {
      numbersElement.innerText = '';
      getUserInput(numbers);
    }, 10000);
  }

  // Funzione per chiedere all'utente di inserire i numeri
function getUserInput(originalNumbers) {
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
      let userInput = prompt('Inserisci il numero ' + (i + 1));
      userNumbers.push(parseInt(userInput));
    }
    checkResults(originalNumbers, userNumbers);
  }

  // Funzione per verificare i risultati
function checkResults(originalNumbers, userNumbers) {
    let correctNumbers = [];
    for (let i = 0; i < 5; i++) {
      if (originalNumbers.includes(userNumbers[i])) {
        correctNumbers.push(userNumbers[i]);
      }
    }
  
    alert('Hai indovinato ' + correctNumbers.length + ' numeri: ' + correctNumbers.join(', '));
  }
  
  // Avvia il gioco al caricamento della pagina
  window.onload = function() {
    displayNumbers();
  };

//   !!!!!!! NON RIESCO A FAR SPARIRE I NUMERI QUANDO SCADE IL TEMPO GRRRR!!!!!