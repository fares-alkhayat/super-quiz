import { uuidv7 } from "https://unpkg.com/uuidv7@^1";

const questionDisplay = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const scoreDisplay = document.querySelector("#score");
const percentDisplay = document.querySelector("#percent");
const timeDisplay = document.querySelector("#time");
const gradeDisplay = document.querySelector("#grade");
const titleDisplay = document.querySelector("#title");
const submitButton = document.querySelector("#submit");
const nameDisplay = document.querySelector('#username');
const messageDisplay = document.querySelector("#message");
const quizIdDisplay = document.querySelector('#quizId')
const printButton = document.querySelector("#print");
const quizId = uuidv7();


/* const profile = [
  playerName. totalPoints, totalHiScore, totalGames, totalTime, totalGrade, totalTitle, jpBestScore, scBestScore, stBestScore, enBestScore]
*/

const japanQuestions = [
    {question: "What is the capital prefecture of Japan? a. Kyoto / b. Osaka / c. Tokyo / d. Sapporo", answer: "C"}
]

const trekQuestions = [
  {question: "What starship series did Kirk and Picard became captain of (excluding sequential models)?", answer: "A"}
]

const entQuestions = [
  {question: "If ordinary girls = [sugar + spice + everything nice], and since the Powerpuff Girls = [sugar + spice + everything nice + x], what is x?", answer: "C"}
]

const questions150 = [
    {question: "What is the capital prefecture of Japan? a. Kyoto / b. Osaka / c. Tokyo / d. Sapporo", answer: "C"}
]

console.log("Title screen loaded successfully.")
console.log("Welcome to the Alkhayat Super Quiz. Please select a topic.")
console.log(quizId);

document.getElementById("scitech-quiz").disabled = true
document.getElementById("marathon-200").disabled = true

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
correctCount = 0
score = 0
time = 0
grade = ""
title = ""
percent = 0
}

function showQuestionJapan(){
    questionDisplay.textContent = japanQuestions[currentQuestion].question;}

function showQuestionTrek(){
    questionDisplay.textContent = trekQuestions[currentQuestion].question;}

function showQuestionEnt(){
    questionDisplay.textContent = entQuestions[currentQuestion].question;}

function showQuestion150(){
    questionDisplay.textContent = questions150[currentQuestion].question;}

/* function recordsButton(){
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
} */

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
    if (score >= 90000 && (correctCount / currentQuestion == 1) && time <= 600000){title = "[SUPER Special+] Distinguished"} 
    else if (score >= 82500 && (correctCount / currentQuestion == 1) && time <= 1050000){title = "[Special+] Ultimate Master"}  
    else if (score >= 75000 && (correctCount / currentQuestion == 1) && time <= 1500000){title = "[Special] Grand Master"}
    else if (score >= 75000) {title = "[1st] Master"}
    else if (score >= 67500) {title = "[2nd] Superior"}
    else if (score >= 60000) {title = "[3rd] Professional"}
    else if (score >= 52500) {title = "[4th] Expert"}
    else if (score >= 45000) {title = "[5th] Upper Intermediate"}
    else if (score >= 37500) {title = "[6th] Intermediate"}
    else if (score >= 30000) {title = "[7th] Pre-Intermediate"}
    else if (score >= 22500) {title = "[8th] Elementary"}
    else if (score >= 15000) {title = "[9th] Starter"}
    else if (score >= 7500) {title = "[10th] Novice"}
    else {title = "[11th] Beginner"}
}

function printResult(){
  window.print()
}
// The following code was forked from the Debugging Olympics exercise for reference.


let answer = ""
let currentQuestion = 0
let message = ""
let correctCount = 0
let score = 0
let percent = 0
let time = 0
let grade = ""
let title = ""



if (answer === "") {
    message.textContent == "Please select an answer by typing the letter below.";
  } 

  if (answer = japanQuestions[currentQuestion].answer) {
    correctCount += 1;
    score += 250;
  } else {
    wrongCount += 1
  }

   if (answer = trekQuestions[currentQuestion].answer) {
    correctCount += 1;
    score += 250;
  } else {
    wrongCount += 1
  }

   if (answer = entQuestions[currentQuestion].answer) {
    correctCount += 1;
    score += 250;
  } else {
    wrongCount += 1
  }

   if (answer = questions150[currentQuestion].answer) {
    correctCount += 1;
    score += 250;
  } else {
    wrongCount += 1
  }

  if (currentQuestion === japanQuestions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; }
    else {
    showQuestionJapan();
  }

   if (currentQuestion === trekQuestions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; }
    else {
    showQuestionTrek();
  }
    
   if (currentQuestion === entQuestions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; }
    else {
    showQuestionEnt();
  }

    if (currentQuestion === questions150.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; }
    else {
    showQuestion150(); }


/* function highScoreButton(){
    console.log()
} */

document.getElementById("start-button").addEventListener("click", startGame);

printButton.addEventListener("click", printResult)

showQuestionJapan();
showQuestionTrek();
showQuestionEnt();
showQuestion150();
