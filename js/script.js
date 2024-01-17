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

