let icon = document.getElementsByClassName('icon')[0];
console.log(icon);

icon.addEventListener('click',() => {
    document.querySelector('ul').classList.toggle('close');
})