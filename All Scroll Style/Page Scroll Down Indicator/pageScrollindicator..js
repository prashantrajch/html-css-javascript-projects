let scroll_Line = document.getElementsByClassName('scroll_Line')[0];
window.onscroll = () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // let width = parseInt((window.scrollY / height) * 100);
    let width = (window.scrollY / height) * 100;
console.log(width);
console.log(height);

scroll_Line.style.width = width+'%';

}