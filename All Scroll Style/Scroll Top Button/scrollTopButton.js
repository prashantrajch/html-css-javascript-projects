let toggleBtn = document.querySelector('.toggleBtn');
let closeBtn = document.querySelector('.close');
let listBtn = document.querySelector('.list');
console.log(closeBtn);

toggleBtn.addEventListener('click',()=> {
    console.log('toggle btn click');
    listBtn.classList.toggle('bi');
    listBtn.classList.toggle('bi-x-lg');
    let navbarList = document.querySelector('.navbarList');
    navbarList.classList.toggle('none');
    console.log(navbarList.classList);
    
});

let upArrow = document.querySelector('.upArrow');
window.onscroll = () => {
    let scroll1 = window.pageYOffset;
    if(scroll1 < 100){
        upArrow.classList.add('upNone');
    }
    else{
        upArrow.classList.remove('upNone');
    }

}
upArrow.addEventListener('click',() => {
    // console.log('hello');
    window.scrollTo(0,0);
})
