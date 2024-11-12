let button = document.querySelector('button');
let left = button.style.borderBottomLeftRadius = '5px';
let right = button.style.borderBottomRightRadius = '5px';


button.addEventListener('click', () => {
    let inputField = document.querySelector('.inputField');
    inputField.classList.toggle('hide');
    if (left == '5px' && right == "5px") {
       left = button.style.borderBottomLeftRadius = 0;
        right =button.style.borderBottomRightRadius = 0;
    }
    else {
        left = button.style.borderBottomLeftRadius = '5px';
        right = button.style.borderBottomRightRadius = '5px';

    }
    console.log(left);
    console.log(right);

})