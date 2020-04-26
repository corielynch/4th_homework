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

//Event listener to start timer AND display 1st question on click button
$("button").click(function(){
    startGame();
  });
let questionsEl = document.getElementById("quiz");


function startGame (){
    getQuestions();
}

    //Start timer
var timer = 30000;

document.getElementById("timer")
var timer = setInterval(function() {
})

timerId = setInterval(time, 30000);
timerEl.textContent = time;


//get current question from Questions array
function getQuestions(){
    var questionsDiv = document.getElementById("quiz");
    questionsDiv.textContent = questions[0].title 
}
    for (var i = 0; i < questions.length; i++) {
      var newQuestions = document.createElement("p");
      newQuestions.textContent = questions[i];
      questionsDiv.appendChild(newQuestions);
    }
    




function startTimer() {
    timer -- 
}

//Need ability to save user's choices for high score.

//Hides Finish Page until final click
document.getElementsByClassName("container2").addEventListener("click", display);

//Create form for initials to link to high scores
