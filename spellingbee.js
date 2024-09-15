function initialise() {
  // Run after page load to ensure the form exists
  const form = document.getElementById('wordForm');
  form.addEventListener('submit', onFormSubmitted);

  document
    .getElementById('speak-button')
    .addEventListener('click', speak);
}

function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("Hello, world!");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];

  // Speak the text
  speechSynthesis.speak(utterance);
}

function onFormSubmitted(e) {
  e.preventDefault(); // prevent the form from submitting

  const errorMessage = document.getElementById('error-message');
  const word = document.getElementById('word').value.trim();
  const result = document.getElementById('result');

  if (word === '') {
    errorMessage.textContent = 'Please enter a word';
  } else if (word.length < 3) {
    errorMessage.textContent = 'Word must be at least 3 characters long';
  } else {
    // form is valid, you can submit it or do something else
    result.textContent = word;
  }
}

window.addEventListener('load', initialise);