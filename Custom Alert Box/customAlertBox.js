// let container =document.getElementsByClassName('container')[0];
// console.log(container);
let style2 = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

// for(let key in style2){
//     // console.log(key + ' value of ' + style2[key]);
//     container.style[key] = style2[key]; 
//     console.log(container.style);
// }

// container.style.height = style2.height;
// container.style.display = style2.display;
// container.style.justifyContent = style2.justifyContent;
// container.style.alignItems = style2.alignItems;

let clickBtn = document.querySelector('.click');
let cancelBtn = document.querySelector('.btn1');
let deleteBtn = document.querySelector('.btn2');
console.log(clickBtn);
clickBtn.addEventListener('click', () => {
    document.querySelector('.popup_Box').classList.toggle('none');
})

cancelBtn.addEventListener('click', () => {
    document.querySelector('.popup_Box').classList.toggle('none');
})

deleteBtn.addEventListener('click', () => {

    document.querySelector('.click').innerText = 'Account Deleted';
    document.querySelector('.popup_Box').classList.toggle('none');
    setTimeout(() => {
        document.querySelector('.click').innerText = 'Click Me';
    }, 2000);

})