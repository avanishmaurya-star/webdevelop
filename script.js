setInterval(() => {
    const now = new Date();
    document.getElementById('hours').textContent = String(now.getHours()).padStart(2, '0');
    document.getElementById('minutes').textContent = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('seconds').textContent = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('date').textContent = now.toDateString();
}, 1000);

document.getElementById('theme-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('set-alarm').addEventListener('click', () => {
    const alarmTime = document.getElementById('alarm-time').value;
    const alarmInterval = setInterval(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        if (currentTime === alarmTime) {
            alert('Alarm triggered!');
            clearInterval(alarmInterval);
        }
    }, 1000);
});

let stopwatchInterval;
let stopwatchTime = 0;

document.getElementById('start-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime += 1;
        const hours = Math.floor(stopwatchTime / 3600);
        const minutes = Math.floor((stopwatchTime % 3600) / 60);
        const seconds = stopwatchTime % 60;
        document.getElementById('stopwatch-display').textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = '00:00:00';
});

document.getElementById('start-countdown').addEventListener('click', () => {
    const countdownMinutes = parseInt(document.getElementById('countdown-minutes').value, 10) || 0;
    const countdownSeconds = parseInt(document.getElementById('countdown-seconds').value, 10) || 0;
    let totalTime = countdownMinutes * 60 + countdownSeconds;

    const countdownInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown finished!');
        } else {
            totalTime -= 1;
            const minutes = Math.floor(totalTime / 60);
            const seconds = totalTime % 60;
            document.getElementById('countdown-display').textContent =
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
});
