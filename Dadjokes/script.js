const jokeText = document.querySelector('.joke-text');
const generateBtn = document.getElementById('generate-btn');
const loadingSpinner = document.querySelector('.loading-spinner');

const apiKey = "WCBvxasGsxr0nwWaMueqAA==S7zU1XNwBpLjRkr3";

const showLoading = () => {
    loadingSpinner.classList.remove('hidden');
    jokeText.style.opacity = '0';
};

const hideLoading = () => {
    loadingSpinner.classList.add('hidden');
    jokeText.style.opacity = '1';
};

const showError = (message) => {
    jokeText.innerHTML = `<div class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        ${message}
    </div>`;
};

const fetchJoke = async () => {
    showLoading();
    generateBtn.disabled = true;
    
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
            headers: {
                "X-Api-Key": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        jokeText.textContent = data[0].joke;
    } catch (error) {
        console.error('Error:', error);
        showError('Oops! Failed to fetch a joke. Please try again!');
    } finally {
        hideLoading();
        generateBtn.disabled = false;
    }
};

generateBtn.addEventListener('click', fetchJoke);