
var userScore;
var i = 0
var highScore;

const startButton = document.getElementById('start-btn') 
const nextButton = document.getElementById('next-btn')

var answer0 = document.getElementById('btn1')
var answer1 = document.getElementById('btn2')
var answer2 = document.getElementById('btn3')
var answer3 = document.getElementById('btn4')

var arrAnsBtns = [answer0, answer1, answer2, answer3]         // put in array so index value of button can correspond with index value of answer

var timerInterval;
var timeEl = document.getElementById('timer')
timeEl.setAttribute("style", "font-family: Andale Mono; color: red")

startButton.setAttribute("style", "background-color: #0d47a1; font-weight:bold; color:white")
nextButton.setAttribute("style", "background-color: #0d47a1; font-weight:bold; color:white")

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')


const allQuestions = [
    {
        question: 'What color is a tomato?',
        answers: [
            'a: red',
            'b: blue',
            'c: green',
            'd: avocado'
        ],
        correctAnswer: 'a: red'
    },
    {
        question: 'When did the US gain independence?',
        answers: [
            'a: 1492',
            'b: 1776',
            'c: 1990',
            'd: 14 BC'
        ],
        correctAnswer: 'b: 1776'
    },
    {
        question: 'In what country is Mexico City?',
        answers: [
            'a: Greenland',
            'b: Antarctica',
            'c: Mexico',
            'd: Dallas'
        ],
        correctAnswer: 'c: Mexico'
    },
]


function askQuestion() {
    console.log('started')
    setTime()
    userScore = 0
    i = 0
    questionElement.innerText = allQuestions[i].question
    for(j=0; j<arrAnsBtns.length; j++){
        arrAnsBtns[j].innerText = allQuestions[i].answers[j];
    }
    return i;
}

function nextQuestion() {
    console.log('next')
    i = i+1;
    if (i === allQuestions.length){
        clearInterval(timerInterval)
        endGame()
    }
    else {
    questionElement.innerText = allQuestions[i].question
    for(j=0; j<arrAnsBtns.length; j++){
        arrAnsBtns[j].innerText = allQuestions[i].answers[j];
    }
    console.log(userScore)}
}

function endGame (){
    clearInterval(timerInterval)
    alert(`Congratulations, you have completed the test with a score of ${userScore}/3`)
    let initials = prompt('Enter your initials to save your score')
    let playAgain = confirm ('Would you like to play again?')
    if (playAgain){
        askQuestion()
        setTime()
    }
    else {
        alert(`Thanks for playing ${initials}`)    
    }
    localStorage.setItem("score", userScore)
    localStorage.setItem("user", initials)
}

function setTime() {
    var secondsLeft = 30;
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to complete";
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }

  }, 1000);
}


// Event Listeners

answer0.addEventListener('click', function(event){
    if (event.target.innerText === allQuestions[i].correctAnswer){
    userScore++
        }
        nextQuestion()
    })                                                                                 // needs to record correct or incorrect, then go to next question!
answer1.addEventListener('click',  function(event){
    if (event.target.innerText === allQuestions[i].correctAnswer){
    userScore++
        }
        nextQuestion()
    })
answer2.addEventListener('click',  function(event){
    if (event.target.innerText === allQuestions[i].correctAnswer){
    userScore++
        }
        nextQuestion()
    })
answer3.addEventListener('click',  function(event){
    if (event.target.innerText === allQuestions[i].correctAnswer){
    userScore++
        }
        nextQuestion()
    })




nextButton.addEventListener('click', nextQuestion)
startButton.addEventListener('click', askQuestion)