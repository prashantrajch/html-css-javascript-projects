let slide = document.querySelectorAll('.slide');
let step = document.querySelectorAll('.step');
let count = 0;

slide.forEach((elem, indx) => {
    elem.style.left = `${indx * 100}%`;
})


function slider() {
    slide.forEach((elem) => {
        elem.style.transform = `translate(-${count * 100}%)`;
    })
}


let nextBtn = document.querySelectorAll('.nextBtn');
let prevBtn = document.getElementsByClassName('prevBtn');

nextBtn.forEach((elem,index) => {
    elem.addEventListener('click', () =>{
        count++;
        slider();
        step[index].children[0].style.color = '#d33f8d';
        step[index].children[1].classList.add('active');
        step[index].children[1].children[0].classList.add('hide');
        step[index].children[1].children[1].classList.remove('check');

    })
});


Array.from(prevBtn).forEach((elem,index) => {
    elem.addEventListener('click', () => {
        count--;
        slider();
        step[index].children[0].style.color = '#000';
        step[index].children[1].classList.remove('active');
        step[index].children[1].children[0].classList.remove('hide');
        step[index].children[1].children[1].classList.add('check');
    })
})


let submit = document.getElementsByClassName('submit')[0];
submit.addEventListener('click', () => {
    step[count].children[0].style.color = '#d33f8d';
    step[count].children[1].classList.add('active');
    step[count].children[1].children[0].classList.add('hide');
    step[count].children[1].children[1].classList.remove('check');
    setTimeout(() => {
        alert('your form has been successfully recoverd');
        location.reload();
    }, 800);
})





