let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.time');
let int;

document.getElementById('startTimer').addEventListener('click', (e) => {
    int = setInterval(displayTimer, 10);
});

document.getElementById('pauseTimer').addEventListener('click', () =>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', () =>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 00';
});


function displayTimer(){
    milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let hrs = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let mil = milliseconds < 100 ? "00" + milliseconds : milliseconds;

    timerRef.innerHTML = `${hrs} : ${min} : ${sec} : ${mil}`;


}