let hamburgerMenu = document.querySelector('.humbergerMenu');
// console.log(hamburgerMenu);
let closeMenu = document.querySelector('.closeMenu');
// console.log(closeMenu);
let navBar = document.querySelector('nav');
// console.log(navBar);
let section = document.querySelector('section');
// console.log(section);

hamburgerMenu.addEventListener('click', (e) => {

    // console.log(hamburgerMenu.style.display);
    navBar.style.marginLeft = '0px';
    section.style.marginLeft = '260px';
    hamburgerMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {

    hamburgerMenu.style.display = 'block';
    navBar.style.marginLeft = '-240px';
    section.style.marginLeft = '0px';
});

const navA = document.querySelectorAll('a');

navA.forEach((elem,ind) => {
    elem.addEventListener('click',()=> {
        var selected = document.getElementsByClassName('active');
        selected[0].className = selected[0].className.replace('active', '');
        elem.className += 'active';
    })
})

console.log(navA);