let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}<span class="milliseconds">.${String(ms).padStart(2, '0')}</span>`;
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.innerHTML = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10); 
        startBtn.textContent = 'Pause';
        startBtn.style.background = '#e67e22'; 
    } else {
        isRunning = false;
        clearInterval(timerInterval);
        startBtn.textContent = 'Start';
        startBtn.style.background = '#2ecc71'; 
    }
});

stopBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    startBtn.textContent = 'Start';
    startBtn.style.background = '#2ecc71';
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerHTML = '00:00:00<span class="milliseconds">.00</span>';
    startBtn.textContent = 'Start';
    startBtn.style.background = '#2ecc71';
});