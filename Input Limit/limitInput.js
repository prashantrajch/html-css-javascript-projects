let input = document.querySelector('input');
let inpuField = document.querySelector('.inputField');

input.addEventListener('focus', () => {
    inpuField.style.border = `2px solid aqua`;
})

input.addEventListener('focusout', () => {
    inpuField.style.border = `2px solid #ddd`;
})


input.addEventListener('keyup', () => {
    let length = input.getAttribute('maxLength');
    console.log(length);
    inpuField.children[2].innerHTML = length - input.value.length;
})
