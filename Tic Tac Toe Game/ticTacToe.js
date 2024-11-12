// Selectin all required elements
const selectBox = document.getElementsByClassName('selectBox')[0];
const selectXBtn = document.getElementsByClassName('playerX')[0];
const selectOBtn = document.getElementsByClassName('playerO')[0];
const playBoard = document.getElementsByClassName('playBoard')[0];
const allBox = document.querySelectorAll('section span');
const players = document.querySelector('.players');
const resultBox = document.querySelector('.resultBox');
const wonText = document.querySelector('.wonText');
const replayBtn = resultBox.querySelector('button');

window.onload = () => {

    allBox.forEach((elem, ind) => {
        elem.setAttribute('onclick', 'clickedBox(this)');
    })

    selectXBtn.addEventListener('click', () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
    });

    selectOBtn.addEventListener('click', () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
        players.setAttribute('class', 'players active player');
    });

}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let runBot = true;



//User Click function
function clickedBox(element) {
    // console.log(element);
    if (players.classList.contains('player')) {
        element.innerHTML = `<i class = '${playerOIcon}'></i>`;
        // console.log(playerOIcon);
        players.classList.add('active');

        playerSign = "O";
        element.setAttribute('id', playerSign);

    }
    else {
        element.innerHTML = `<i class = '${playerXIcon}'></i>`;
        players.classList.add('active');
        // console.log(playerXIcon);
        element.setAttribute('id', playerSign);
    }

    selectWinner();

    playBoard.style.pointerEvents = 'none';
    element.style.pointerEvents = 'none';

    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => {
        bot(runBot);
    }, randomDelayTime);
}

//Bot click function.
function bot(runBot) {

    if (runBot) {
        playerSign = "O";
        let array = [];
        
        for (let i = 0; i < allBox.length; i++) {
            // console.log(i, allBox[i].childElementCount)
            if (allBox[i].childElementCount == 0) {
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];

        if (array.length > 0) {
            if (players.classList.contains('player')) {
                allBox[randomBox].innerHTML = `<i class = '${playerXIcon}'></i>`;
                players.classList.remove('active');
                playerSign = "X";
                allBox[randomBox].setAttribute('id', playerSign);
            }
            else {
                allBox[randomBox].innerHTML = `<i class = '${playerOIcon}'></i>`;
                // console.log(playerOIcon);
                players.classList.remove('active');
                // console.log(playerXIcon);
                allBox[randomBox].setAttribute('id', playerSign);
            }

            selectWinner();

        }
        // console.log(array);
        allBox[randomBox].style.pointerEvents = 'none';
        playBoard.style.pointerEvents = 'auto';

        playerSign = "X";
    }

}


// let work on select the winner

function getClass(idName) {
    // console.log(document.querySelector('.box' + idName).id);
    // console.log(document.querySelector('.box' + idName));
    return document.querySelector(".box" + idName).id;
}

function checkThreeClasses(val1, val2, val3, sign) {
    if (getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign) {
        return true;
    }
}

function selectWinner() {
    if (checkThreeClasses(1, 2, 3, playerSign) || checkThreeClasses(4, 5, 6, playerSign) || checkThreeClasses(7, 8, 9, playerSign) || checkThreeClasses(1, 4, 7, playerSign) || checkThreeClasses(2, 5, 8, playerSign) || checkThreeClasses(3, 6, 9, playerSign) || checkThreeClasses(1, 5, 9, playerSign) || checkThreeClasses(3, 5, 7, playerSign)) {
        // console.log(playerSign + " " + "is the winner");
        runBot = false;
        bot(runBot);
        setTimeout(() => {
            playBoard.classList.remove('show');
            resultBox.classList.add('show');
        }, 700);

        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }
    else{
        if(getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != ""){
            runBot = false;
            bot(runBot);
            setTimeout(() => {
                playBoard.classList.remove('show');
                resultBox.classList.add('show');
            }, 700); 
            wonText.textContent = `Match has been drawn!`;
        }
    }
}

replayBtn.addEventListener('click', () => {
    window.location.reload();
})


