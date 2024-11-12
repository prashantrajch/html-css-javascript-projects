
setInterval(() => {
    let digitalClock = document.getElementById('digitalClock');
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = hr > 12 ? 'PM' : 'AM'
    
    hr = hr > 12 ? (hr - 12) : hr;

    hr = hr < 10 ? '0'+hr : hr;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    // console.log(digitalClock)
    digitalClock.innerHTML = `${hr}:${min}:${sec} ${day}`;

}, 1000);