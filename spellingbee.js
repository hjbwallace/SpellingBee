function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("Hello, world!");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];

  // Speak the text
  speechSynthesis.speak(utterance);
}