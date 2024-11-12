let body = document.querySelector('body');

body.addEventListener('mousemove',(event) => {
    let rotateX = (window.innerWidth/2 - event.pageX) / 20;
    let rotateY = (window.innerHeight/2 - event.pageY) / 20;


   let card =  document.querySelector('.card');
   card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;


});

body.addEventListener('mouseout',() => {
   let card =  document.querySelector('.card');
card.style.transform = ``;
})