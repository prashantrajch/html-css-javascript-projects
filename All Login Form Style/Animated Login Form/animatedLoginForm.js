let show = document.querySelector('span');
let password = document.getElementById('password');
console.log(show);
console.log(password.type);

show.addEventListener('click',() => {
    if(password.type == 'password'){
        password.type = 'text';
        show.style.color = '#1da1f2';
        show.textContent = "Hide";
    }
    else{
        password.type = 'password';
        show.textContent = 'Show';
        show.style.color = '#111'
    }
})