const input = document.querySelector('input');
const checkBtn = document.querySelector('button');
const show = document.querySelector('.show');
let filterInput;

checkBtn.addEventListener('click', () => {
    console.log(filterInput);
    let reverseWord = filterInput.split('').reverse().join('');
    console.log(reverseWord);
    if(reverseWord != filterInput){
        show.innerHTML = `No,<span>'${input.value}'</span>isn't a palindrome`
        return;
    }
    else{
        show.innerHTML = `Yes,<span>'${input.value}'</span>is a palindrome`
    }
});

input.addEventListener('keyup', () => {
    filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig, '');

})

