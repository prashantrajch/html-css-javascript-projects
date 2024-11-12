const filterItem = document.querySelector('.items'),
filterImg = document.querySelectorAll('.image');

window.onload = () =>{

    filterItem.addEventListener("click", (selectedItem) => {

        if(selectedItem.target.classList.contains('item')){

            filterItem.querySelector('.active').classList.remove('active');

            selectedItem.target.classList.add('active');

            let filterName = selectedItem.target.getAttribute('data-name');

            filterImg.forEach((image) => {

                let filterImages = image.getAttribute('data-name');

                console.log(filterImages);

                if((filterImages == filterName) || filterName == 'all'){

                    image.classList.add('show');
                    image.classList.remove('hide');

                }else{
                    
                    image.classList.add('hide');
                    image.classList.remove('show');
                }

            })



        }
    })
}









