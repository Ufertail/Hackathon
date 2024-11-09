const questions = [
    {
        question: "ksjlkfjsdlfaajf",
        answers: [
            {text: "skdjflk", correct: false},
            {text: "skdjflk", correct: false},
            {text: "skdjflk", correct: true},
            {text: "skdjflk", correct: false},
        ]
    },
    {
        question: "ksjlkfjsdlfaajf",
        answers: [
            {text: "skdjflk", correct: false},
            {text: "skdjflk", correct: false},
            {text: "skdjflk", correct: false},
            {text: "skdjflk", correct: true},
        ]
    },
    {
        question: "ksjlkfjsdlfaajf",
        answers: [
            {text: "skdjflk", correct: true},
            {text: "skdjflk", correct: false},
            {text: "skdjflk", correct: true},
            {text: "skdjflk", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion
    question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
    })
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

startQuiz()