let progress = document.getElementsByClassName('progress')[0];
let precent = document.getElementsByClassName('percent')[0];
console.log(progress);
console.log(precent);

// let widthcounter = 0;

// let loading = setInterval(() => {
//     progresBar();
//     widthcounter++;
// }, 50);

// function progresBar() {
//     if(widthcounter == 100){
//         clearInterval(loading);
//     }
//     precent.innerText = `${widthcounter}%`;
//     progress.style.width = `${widthcounter}%`;
// }

// method 2

let count = 0;
let loading = setInterval(animate,50);

function animate(){
    if(count == 100){
        precent.classList.add('textBlink');
        progress.innerText = `Completed`;
        clearInterval(loading);
    }
    else{
        count++;
        precent.innerText = `${count}%`
        progress.style.width = `${count}%`;
    }
}