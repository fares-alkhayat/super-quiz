import { uuidv7 } from "https://unpkg.com/uuidv7@^1";

const questionDisplay = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const scoreDisplay = document.querySelector("#score");
const percentDisplay = document.querySelector("#percent");
const timerEl = document.querySelector("#time");
const gradeDisplay = document.querySelector("#grade");
const usernameInput = document.querySelector('#username-input');
const message1Display = document.querySelector("#message1");
const message2Display = document.querySelector("#message2");
const quizIdDisplay = document.querySelector('#quizId')
const printButton = document.querySelector("#print");
const correctDisplay = document.querySelector("#correct")
const wrongDisplay = document.querySelector("#wrong")
const comboDisplay = document.querySelector("#combo")
const loginTimeDisplay = document.querySelector("#login-time")
const utcTimeDisplay = document.querySelector("#utc-time")
const conditionDisplay = document.querySelector("#condition")
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
const difficultyDisplay = document.querySelector("#difficulty-lv")
const usernameApply = document.querySelector("#username-apply")
const usernameDisplay = document.querySelector("#username")
const startButtonEl = document.querySelector('#start-button')
const japanQuiz = document.querySelector('#japan-quiz')
const trekQuiz = document.querySelector('#trek-quiz')
const entQuiz = document.querySelector('#ent-quiz')
const quizId = uuidv7();
const ratingDisplay = document.querySelector('#rating')
const titleDisplay = document.querySelector('#title')

let chosenQuiz = null
/* const profile = [
  playerName. totalPoints, totalHiScore, totalGames, totalTime, totalGrade, totalTitle, jpBestScore, scBestScore, stBestScore, enBestScore]
*/

/* Template for creating a question into JS:
const questions = {
  category: [
  {questionNo: , difficulty: , question: "", choiceA: "", choiceB: "", choiceC: "", choiceD: "", answer: ""}, ] }
*/



function saveName(){
  // usernameInput.value = username
  console.log(usernameInput)
  usernameDisplay.textContent = usernameInput.value
}

const loginTime = new Date();
console.log(loginTime)

let utcLoginTime = new Date().toJSON();
console.log(utcLoginTime)

loginTimeDisplay.textContent = loginTime
utcTimeDisplay.textContent = utcLoginTime

const questions = {
  japanQuestions: [

    {questionNo: 1, difficulty: "1. Very Easy", question: "What is the capital prefecture of Japan?", choiceA: "Kyoto", choiceB: "Osaka", choiceC: "Tokyo", choiceD: "Sapporo", answer: "C"},
    {questionNo: 2, difficulty: "1. Very Easy", question: "Which one of these is considered to be a national dish of Japan?", choiceA: "Hamburger", choiceB: "Sushi", choiceC: " Fish and chips", choiceD: "Baguette", answer: "B"},
    {questionNo: 3, difficulty: "1. Very Easy", question: "What is Japan famous for? (apart from stereotypically speaking anime and manga?", choiceA: "Cameras", choiceB: "Electronics", choiceC: "Vehicles", choiceD: "All of the above", answer: "D"},
    {questionNo: 4, difficulty: "1. Very Easy", question: "How is ramen, udon, soba and somen eaten?", choiceA: "Chopsticks only", choiceB: "Spoon only", choiceC: "Both chopsticks and spoon", choiceD: "Both fork and spoon", answer: "C"},
    {questionNo: 11, difficulty: "2. Easy", question: "Out of the four, which robot anime in the 70s became the most successful in Japan? (Hint: odd one out!)", choiceA: "Mazinger Z / Great Mazinger", choiceB: "Getter Robot / Getter Robot G", choiceC: "UFO Robot Grendizer", choiceD: "Mobile Suit Gundam", answer: "D"},
    {questionNo: 12, difficulty: "2. Easy", question: "The bullet train is called a shinkansen （新幹線、しんかんせん） in Japanese. Is this true or false?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 21, difficulty: "3. Normal", question: "Who is the Prime Minister of Japan?", choiceA: "Shinzō Abe", choiceB: "Yoshihide Suga", choiceC: "Shigeru Ishiba", choiceD: "Sanae Takaichi", answer: "D"},
    {questionNo: 22, difficulty: "3. Normal", question: "What is the telephone calling code of Japan?", choiceA: "80", choiceB: "81", choiceC: "82", choiceD: "83", answer: "B"},
    {questionNo: 23, difficulty: "3. Normal", question: "If you enter a house in Japan to visit a friend, should you take off your shoes at the doorstep?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 24, difficulty: "3. Normal", question: "When did Japan become a country?", choiceA: "700 BCE", choiceB: "660 BCE", choiceC: "650 BCE", choiceD: "600 BCE", answer: "B"},
    {questionNo: 25, difficulty: "3. Normal", question: "What kind of writing system does Japanese use?", choiceA: "Alphabet", choiceB: "Logographic", choiceC: "Alphabet and logographic", choiceD: "Symbolic", answer: "C"},
    {questionNo: 31, difficulty: "4. Hard", question: "What is the postal code of Chiyoda Ward, Tokyo Prefecture?", choiceA: "100-0000", choiceB: "110-0000", choiceC: "120-0000", choiceD: "130-0000", answer: "A"},
    {questionNo: 32, difficulty: "4. Hard", question: "What party is part of the Japanese Government and has been in control for most of Japan's post-war history?", choiceA: "Constitutional Democratic Party / Centrist Reform Alliance", choiceB: "Japan Innovation Party", choiceC: "Liberal Democratic Party", choiceD: "Japanese Communist Party", answer: "C"},
    {questionNo: 33, difficulty: "4. Hard", question: "When did Japan start facing a population decline?", choiceA: "2007", choiceB: "2009", choiceC: "2011", choiceD: "2013", answer: "B"},
    {questionNo: 41, difficulty: "5. Very Hard", question: "What are the coordinates of Tokyo?", choiceA: "34°N, 138°E", choiceB: "34°N, 139°E", choiceC: "35°N, 138°E", choiceD: "35°N, 139°E", answer: "D"},
    {questionNo: 42, difficulty: "5. Very Hard", question: "What is the altitude of Mt. Fuji?", choiceA: "3770m", choiceB: "3773m", choiceC: "3776m", choiceD: "3779m", answer: "C"},
    {questionNo: 43, difficulty: "5. Very Hard", question: "Estimate the GDP of Japan in current prices as of 2023.", choiceA: "570 trillion yen", choiceB: "580 trillion yen", choiceC: "590 trillion yen", choiceD: "600 trillion yen", answer: "C"},
    {questionNo: 44, difficulty: "5. Very Hard", question: "What were the dates of the bombing of Hiroshima and Nagasaki?", choiceA: "1945-06-06, 1945-06-09", choiceB: "1945-08-06, 1945-08-09", choiceC: "1946-06-06, 1946-06-09", choiceD: "1946-08-06, 1946-08-09", answer: "B"},
],

  trekQuestions:[
    
    {questionNo: 1, difficulty: "1. Very Easy", question: "What starship series did Kirk and Picard became captain of (excluding sequential models)?", choiceA: "Enterprise", choiceB: "Voyager", choiceC: "Yamato", choiceD: "Mazinger", answer: "A"},
    {questionNo: 2, difficulty: "1. Very Easy", question: "Which series did the Star Trek franchise begin with?", choiceA: "The Next Generation", choiceB: "The Original Series", choiceC: "Deep Space Nine", choiceD: "Voyager", answer: "B"},
    {questionNo: 3, difficulty: "1. Very Easy", question: "Which time passage does Star Trek usually be part of?", choiceA: "Past (BCE)", choiceB: "Past (CE)", choiceC: "Present", choiceD: "Future", answer: "D"},
    {questionNo: 4, difficulty: "1. Very Easy", question: "What organisation is responsible for the protagonists of Star Trek? (examples include Kirk, Picard, Sisko, Janeway, etc.)", choiceA: "Klingon Empire", choiceB: "Romulan Free State", choiceC: "United Federation of Planets", choiceD: "The Borg", answer: "C"},
    {questionNo: 5, difficulty: "1. Very Easy", question: "What is the objective of Starfleet, the exploration organisation of the UFP?", choiceA: "To seek out new lifeforms, cultures and civilisations and to maintain peaceful relations with such", choiceB: "To explore the outer part of our surroundings", choiceC: "To make contact with aliens and assimilate them with us", choiceD: "All of the above", answer: "A"},
    {questionNo: 6, difficulty: "1. Very Easy", question: "What rank is typically the commanding officer of a starship?", choiceA: "Admiral", choiceB: "Captain", choiceC: "Commander", choiceD: "Lieutenant Commander", answer: "B"},
    {questionNo: 7, difficulty: "1. Very Easy", question: "How do Starfleet officers teleport from the starship to another location?", choiceA: "Use a teleporter", choiceB: "Use a comm badge", choiceC: "Use a transporter room in the starship", choiceD: "None of the above", answer: "C"},
    {questionNo: 8, difficulty: "1. Very Easy", question: "What does a Starfleet captain say when he wants a starship to launch?", choiceA: "Blast off!", choiceB: "Engage!", choiceC: "Warp!", choiceD: "Ignition!", answer: "B"},
    {questionNo: 11, difficulty: "2. Easy", question: "What is the registry number of the USS Enterprise? (regardless of the model or generation)", choiceA: "NCC-1700", choiceB: "NCC-1701", choiceC: "NCC-7101", choiceD: "NCC-7701", answer: "B"},
    {questionNo: 12, difficulty: "2. Easy", question: "What century did the Next Generation take place in?", choiceA: "22nd century", choiceB: "23rd century", choiceC: "24th century", choiceD: "32nd century", answer: "B"},
    {questionNo: 13, difficulty: "2. Easy", question: "Who was the captain of the USS Voyager (Intrepid Class, NCC-74656)?", choiceA: "Captain Jean-Luc Picard", choiceB: "Captain James T. Kirk", choiceC: "Captain Benjamin Sisko", choiceD: "Captain Kathryn Janeway", answer: "D"},
    {questionNo: 14, difficulty: "2. Easy", question: "Did the Klingon Empire make peace with the Federation in TNG?", choiceA: "Yes, via a peace/alliance treaty.", choiceB: "Yes, via a simple ceasefire.", choiceC: "No, but there is a ceasefire", choiceD: "No.", answer: "A"},
    {questionNo: 15, difficulty: "2. Easy", question: "What was the stardate of the 1st season of TNG? Express with the first two digits.", choiceA: "40xxx", choiceB: "41xxx", choiceC: "42xxx", choiceD: "43xxx", answer: "B"},
    {questionNo: 16, difficulty: "2. Easy", question: "Is Lieutenant Commander Data an android or not?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 17, difficulty: "2. Easy", question: "What is a tricorder?", choiceA: "A multi-function tool that allows personnel to identify the atmosphere of a certain planet after beaming down from a starship.", choiceB: "A multi-function tool that allows personnel to collect data via sensors, analyse and process them through a computer system, and present it in audible or visual cues.", choiceC: "A multi-function tool that allows personnel only to identify the current time and stardate.", choiceD: "None of the above.", answer: "B"},
    {questionNo: 18, difficulty: "2. Easy", question: "What are the coordinates of Planet Earth according to the Federation?", choiceA: "Section 000", choiceB: "Section 001", choiceC: "Section 002", choiceD: "Section 003", answer: "B"},
    {questionNo: 21, difficulty: "3. Normal", question: "What does Jean-Luc Picard say every time he acknowledges and agrees with a suggestion or action from any of his crew members?", choiceA: "Copy that.", choiceB: "On it.", choiceC: "Make it so.", choiceD: "Good.", answer: "C"},
    {questionNo: 31, difficulty: "4. Hard", question: "Using the TNG formula, what is the stardate for the year 2370?", choiceA: "46000.0", choiceB: "47000.0", choiceC: "48000.0", choiceD: "49000.0", answer: "B"},
],

  entQuestions: [
    
    {questionNo: 1, difficulty: "1. Very Easy", question: "If ordinary girls = [sugar + spice + everything nice], and since the Powerpuff Girls = [sugar + spice + everything nice + x], what is x?", choiceA: "N2O (Nitrous oxide)", choiceB: "Rocket fuel", choiceC: "Chemical X", choiceD: "98-octane gasoline", answer: "C"},
    {questionNo: 2, difficulty: "1. Very Easy", question: "Is the Big Bang Theory (2008-2019) a show about scientists?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 3, difficulty: "1. Very Easy", question: "Where is anime and manga typically created in?", choiceA: "China", choiceB: "Korea", choiceC: "Japan", choiceD: "Taiwan", answer: "C"},
    {questionNo: 4, difficulty: "1. Very Easy", question: "Which city in the US is famous for producing movies?", choiceA: "Hollywood", choiceB: "San Fransisco", choiceC: "Washington", choiceD: "Detroit", answer: "A"},
    {questionNo: 11, difficulty: "2. Easy", question: "What purpose does Chemical X have in the Powerpuff Girls series?", choiceA: "It can be used as a GPU coolant or thermal paste", choiceB: "A proposal on creating element no. 119 in the Periodic Table", choiceC: "It can be used as 98-octane gasoline or premium diesel", choiceD: "It can have a person wield superhuman abilities", answer: "D"},
    {questionNo: 12, difficulty: "2. Easy", question: "Who was John Carter's teacher in the early episodes of ER?", choiceA: "Dr. Peter Benton", choiceB: "Dr. Mark Greene", choiceC: "Dr. Doug Ross", choiceD: "Dr. Carol Hathaway", answer: "A"},
    {questionNo: 13, difficulty: "2. Easy", question: "What is the name of the hospital in ER?", choiceA: "Federal General Hospital", choiceB: "State General Hospital", choiceC: "County General Hospital", choiceD: "City General Hospital", answer: "C"},
    {questionNo: 14, difficulty: "2. Easy", question: "What is Homer's most famous catchphrase?", choiceA: "D'oh!", choiceB: "Mmm, donuts...", choiceC: "64 slices of American cheese...", choiceD: "(shriek!)", answer: "A"},
    {questionNo: 21, difficulty: "3. Normal", question: "What year did the Powerpuff Girls aired with their final episode? (regardless of location)", choiceA: "2003", choiceB: "2004", choiceC: "2005", choiceD: "2006", answer: "B"},
    {questionNo: 22, difficulty: "3. Normal", question: "Which season did Sheldon and Amy Cooper obtain the Nobel Prize?", choiceA: "First half of Season 11", choiceB: "Second half of Season 11", choiceC: "First half of Season 12", choiceD: "Second half of Season 12", answer: "D"},
    {questionNo: 23, difficulty: "3. Normal", question: "How old was Sheldon when he moved to high school?", choiceA: "7", choiceB: "8", choiceC: "9", choiceD: "10", answer: "C"},
    {questionNo: 24, difficulty: "3. Normal", question: "What did Principal Skinner offer Superintendent Chalmers in The Simpsons: S7.E21: 22 Short Films About Springfield?", choiceA: "Steamed clams", choiceB: "Steamed yams", choiceC: "Steamed jams", choiceD: "Steamed hams", answer: "D"},
    {questionNo: 25, difficulty: "3. Normal", question: "As of October 2026, how many seasons does Sesame Street have?", choiceA: "55", choiceB: "56", choiceC: "57", choiceD: "58", answer: "B"},
    {questionNo: 26, difficulty: "3. Normal", question: "In Seseame Street, who is implied as Elmo's worst enemy?", choiceA: "Zoe", choiceB: "Oscar", choiceC: "Rocco", choiceD: "None of the above", answer: "C"},
    {questionNo: 27, difficulty: "3. Normal", question: "How did Principal Skinner plan to make steamed hams (that's what he calls hamburgers) for Superintendent Chalmers, and why?", choiceA: "He thought Chalmers would find the dinner completely unacceptable for cooking to take this long which resulted him in purcahsing a burger to speed up the time of preparing a meal.", choiceB: "He thought Chalmers was into burgers rather than roast.", choiceC: "He purchased burgers from Krusty Burger and disguised it as his own personal cooking which is a way for Skinner to accompany with homemade food like roast.", choiceD: "He purchased burgers from Krusty Burger and disguised it as his own personal cooking in result of burning his roast.", answer: "D"},
    {questionNo: 28, difficulty: "3. Normal", question: "Identify the three correct adjectives for each character.", choiceA: "Blossom: cute, Bubbles: tough, Buttercup: smart.", choiceB: "Blossom: cute, Bubbles: smart, Buttercup: tough.", choiceC: "Blossom: smart, Bubbles: tough, Buttercup: cute.", choiceD: "Blossom: smart, Bubbles: cute, Buttercup: tough.", answer: "D"},
    {questionNo: 29, difficulty: "3. Normal", question: "What would be the Cartesian mapping coordinates of Sheldon's spot when he sits on it?", choiceA: "(0, 0, 0, 0)", choiceB: "(1, 0, 1, 0)", choiceC: "(0, 0, 0)", choiceD: "(1, 1, 1, 1)", answer: "A"},
    {questionNo: 31, difficulty: "4. Hard", question: "What are the attack and defense values of the Blue-Eyes White Dragon?", choiceA: "ATK 2500 / DEF 3000", choiceB: "ATK 3000 / DEF 2500", choiceC: "ATK 3500 / DEF 2000", choiceD: "ATK 2000 / DEF 3500", answer: "B"},
],

  questions150: [
    
    {difficulty: "1. Very Easy", question: "What is the capital prefecture of Japan?", choiceA: "Kyoto", choiceB: "Osaka", choiceC: "Tokyo", choiceD: "Sapporo", answer: "C"}
]
}

console.log("Title screen loaded successfully.")
console.log("Welcome to the Alkhayat Super Quiz. Please select a topic.")
console.log(quizId);



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

  var radioSelect = document.getElementsByClassName("radio");

// function japanQuiz() {
//   radioSelect[0].checked = true;
//   username = true

//   startGame;
//   startJapanGame()


function pickQuiz(){
  if(japanQuiz.checked){
    chosenQuiz = 'japanQuestions'
    
  }
  else if(trekQuiz.checked){
    chosenQuiz = 'trekQuestions'
  }
  else if(entQuiz.checked){
    chosenQuiz = 'entQuestions'
  }
  else {
    chosenQuiz = 'questions150'
  }
  console.log(chosenQuiz)

}
function showQuestions(){
    questionNumber.textContent = questions[chosenQuiz][currentQuestion].questionNo;
    difficultyDisplay.textContent = questions[chosenQuiz][currentQuestion].difficulty;
    questionDisplay.textContent = questions[chosenQuiz][currentQuestion].question;
    selectionA.textContent = questions[chosenQuiz][currentQuestion].choiceA;
    selectionB.textContent = questions[chosenQuiz][currentQuestion].choiceB;
    selectionC.textContent = questions[chosenQuiz][currentQuestion].choiceC;
    selectionD.textContent = questions[chosenQuiz][currentQuestion].choiceD;
  }

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
let answer = ""
let currentQuestion = 0
let message1 = ""
let message2 = ""
let correctCount = 0
let wrongCount = 0
let score = 0
let combo = 0
let percent = 0
let time = 0
let grade = ""
let condition = "Pending"
let rating = ""
let title = ""



    if (percent >= 60) {condition = "Pass - Congratulations! You have passed the quiz!"}
    else if (percent >= 50) {condition = "Margin - You have marginally passed the quiz."}
    else if (percent <= 49) {condition = "Fail - You have failed the quiz. Better luck next time."}
    else {let condition = "Pending"}

    var correctAudio = new Audio("correct.mp3");
    var wrongAudio = new Audio("incorrect.mp3")
function checkAnswer(event) {
  console.log(event.target)

  if(event.target.textContent === questions[chosenQuiz][currentQuestion].answer){
    correctCount++;
    correctAudio.play();
    message1 = "Correct! The answer was " + questions[chosenQuiz][currentQuestion].answer + "!"

    combo ++;
    score += 500 + ((1.1 * combo) - 0.1);
    percent = (correctCount / questions[chosenQuiz].length) * 100
    console.log('Correct');
  }
  else {
    message1 = "Incorrect! The answer was " + questions[chosenQuiz][currentQuestion].answer + "!"
    wrongAudio.play();
    wrongCount++;
    combo = 0;
    console.log('Incorrect');
  }


  // console.log(stats)
    console.log(score)
    message1Display.textContent = message1
    message2Display.textContent = message2

    if (correctCount >= 1)
    {percentDisplay.textContent = percent.toFixed(1)}

  currentQuestion++

usernameDisplay.textContent = username
quizIdDisplay.textContent = quizId
scoreDisplay.textContent = score
correctDisplay.textContent = correctCount
wrongDisplay.textContent = wrongCount
comboDisplay.textContent = combo
conditionDisplay.textContent = condition
percentDisplay.textContent = percent.toFixed(1)

  const stats = [score, correctCount, wrongCount, percent, combo, time, grade]
console.log(stats)

checkEnd()

  showQuestions()

}
function gradeEvaluation(){
    if ((correctCount / questions[chosenQuiz].length) === 1) {return grade = "S++"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.95) {return grade = "S+"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.90) {return grade = "S"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.85) {return grade = "A+"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.80) {return grade = "A"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.75) {return grade = "B+"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.70) {return grade = "B"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.65) {return grade = "C+"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.60) {return grade = "C"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.50) {return grade = "D"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.40) {return grade = "E"}
    else if ((correctCount / questions[chosenQuiz].length) >= 0.30) {return grade = "F"}
    else {return grade = "G"};
}
function titleEvaluation(){
 rating = ((correctCount / questions[chosenQuiz].length) * 750) + ((((((60000 - elapsedTime / questions[chosenQuiz].length) / 60000) * 750) || 0) * (correctCount / questions[chosenQuiz].length)))
 if (rating >= 1400 && (correctCount / questions[chosenQuiz].length == 1) && elapsedTime <= questions[chosenQuiz].length * 12000){title = "[SUPER Special+] Distinguished"} 
    else if (rating >= 1325 && (correctCount / questions[chosenQuiz].length == 1) && elapsedTime <= questions[chosenQuiz].length * 21000){title = "[Special+] Ultimate Master"}  
    else if (rating >= 1250 && (correctCount / questions[chosenQuiz].length == 1) && elapsedTime <= questions[chosenQuiz].length * 30000){title = "[Special] Grand Master"}
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
    else {title = "[11th] Beginner"};
}
function checkEnd(){
if (questions[chosenQuiz].length  == currentQuestion)  {
  console.log('QUIZ OVER')
    message2 = "Quiz finished!"
    alert("You have finished the quiz!")
    gradeEvaluation()
    gradeDisplay.textContent = grade
    titleEvaluation()
    ratingDisplay.textContent = rating.toFixed(2)
    titleDisplay.textContent = title
    conditionDisplay.textContent = condition
stopTimer()
} else
  {
  
  }
    showQuestions()

}



const stats = [score, correctCount, wrongCount, percent, combo, time, grade]
console.log(stats)

// answer = answerInput;
// if (answerInput == questions[chosenQuiz][currentQuestion].answer) {
// correctCount += 1;
// combo += 1;
// score += 500 + ((1.025 * combo) - 0.025);
// }
// else { wrongCount += 1;
// combo = 0 }

// if (questions[chosenQuiz][currentQuestion].questionNo === questions.length) {
// questions.textContent = "Quiz finished!";
// answerInput.disabled = true; 
// stopTimer()}
// else {
// showQuestions();
// }


/*
function submitAnswer(){
  checkAnswer()
}

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
*/

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
  usernameApply.disabled = true;
  // stopButtonEl.disabled = false;
}

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * Number.MAX_SAFE_INTEGER)) / 1000);

  return (
    (seconds ? (seconds > 9 ? seconds : + seconds): 0) +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds));
}

 elapsedTime = 0;
  timerEl.textContent = "0.00";
  
function stopTimer() {
  clearInterval(timerInterval);
}
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerEl.textContent = formatTime;
}

console.log(formatTime(elapsedTime))

function startGame(){
startTimer()
pickQuiz()

showQuestions()
gradeEvaluation()
titleEvaluation()
checkEnd()
stopGame()
}

function stopGame(){
  
  if (questions.japanQuestions.questionNo === 51 || questions.trekQuestions.questionNo === 51 || questions.entQuestions.questionNo === 51 || questions.questions150.questionNo === 151)
    
    { stopTimer()
      message1 = "Quiz finished!"
}
}

// if (answerInput === "") {
//     message.textContent == "Please select an answer by typing the letter below.";
//   } 



/* function highScoreButton(){
    console.log()
} */

usernameApply.addEventListener('click',saveName)

document.getElementById("start-button").addEventListener("click",startGame);

buttonA.addEventListener('click',checkAnswer);
buttonB.addEventListener('click',checkAnswer);
buttonC.addEventListener('click',checkAnswer);
buttonD.addEventListener('click',checkAnswer);
buttonPass.addEventListener('click',checkAnswer);

printButton.addEventListener("click", printResult)