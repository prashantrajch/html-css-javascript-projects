let input = document.querySelector('input');
let show = document.querySelector('.show');

show.addEventListener('click', () => {
    let classList = document.querySelector('.show');
    classListArray = Array.from(classList.classList);
    console.log(classListArray);

    if(classListArray[3] == 'hide'){
        classList.classList.remove('hide');
        input.type = 'password'
    }
    else{
        
        classList.classList.add('hide');
        input.type = 'text';
    }


})
