let alarmTime = null;
let alarmTriggered = false;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;

    checkAlarm(timeString);
}

function setAlarm() {
    let inputTime = document.getElementById("alarm-time").value;
    if (inputTime) {
        alarmTime = inputTime;
        alarmTriggered = false;
        alert("Alarm set for " + alarmTime);
    }
}

function clearAlarm() {
    alarmTime = null;
    alarmTriggered = false;
    document.getElementById("alarm-sound").pause();
    document.getElementById("alarm-sound").currentTime = 0;
    alert("Alarm cleared");
}

function checkAlarm(currentTime) {
    if (alarmTime && currentTime === alarmTime && !alarmTriggered) {
        alarmTriggered = true;
        document.getElementById("alarm-sound").play();
        alert("Wake up! Alarm ringing!");
    }
}

setInterval(updateClock, 1000);
updateClock();
