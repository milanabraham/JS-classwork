function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    const dateDisplay = document.getElementById('date');

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    clock.innerHTML = `${hours}<span class="divider">:</span>${minutes}<span class="seconds">:${seconds}</span><span class="meridiem">${meridiem}</span>`;
    
    dateDisplay.textContent = `${day}, ${month} ${date}, ${year}`;
}

updateClock();
setInterval(updateClock, 1000);