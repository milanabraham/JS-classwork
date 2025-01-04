document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    const addButton = document.querySelector('.add-button');
    const notesContainer = document.querySelector('.notes-container');
    const colorOptions = document.querySelectorAll('.color-option');
    const errorMessage = document.querySelector('.error-message');
    const colorInput = document.querySelector('input[type="color"]');
    
    let selectedColor = '#FFD93D';

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedColor = option.style.backgroundColor;
        });
    });

    colorInput.addEventListener('input' , ()=>{
            selectedColor = colorInput.value;
    })

    addButton.addEventListener('click', () => {
        const noteText = textarea.value.trim();
        
        if (!noteText) {
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
            return;
        }

        createNote(noteText, selectedColor);
        textarea.value = '';
        checkEmptyState();
    });

    function createNote(text, color) {
        const note = document.createElement('div');
        note.className = 'note';
        note.style.backgroundColor = color;
        
        const noteText = document.createElement('div');
        noteText.className = 'note-text';
        noteText.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '×';
        deleteButton.addEventListener('click', () => { 
            note.remove();
            checkEmptyState();
        });

        note.appendChild(noteText);
        note.appendChild(deleteButton);
        notesContainer.appendChild(note);
    }

    // Check empty state
    function checkEmptyState() {
        const emptyState = document.querySelector('.empty-state');
        const notes = document.querySelectorAll('.note');
        
        if (notes.length === 0 && !emptyState) {
            const empty = document.createElement('div');
            empty.className = 'empty-state';
            empty.textContent = 'No notes yet. Start by adding one!';
            notesContainer.appendChild(empty);
        } else if (notes.length > 0 && emptyState) {
            emptyState.remove();
        }
    }

    // Enter key support
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addButton.click();
        }
    });
});


