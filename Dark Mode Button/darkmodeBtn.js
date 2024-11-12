let darkbtn = document.getElementById('darkBtn');
console.log(darkbtn);

darkbtn.addEventListener('click',() =>{
    if(darkbtn.checked){
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        document.getElementsByClassName('text')[0].innerText = 'Enabled';
    }
    else{
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.getElementsByClassName('text')[0].innerText = 'Disabled'
        
    }
})