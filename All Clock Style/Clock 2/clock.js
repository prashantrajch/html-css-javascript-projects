const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hr = document.querySelector('.hr');


setInterval(() => {
    let date = new Date();
    let secs = date.getSeconds() * 6;
    let mins = date.getMinutes() * 6;
    let hrs = date.getHours() * 30;

    sec.style.transform = `rotateZ(${secs}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hr.style.transform = `rotateZ(${hrs+(mins/12)}deg)`
}, 1000);