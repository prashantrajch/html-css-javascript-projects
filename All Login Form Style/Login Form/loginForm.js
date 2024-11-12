let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');


// let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener('click', () => {
    if (email.value == '' || password.value == '') {
        alert('Please fill the email and password section');
    }
    else if (emailValidation() && passwordValidation()) {
        alert('You have been succesfully Login');
    }
})

function emailValidation() {
    let emailRegex = /^\w+@([a-z]){4,6}\.([a-z]){3}$/;
    if (!emailRegex.test(email.value)) {
        alert('Enter a valid email');
        return false;
    }
    else {
        return true;
    }
}

function passwordValidation() {
    let passwordRegex = /[\w+]{6,10}$/;
    console.log(password.value.length);
    if (password.value.length < 6 || password.value.length > 10) {
        alert('Enter the password between 6 to 10');
        return false;
    }

    else if (!passwordRegex.test(password.value)) {
        alert("Enter a valid password");
        return false;
    }
    else {

        return true;
    }

}