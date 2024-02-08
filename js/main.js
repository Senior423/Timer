const timer = document.getElementById('timer__time')
const buttonStart = document.getElementById('timer__control-start')
const buttonStop = document.getElementById('timer__control-stop')
let time = 0
let intervalId = 0

function startTimer() {
    if (intervalId > 0) {
        return
    } else {
        intervalId = setInterval(() => {setTime('start')}, 1000)
    }
}

function setTime(value) {
    if (value === 'start') {
        timer.textContent = ++time
    }
}

function stopTimer() {
    clearInterval(intervalId)
    intervalId = 0
}

buttonStop.addEventListener('click', stopTimer)
buttonStart.addEventListener('click', startTimer)