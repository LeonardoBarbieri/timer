let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let interval = null;



function stopWatch () {
    seconds ++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes ++;
    };

    if (minutes / 60 === 1) {
        minutes = 0;
        hours ++;
    };

    if (seconds < 10) {
        displaySeconds = `0${seconds}`
    } else {
        displaySeconds = seconds;
    };
    if (minutes < 10) {
        displayMinutes = `0${minutes}`
    } else {
        displayMinutes = minutes;
    };
    if (hours < 10) {
        displayHours = `0${hours}`
    } else {
        displayHours = hours;
    };
    document.querySelector('.seconds').innerHTML = displaySeconds;
    document.querySelector('.minutes').innerHTML = displayMinutes+':';
    document.querySelector('.hours').innerHTML = displayHours+':';
    

};

function startStopWatch () {
    interval = setInterval(stopWatch, 1000)
}
        

document.getElementById('start').addEventListener('click', () =>{
    startStopWatch();
});

document.getElementById('stop').addEventListener('click', () =>{
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () =>{
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('.seconds').innerHTML = '00';
    document.querySelector('.minutes').innerHTML = '00:';
    document.querySelector('.hours').innerHTML = '00:';
});







