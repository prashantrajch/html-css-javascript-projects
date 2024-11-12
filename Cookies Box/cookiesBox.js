let cookieBox = document.querySelector('.box');
let submitBtn = cookieBox.querySelector('#submit');

submitBtn.addEventListener('click', () => {
    document.cookie = 'CookieBy=PrashantRaj; max-age='+60*60*24*30;
    if(document.cookie){
        cookieBox.style.display = 'none';
    }
    else{
        alert('Cookie can not be set!');
        cookieBox.style.display = 'none';
    }
})

let checkCookie = document.cookie.indexOf('CookieBy=PrashantRaj');
console.log(checkCookie);
checkCookie!= -1 ? cookieBox.style.display = 'none': cookieBox.style.display = 'block';