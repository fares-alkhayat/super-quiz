const questionDisplay = document.querySelector("#question");
const answerInput = document.querySelectorAll(".answer");
const scoreDisplay = document.querySelector("#score");
const percentDisplay = document.querySelector("#percent");
const timeDisplay = document.querySelector("#time");
const gradeDisplay = document.querySelector("#grade");
const titleDisplay = document.querySelector("#title");
const submitButton = document.querySelector("#submit");
const nameDisplay = document.querySelector('#username');
const messageDisplay = document.querySelector("#message")
const printButton = document.querySelector("#print")

/* const profile = [
  playerName. totalPoints, totalHiScore, totalGames, totalTime, totalGrade, totalTitle, jpBestScore, scBestScore, stBestScore, enBestScore]
*/

const questions = [
    {question: "What is the capital prefecture of Japan? a. Kyoto / b. Osaka / c. Tokyo / d. Sapporo", answer: "C"}
]

console.log("Title screen loaded successfully.")
console.log("Welcome to the Alkhayat Super Quiz. Please select a topic.")

// Functions written in comments are coming soon.

/*
function createProfile(){

let playerName = ""; // The name entered shall be used in the profile
let totalPoints = 0; // The total points earned cumulatively
let totalHiScore = 0; // The sum of all high scores in four quizzes
let totalGames = 0; // The total amount of quizzes taken
let totalTime = 0; // The total amount of time spent in quizzes
let totalGrade = ""; // The average rank/grade achieved in all quizzes
let totalTitle = ""; // The overall title achieved
let jpBestScore = 0; // Best score achieved in the Japan quiz
let scBestScore = 0; // Best score achieved in the sci-tech quiz
let stBestScore = 0; // Best score achieved in the Star Trek quiz
let enBestScore = 0;} // Best score achieved in the entertainment quiz


*/

// The following function was forked from the Debugging Olympics exercise for reference.

function startGame(){
answer = answerInput
currentQuestion = 0
correctAnswer = 0
score = 0
combo = 0
time = 0
grade = ""
title = ""
percent = 0
}

function showQuestionJapan(){
    questionDisplay.textContent = questions[currentQuestion].question;}


if ("#japan-quiz".checked = true)
  {showQuestionJapan}


function recordsButton(){
    console.log(playerName)
    console.log(totalPoints)
    console.log(totalHiScore)
    console.log(totalGames)
    console.log(totalTime)
    console.log(totalGrade)
    console.log(totalTitle)
    console.log(jpHiScore)
    console.log(scHiScore)
    console.log(stHiScore)
    console.log(enHiScore)
}

// The following function was forked from the Debugging Olympics exercise for reference.
function checkAnswer() {
answer = answerInput.value;
}

function gradeSystem(){
    if (correctCount / currentQuestion == 1) {grade = "S++"}
    else if (correctCount / currentQuestion >= 0.95) {grade = "S+"}
    else if (correctCount / currentQuestion >= 0.90) {grade = "S"}
    else if (correctCount / currentQuestion >= 0.85) {grade = "A+"}
    else if (correctCount / currentQuestion >= 0.80) {grade = "A"}
    else if (correctCount / currentQuestion >= 0.75) {grade = "B+"}
    else if (correctCount / currentQuestion >= 0.70) {grade = "B"}
    else if (correctCount / currentQuestion >= 0.65) {grade = "C+"}
    else if (correctCount / currentQuestion >= 0.60) {grade = "C"}
    else if (correctCount / currentQuestion >= 0.50) {grade = "D"}
    else if (correctCount / currentQuestion >= 0.40) {grade = "E"}
    else if (correctCount / currentQuestion >= 0.30) {grade = "F"}
    else {grade = "G"}
}

function titleSystem(){
    if (totalHiScore >= 100000) {title = "[1st] Master"}
    else if (totalHiScore >= 90000) {title = "[2nd] Superior"}
    else if (totalHiScore >= 80000) {title = "[3rd] Professional"}
    else if (totalHiScore >= 70000) {title = "[4th] Expert"}
    else if (totalHiScore >= 60000) {title = "[5th] Upper Intermediate"}
    else if (totalHiScore >= 50000) {title = "[6th] Intermediate"}
    else if (totalHiScore >= 40000) {title = "[7th] Pre-Intermediate"}
    else if (totalHiScore >= 30000) {title = "[8th] Elementary"}
    else if (totalHiScore >= 20000) {title = "[9th] Starter"}
    else if (totalHiScore >= 10000) {title = "[10th] Novice"}
    else {title = "[11th] Beginner"}
}

function printResult(){
  window.print()
}
// The following code was forked from the Debugging Olympics exercise for reference.


let answer = ""
let currentQuestion = 0
let message = ""
correctAnswer = 0
score = 0
combo = 0
percent = 0
time = 0
grade = ""
title = ""

if (answer === "") {
    message.textContent = "Please select an answer by typing the letter below.";
  } 

  if (answer = questions[currentQuestion].answer) {
    correctAnswer += 1;
    score += 250;
    combo += 1;
  } else {
    combo.value = 0
  }

  let username = ""

  username.textContent = username
  score.textContent = score;
  percent.textContent = (score / questions.length) * 100 + "%"
  startTime = performance.now()
  elapsedTime = performance.now() - startTime
  time.textContent = elapsedTime
  grade.textContent = grade
  currentQuestion += 1;
  answerInput.value = "";

  if (currentQuestion === questions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true;
    // submitbutton.disabled = true;
    score.textContent = score
    percent.textContent = percentDisplay
    time.textContent = elapsedTime
    grade.textContent = grade
    title.textContent = title
    
  } else {
    showQuestion();
  }

function startJapanQuiz(){

currentQuestion = 0;
scoreDisplay = 0;
answerInput.value = "";
answerInput.disabled = false;
submitButton.disabled = false}


/* function highScoreButton(){
    console.log()
} */

document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("start-button").addEventListener("click", startGame);

printButton.addEventListener("click", printResult)

showQuestion();
