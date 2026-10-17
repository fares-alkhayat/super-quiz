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
const selectionA = document.querySelector("#choice-a")
const selectionB = document.querySelector("#choice-b")
const selectionC = document.querySelector("#choice-c")
const selectionD = document.querySelector("#choice-d")
const questionNumber = document.querySelector("#question-number")
const questionMax = document.querySelector("#question-max")
const difficultyDisplay = document.querySelector("#difficulty-lv")
const quizId = uuidv7();


/* const profile = [
  playerName. totalPoints, totalHiScore, totalGames, totalTime, totalGrade, totalTitle, jpBestScore, scBestScore, stBestScore, enBestScore]
*/

/* Template for creating a question into JS:
const questions = {
  category: [
  {questionNo: , difficulty: , question: "", choiceA: "", choiceB: "", choiceC: "", choiceD: "", answer: ""}, ] }
*/

const questions = {
  japanQuestions: [

    {questionNumber: 1, difficulty: 1, question: "What is the capital prefecture of Japan?", choiceA: "Kyoto", choiceB: "Osaka", choiceC: "Tokyo", choiceD: "Sapporo", answer: "C"},
    {questionNo: 2, difficulty: 1, question: "Which one of these is considered to be a national dish of Japan?", choiceA: "Hamburger", choiceB: "Sushi", choiceC: " Fish and chips", choiceD: "Baguette", answer: "B"},
    {questionNo: 3, difficulty: 1, question: "What is Japan famous for? (apart from stereotypically speaking anime and manga?", choiceA: "Cameras", choiceB: "Electronics", choiceC: "Vehicles", choiceD: "All of the above", answer: "D"},
    {questionNo: 4, difficulty: 1, question: "How is ramen, udon, soba and somen eaten?", choiceA: "Chopsticks only", choiceB: "Spoon only", choiceC: "Both chopsticks and spoon", choiceD: "Both fork and spoon", answer: "C"},
    {questionNo: 11, difficulty: 2, question: "Out of the four, which robot anime in the 70s became the most successful in Japan? (Hint: odd one out!)", choiceA: "Mazinger Z / Great Mazinger", choiceB: "Getter Robot / Getter Robot G", choiceC: "UFO Robot Grendizer", choiceD: "Mobile Suit Gundam", answer: "D"},
    {questionNo: 12, difficulty: 2, question: "True", choiceA: "False", choiceB: "", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 21, difficulty: 3, question: "Who is the Prime Minister of Japan?", choiceA: "Shinzō Abe", choiceB: "Yoshihide Suga", choiceC: "Shigeru Ishiba", choiceD: "Sanae Takaichi", answer: "D"},
    {questionNo: 22, difficulty: 3, question: "What is the telephone calling code of Japan?", choiceA: "80", choiceB: "81", choiceC: "82", choiceD: "83", answer: "B"},
    {questionNo: 23, difficulty: 3, question: "If you enter a house in Japan to visit a friend, should you take off your shoes at the doorstep?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 24, difficulty: 3, question: "When did Japan become a country?", choiceA: "700 BCE", choiceB: "660 BCE", choiceC: "650 BCE", choiceD: "600 BCE", answer: "B"},
    {questionNo: 25, difficulty: 3, question: "What kind of writing system does Japanese use?", choiceA: "Alphabet", choiceB: "Logographic", choiceC: "Alphabet and logographic", choiceD: "Symbolic", answer: "C"},
    {questionNo: 31, difficulty: 4, question: "What is the postal code of Chiyoda Ward, Tokyo Prefecture?", choiceA: "100-0000", choiceB: "110-0000", choiceC: "120-0000", choiceD: "130-0000", answer: "A"},
    {questionNo: 32, difficulty: 4, question: "What party is part of the Japanese Government and has been in control for most of Japan's post-war history?", choiceA: "Constitutional Democratic Party / Centrist Reform Alliance", choiceB: "Japan Innovation Party", choiceC: "Liberal Democratic Party", choiceD: "Japanese Communist Party", answer: "C"},
    {questionNo: 33, difficulty: 4, question: "When did Japan start facing a population decline?", choiceA: "2007", choiceB: "2009", choiceC: "2011", choiceD: "2013", answer: "B"},
    {questionNo: 41, difficulty: 5, question: "What are the coordinates of Tokyo?", choiceA: "34°N, 138°E", choiceB: "34°N, 139°E", choiceC: "35°N, 138°E", choiceD: "35°N, 139°E", answer: "D"},
    {questionNo: 42, difficulty: 5, question: "What is the altitude of Mt. Fuji?", choiceA: "3770m", choiceB: "3773m", choiceC: "3776m", choiceD: "3779m", answer: "C"},
    {questionNo: 43, difficulty: 5, question: "Estimate the GDP of Japan in current prices as of 2023.", choiceA: "570 trillion yen", choiceB: "580 trillion yen", choiceC: "590 trillion yen", choiceD: "600 trillion yen", answer: "C"},
    {questionNo: 44, difficulty: 5, question: "What were the dates of the bombing of Hiroshima and Nagasaki?", choiceA: "1945-06-06, 1945-06-09", choiceB: "1945-08-06, 1945-08-09", choiceC: "1946-06-06, 1946-06-09", choiceD: "1946-08-06, 1946-08-09", answer: "C"},
],
  trekQuestions:[
    
    {difficulty: 1, difficulty: 1, question: "What starship series did Kirk and Picard became captain of (excluding sequential models)?", choiceA: "Enterprise", choiceB: "Voyager", choiceC: "Yamato", choiceD: "Mazinger", answer: "A"},
    {questionNo: 2, difficulty: 1, question: "Which series did the Star Trek franchise begin with?", choiceA: "The Next Generation", choiceB: "The Original Series", choiceC: "Deep Space Nine", choiceD: "Voyager", answer: "B"},
    {questionNo: 3, difficulty: 1, question: "Which time passage does Star Trek usually be part of?", choiceA: "Past (BCE)", choiceB: "Past (CE)", choiceC: "Present", choiceD: "Future", answer: "D"},
    {questionNo: 4, difficulty: 1, question: "What organisation is responsible for the protagonists of Star Trek? (examples include Kirk, Picard, Sisko, Janeway, etc.)", choiceA: "Klingon Empire", choiceB: "Romulan Free State", choiceC: "United Federation of Planets", choiceD: "The Borg", answer: "C"},
    {questionNo: 5, difficulty: 1, question: "What is the objective of Starfleet, the exploration organisation of the UFP?", choiceA: "To seek out new lifeforms, cultures and civilisations and to maintain peaceful relations with such", choiceB: "To explore the outer part of our surroundings", choiceC: "To make contact with aliens and assimilate them with us", choiceD: "All of the above", answer: "A"},
    {questionNo: 6, difficulty: 1, question: "What rank is typically the commanding officer of a starship?", choiceA: "Admiral", choiceB: "Captain", choiceC: "Commander", choiceD: "Lieutenant Commander", answer: "B"},
    {questionNo: 7, difficulty: 1, question: "How do Starfleet officers teleport from the starship to another location?", choiceA: "Use a teleporter", choiceB: "Use a comm badge", choiceC: "Use a transporter room in the starship", choiceD: "None of the above", answer: "C"},
    {questionNo: 8, difficulty: 1, question: "What does a Starfleet captain say when he wants a starship to launch?", choiceA: "Blast off!", choiceB: "Engage!", choiceC: "Warp!", choiceD: "Ignition!", answer: "B"},
],

  entQuestions: [
    
    {questionNo: 1, difficulty: 1, question: "If ordinary girls = [sugar + spice + everything nice], and since the Powerpuff Girls = [sugar + spice + everything nice + x], what is x?", choiceA: "N2O (Nitrous oxide)", choiceB: "Rocket fuel", choiceC: "Chemical X", choiceD: "98-octane gasoline", answer: "C"},
    {questionNo: 2, difficulty: 1, question: "Is the Big Bang Theory (2008-2019) a show about scientists?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 3, difficulty: 1, question: "Where is anime and manga typically created in?", choiceA: "China", choiceB: "Korea", choiceC: "Japan", choiceD: "Taiwan", answer: "C"},
    {questionNo: 4, difficulty: 1, question: "Which city in the US is famous for producing movies?", choiceA: "Hollywood", choiceB: "San Fransisco", choiceC: "Washington", choiceD: "Detroit", answer: "A"},
    {questionNo: 11, difficulty: 2, question: "What purpose does Chemical X have in the Powerpuff Girls series?", choiceA: "It can be used as a GPU coolant or thermal paste", choiceB: "A proposal on creating element no. 119 in the Periodic Table", choiceC: "It can be used as 98-octane gasoline or premium diesel", choiceD: "It can have a person wield superhuman abilities", answer: "D"},
    {questionNo: 12, difficulty: 2, question: "Who was John Carter's teacher in the early episodes of ER?", choiceA: "Dr. Peter Benton", choiceB: "Dr. Mark Greene", choiceC: "Dr. Doug Ross", choiceD: "Dr. Carol Hathaway", answer: "A"},
],

  questions150: [
    
    {difficulty: 1, question: "What is the capital prefecture of Japan?", choiceA: "Kyoto", choiceB: "Osaka", choiceC: "Tokyo", choiceD: "Sapporo", answer: "C"}
]
}

console.log("Title screen loaded successfully.")
console.log("Welcome to the Alkhayat Super Quiz. Please select a topic.")
console.log(quizId);

document.getElementById("scitech-quiz").disabled = true
document.getElementById("marathon-200").disabled = true

if (questions.difficulty === 1)
{difficulty = "★☆☆☆☆ Very Easy"}
else if (questions.difficulty === 2)
{difficulty = "★★☆☆☆ Easy"}
else if (questions.difficulty === 3)
{difficulty = "★★★☆☆ Normal"}
else if (questions.difficulty === 4)
{difficulty = "★★★★☆ Hard"}
else if (questions.difficulty === 5)
{difficulty = "★★★★★ Very Hard"}

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
questions.currentQuestion = 0
correctCount = 0
score = 0
time = 0
grade = ""
title = ""
percent = 0
}

function showQuestions(quizType){
    questionDisplay.textContent = questions[currentQuestion].question;
    selectionA.textContent = questions[currentQuestion].choiceA;
    selectionB.textContent = questions[currentQuestion].choiceB;
    selectionC.textContent = questions[currentQuestion].choiceC;
    selectionD.textContent = questions[currentQuestion].choiceD;}

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
difficultyDisplay.textContent = currentQuestion.difficulty

if (answerInput === "") {
    message.textContent == "Please select an answer by typing the letter below.";
  } 

  if (answerInput = questions[currentQuestion].answer) {
    correctCount += 1;
    combo += 1
    score += 500 + ((1.025 * combo) - 0.025);
  } else {
    wrongCount += 1
    combo = 0
  }

  if (currentQuestion === questions.length) {
    questions.textContent = "Quiz finished!";
    answerInput.disabled = true; 
    stopTimer()}
    else {
    showQuestions();
  }

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