let before = document.getElementsByClassName('before')[0];
let after = document.getElementsByClassName('after')[0];
let chooseFile = document.querySelector('#fileSelect');
let cancelBtn = document.getElementsByClassName('fa-close')[0];
let img = document.querySelector('img');
let afterText = document.querySelector('.afterText');
let btn = document.querySelector('.submit');

console.log(img);

btn.addEventListener('click', function () {
    chooseFile.click();
});

chooseFile.addEventListener('change', () => {
    const file = chooseFile.files[0];
    let value = chooseFile.value;
    value = value.split('\\');
    let showLastWord = value.splice(value.length - 1, 1);
    console.log(value);
    console.log(showLastWord);
    if (value != '') {

        const reader = new FileReader();
        console.log(reader);
        reader.onload = function() {
            const result = reader.result;
            console.log(result);
            img.setAttribute('src', result);
        }
        reader.readAsDataURL(file);



        document.getElementsByClassName('content')[0].style.border = 'none';
        after.style.display = 'block';
        before.style.display = 'none';
        afterText.innerText = showLastWord;
    }
    else {
        document.getElementsByClassName('content')[0].style.border = '2px dashed lightgrey';
        before.style.display = 'block';
        after.style.display = 'none';

    }
})


cancelBtn.addEventListener('click', function () {
    document.getElementsByClassName('content')[0].style.border = '2px dashed lightgrey';
    before.style.display = 'block';
    after.style.display = 'none';

})


