setInterval(() => {
    let time = new Date();
    let sec = time.getSeconds() * 6;
    let min = time.getMinutes() * 6;

    document.querySelector('.sec').style.transform = `rotate(${sec}deg)`;
    document.querySelector('.min').style.transform = `rotate(${min}deg)`;
}, 1000);