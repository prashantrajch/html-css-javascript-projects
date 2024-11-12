let input = document.getElementById('password');
let showBar = document.getElementsByClassName('showBar')[0];
let text = document.querySelector('.text');
let weak = document.querySelector('.weak');
let medium = document.querySelector('.medium');
let strong = document.querySelector('.strong');


let regWeak = /[A-Za-z]/;
let regMedium = /\d+/;
let regStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


input.addEventListener('keyup', () => {
    // console.log(input.value);
    if (input.value != '') {
        // console.log(showBar.classList);
        showBar.style.display = 'block'
        text.style.display = 'block';

        if (input.value.match(regWeak)) {
            text.style.color = '#ff4757';
            text.innerText = 'Your password is too weak';

            weak.style.background = `#ff4757`;
            medium.style.background = ``;
            strong.style.background = ``;

            if (input.value.match(regWeak) && input.value.match(regMedium)) {
                text.style.color = 'orange';
                text.innerText = 'Your password is Medium';

                medium.style.background = `orange`;
                strong.style.background = ``;


                if (input.value.match(regWeak) && input.value.match(regMedium) && input.value.match(regStrong)) {
                    text.style.color = '#23ad5c';
                    text.innerText = 'Your password is strong';

                    strong.style.background = `#23ad5c`;

                }

            }



        }



    }
    else {
        showBar.style.display = 'none'
        text.style.display = 'none';

    }

})
