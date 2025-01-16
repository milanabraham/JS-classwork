
        const editor = document.getElementById('editor');
        const saveStatus = document.getElementById('saveStatus');
        const wordCountElement = document.getElementById('wordCount');
        const charCountElement = document.getElementById('charCount');

        let saveTimeout;
        
        // Load saved content
        if (localStorage.getItem('savedText')) {
            editor.value = localStorage.getItem('savedText');
            updateCounts();
        }

        function updateCounts() {
            const text = editor.value;
            const words = text.trim() ? text.trim().split(/\s+/).length : 0;
            const chars = text.length;

            wordCountElement.textContent = `${words} word${words !== 1 ? 's' : ''}`;
            charCountElement.textContent = `${chars} character${chars !== 1 ? 's' : ''}`;
        }

        function showSaveStatus() {
            saveStatus.classList.add('visible');
            setTimeout(() => {
                saveStatus.classList.remove('visible');
            }, 2000);
        }

        function saveToLocalStorage() {
            localStorage.setItem('savedText', editor.value);
            showSaveStatus();
        }

        editor.addEventListener('input', (e) => {
            updateCounts();
            
            // Clear existing timeout
            clearTimeout(saveTimeout);
            
            // Set new timeout for auto-save
            saveTimeout = setTimeout(() => {
                saveToLocalStorage();
            }, 1000);
        });

        // Initial counts update
        updateCounts();