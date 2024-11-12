let alertBox = document.getElementsByClassName('alertBox')[0];
let btn = document.getElementsByClassName('btn')[0];
let closeBtn = document.getElementsByClassName('fa-close')[0];


btn.addEventListener('click', () => {
    alertBox.classList.add('show');
    alertBox.classList.remove('hide');
});

closeBtn.addEventListener('click',() => {
    alertBox.classList.remove('show');
    alertBox.classList.add('hide');
})

