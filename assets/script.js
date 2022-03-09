
let score = 0

const startButton = document.getElementById('start-btn') 
const nextButton = document.getElementById('next-btn')
const answerButtons = document.getElementsByClassName('btn')
const buttonSection = document.getElementById('answer-buttons')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')


startButton.addEventListener('click', askQuestion)
nextButton.addEventListener('click', nextQuestion)



startButton.setAttribute("style", "background-color: #0d47a1; font-weight:bold; color:white")
nextButton.setAttribute("style", "background-color: #0d47a1; font-weight:bold; color:white")
// answerButtons.setAttribute("style", "background-color:lightblue; font-weight:bold; color:white")
// buttonSection.setAttribute("style", "background-color:cyan;")


const allQuestions = [
    {
        question: 'What color is a tomato?',
        answers: {
            a: 'red',
            b: 'blue',
            c: 'green',
            d: 'avocado'
        },
        correctAnswer: 'a'
    },
    {
        question: 'When did the US gain independence?',
        answers: {
            a: '1492',
            b: '1776',
            c: '1990',
            d: '14 BC'
        },
        correctAnswer: 'b'
    },
    {
        question: 'In what country is Mexico City?',
        answers: {
            a: 'Greenland',
            b: 'Antarctica',
            c: 'Mexico',
            d: 'Dallas'
        },
        correctAnswer: 'c'
    },
]


// function askQuestion() {
//     console.log('started')
//     for(i=0; i<allQuestions.length; i++){
//     questionElement.innerText = allQuestions[i].question;
//     answerButtonElement.innerText = allQuestions[i].answers;
//     }
// }
let i = 0

function askQuestion() {
    console.log('started')
    let i = 0
    questionElement.innerText = allQuestions[i].question
    const button = document.createElement('button')
    button.innerText = allQuestions[i].answers
}

function nextQuestion() {
    console.log('next')
    i = i+1
    questionElement.innerText = allQuestions[i].question;
    return i
}

// const button = document.createElement('button')
// button.innerText = allQuestions[i].answers

















//THIS WAS ALL UP AT THE ASKQUESTION PART
// console.log(allQuestions[1].question)
// for(var i = 0; i < allQuestions.length; i++){
//     questionElement.innerText.allQuestions[i].question;
// }
// if(response = allQuestions[i].correctAnswer){
//     score++


// function askQuestion (){
//     for(var i = 0; i < allQuestions.length; i++){
//         response = window.prompt(allQuestions[i].question);
//         if(response = allQuestions[i].correctAnswer){
//             score++
//         }
//     }
//     calcScore(score)
// }


// function calcScore (grade){
//     grade = (grade / allQuestions.length) * 100
//     alert('You got a ' + grade + ' !')
// }

// calcScore()

