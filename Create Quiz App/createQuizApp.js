// getting all required elements
const startBtn = document.getElementsByClassName("startBtn")[0];
const infoBox = document.getElementsByClassName("infoBox")[0];
const exitBtn = document.getElementsByClassName("quit")[0];
const continuetBtn = document.getElementsByClassName("restart")[0];
const quizBox = document.getElementsByClassName("quizBox")[0];
const timeCount = document.getElementsByClassName('timerSec')[0];
const timeLine = document.querySelector('.timeLine');
const resultBox = document.querySelector('.resultBox');
const restartQuiz = document.querySelector('.resultBox .buttons .restart');
const quitQuiz = document.querySelector('.resultBox .buttons .quit');
const timeOff = document.querySelector('.timeText');
// If Start Quiz Button Clicked
startBtn.addEventListener("click", () => {
    infoBox.classList.add("activeInfo");
});

// If Exit Quiz Button Clicked
exitBtn.addEventListener("click", () => {
    infoBox.classList.remove("activeInfo");
});

// If Continue Quiz Button Clicked
continuetBtn.addEventListener("click", () => {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);

});

// getting questions and options from array
function showQuestions(index) {
    const queText = document.getElementsByClassName("queText")[0];
    const optionList = document.getElementsByClassName("optionList")[0];
    let queTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    let optionTag = `<div class="option">
    <span>${questions[index].options[0]}</span>
    </div>
    <div class="option">
    <span>${questions[index].options[1]}</span>
    </div>
    <div class="option">
    <span>${questions[index].options[2]}</span>
    </div>
    <div class="option">
    <span>${questions[index].options[3]}</span>
    </div>`;
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll('.option');
    option.forEach((elem, ind) => {
        elem.setAttribute('onclick', `optionSelected(this)`);
    })
}

const nextBtn = document.querySelector('.nextBtn');
let queCount = 0;
let queNum = 1;
let counter;
let timeValue = 15;
let counterLine;
let widhtValue = 0;
let userScroe = 0;

nextBtn.addEventListener("click", () => {
    if (queCount < questions.length - 1) {
        queCount++;
        queNum++;
        showQuestions(queCount);
        queCounter(queNum);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widhtValue);
        nextBtn.style.display = 'none';
        timeOff.innerText = 'Time Left';

    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResultBox();
    }

})


function queCounter(index) {
    let bottomQuesCounter = document.querySelector('.totalQue');
    let totalQuesCountTag = `<span>
    <p>${index}</p>of <p>${questions.length}</p>Questions
      </span>`;
    console.log(index);
    bottomQuesCounter.innerHTML = totalQuesCountTag;

    if(index == 5){
        bottomQuesCounter.nextElementSibling.innerText = 'Submit';
    }
    else{
        bottomQuesCounter.nextElementSibling.innerText = 'Next Ques';

    }

}

let tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`;

function optionSelected(answer) {
    // console.log(answer.textContent);
    clearInterval(counter);
    clearInterval(counterLine);

    let allOptions = document.getElementsByClassName('optionList')[0].children;

    let userAns = answer.textContent.trim();
    let correctAns = questions[queCount].answer;
    console.log(correctAns);
    if (userAns == correctAns) {
        userScroe++;

        // alert('Answer is Correct');
        answer.classList.add('correct');
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }
    else {
        // alert('Answer is Wrong');
        answer.classList.add('inCorrect');
        answer.insertAdjacentHTML("beforeend", crossIcon);

        // if answers is incorrect the automatically seleced the correct answer
        Array.from(allOptions).forEach((elem, ind) => {
            if (elem.textContent.trim() == correctAns) {
                elem.setAttribute('class', 'option correct')
                elem.insertAdjacentHTML("beforeend", tickIcon);
            }
        })
    }

    // once user selected disabled all options
    // console.log(allOptions);
    Array.from(allOptions).forEach((elem, ind) => {
        elem.classList.add('disabled');
    })
    nextBtn.style.display = 'block';

}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.innerText = 'Time Off';

            let correctAns = questions[queCount].answer;
            let allOptions = document.getElementsByClassName('optionList')[0].children;


            Array.from(allOptions).forEach((elem, ind) => {
                if (elem.textContent.trim() == correctAns) {
                    elem.setAttribute('class', 'option correct')
                    elem.insertAdjacentHTML("beforeend", tickIcon);
                }
            });

            Array.from(allOptions).forEach((elem, ind) => {
                elem.classList.add('disabled');
            })
            nextBtn.style.display = 'block';

        }
        else {
            time = time > 9 ? time : "0" + time;
            timeCount.textContent = time;
            time--;
        }
    }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + 'px';
        if (time > 549) {
            clearInterval(counterLine);
        }

    }
}

function showResultBox() {
    infoBox.classList.remove('activeInfo');
    quizBox.classList.remove('activeQuiz');
    resultBox.classList.add('activeResult');
    const scoreText = document.querySelector('.scoreText');
    if (userScroe > 3) {
        let scoreTag = `<span>and congrats!, You got <p>${userScroe}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
    else if (userScroe > 1) {
        let scoreTag = `<span>and nice, You got <p>${userScroe}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = `<span>and sorry, You got <p>${userScroe}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
}

quitQuiz.addEventListener('click', () => {
    window.location.reload();
})


restartQuiz.addEventListener('click', () => {
    quizBox.classList.add('activeQuiz')
    resultBox.classList.remove('activeResult');
     queCount = 0;
     queNum = 1;
     counter;
     timeValue = 15;
     counterLine;
     widhtValue = 0;
     userScroe = 0;
    showQuestions(queCount);
    queCounter(queNum);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine)
    startTimerLine(widhtValue);
    nextBtn.style.display = 'none';
    timeOff.innerText = 'Time Left';
})

