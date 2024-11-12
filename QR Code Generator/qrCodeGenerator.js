const submitBtn = document.querySelector('.submitBtn');
const box = document.getElementsByClassName('box')[0];
const inputValue = document.querySelector('input');
const qrImage = document.querySelector('img');

submitBtn.addEventListener('click', () => {
    let qrValue = inputValue.value;
    if(!qrValue)return;
    submitBtn.innerText = `Generating QR Code`;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    
    qrImage.addEventListener('load', () => {
        box.classList.add('active');
        submitBtn.innerText = `Generate QR Code`;
    })
})


