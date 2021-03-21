let date = new Date(new Date().setTime(0));
let time = date.getTime();
let timex = 0;
let seconds = Math.floor((time % (100*60))/1000);
let minutes = Math.floor((time % (1000*60*60))/(1000*60));

let total_time = setInterval(function() {
    if(seconds <59) {
        seconds++;
    } else {
        minutes++;
        seconds = 0;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`;

}, 1000)