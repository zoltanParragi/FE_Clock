const digitalClock = document.getElementById('digitalClock');

(function clockBeat() {
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = min < 10 ? ("0" + min) : min;
    sec = sec < 10 ? ("0" + sec) : sec;
    digitalClock.innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(clockBeat, 1000);
})()