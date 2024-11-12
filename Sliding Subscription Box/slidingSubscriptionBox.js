let btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
    let popup = document.querySelector('.subscriptionContainer');
    popup.classList.toggle('hide');
});

document.querySelector('.close').addEventListener('click',() => {
    let popup = document.querySelector('.subscriptionContainer');
    popup.classList.toggle('hide');
})