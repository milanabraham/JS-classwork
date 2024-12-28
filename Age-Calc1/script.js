function calculateAge() {
    // Get input values
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Reset error states
    [dayInput, monthInput, yearInput].forEach(input => {
        input.classList.remove('error');
    });

    // Validate inputs
    let hasError = false;
    
    if (!day || day < 1 || day > 31) {
        dayInput.classList.add('error');
        hasError = true;
    }
    if (!month || month < 1 || month > 12) {
        monthInput.classList.add('error');
        hasError = true;
    }
    if (!year || year < 1800 || year > new Date().getFullYear()) {
        yearInput.classList.add('error');
        hasError = true;
    }

    // Check for valid date (e.g., February 31st)
    const inputDate = new Date(year, month - 1, day);
    if (inputDate.getDate() !== day) {
        dayInput.classList.add('error');
        hasError = true;
    }

    if (hasError) return;

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

   
    const result = document.getElementById('result');
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;

    result.classList.add('show');
}
