
let errorShow = document.getElementsByClassName("errorShow")[0];
let input1 = document.getElementById('password1');
let input2 = document.getElementById('password2');
let show = document.getElementById('show');
let btn = document.getElementsByClassName('btn')[0];

input1.addEventListener('keyup', () => {
    // console.log('Key up 1');
    // console.log(input1.value.length);
    if (input1.value.length > 5) {
        input2.removeAttribute('disabled', '');
        btn.removeAttribute('disabled', '');
        btn.classList.add('active');

    }
    else {
        input2.setAttribute('disabled', '');
        btn.setAttribute('disabled', '');
        btn.classList.remove('active');

    }
});


show.addEventListener('click', function () {
    console.log(input1.type);
    if (input1.type == 'password' && input2.type == 'password') {
        input1.type = 'text';
        input2.type = 'text';
        show.innerText = 'Hide';
        show.classList.add('active');
    }
    else {
        input1.type = 'password';
        input2.type = 'password';
        show.innerText = 'Show';
        show.classList.remove('active');

    }
});


btn.addEventListener('click', valid);

function valid() {
    if (input1.value == input2.value) {
        errorShow.style.display = 'block';
        errorShow.innerText = 'Nice! Confirm Password Matched';
        errorShow.classList.add('validShow');
        
    }
    else{
        errorShow.style.display = 'block';
        errorShow.innerText = 'Error! Confirm Password Not Matched';
        errorShow.classList.remove('validShow');

    }
}


