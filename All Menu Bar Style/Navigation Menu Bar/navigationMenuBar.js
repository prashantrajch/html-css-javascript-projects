let scroll1 = window.pageYOffset;
window.onscroll = function () {
    let scroll2 = window.pageYOffset;

    if (scroll1 < 100) {
        document.querySelector('nav').style.top = '0px';
    }
    else if (scroll1 > scroll2) {
        document.querySelector('nav').style.top = '0px';
    }
    else {
        document.querySelector('nav').style.top = '-100px';
    }
    scroll1 = scroll2;
}