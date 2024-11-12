const carousel = document.getElementsByClassName('carousel')[0];
const arrowIcons = document.querySelectorAll('i');
const firstImg = document.querySelectorAll('img')[0];

let isDragStart = false,isDragging = false, prevPageX, prevScrollLeft,positionDiff;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
console.log(scrollWidth);

let showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'block';
    console.log(carousel.scrollLeft, scrollWidth);
}


arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
        setTimeout( () => showHideIcons(), 60);
    })
})



const dtagStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // console.log(e.pageX);

    if (!isDragStart) return;
    e.preventDefault();

    isDragging = true;
    carousel.classList.add('dragging');
    
     positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}


const autoSlide = () => {

    if(carousel.scrollLeft == scrollWidth) return;


    console.log(positionDiff);
    positionDiff = Math.abs(positionDiff);
    let firstImagWidth = firstImg.clientWidth + 14;
    let valDifference = firstImagWidth - positionDiff;


    if(carousel.scrollLeft > prevScrollLeft){
        // console.log('User is scrolling to the right');
        return carousel.scrollLeft += positionDiff > firstImagWidth / 3 ? valDifference : -positionDiff;
    }
    return carousel.scrollLeft -= positionDiff > firstImagWidth / 3 ? valDifference : -positionDiff;
    // console.log('User is scrolling to the left');

}


const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
    if(!isDragging) return;
    isDragging = false;
    autoSlide();

}

carousel.addEventListener('mousedown', dtagStart);
carousel.addEventListener('touchstart', dtagStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);






