let inputValue = document.querySelector('input');

inputValue.addEventListener('input', () => {
    let logo = document.querySelector('i');
    let text = document.getElementById('text');
    let inputField = document.getElementsByClassName('inputField')[0];
    let emailValidate = /^[a-zA-Z]\w+@[a-zA-Z]{5,}\.[a-zA-Z]{2,3}$/;



    if (emailValidate.test(inputValue.value)) {

        logo.classList.add('check');
        text.classList.replace('errorMessage', 'submit');
        text.innerText = 'Submit';
        inputField.style.border = `2px solid #27ae60`;
    }
    else if (inputValue.value == '') {
        logo.style.display = 'none';
        text.style.display = 'none';
        inputField.style.border = '2px solid #ccc';
        
        
    }
    else {
        logo.classList.remove('check');
        text.classList.replace('submit', 'errorMessage');
        logo.style.display = 'block';
        text.style.display = 'block';
        inputField.style.border = '2px solid #e74c3c'
        text.innerText = 'Please Enter Valid Email Address';
    }

})