let scroll1 = window.pageYOffset;
console.log(scroll1);
window.onscroll = () => {
    let scroll2 = window.pageYOffset;
    if (scroll1 > scroll2) {
        console.log('Now Scroll 1 is greater than scroll2')
        document.querySelector('nav').style.top = 0;
    }
    else {
        document.querySelector('nav').style.top = '-90px'
    }
    console.log(scroll1);
    console.log(scroll2);
    scroll1 = scroll2;
};