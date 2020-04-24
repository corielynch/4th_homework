onclick="container.style.display = 'none'"


//5 multiple choice questions
var questions = [
    {
        title: "Which of these is NOT a JavaScript data type?",
        choices: ["String", "Boolean", "Number", "Method"],
        answer: "Method",
    },
    { 
        title: "Which company first developed JavaScript?",
        choices: ["Macintosh", "Netscape", "Microsoft", "IBM"],
        answer: "Netscape",
    },
    { 
        title: "How long did it take Brendan Eich to create JavaScript?",
        choices: ["2 weeks", "3 days", "10 hours", "5 months"],
        answer: "10 hours",
    },
    { 
        title: "document.getElementById() is an example of what?",
        choices: ["For loops", "While loops", "DOM manipulation", "pseudocode"],
        answer: "DOM manipulation",
    },
    { 
        title: "Which symbol links ID's from HTML to CSS?",
        choices: ["@", "#", ".", "{}"],
        answer: "#",
    }
];

let currentQuestion = 0;
let currentChoices = 0;
let startButton = document.getElementById("start-button");

//eventListener for starting game
var timer = 30000;
startGame();

document.getElementById("timer")
var timer = setInterval(function() {
})

timerId = setInterval(clockTick, 30000);
timerEl.textContent = time;


function startGame (){
//hide start selection
    var startScreen = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

//unhide questions
questionsEl.removeAttribute("class");


getQuestion1();

}

//get current question from Questions array
function getQuestions(){
    var currentQuestion = questions(currentQuestionIndex);


}

function startTimer() {
    timer -- 
}