// Check if SpeechSynthesis API is available
if ('speechSynthesis' in window) {
    console.log("Speech Synthesis API is supported");
} else {
    alert("Sorry, your browser does not support speech synthesis.");
}

// Function to speak the selected word
function speakWord(word) {
    let utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Set the language
    utterance.rate = 0.8; // Adjust the speed for kids
    window.speechSynthesis.speak(utterance);
}

// Select all elements with the 'word' class and add event listeners
document.querySelectorAll('.word').forEach(wordElement => {
    wordElement.addEventListener('click', () => {
        const word = wordElement.innerText;
        speakWord(word);
    });
});
