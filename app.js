const questionDisplay = document.querySelector("#question");
const answerSelect = document.querySelector(".answer");
const scoreDisplay = document.querySelector("#score");
const percentDisplay = document.querySelector("#percent");
const timeDisplay = document.querySelector("#time")
const gradeDisplay = document.querySelector("#grade")
const messageDisplay = document.querySelector("#message");
const submitButton = document.querySelector("#submit");
const nameDisplay = document.querySelector('#username')

const questionsJapan = [
    {question: "What is the capital prefecture of Japan? a. Kyoto / b. Osaka / c. Tokyo / d. Sapporo", answer: "C"}
]

console.log("Title screen loaded successfully.")
console.log("Welcome to the Alkhayat Super Quiz. Please select a topic.")

function createProfile(){
let playerName = ""; // The name entered shall be used in the profile
let totalPoints = 0; // The total points earned cumulatively
let totalGames = 0; // The total amount of quizzes taken
let totalTime = 0; // The total amount of time spent in quizzes
let totalGrade = ""; // The average rank/grade achieved in all quizzes
let jpBestScore = 0; // Best score achieved in the Japan quiz
let scBestScore = 0; // Best score achieved in the sci-tech quiz
let stBestScore = 0; // Best score achieved in the Star Trek quiz
let enBestScore = 0;} // Best score achieved in the entertainment quiz

function startGame(){
let score = 0
let question = 0
let time = 0
let grade = ""
let title = ""
}

function recordsButton(){
    console.log(playerName)
    console.log(totalPoints)
    console.log(totalGames)
    console.log(totalTime)
    console.log(totalGrade)
    console.log(totalTitle)
    console.log(jpBestScore)
    console.log(scBestScore)
    console.log(stBestScore)
    console.log(enBestScore)
}

function showQuestion() {
    questionDisplay.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
  let answer = answerInput.value;
}
function gradeSystem(){
    if (score / currentQuestion == 1) {grade = "S++"}
    else if (score / currentQuestion >= 0.95) {grade = "S+"}
    else if (score / currentQuestion >= 0.90) {grade = "S"}
    else if (score / currentQuestion >= 0.85) {grade = "A+"}
    else if (score / currentQuestion >= 0.80) {grade = "A"}
    else if (score / currentQuestion >= 0.75) {grade = "B+"}
    else if (score / currentQuestion >= 0.70) {grade = "B"}
    else if (score / currentQuestion >= 0.60) {grade = "C"}
    else if (score / currentQuestion >= 0.50) {grade = "D"}
    else if (score / currentQuestion >= 0.40) {grade = "E"}
    else if (score / currentQuestion >= 0.30) {grade = "F"}
    else {grade = "G"}
}

  if (answer === "") {
    messageDisplay.textContent = "Please select an answer by typing the letter below.";
    return;
  }

  if (answer = questions[currentQuestion].answer) {
    score =+ 1;
    messageDisplay.textContent = "Correct!";
  } else {
    messageDisplay.textContent = "Wrong!";
  }

  nameDisplay.textContent = username;
  scoreDisplay.textcontent = score;
  percentDisplay.textContent = (score / question) * 100 + "%"
  startTime = performance.now()
  elapsedTime = performance.now() - startTime
  timeDisplay.textContent = elapsedTime
  gradeDisplay.textContent = grade
  currentQuestion += 1;
  answerInput.value = "";

  if (currentQuestion === questions.length) {
    questionDisplay.textContent = "Quiz finished!";
    answerInput.disabled = true;
    submitButton.disabled = true;
    scoreDisplay.textContent = score
    
  } else {
    showQuestion();
  }

function startJapanQuiz(){

startGame()
}
/* function highScoreButton(){
    console.log()
} */

submitButton.addEventListener("click", checkAnswer);

showQuestion();