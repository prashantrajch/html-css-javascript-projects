const options = document.querySelectorAll('label');

options.forEach((elem,ind) => {
    elem.addEventListener('click', () => {
        console.log(elem);
        options.forEach((elem3,ind3) => {
            if(elem3.classList.contains('selected')){
                elem3.classList.remove('selected');
            }
        })
        
        elem.classList.add('selected');
        

        options.forEach((elem2,ind2) => {
            elem2.classList.add('selectAll')
        })
    })
})

