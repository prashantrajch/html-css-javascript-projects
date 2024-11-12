let btn = document.getElementById('customBtn');
let chooseFileBtn = document.getElementById('choosefileBtn');
let fileName = document.querySelector('.fileName');

btn.addEventListener('click', () => {
    console.log('click');
    chooseFileBtn.click();
});

chooseFileBtn.addEventListener('change' , (event) => {
    let value = chooseFileBtn.value;
    if(value != ''){
        let str = value.split('\\');
        fileName.innerText = str.splice(str.length - 1 , 1);
        fileName.style.display = 'block';
    }
    else{
        fileName.style.display = 'none';
    }

})


