let slider = document.getElementsByClassName('slide_Item');
slider = Array.from(slider);
console.log(Array.isArray(slider));

slider.forEach((elem,ind) => {
   elem.style.left = `${ind * 100}%`; 
});

let count = 0;

function counter(index){
    if(index > slider.length -1){
        count = 0;
    }
    else if(index < 0){
        count = slider.length -1;
    }
}

function slideImage(){
    slider.forEach((elem) => {
        elem.style.transform = `translateX(-${count * 100}%)`;
    })
}

function goNext() {
    count++;
    counter(count);
    slideImage();
}
function goPrev() {
    count--;
    counter(count);
    slideImage();
}

setInterval(() => {
    count++;
    counter(count);
    slideImage();
}, 5000);