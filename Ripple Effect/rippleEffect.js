let buttons = document.querySelectorAll('button');

buttons.forEach((elem,ind) => {
    elem.onclick = function(event) {
        let x = event.clientX - event.target.offsetLeft;
        let y = event.clientY - event.target.offsetTop;
        let ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        elem.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
})