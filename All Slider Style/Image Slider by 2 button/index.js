
let slides = document.getElementsByClassName('slide');
let buttons = document.getElementsByClassName('btn');
let counter = 0;
console.log(slides.length);

Array.from(slides).forEach((slide,index) => {
    slide.style.left = `${index*100}%`
})

let  goPrev = () => {
    counter--;
    if(counter < 0){
        counter = slides.length -1;
    }
    document.getElementsByClassName('active')[0].classList.remove('active');
    buttons[counter].classList.add('active');
    console.log(counter);
    slideImage();
}

let goNext = ()=>{
    counter++;
    console.log(counter);
    if(counter > slides.length -1){
        counter = 0;
    }
    document.getElementsByClassName('active')[0].classList.remove('active');
    buttons[counter].classList.add('active');
    slideImage();
}

let slideImage=() => {
    document.getElementsByClassName('active')[0].classList.remove('active');
    buttons[counter].classList.add('active');
    Array.from(slides).forEach((slide)=> {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

setInterval(() => {
    counter++;
    if(counter > slides.length -1){
        counter =0;
    }
    slideImage();
}, 3000);

Array.from(buttons).forEach((elem,ind) => {
    elem.addEventListener('click' ,() =>{
        document.getElementsByClassName('active')[0].classList.remove('active');
        elem.classList.add('active');
        counter = ind;
        slideImage();
    })
})
