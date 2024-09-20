function initialise() {
  // Run after page load to ensure the form exists
  game.start();

  const form = document.getElementById('wordForm');
  form.addEventListener('submit', (e) => {

    e.preventDefault();

    var errorMessageElement = document.getElementById('error-message');
    var enteredWordElement = document.getElementById('entered-word');
    var resultElement = document.getElementById('result');
    var word = document.getElementById('word').value.trim();

    enteredWordElement.textContent = word;

    var result = game.submit(word);
    console.log("Result: " + JSON.stringify(result));

    if (result.errorMessage) {
      errorMessageElement.textContent = result.errorMessage;
    }
    else if (result.isCorrect) {
      resultElement.textContent = 'Correct!';
    }
    else {
      resultElement.textContent = 'Incorrect!';
    }
  });

  document
    .getElementById('speak-button')
    .addEventListener('click', (e) => {
      game.speak();
    });
}




class AudioEngine {
  static speak(text) {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];

    // Speak the text
    speechSynthesis.speak(utterance);
  }
}

class Game {

  constructor() {
    this.word = '';
    this.result = null;
  }

  start() {
    this.word = this.#chooseWord();
    this.result = null;
  }

  speak() {
    AudioEngine.speak(this.word);
  }

  submit(text) {
    console.log("Checking word: " + text);

    const errorMessage = null;

    if (text === '') {
      errorMessage = 'Please enter a word';
    } else if (text.length < 3) {
      errorMessage = 'Word must be at least 3 characters long';
    }

    return { 
      isCorrect: text === this.word && !errorMessage,
      errorMessage: errorMessage,
    };
  }

  #chooseWord() {
    console.log("Choosing a new word");

    // TODO: Choose a random word
    return 'Hello';
  }
}

const game = new Game();
window.addEventListener('load', initialise);