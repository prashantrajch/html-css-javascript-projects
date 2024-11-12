let slider = document.getElementsByClassName('slide');
let nextBtn = document.getElementsByClassName('nextBtn');
let prevBtn = document.getElementsByClassName('prevBtn');
let bullet = document.getElementsByClassName('bullet');
console.log(slider);
console.log(nextBtn);
console.log(prevBtn);

Array.from(nextBtn).forEach((elem,index) => {
    // console.log(element);
    elem.addEventListener('click' ,() => {
        console.log(index);
            slider[index].style.marginLeft = `-25%`;
            bullet[index].style.background = '#d33f8d';
            bullet[index].style.border = '#d33f8d';
            bullet[index].style.color = '#fff';
            
        })
    });
    
    Array.from(prevBtn).forEach((elem,index) => {
        elem.addEventListener('click',() => {
            slider[index].style.marginLeft = `0%`;
            bullet[index].style.background = 'none';
            bullet[index].style.border = '2px solid #000';
            bullet[index].style.color = '#000';
            
    })
})