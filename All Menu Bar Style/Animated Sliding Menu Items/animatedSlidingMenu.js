let button = document.getElementsByClassName('menu')[0];

let style = {
    width: '100%',
    opacity: 1,
    pointerEvents: 'auto',
}

button.addEventListener('click', () => {
    console.log(button.classList);
    if (button.classList[1] == 'expand') {
        button.classList.remove('expand');

        document.querySelector('i').classList.remove('close');

        for (let key in style) {
            document.querySelector('ul').style[key] = style[key];
        }

        style.width = '100%';
        style.opacity = 1;
        style.pointerEvents = 'auto';
    }
    else {
        button.classList.add('expand');

        document.querySelector('i').classList.add('close');

        for (let key in style) {
            document.querySelector('ul').style[key] = style[key];
        }

        style.width = '0%';
        style.opacity = 1;
        style.pointerEvents = 'none';

    }
})