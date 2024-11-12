let pushBtn = document.getElementById('pushBtn');
let counter = 0;
if (counter == 0) {
    document.querySelector('.notification').style.opacity = 0;
    console.log('if condition is run');
}
pushBtn.addEventListener('click', () => {
    counter++;
    counter > 9 ?  document.querySelector('.notification').style.padding = '6px 10px' : document.querySelector('.notification').style.padding = '5px 15px';

    document.querySelector('.notification').innerText = counter;
    document.querySelector('.notification').style.opacity = 1;

})