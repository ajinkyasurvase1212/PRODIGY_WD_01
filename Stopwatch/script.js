let startTime, updatedTime, difference;
let interval;
let running = false;

const timeDisplay = document.getElementById("Time");

// Start the stopwatch
document.getElementById("play").addEventListener("click", function() {
    if (!running) {
        running = true;
        startTime = new Date().getTime() - (difference || 0);
        interval = setInterval(updateTime, 1000); 
    }
});

// Stop the stopwatch
document.getElementById("stop").addEventListener("click", function() {
    if (running) {
        clearInterval(interval);
        running = false;
        difference = new Date().getTime() - startTime;
    }
});

// Reset the stopwatch
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(interval);
    running = false;
    difference = 0;
    timeDisplay.textContent = "00:00:00";
});


function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((updatedTime / 1000) % 60);

    timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
}

