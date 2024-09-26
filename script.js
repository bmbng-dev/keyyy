const words = ['cepat', 'program', 'komputer', 'website', 'keyboard', 'javascript', 'koding', 'game'];
let currentWord = '';
let startTime, endTime;

const wordDisplay = document.getElementById('wordDisplay');
const inputWord = document.getElementById('inputWord');
const result = document.getElementById('result');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startGame);
inputWord.addEventListener('input', checkWord);

function startGame() {
    inputWord.value = '';
    inputWord.disabled = false;
    inputWord.focus();
    result.textContent = '';
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
    startTime = new Date().getTime();
}

function checkWord() {
    if (inputWord.value === currentWord) {
        endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000;
        result.textContent = `Waktu yang diambil: ${timeTaken} detik`;
        inputWord.disabled = true;
        startButton.textContent = 'Main Lagi';
    }
}