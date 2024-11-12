let input = document.getElementById('text');
let btn = document.querySelector('button');
let i = document.getElementsByClassName('fa-copy');
let char = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXUYZ$%^&*1234567890`;
let str = '';
btn.addEventListener('click', () => {

    for (let i = 0; i < 8; i++) {
        str += char.charAt(randomGenrator());
    }
    input.value = str;
    str = ''
    i[1].style.display = 'none';
    i[0].style.display = 'block';
});

function randomGenrator() {
    return Math.floor(Math.random() * char.length);
}

i[0].addEventListener('click', () => {
    input.select();
    document.execCommand('copy');
    i[1].style.display = 'block';
    i[0].style.display = 'none';
})


