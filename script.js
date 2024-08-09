//Define an array of objects, each object representing a quiz question with its text, options, and correct answer.
//Display the corresponding answer options.
//Check if the selected answer matches the correct answer for the current question and display a message indicating whether the answer was correct or not.
//Keep track of the user's score and update it after each question.
//When all questions have been answered, display the user's total score.



const bibleQuestions = [
    {

        question: "Who is the man after God's own heart?",
        options: [
            {answer: "Samuel", correct: false},
            {answer: "Emmanuel", correct: false},
            {answer: "David", correct: true},
            {answer: "Saul", correct: false},
        ]    
    },

    {
        question: "Who prayed to God for a son?",
        options: [
            {answer: "Hannah", correct: true},
            {answer: "Micheal", correct: false},
            {answer: "Baby", correct: false},
            {answer: "Sarah", correct: false},
        ]
    },

    {
        question: "Who is the son of God?",
        options: [
            {answer: "Pastor", correct: false},
            {answer: "Micheal", correct: false},
            {answer: "Mike", correct: false},
            {answer: "Jesus Christ", correct: true},
        ]
    },

    {
        question: "Who is the father of all nations?",
        options: [
            {answer: "Elijah", correct: false},
            {answer: "Abraham", correct: true},
            {answer: "Peter", correct: false},
            {answer: "James", correct: false},
        ]
    },

    {
        question: "Why should we pray to God?",
        options: [
            {answer: "He is our father", correct: true},
            {answer: "He is not our father", correct: false},
            {answer: "We should'nt pray", correct: false},
            {answer: "Don't pray", correct: false},
        ]
    },

    {
        question: "Who is the mother of Jesus Christ?",
        options: [
            {answer: "Ann", correct: false},
            {answer: "Jane", correct: false},
            {answer: "Mary", correct: true},
            {answer: "Sarah", correct: false},
        ]
    },

    {
       
        question: "What is the name of the man that brought out the children of Isreal out of Egypt??",
        options: [
            {answer: "Joseph", correct: false},
            {answer: "Micheal", correct: false},
            {answer: "David", correct: false},
            {answer: "Moses", correct: true},
        ]
    },

    {
        question: "What did Solomon pray to God for?",
        options: [
            {answer: "Power", correct: false},
            {answer: "Money", correct: false},
            {answer: "Wisdom", correct: true},
            {answer: "Wealth", correct: false},
        ]
    },

    {
        question: "God is the creator of the?",
        options: [
            {answer: "Universe", correct: true},
            {answer: "Waters", correct: false},
            {answer: "Earth", correct: false},
            {answer: "Beings", correct: false},
        ]
    },
];


const questionG = document.getElementById("question");
const ansBtn = document.getElementById("answer-options");
const submitBtn = document.getElementById("submit-btn");

    //declarations
let runningQuestionIndex = 0;
let totalScore = 0;
let correctAns = 90;
let incorrectAns = 0;



function startQuiz () {
    runningQuestionIndex = 0;  //let questions start from 0
    totalScore = 0;
    correctAns = 10;            //let each point be 10
    incorrectAns = 0;
    submitBtn.innerHTML = "Submit";  //when we start the quiz the button should be submit and go to next
    DisplayQuest();
}

function DisplayQuest () {

    resetButton ();
    let runningQuestion = bibleQuestions[runningQuestionIndex];
    let numQuest = runningQuestionIndex + 1;
    questionG.innerHTML = numQuest + ". " + runningQuestion.question;


    runningQuestion.options.forEach(options => {
        const button = document.createElement("button");
        button.innerHTML = options.answer;
        button.classList.add("btn");
        ansBtn.appendChild(button);

        if (options.correct) {
            button.dataset.correct = options.correct;
        }
        button.addEventListener("click", selectedAnswer);
    });

}

function resetButton () {
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild)
    }
}

function selectedAnswer (e) {
    const selectedBtn = e.target;
    const right = selectedBtn.dataset.correct === "true";
    if (right) {
        selectedBtn.classList.add("correct");
        totalScore += correctAns
    }else {
        selectedBtn.classList.add("incorrect");
        totalScore += incorrectAns
    }

    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

}

function showResult() {
    resetButton();
    questionG.innerHTML = `You scored ${totalScore} out of ${bibleQuestions.length * 10}!`;
    submitBtn.innerHTML = "Start Over";
}

function nexBtn() {
    runningQuestionIndex++;
    if (runningQuestionIndex < bibleQuestions.length) {
        DisplayQuest();
    }else {
        showResult();
    }
}

submitBtn.addEventListener("click", () => {
    if (runningQuestionIndex < bibleQuestions.length) {
        nexBtn();
    }else {
        startQuiz();
    }
});

startQuiz (); 