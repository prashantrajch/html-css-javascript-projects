let allBoxes = document.querySelectorAll('.box');
let turn = "X";
let gameOver = true;

allBoxes.forEach((elem, ind) => {
    // elem.innerText = ind;
    elem.addEventListener('click', () => {
        if (elem.innerText == "") {
            elem.innerText = turn;
            checkWinner();
            turn = changeTurn();
            if (gameOver) {
                document.querySelector('.info').innerText = `Turn for ${turn}`;
                document.getElementsByClassName('line')[0].style.opacity = `0`;
            }
        }
    })
})

function changeTurn() {
    return turn == "X" ? "O" : "X";
}

function checkThreeBox(val1,val2,val3){
    val1 = allBoxes[val1].innerText;
    val2 = allBoxes[val2].innerText;
    val3 = allBoxes[val3].innerText;
    if(val1 == turn && val2 == turn && val3 == turn){
        return true;
    }
}

function checkWinner() {
    // if ((allBoxes[0].innerText == turn) && (allBoxes[1].innerText == turn) && (allBoxes[2].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');
    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(0vw,5vw)`;

    // }
    // else if ((allBoxes[3].innerText == turn) && (allBoxes[4].innerText == turn) && (allBoxes[5].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');
    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(0vw,15vw)`;
    // }
    // else if ((allBoxes[6].innerText == turn) && (allBoxes[7].innerText == turn) && (allBoxes[8].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');
    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(0vw,25vw)`;
    // }
    // else if ((allBoxes[0].innerText == turn) && (allBoxes[4].innerText == turn) && (allBoxes[8].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');

    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(0vw,15vw) rotate(45deg)`;

    // }
    // else if ((allBoxes[2].innerText == turn) && (allBoxes[4].innerText == turn) && (allBoxes[6].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');

    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(0vw,15vw) rotate(135deg)`;

    // }
    // else if ((allBoxes[0].innerText == turn) && (allBoxes[3].innerText == turn) && (allBoxes[6].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');

    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(-10vw,15vw) rotate(90deg)`;


    // }
    // else if ((allBoxes[1].innerText == turn) && (allBoxes[4].innerText == turn) && (allBoxes[7].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     gameOver = false;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');

    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(0vw,15vw) rotate(90deg)`;


    // }
    // else if ((allBoxes[2].innerText == turn) && (allBoxes[5].innerText == turn) && (allBoxes[8].innerText == turn)) {
    //     document.querySelector('.info').innerText = `Win ${turn}`;
    //     allBoxes.forEach(elem => elem.style.pointerEvents = 'none');
        
    //     document.getElementsByClassName('line')[0].style.opacity = `1`;
    //     document.getElementsByClassName('line')[0].style.width = `100%`;
    //     document.getElementsByClassName('line')[0].style.transform = `translate(10vw,15vw) rotate(90deg)`;
    // }
    if(checkThreeBox(0,1,2)  || checkThreeBox(3,4,5)  || checkThreeBox(6,7,8)  || checkThreeBox(0,3,6)  || checkThreeBox(1,4,7)  || checkThreeBox(2,5,8)  || checkThreeBox(0,4,8)  || checkThreeBox(2,4,6)){
        document.querySelector('.info').innerText = `Win ${turn}`;
        gameOver = false;
        allBoxes.forEach(elem => elem.style.pointerEvents = 'none');
    }
    else if (allBoxes[0].innerText != '' && allBoxes[1].innerText != '' && allBoxes[2].innerText != '' && allBoxes[3].innerText != '' && allBoxes[4].innerText != '' && allBoxes[5].innerText != '' && allBoxes[6].innerText != '' && allBoxes[7].innerText != '' && allBoxes[8].innerText != '') {
        document.querySelector('.info').innerText = `Match Draw`;
        gameOver = false;
        // console.log('match has drawn has called')
    }

}


document.getElementsByClassName('reset')[0].addEventListener('click', () => {
    allBoxes.forEach(elem => {
        elem.innerText = '';
        elem.style.pointerEvents = 'auto';
    });
    turn = 'X';
    document.querySelector('.info').innerText = `Turn for ${turn}`;
    document.getElementsByClassName('line')[0].style.opacity = `0`;

})


