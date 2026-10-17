import { uuidv7 } from "https://unpkg.com/uuidv7@^1";

const questionDisplay = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const scoreDisplay = document.querySelector("#score");
const percentDisplay = document.querySelector("#percent");
const timerEl = document.querySelector("#time");
const gradeDisplay = document.querySelector("#grade");
const nameDisplay = document.querySelector('#username');
const messageDisplay = document.querySelector("#message");
const quizIdDisplay = document.querySelector('#quizId')
const printButton = document.querySelector("#print");
const correctDisplay = document.querySelector("#correct")
const wrongDisplay = document.querySelector("#wrong")
const comboDisplay = document.querySelector("#combo")
const maxComboDisplay = document.querySelector("#max-combo")
const startTimeDisplay = document.querySelector("#start-time")
const endTimeDisplay = document.querySelector("#end-time")
const ratingDisplay = document.querySelector("#rating")
const titleDisplay = document.querySelector("#title")
const buttonA = document.querySelector("#button-a")
const buttonB = document.querySelector("#button-b")
const buttonC = document.querySelector("#button-c")
const buttonD = document.querySelector("#button-d")
const buttonPass = document.querySelector("#button-pass")

const quizId = uuidv7();


/* const profile = [
  playerName. totalPoints, totalHiScore, totalGames, totalTime, totalGrade, totalTitle, jpBestScore, scBestScore, stBestScore, enBestScore]
*/

const japanQuestions = [
    {question: "What is the capital prefecture of Japan? (a. Kyoto / b. Osaka / c. Tokyo / d. Sapporo)", answer: "C"}
]

const trekQuestions = [
  {question: "What starship series did Kirk and Picard became captain of (excluding sequential models)?", answer: "A"}
]

const entQuestions = [
  {question: "If ordinary girls = [sugar + spice + everything nice], and since the Powerpuff Girls = [sugar + spice + everything nice + x], what is x?", answer: "C"}
]

const questions150 = [
    {question: "What is the capital prefecture of Japan? (a. Kyoto / b. Osaka / c. Tokyo / d. Sapporo)", answer: "C"}
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
let username = ""
let answer = ""
let currentQuestion = 0
let message = ""
let correctCount = 0
let wrongCount = 0
let score = 0
let combo = 0
let maxCombo = Math.max(combo)
let percent = (correctCount / question.length) * 100
let time = 0
let rating = (((correctCount / question.length) * 500) + ((percent) * 500) + ((maxCombo / question.length) * 500))
let grade = ""
let title = ""

function answerA() {
  answerInput = "A";
  submitAnswer()
}

function answerB() {
  answerInput = "B";
  submitAnswer()
}
function answerC() {
  answerInput = "C";
  submitAnswer()
}
function answerD() {
  answerInput = "D";
  submitAnswer()
}
function answerPass() {
  answerInput = "Pass";
  submitAnswer()
}

function submitAnswer(){
  checkAnswer()
}

function checkAnswer() {
answer = answerInput;
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

    if (rating >= 1400 && (correctCount / currentQuestion == 1) && time <= 600000){title = "[SUPER Special+] Distinguished"} 
    else if (rating >= 1325 && (correctCount / currentQuestion == 1) && time <= 1050000){title = "[Special+] Ultimate Master"}  
    else if (rating >= 1250 && (correctCount / currentQuestion == 1) && time <= 1500000){title = "[Special] Grand Master"}
    else if (rating >= 1250) {title = "[1st] Master"}
    else if (rating >= 1125) {title = "[2nd] Superior"}
    else if (rating >= 1000) {title = "[3rd] Professional"}
    else if (rating >= 875) {title = "[4th] Expert"}
    else if (rating >= 750) {title = "[5th] Upper Intermediate"}
    else if (rating >= 625) {title = "[6th] Intermediate"}
    else if (rating >= 500) {title = "[7th] Pre-Intermediate"}
    else if (rating >= 375) {title = "[8th] Elementary"}
    else if (rating >= 250) {title = "[9th] Starter"}
    else if (rating >= 125) {title = "[10th] Novice"}
    else {title = "[11th] Beginner"}

function printResult(){
  window.print()
}
// The following code was forked from the Debugging Olympics exercise for reference.


let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds) : "00")
  );
}
function stopTimer() {
  clearInterval(timerInterval);
}
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerEl.textContent = "00:00.00";
}

nameDisplay.textContent = username
quizIdDisplay.textContent = quizId
scoreDisplay.textContent = score
correctDisplay.textContent = correctCount
wrongDisplay.textContent = wrongCount
percentDisplay.textContent = percent
comboDisplay.textContent = combo
maxComboDisplay.textContent = maxCombo
timerEl.textContent = elapsedTime
gradeDisplay.textContent = grade
ratingDisplay.textContent = rating.toFixed(2)
titleDisplay.textContent = title

if (answer === "") {
    message.textContent == "Please select an answer by typing the letter below.";
  } 

  if (answer = japanQuestions[currentQuestion].answer) {
    correctCount += 1;
    combo += 1
    score += 500 + ((1.025 * combo) - 0.025);
  } else {
    wrongCount += 1
    combo.value = 0
  }

   if (answer = trekQuestions[currentQuestion].answer) {
    correctCount += 1;
    combo += 1
    score += 500 + ((1.025 * combo) - 0.025);
  } else {
    wrongCount += 1
    combo.value = 0

  }

   if (answer = entQuestions[currentQuestion].answer) {
    correctCount += 1;
    combo += 1
    score += 500 + ((1.025 * combo) - 0.025);
  } else {
    wrongCount += 1
    combo.value = 0

  }

   if (answer = questions150[currentQuestion].answer) {
    correctCount += 1;
    combo += 1
    score += 500 + ((1.025 * combo) - 0.025);
  } else {
    wrongCount += 1
    combo.value = 0

  }

  if (currentQuestion === japanQuestions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; 
    stopTimer()}
    else {
    showQuestionJapan();
  }

   if (currentQuestion === trekQuestions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; 
    stopTimer()}
    else {
    showQuestionTrek();
  }
    
   if (currentQuestion === entQuestions.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true; 
    stopTimer()}
    else {
    showQuestionEnt();
  }

    if (currentQuestion === questions150.length) {
    questions.textContent = "Quiz finished!";
    answer.disabled = true;
    stopTimer()}
    else {
    showQuestion150(); }


/* function highScoreButton(){
    console.log()
} */

document.getElementById("start-button").addEventListener("click", startGame,startTimer);

buttonA.addEventListener('click',answerA);
buttonB.addEventListener('click',answerB);
buttonC.addEventListener('click',answerC);
buttonD.addEventListener('click',answerD);
buttonPass.addEventListener('click',answerPass);

printButton.addEventListener("click", printResult)

showQuestionJapan();
showQuestionTrek();
showQuestionEnt();
showQuestion150();
