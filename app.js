import { uuidv4 } from "https://unpkg.com/uuidv7@^1";

const questionDisplay = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const scoreDisplay = document.querySelector("#score");
const percentDisplay = document.querySelector("#percent");
const timerEl = document.querySelector("#time");
const gradeDisplay = document.querySelector("#grade");
const usernameInput = document.querySelector('#username-input');
const message1Display = document.querySelector("#message1");
const message2Display = document.querySelector("#message2");
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
const ratingDisplay = document.querySelector('#rating')
const titleDisplay = document.querySelector('#title')

const quizId = uuidv4();
const quizIdDisplay = document.querySelector('#quiz-id')


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

quizIdDisplay.textContent = quizId

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
    {questionNo: 3, difficulty: "1. Very Easy", question: "What is Japan famous for? (apart from stereotypically speaking anime and manga)", choiceA: "Cameras", choiceB: "Electronics", choiceC: "Vehicles", choiceD: "All of the above", answer: "D"},
    {questionNo: 4, difficulty: "1. Very Easy", question: "How is ramen, udon, soba and somen eaten?", choiceA: "Chopsticks only", choiceB: "Spoon only", choiceC: "Both chopsticks and spoon", choiceD: "Both fork and spoon", answer: "C"},
    {questionNo: 5, difficulty: "1. Very Easy", question: "Where is Japan located?", choiceA: "North Asia / Siberia", choiceB: "South Asia / Indian Subcontinent", choiceC: "West Asia", choiceD: "East Asia and the Pacific", answer: "D"},
    {questionNo: 6, difficulty: "1. Very Easy", question: "What is the currency of Japan?", choiceA: "Yen", choiceB: "Yuan", choiceC: "Won", choiceD: "Dong", answer: "A"},
    {questionNo: 7, difficulty: "1. Very Easy", question: "Identify which of these four prefectures are major prefectures in Japan, besides Tokyo.", choiceA: "Osaka", choiceB: "Akita", choiceC: "Kagawa", choiceD: "Sendai", answer: "A"},
    {questionNo: 8, difficulty: "1. Very Easy", question: "What is English for the word sakura?", choiceA: "Cherry blossom", choiceB: "Rose", choiceC: "Daisy", choiceD: "Lily", answer: "A"},
    {questionNo: 9, difficulty: "1. Very Easy", question: "What is the northern-most prefecture of all of Japan?", choiceA: "Kumamoto", choiceB: "Iwate", choiceC: "Okinawa", choiceD: "Hokkaido", answer: "D"},
    {questionNo: 10, difficulty: "1. Very Easy", question: "What is the southern-most prefecture of all of Japan?", choiceA: "Kumamoto", choiceB: "Iwate", choiceC: "Okinawa", choiceD: "Hokkaido", answer: "C"},
    {questionNo: 11, difficulty: "2. Easy", question: "Out of the four, which robot anime in the 70s became the most successful in Japan? (Hint: odd one out!)", choiceA: "Mazinger Z / Great Mazinger", choiceB: "Getter Robot / Getter Robot G", choiceC: "UFO Robot Grendizer", choiceD: "Mobile Suit Gundam", answer: "D"},
    {questionNo: 12, difficulty: "2. Easy", question: "The bullet train is called a shinkansen （新幹線、しんかんせん） in Japanese. Is this true or false?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 13, difficulty: "2. Easy", question: "What vehicle is the most famous about Japanese transportation?", choiceA: "Cars", choiceB: "Trains", choiceC: "Bikes", choiceD: "Planes", answer: "B"},
    {questionNo: 14, difficulty: "2. Easy", question: "Which of these sentences are written in Japanese?", choiceA: "이건 일본어 글자인가요?", choiceB: "これは日本語の文字ですか？", choiceC: "這是日文的字嗎？", choiceD: "这是日语文字吗？", answer: "B"},
    {questionNo: 15, difficulty: "2. Easy", question: "What timezone does Japan utilise?", choiceA: "JST (Japan Standard Timezone)", choiceB: "JST with DST (Japan Standard Timezone with Daylight Savings)", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 16, difficulty: "2. Easy", question: "How do you express Japan Standard Timezone with UTC offsets?", choiceA: "UTC+08:00", choiceB: "UTC+08:30", choiceC: "UTC+09:00", choiceD: "UTC+09:30", answer: "C"},
    {questionNo: 17, difficulty: "2. Easy", question: "Which of these are Japan's inventions", choiceA: "The compact disc (CD)", choiceB: "The Walkman", choiceC: "Karaoke", choiceD: "All of the above", answer: "D"},
    {questionNo: 18, difficulty: "2. Easy", question: "What kind of natural disasters do the Japanese always prepare for?", choiceA: "Earthquakes", choiceB: "Tsunamis", choiceC: "Heavy rain", choiceD: "All of the above", answer: "D"},
    {questionNo: 19, difficulty: "2. Easy", question: "What was the worst earthquake (based on highest magnitude and damage) that occurred in the 21st century in Japan?", choiceA: "2011 Great East Japan Earthquake", choiceB: "2016 Tohoku Earthquake", choiceC: "2024 Noto Peninsula Earthquake", choiceD: "2026 Kumamoto Earthquake", answer: "A"},
    {questionNo: 20, difficulty: "2. Easy", question: "What kind of land is Japan?", choiceA: "An archipelago", choiceB: "An island", choiceC: "A landlocked country", choiceD: "All of the above", answer: "A"},
    {questionNo: 21, difficulty: "3. Normal", question: "Who is the Prime Minister of Japan (incumbent in 2026)?", choiceA: "Shinzō Abe", choiceB: "Yoshihide Suga", choiceC: "Shigeru Ishiba", choiceD: "Sanae Takaichi", answer: "D"},
    {questionNo: 22, difficulty: "3. Normal", question: "What is the telephone calling code of Japan?", choiceA: "80", choiceB: "81", choiceC: "82", choiceD: "83", answer: "B"},
    {questionNo: 23, difficulty: "3. Normal", question: "If you enter a house in Japan to visit a friend, should you take off your shoes at the doorstep?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 24, difficulty: "3. Normal", question: "When did Japan become a country?", choiceA: "700 BCE", choiceB: "660 BCE", choiceC: "650 BCE", choiceD: "600 BCE", answer: "B"},
    {questionNo: 25, difficulty: "3. Normal", question: "What kind of writing system does Japanese use?", choiceA: "Alphabet", choiceB: "Logographic", choiceC: "Alphabet and logographic", choiceD: "Symbolic", answer: "C"},
    {questionNo: 26, difficulty: "3. Normal", question: "How many prefectures does Japan consist of?", choiceA: "40", choiceB: "44", choiceC: "47", choiceD: "50", answer: "C"},
    {questionNo: 27, difficulty: "3. Normal", question: "Which kind of noodles are thick, chewy and soft to eat?", choiceA: "Ramen", choiceB: "Somen", choiceC: "Soba", choiceD: "Udon", answer: "D"},
    {questionNo: 28, difficulty: "3. Normal", question: "Which of these fictional characters are trending in Japan?", choiceA: "Doraemon", choiceB: "Sazae-san", choiceC: "Crayon Shin-chan", choiceD: "All of the above", answer: "D"},
    {questionNo: 29, difficulty: "3. Normal", question: "What is the current era in Japan (as of the year 2026)?", choiceA: "Meiji Era", choiceB: "Showa Era", choiceC: "Reiwa Era", choiceD: "Heisei Era", answer: "C"},
    {questionNo: 30, difficulty: "3. Normal", question: "How do you convert 2026 to the current Japanese year (using the current era)?", choiceA: "Reiwa 7", choiceB: "Reiwa 8", choiceC: "Heisei 37", choiceD: "Heisei 38", answer: "B"},
    {questionNo: 31, difficulty: "4. Hard", question: "What is the postal code of Chiyoda Ward, Tokyo Prefecture?", choiceA: "100-0000", choiceB: "110-0000", choiceC: "120-0000", choiceD: "130-0000", answer: "A"},
    {questionNo: 32, difficulty: "4. Hard", question: "What party is part of the Japanese Government and has been in control for most of Japan's post-war history?", choiceA: "Constitutional Democratic Party / Centrist Reform Alliance", choiceB: "Japan Innovation Party", choiceC: "Liberal Democratic Party", choiceD: "Japanese Communist Party", answer: "C"},
    {questionNo: 33, difficulty: "4. Hard", question: "When did Japan start facing a population decline?", choiceA: "2007", choiceB: "2009", choiceC: "2011", choiceD: "2013", answer: "B"},
    {questionNo: 34, difficulty: "4. Hard", question: "Which electronics store is the largest (in surface area) in Akihabara, Tokyo?", choiceA: "Yodobashi Camera", choiceB: "Bic Camera", choiceC: "Edion", choiceD: "Yamada Denki", answer: "A"},
    {questionNo: 35, difficulty: "4. Hard", question: "Which electronics store is the largest (in assets and business size) in Akihabara, Tokyo?", choiceA: "Yodobashi Camera", choiceB: "Bic Camera", choiceC: "Edion", choiceD: "Yamada Denki", answer: "D"},
    {questionNo: 36, difficulty: "4. Hard", question: "What prefecture number is Osaka?", choiceA: "25", choiceB: "26", choiceC: "27", choiceD: "28", answer: "C"},
    {questionNo: 37, difficulty: "4. Hard", question: "What prefecture number is Kyoto?", choiceA: "25", choiceB: "26", choiceC: "27", choiceD: "28", answer: "B"},
    {questionNo: 38, difficulty: "4. Hard", question: "What is the population of Japan by 2024 (not rounded)?", choiceA: "121 million", choiceB: "123 million", choiceC: "125 million", choiceD: "127 million", answer: "B"},
    {questionNo: 39, difficulty: "4. Hard", question: "What is the primary stock index of Japan?", choiceA: "TOPIX", choiceB: "Yomiuri 333", choiceC: "Nikkei 225", choiceD: "Dow Jones Index", answer: "C"},
    {questionNo: 40, difficulty: "4. Hard", question: "What is the largest bank in Japan in terms of market capacity?", choiceA: "Sumitomo Mitsui", choiceB: "Mizuho", choiceC: "Japan Post Bank", choiceD: "Mitsubishi UFG", answer: "D"},
    {questionNo: 41, difficulty: "5. Very Hard", question: "What are the coordinates of Tokyo?", choiceA: "34°N, 138°E", choiceB: "34°N, 139°E", choiceC: "35°N, 138°E", choiceD: "35°N, 139°E", answer: "D"},
    {questionNo: 42, difficulty: "5. Very Hard", question: "What is the altitude of Mt. Fuji?", choiceA: "3770m", choiceB: "3773m", choiceC: "3776m", choiceD: "3779m", answer: "C"},
    {questionNo: 43, difficulty: "5. Very Hard", question: "Estimate the GDP of Japan in current prices as of 2023.", choiceA: "570 trillion yen", choiceB: "580 trillion yen", choiceC: "590 trillion yen", choiceD: "600 trillion yen", answer: "C"},
    {questionNo: 44, difficulty: "5. Very Hard", question: "What were the dates of the bombing of Hiroshima and Nagasaki?", choiceA: "1945-06-06, 1945-06-09", choiceB: "1945-08-06, 1945-08-09", choiceC: "1946-06-06, 1946-06-09", choiceD: "1946-08-06, 1946-08-09", answer: "B"},
    {questionNo: 45, difficulty: "5. Very Hard", question: "Who was the founder of Sony Group Corporation, one of Japan's leaders in electronics?", choiceA: "Shigeru Miyamoto", choiceB: "Akio Morita and Masaru Ibuka", choiceC: "Ken Kutaragi", choiceD: "None of the above", answer: "B"},
    {questionNo: 46, difficulty: "5. Very Hard", question: "What are the exact starting and ending years of the Meiji Era?", choiceA: "1867-1911", choiceB: "1868-1911", choiceC: "1867-1912", choiceD: "1868-1912", answer: "D"},
    {questionNo: 47, difficulty: "5. Very Hard", question: "What is the computer encoding system that most people in Japan uses, besides Unicode/UTF-8?", choiceA: "EUC-JP", choiceB: "Shift-JIS", choiceC: "Older JIS X", choiceD: "UTF-16", answer: "B"},
    {questionNo: 48, difficulty: "5. Very Hard", question: "After the Empire of Japan's defeat in WWⅡ, Japan ractified a pacifist constitution, changing their stance towards the world completely. What is their official form of government now?", choiceA: "Kingdom under a democratic parliament", choiceB: "Pacifist empire under a multi-party constitutional monarchy", choiceC: "Multi-party constitutional monarchy", choiceD: "Democratic, imperial federation of prefectures under a constitutional monarchy", answer: "C"},
    {questionNo: 49, difficulty: "5. Very Hard", question: "According to the Hofstede Dimensions, is Japan a hardworking and intelligence-based or an emotional and psychological-based country (", choiceA: "Hard-working/intelligence", choiceB: "Emotional-psychological", choiceC: "Both", choiceD: "None", answer: "A"},
    {questionNo: 50, difficulty: "5. Very Hard", question: "According to the Hofstede Dimensions, do the Japanese have the time to have fun and indulge themselves?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "B"},
    
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
    {questionNo: 9, difficulty: "1. Very Easy", question: "What is Deep Space 9?", choiceA: "A starship", choiceB: "A space built by the Federation", choiceC: "A space base built by the Bajorans for the Cardassians", choiceD: "A club for Federation members", answer: "C"},
    {questionNo: 10, difficulty: "1. Very Easy", question: "Which one of these entities are considered to be the worst enemy of the Federation", choiceA: "The Romulan Free State", choiceB: "The Dominion", choiceC: "The Borg", choiceD: "None of the above", answer: "C"},
    {questionNo: 11, difficulty: "2. Easy", question: "What is the registry number of the USS Enterprise? (regardless of the model or generation)", choiceA: "NCC-1700", choiceB: "NCC-1701", choiceC: "NCC-7101", choiceD: "NCC-7701", answer: "B"},
    {questionNo: 12, difficulty: "2. Easy", question: "What century did the Next Generation take place in?", choiceA: "22nd century", choiceB: "23rd century", choiceC: "24th century", choiceD: "32nd century", answer: "C"},
    {questionNo: 13, difficulty: "2. Easy", question: "Who was the captain of the USS Voyager?", choiceA: "Captain Jean-Luc Picard", choiceB: "Captain James T. Kirk", choiceC: "Captain Benjamin Sisko", choiceD: "Captain Kathryn Janeway", answer: "D"},
    {questionNo: 14, difficulty: "2. Easy", question: "Did the Klingon Empire make peace with the Federation in TNG?", choiceA: "Yes, via a peace/alliance treaty.", choiceB: "Yes, via a simple ceasefire.", choiceC: "No, but there is a ceasefire", choiceD: "No.", answer: "A"},
    {questionNo: 15, difficulty: "2. Easy", question: "What was the stardate of the 1st season of TNG? Express with the first two digits.", choiceA: "40xxx", choiceB: "41xxx", choiceC: "42xxx", choiceD: "43xxx", answer: "B"},
    {questionNo: 16, difficulty: "2. Easy", question: "Is Lieutenant Commander Data an android or not?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 17, difficulty: "2. Easy", question: "What is a tricorder?", choiceA: "A multi-function tool that allows personnel to identify the atmosphere of a certain planet after beaming down from a starship.", choiceB: "A multi-function tool that allows personnel to collect data via sensors, analyse and process them through a computer system, and present it in audible or visual cues.", choiceC: "A multi-function tool that allows personnel only to identify the current time and stardate.", choiceD: "None of the above.", answer: "B"},
    {questionNo: 18, difficulty: "2. Easy", question: "What are the coordinates of Planet Earth according to the Federation?", choiceA: "Section 000", choiceB: "Section 001", choiceC: "Section 002", choiceD: "Section 003", answer: "B"},
    {questionNo: 19, difficulty: "2. Easy", question: "How did the United Federation of Planets found?", choiceA: "Humans and Romulans cooperated with each other in diplomacy, cooperation, exploration, peace and other beneficial aspects.", choiceB: "Klingons waged war against humans on Planet Earth.", choiceC: "Humans have continuously evolved based on space travel and exploration.", choiceD: "Humans and Vulcans cooperated with each other in diplomacy, cooperation, exploration, peace and other beneficial aspects.", answer: "D"},
    {questionNo: 20, difficulty: "2. Easy", question: "Is Commander Troi an empath, as in able to detect feelings and thoughts of others around her?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 21, difficulty: "3. Normal", question: "What does Jean-Luc Picard say every time he acknowledges and agrees with a suggestion or action from any of his crew members?", choiceA: "Copy that.", choiceB: "On it.", choiceC: "Make it so.", choiceD: "Good.", answer: "C"},
    {questionNo: 22, difficulty: "3. Normal", question: "How long does it take for the Voyager to travel back to Federation space from the Delta Quadrant", choiceA: "25 years", choiceB: "50 years", choiceC: "75 years", choiceD: "100 years", answer: "C"},
    {questionNo: 23, difficulty: "3. Normal", question: "What is the starship class of the original Enterprise?", choiceA: "Constitution", choiceB: "Galaxy", choiceC: "Intrepid", choiceD: "Constitution Ⅲ", answer: "A"},
    {questionNo: 24, difficulty: "3. Normal", question: "What is the starship class of the Enterprise-D?", choiceA: "Constitution", choiceB: "Galaxy", choiceC: "Intrepid", choiceD: "Constitution Ⅲ", answer: "B"},
    {questionNo: 25, difficulty: "3. Normal", question: "Which deck in a Galaxy Class starship is where the main bridge and the captain's ready room situated in?", choiceA: "1", choiceB: "2", choiceC: "3", choiceD: "4", answer: "A"},
    {questionNo: 26, difficulty: "3. Normal", question: "What measurement system does the Federation and Starfleet use?", choiceA: "Imperial units", choiceB: "English units", choiceC: "Metric units", choiceD: "Self-regulated custom units", answer: "C"},
    {questionNo: 27, difficulty: "3. Normal", question: "What time format does the Federation and Starfleet usually use?", choiceA: "24-hour time format (00-24)", choiceB: "12-hour time format (12AM-11PM)", choiceC: "Bajoran time format (00-26)", choiceD: "All of the above", answer: "A"},
    {questionNo: 28, difficulty: "3. Normal", question: "Did Picard ever once got forced to assimilate with the Borg?", choiceA: "Yes, and he remained part of the Borg for all time", choiceB: "Yes, but the Enterprise-D crew dismantled the Borg systems from Picard and liberated him from the collective", choiceC: "Yes, but nothing happened regarding Picard's physical or mental attributes", choiceD: "No", answer: "B"},
    {questionNo: 29, difficulty: "3. Normal", question: "Did Troi become promoted to Commander within the TNG series?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 30, difficulty: "3. Normal", question: "Did Data finally have emotions, despite not having an emotional chip?", choiceA: "Yes", choiceB: "No", choiceC: "Rarely and not easily", choiceD: "", answer: "C"},
    {questionNo: 31, difficulty: "4. Hard", question: "Using the TNG formula, what is the stardate for the year 2370?", choiceA: "46000.0", choiceB: "47000.0", choiceC: "48000.0", choiceD: "49000.0", answer: "B"},
    {questionNo: 32, difficulty: "4. Hard", question: "Has Commander Riker been part of any other faction temporarily than the Federation?", choiceA: "Yes, the Klingons", choiceB: "Yes, the Romulans", choiceC: "Yes, the Cardassians", choiceD: "No", answer: "A"},
    {questionNo: 33, difficulty: "4. Hard", question: "What was Captain Janeway's first and final line in Voyager?", choiceA: "Coffee.", choiceB: "Set a course for home.", choiceC: "Engage.", choiceD: "None of the above.", answer: "B"},
    {questionNo: 34, difficulty: "4. Hard", question: "The U.S.S. Voyager's warp core is a different one from what was used for the warp core of the refitted U.S.S. Enterprise in the previous Star Trek movies. Is this true or false?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "B"},
    {questionNo: 35, difficulty: "4. Hard", question: "Who are the only two characters in TNG who appear in all episodes?", choiceA: "Picard and Troi", choiceB: "Picard and Beverly Crusher", choiceC: "Picard and Riker", choiceD: "Picard and La Forge", answer: "C"},
    {questionNo: 36, difficulty: "4. Hard", question: "What was the stardate of the first aired Star Trek episode?", choiceA: "1213.4", choiceB: "1223.4", choiceC: "1312.4", choiceD: "1322.4", answer: "C"},
    {questionNo: 37, difficulty: "4. Hard", question: "What is Picard's favourite drink?", choiceA: "Prune juice", choiceB: "Darjeeling tea", choiceC: "Hot chocolate", choiceD: "Earl Grey tea", answer: "D"},
    {questionNo: 38, difficulty: "4. Hard", question: "What is Janeway's favourite drink?", choiceA: "Coffee", choiceB: "Synthehol", choiceC: "Raktajino (Klingon coffee)", choiceD: "Earl Grey tea", answer: "A"},
    {questionNo: 39, difficulty: "4. Hard", question: "What is Troi's favourite drink?", choiceA: "Prune juice", choiceB: "Darjeeling tea", choiceC: "Hot chocolate", choiceD: "Earl Grey tea", answer: "C"},
    {questionNo: 40, difficulty: "4. Hard", question: "What kind of brain does Data have?", choiceA: "Human brain", choiceB: "Positronic brain", choiceC: "A brain powered by an AI agent", choiceD: "A remote control", answer: "B"},
    {questionNo: 41, difficulty: "5. Very Hard", question: "What are the binary digits to the title of the 14th episode of TNG?", choiceA: "01010110", choiceB: "10010110", choiceC: "10101001", choiceD: "11001001", answer: "D"},
    {questionNo: 42, difficulty: "5. Very Hard", question: "How many passengers can a Galaxy-class starship like the Enterprise-D can hold?", choiceA: "1013 passengers", choiceB: "1013 passengers, plus an additional 5000 for evacuational purposes", choiceC: "1013 passengers, plus an additional 10000 for evacuational purposes", choiceD: "1013 passengers, plus an additional 15000 for evacuational purposes", answer: "D"},
    {questionNo: 43, difficulty: "5. Very Hard", question: "In terms of surface area (light years), which faction possesses the most territory?", choiceA: "The Dominion", choiceB: "The Borg", choiceC: "The Federation", choiceD: "The Klingon Empire", answer: "B"},
    {questionNo: 44, difficulty: "5. Very Hard", question: "In terms of surface area (light years), which faction possesses the second most territory?", choiceA: "The Dominion", choiceB: "The Borg", choiceC: "The Federation", choiceD: "The Klingon Empire", answer: "A"},
    {questionNo: 45, difficulty: "5. Very Hard", question: "What stardate where Captain Picard Day was celebrated?", choiceA: "47057.1", choiceB: "47257.1", choiceC: "47457.1", choiceD: "47657.1", answer: "C"},
    {questionNo: 46, difficulty: "5. Very Hard", question: "What standard date (month-day) where Captain Picard Day was celebrated", choiceA: "06-15", choiceB: "06-16", choiceC: "06-17", choiceD: "06-18", answer: "B"},
    {questionNo: 47, difficulty: "5. Very Hard", question: "How many crew members are present in Deep Space 9?", choiceA: "300", choiceB: "500", choiceC: "700", choiceD: "1000", answer: "B"},
    {questionNo: 48, difficulty: "5. Very Hard", question: "How many crew members are present in the Voyager?", choiceA: "111", choiceB: "121", choiceC: "131", choiceD: "141", answer: "D"},
    {questionNo: 49, difficulty: "5. Very Hard", question: "What class is the Voyager?", choiceA: "Constitution", choiceB: "Galaxy", choiceC: "Intrepid", choiceD: "Constitution Ⅲ", answer: "C"},
    {questionNo: 50, difficulty: "5. Very Hard", question: "What is the registry number of the Voyager?", choiceA: "NCC-74556", choiceB: "NCC-74566", choiceC: "NCC-74655", choiceD: "NCC-74656", answer: "D"},

    

],

  entQuestions: [

    {questionNo: 1, difficulty: "1. Very Easy", question: "Is the Big Bang Theory (2008-2019) a show about scientists/theorists?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 2, difficulty: "1. Very Easy", question: "If ordinary girls = [sugar + spice + everything nice], and since the Powerpuff Girls = [sugar + spice + everything nice + x], what is x?", choiceA: "N2O (Nitrous oxide)", choiceB: "Rocket fuel", choiceC: "Chemical X", choiceD: "98-octane gasoline", answer: "C"},
    {questionNo: 3, difficulty: "1. Very Easy", question: "Where is anime and manga typically created in?", choiceA: "China", choiceB: "Korea", choiceC: "Japan", choiceD: "Taiwan", answer: "C"},
    {questionNo: 4, difficulty: "1. Very Easy", question: "What was Sheldon's catchphrase, especially when people fall into his classic pranks?", choiceA: "Bazinga!", choiceB: "Psych!", choiceC: "Whoo!", choiceD: "Gotcha!", answer: "A"},
    {questionNo: 5, difficulty: "1. Very Easy", question: "What is the appropriate objective of winning a Yu-Gi-Oh! game?", choiceA: "Get better cards than the opponent.", choiceB: "Run out of cards and calculate the total damage obtain between players.", choiceC: "The game shall be endless until the player forfeits.", choiceD: "Reduce the opponent's LP (Life Points) to zero, or by any other means win.", answer: "D"},
    {questionNo: 6, difficulty: "1. Very Easy", question: "Which one of these TBBT characters do NOT have a Master's degree or higher?", choiceA: "Leonard", choiceB: "Sheldon", choiceC: "Penny", choiceD: "Howard", answer: "C"},
    {questionNo: 7, difficulty: "1. Very Easy", question: "Where is Sheldon's apartment, the main setting of the Big Bang Theory?", choiceA: "Times Square, New York", choiceB: "Pasadena, California", choiceC: "Boston, Texas", choiceD: "San Fransisco, California", answer: "B"},
    {questionNo: 8, difficulty: "1. Very Easy", question: "What is the standard amount of Life Points you may start within a Yu-Gi-Oh! game?", choiceA: "4000", choiceB: "6000", choiceC: "8000", choiceD: "10000", answer: "C"},
    {questionNo: 9, difficulty: "1. Very Easy", question: "Where do the Powerpuff Girls live in?", choiceA: "The city of Battle City!", choiceB: "The city of Springfield!", choiceC: "The city of San Fransokyo!", choiceD: "The city of Townsville!", answer: "D"},
    {questionNo: 10, difficulty: "1. Very Easy", question: "Does Grover work everywhere?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 11, difficulty: "2. Easy", question: "What purpose does Chemical X have in the Powerpuff Girls series?", choiceA: "It can be used as a GPU coolant or thermal paste", choiceB: "A proposal on creating element no. 119 in the Periodic Table", choiceC: "It can be used as 98-octane gasoline or premium diesel", choiceD: "It can have a person wield superhuman abilities", answer: "D"},
    {questionNo: 12, difficulty: "2. Easy", question: "Who was John Carter's teacher in the early episodes of ER?", choiceA: "Dr. Peter Benton", choiceB: "Dr. Mark Greene", choiceC: "Dr. Doug Ross", choiceD: "Dr. Carol Hathaway", answer: "A"},
    {questionNo: 13, difficulty: "2. Easy", question: "What is the name of the hospital in ER?", choiceA: "Federal General Hospital", choiceB: "State General Hospital", choiceC: "County General Hospital", choiceD: "City General Hospital", answer: "C"},
    {questionNo: 14, difficulty: "2. Easy", question: "What is Homer's most famous catchphrase?", choiceA: "D'oh!", choiceB: "Mmm, donuts...", choiceC: "64 slices of American cheese...", choiceD: "(shriek!)", answer: "A"},
    {questionNo: 15, difficulty: "2. Easy", question: "What happens if a player has all the five cards of Exodia in his/her hand?", choiceA: "The player takes half of the remaining Life Points of his/her opponent.", choiceB: "The player can Special Summon any card of his/her choice.", choiceC: "The player instantly loses the duel.", choiceD: "The player instantly wins the duel.", answer: "D"},
    {questionNo: 16, difficulty: "2. Easy", question: "Which timeline is the main universe of the Gundam series?", choiceA: "Future Century", choiceB: "Cosmic Era", choiceC: "Universe Century", choiceD: "After Colony", answer: "C"},
    {questionNo: 17, difficulty: "2. Easy", question: "Grover Monster has so many jobs, but which one of them seems the most popular amongst them all?", choiceA: "Plumber", choiceB: "Salesman", choiceC: "Musician", choiceD: "Waiter", answer: "D"},
    {questionNo: 18, difficulty: "2. Easy", question: "Who was the pilot of the original Gundam robot?", choiceA: "Amuro Ray", choiceB: "Bright Noa", choiceC: "Sayla Mass", choiceD: "Lalah Sune", answer: "A"},
    {questionNo: 19, difficulty: "2. Easy", question: "Is the Simpsons the longest running primetime animation show?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 20, difficulty: "2. Easy", question: "What do you need to make Ernie's ice cream soda?", choiceA: "Soda water + strawberry syrup + vanilla ice cream + whipped cream", choiceB: "Soda water + vanilla milkshake + strawberry syrup + whipped cream", choiceC: "Soda water + chocolate milkshake + strawberry syrup + whipped cream", choiceD: "Soda water + strawberry syrup + chocolate ice cream + whipped cream", answer: "A"},
    {questionNo: 21, difficulty: "3. Normal", question: "When did the Powerpuff Girls air? (regardless of location)", choiceA: "1998-2003", choiceB: "1998-2004", choiceC: "1999-2005", choiceD: "1999-2006", answer: "B"},
    {questionNo: 22, difficulty: "3. Normal", question: "Which season did Sheldon and Amy Cooper obtain the Nobel Prize?", choiceA: "First half of Season 11", choiceB: "Second half of Season 11", choiceC: "First half of Season 12", choiceD: "Second half of Season 12", answer: "D"},
    {questionNo: 23, difficulty: "3. Normal", question: "How old was Sheldon when he moved to high school?", choiceA: "7", choiceB: "8", choiceC: "9", choiceD: "10", answer: "C"},
    {questionNo: 24, difficulty: "3. Normal", question: "What did Principal Skinner offer Superintendent Chalmers in The Simpsons: S7.E21: 22 Short Films About Springfield?", choiceA: "Steamed clams", choiceB: "Steamed yams", choiceC: "Steamed jams", choiceD: "Steamed hams", answer: "D"},
    {questionNo: 25, difficulty: "3. Normal", question: "As of October 2026, how many seasons does Sesame Street have?", choiceA: "55", choiceB: "56", choiceC: "57", choiceD: "58", answer: "B"},
    {questionNo: 26, difficulty: "3. Normal", question: "In Seseame Street, who is implied as Elmo's worst enemy?", choiceA: "Zoe", choiceB: "Oscar", choiceC: "Rocco", choiceD: "None of the above", answer: "C"},
    {questionNo: 27, difficulty: "3. Normal", question: "How did Principal Skinner plan to make steamed hams (that's what he calls hamburgers) for Superintendent Chalmers, and why?", choiceA: "He thought Chalmers would find the dinner completely unacceptable for cooking to take this long which resulted him in purcahsing a burger to speed up the time of preparing a meal.", choiceB: "He thought Chalmers was into burgers rather than roast.", choiceC: "He purchased burgers from Krusty Burger and disguised it as his own personal cooking which is a way for Skinner to accompany with homemade food like roast.", choiceD: "He purchased burgers from Krusty Burger and disguised it as his own personal cooking in result of burning his roast.", answer: "D"},
    {questionNo: 28, difficulty: "3. Normal", question: "Identify the three correct adjectives for each character.", choiceA: "Blossom: cute, Bubbles: tough, Buttercup: smart.", choiceB: "Blossom: cute, Bubbles: smart, Buttercup: tough.", choiceC: "Blossom: smart, Bubbles: tough, Buttercup: cute.", choiceD: "Blossom: smart, Bubbles: cute, Buttercup: tough.", answer: "D"},
    {questionNo: 29, difficulty: "3. Normal", question: "What would be the Cartesian mapping coordinates of Sheldon's spot when he sits on it?", choiceA: "(0, 0, 0, 0)", choiceB: "(1, 0, 1, 0)", choiceC: "(0, 0, 0)", choiceD: "(1, 1, 1, 1)", answer: "A"},
    {questionNo: 30, difficulty: "3. Normal", question: "What is the registry number of the original Gundam?", choiceA: "RX-78-1", choiceB: "RX-78-2", choiceC: "RX-79-1", choiceD: "RX-79-2", answer: "B"},
    {questionNo: 31, difficulty: "4. Hard", question: "What are the attack and defense values of the Blue-Eyes White Dragon?", choiceA: "ATK 2500 / DEF 3000", choiceB: "ATK 3000 / DEF 2500", choiceC: "ATK 3500 / DEF 2000", choiceD: "ATK 2000 / DEF 3500", answer: "B"},
    {questionNo: 32, difficulty: "4. Hard", question: "What order out of the following was when Grover served Mr. Johnson's order right (but then gone wrong later despite the right order)?", choiceA: "The cheeseburger, with cherry pie topped with chocolate ice cream", choiceB: "The sandwich", choiceC: "The bowl of soup", choiceD: "The big burger", answer: "A"},
    {questionNo: 33, difficulty: "4. Hard", question: "What year did Mobile Suit Gundam set in?", choiceA: "U.C. 0078", choiceB: "U.C. 0079", choiceC: "U.C. 0087", choiceD: "U.C. 0088", answer: "A"},
    {questionNo: 34, difficulty: "4. Hard", question: "What are forbidden, limited and semi-limited cards in Yu-Gi-Oh?", choiceA: "Respectively, they represent a number of times you can use these cards in a period.", choiceB: "All these cards cannot be used in either casual or official games.", choiceC: "They cannot be sold or produced for a certain period of time.", choiceD: "Respectively, they cannot be used or they can be used as long as they have one or two cards in a single Deck when it comes to tournaments.", answer: "D"},
    {questionNo: 35, difficulty: "4. Hard", question: "In one episode of TBBT, Sheldon took his friends on a team mission. Where is that mission held?", choiceA: "The Arctic", choiceB: "The Sahara desert", choiceC: "Mount Everest", choiceD: "None of the above", answer: "A"},
    {questionNo: 36, difficulty: "4. Hard", question: "Why did Penny receive the second strike from Sheldon?", choiceA: "Violated e-mail humour rule", choiceB: "Unauthorised touching of Sheldon's onion ring", choiceC: "Sitting in Sheldon's spot", choiceD: "No manners in the table", answer: "B"},
    {questionNo: 37, difficulty: "4. Hard", question: "When Mr. Johnson was waiting at the bakery for his jelly donut, what was his ticket number?", choiceA: "10", choiceB: "20", choiceC: "30", choiceD: "40", answer: "D"},
    {questionNo: 38, difficulty: "4. Hard", question: "How many boxes of cookies did Cookie Monster order in Hooper's Store in Episode 0227 of Sesame Street?", choiceA: "180", choiceB: "190", choiceC: "200", choiceD: "210", answer: "C"},
    {questionNo: 39, difficulty: "4. Hard", question: "What was Mr. Hooper's first name?", choiceA: "Harold", choiceB: "Harry", choiceC: "Henry", choiceD: "Hubert", answer: "A"},
    {questionNo: 40, difficulty: "4. Hard", question: "When did Will Lee, the actor of Mr. Hooper, pass away?", choiceA: "1981", choiceB: "1982", choiceC: "1983", choiceD: "1984", answer: "B"},
    {questionNo: 41, difficulty: "5. Very Hard", question: "Penny from the Big Bang Theory was wearing the same shirt in what episodes?", choiceA: "1st, 10th, 100th and final episode", choiceB: "1st, 50th, 100th and final episode", choiceC: "1st, 100th, and final episode", choiceD: "1st and final episode", answer: "C"},
    {questionNo: 42, difficulty: "5. Very Hard", question: "What was the first sentence in the entire series of ER?", choiceA: "Dr. Benton?", choiceB: "Dr. Greene?", choiceC: "Dr. Carter?", choiceD: "Dr. Lewis?", answer: "B"},
    {questionNo: 43, difficulty: "5. Very Hard", question: "Matt Groening, the author of the Simpsons, relates himself to the Comic Book Guy. Is this true?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 44, difficulty: "5. Very Hard", question: "How exactly is Bart older than Lisa?", choiceA: "2 years, 8 days", choiceB: "2 years, 33 days", choiceC: "2 years, 38 days", choiceD: "2 years, 83 days", answer: "C"},
    {questionNo: 45, difficulty: "5. Very Hard", question: "In one of the episodes of the Powerpuff Girls, Blossom commences a flight plan that resembles a video game company. What video game company is that?", choiceA: "Nintendo", choiceB: "Sega", choiceC: "Sony", choiceD: "Atari", answer: "D"},
    {questionNo: 46, difficulty: "5. Very Hard", question: "Professor Utonium has the same animation and styling as other characters in the Powerpuff Girls series. Is this true?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "B"},
    {questionNo: 47, difficulty: "5. Very Hard", question: "When was the Count from Sesame Street born?", choiceA: "2 million BCE", choiceB: "1.8 million BCE", choiceC: "1.6 million BCE", choiceD: "1.4 million BCE", answer: "B"},
    {questionNo: 48, difficulty: "5. Very Hard", question: "How tall is Big Bird?", choiceA: "8' (= 2.43m)", choiceB: "8'1' (= 2.47m)", choiceC: "8'2' (= 2.49m)", choiceD: "8'3' (= 2.51m)", answer: "C"},
    {questionNo: 49, difficulty: "5. Very Hard", question: "What was the largest number of the day ever announced on Sesame Street?", choiceA: "20", choiceB: "30", choiceC: "40", choiceD: "100", answer: "C"},
    {questionNo: 50, difficulty: "5. Very Hard", question: "The Powerpuff Girls was the last animation produced by Hanna-Barbera Cartoons, closing the studio in 2001 due to William Hanna's death. Is this true?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
    

],

  questions150: [
    
    {questionNo: 1, difficulty: "1. Very Easy", question: "What is the capital prefecture of Japan?", choiceA: "Kyoto", choiceB: "Osaka", choiceC: "Tokyo", choiceD: "Sapporo", answer: "C"},
    {questionNo: 2, difficulty: "1. Very Easy", question: "Which one of these is considered to be a national dish of Japan?", choiceA: "Hamburger", choiceB: "Sushi", choiceC: " Fish and chips", choiceD: "Baguette", answer: "B"},
    {questionNo: 3, difficulty: "1. Very Easy", question: "What is Japan famous for? (apart from stereotypically speaking anime and manga)", choiceA: "Cameras", choiceB: "Electronics", choiceC: "Vehicles", choiceD: "All of the above", answer: "D"},
    {questionNo: 4, difficulty: "1. Very Easy", question: "How is ramen, udon, soba and somen eaten?", choiceA: "Chopsticks only", choiceB: "Spoon only", choiceC: "Both chopsticks and spoon", choiceD: "Both fork and spoon", answer: "C"},
    {questionNo: 5, difficulty: "1. Very Easy", question: "Where is Japan located?", choiceA: "North Asia / Siberia", choiceB: "South Asia / Indian Subcontinent", choiceC: "West Asia", choiceD: "East Asia and the Pacific", answer: "D"},
    {questionNo: 6, difficulty: "1. Very Easy", question: "What is the currency of Japan?", choiceA: "Yen", choiceB: "Yuan", choiceC: "Won", choiceD: "Dong", answer: "A"},
    {questionNo: 7, difficulty: "1. Very Easy", question: "Identify which of these four prefectures are major prefectures in Japan, besides Tokyo.", choiceA: "Osaka", choiceB: "Akita", choiceC: "Kagawa", choiceD: "Sendai", answer: "A"},
    {questionNo: 8, difficulty: "1. Very Easy", question: "What is English for the word sakura?", choiceA: "Cherry blossom", choiceB: "Rose", choiceC: "Daisy", choiceD: "Lily", answer: "A"},
    {questionNo: 9, difficulty: "1. Very Easy", question: "What is the northern-most prefecture of all of Japan?", choiceA: "Kumamoto", choiceB: "Iwate", choiceC: "Okinawa", choiceD: "Hokkaido", answer: "D"},
    {questionNo: 10, difficulty: "1. Very Easy", question: "What is the southern-most prefecture of all of Japan?", choiceA: "Kumamoto", choiceB: "Iwate", choiceC: "Okinawa", choiceD: "Hokkaido", answer: "C"},
    {questionNo: 11, difficulty: "1. Very Easy", question: "What starship series did Kirk and Picard became captain of (excluding sequential models)?", choiceA: "Enterprise", choiceB: "Voyager", choiceC: "Yamato", choiceD: "Mazinger", answer: "A"},
    {questionNo: 12, difficulty: "1. Very Easy", question: "Which series did the Star Trek franchise begin with?", choiceA: "The Next Generation", choiceB: "The Original Series", choiceC: "Deep Space Nine", choiceD: "Voyager", answer: "B"},
    {questionNo: 13, difficulty: "1. Very Easy", question: "Which time passage does Star Trek usually be part of?", choiceA: "Past (BCE)", choiceB: "Past (CE)", choiceC: "Present", choiceD: "Future", answer: "D"},
    {questionNo: 14, difficulty: "1. Very Easy", question: "What organisation is responsible for the protagonists of Star Trek? (examples include Kirk, Picard, Sisko, Janeway, etc.)", choiceA: "Klingon Empire", choiceB: "Romulan Free State", choiceC: "United Federation of Planets", choiceD: "The Borg", answer: "C"},
    {questionNo: 15, difficulty: "1. Very Easy", question: "What is the objective of Starfleet, the exploration organisation of the UFP?", choiceA: "To seek out new lifeforms, cultures and civilisations and to maintain peaceful relations with such", choiceB: "To explore the outer part of our surroundings", choiceC: "To make contact with aliens and assimilate them with us", choiceD: "All of the above", answer: "A"},
    {questionNo: 16, difficulty: "1. Very Easy", question: "What rank is typically the commanding officer of a starship?", choiceA: "Admiral", choiceB: "Captain", choiceC: "Commander", choiceD: "Lieutenant Commander", answer: "B"},
    {questionNo: 17, difficulty: "1. Very Easy", question: "How do Starfleet officers teleport from the starship to another location?", choiceA: "Use a teleporter", choiceB: "Use a comm badge", choiceC: "Use a transporter room in the starship", choiceD: "None of the above", answer: "C"},
    {questionNo: 18, difficulty: "1. Very Easy", question: "What does a Starfleet captain say when he wants a starship to launch?", choiceA: "Blast off!", choiceB: "Engage!", choiceC: "Warp!", choiceD: "Ignition!", answer: "B"},
    {questionNo: 19, difficulty: "1. Very Easy", question: "What is Deep Space 9?", choiceA: "A starship", choiceB: "A space built by the Federation", choiceC: "A space base built by the Bajorans for the Cardassians", choiceD: "A club for Federation members", answer: "C"},
    {questionNo: 20, difficulty: "1. Very Easy", question: "Which one of these entities are considered to be the worst enemy of the Federation", choiceA: "The Romulan Free State", choiceB: "The Dominion", choiceC: "The Borg", choiceD: "None of the above", answer: "C"},
    {questionNo: 21, difficulty: "1. Very Easy", question: "Is the Big Bang Theory (2008-2019) a show about scientists/theorists?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 22, difficulty: "1. Very Easy", question: "If ordinary girls = [sugar + spice + everything nice], and since the Powerpuff Girls = [sugar + spice + everything nice + x], what is x?", choiceA: "N2O (Nitrous oxide)", choiceB: "Rocket fuel", choiceC: "Chemical X", choiceD: "98-octane gasoline", answer: "C"},
    {questionNo: 23, difficulty: "1. Very Easy", question: "Where is anime and manga typically created in?", choiceA: "China", choiceB: "Korea", choiceC: "Japan", choiceD: "Taiwan", answer: "C"},
    {questionNo: 24, difficulty: "1. Very Easy", question: "What was Sheldon's catchphrase, especially when people fall into his classic pranks?", choiceA: "Bazinga!", choiceB: "Psych!", choiceC: "Whoo!", choiceD: "Gotcha!", answer: "A"},
    {questionNo: 25, difficulty: "1. Very Easy", question: "What is the appropriate objective of winning a Yu-Gi-Oh! game?", choiceA: "Get better cards than the opponent.", choiceB: "Run out of cards and calculate the total damage obtain between players.", choiceC: "The game shall be endless until the player forfeits.", choiceD: "Reduce the opponent's LP (Life Points) to zero, or by any other means win.", answer: "D"},
    {questionNo: 26, difficulty: "1. Very Easy", question: "Which one of these TBBT characters do NOT have a Master's degree or higher?", choiceA: "Leonard", choiceB: "Sheldon", choiceC: "Penny", choiceD: "Howard", answer: "C"},
    {questionNo: 27, difficulty: "1. Very Easy", question: "Where is Sheldon's apartment, the main setting of the Big Bang Theory?", choiceA: "Times Square, New York", choiceB: "Pasadena, California", choiceC: "Boston, Texas", choiceD: "San Fransisco, California", answer: "B"},
    {questionNo: 28, difficulty: "1. Very Easy", question: "What is the standard amount of Life Points you may start within a Yu-Gi-Oh! game?", choiceA: "4000", choiceB: "6000", choiceC: "8000", choiceD: "10000", answer: "C"},
    {questionNo: 29, difficulty: "1. Very Easy", question: "Where do the Powerpuff Girls live in?", choiceA: "The city of Battle City!", choiceB: "The city of Springfield!", choiceC: "The city of San Fransokyo!", choiceD: "The city of Townsville!", answer: "D"},
    {questionNo: 30, difficulty: "1. Very Easy", question: "Does Grover work everywhere?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 31, difficulty: "2. Easy", question: "Out of the four, which robot anime in the 70s became the most successful in Japan? (Hint: odd one out!)", choiceA: "Mazinger Z / Great Mazinger", choiceB: "Getter Robot / Getter Robot G", choiceC: "UFO Robot Grendizer", choiceD: "Mobile Suit Gundam", answer: "D"},
    {questionNo: 32, difficulty: "2. Easy", question: "The bullet train is called a shinkansen （新幹線、しんかんせん） in Japanese. Is this true or false?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 33, difficulty: "2. Easy", question: "What vehicle is the most famous about Japanese transportation?", choiceA: "Cars", choiceB: "Trains", choiceC: "Bikes", choiceD: "Planes", answer: "B"},
    {questionNo: 34, difficulty: "2. Easy", question: "Which of these sentences are written in Japanese?", choiceA: "이건 일본어 글자인가요?", choiceB: "これは日本語の文字ですか？", choiceC: "這是日文的字嗎？", choiceD: "这是日语文字吗？", answer: "B"},
    {questionNo: 35, difficulty: "2. Easy", question: "What timezone does Japan utilise?", choiceA: "JST (Japan Standard Timezone)", choiceB: "JST with DST (Japan Standard Timezone with Daylight Savings)", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 36, difficulty: "2. Easy", question: "How do you express Japan Standard Timezone with UTC offsets?", choiceA: "UTC+08:00", choiceB: "UTC+08:30", choiceC: "UTC+09:00", choiceD: "UTC+09:30", answer: "C"},
    {questionNo: 37, difficulty: "2. Easy", question: "Which of these are Japan's inventions", choiceA: "The compact disc (CD)", choiceB: "The Walkman", choiceC: "Karaoke", choiceD: "All of the above", answer: "D"},
    {questionNo: 38, difficulty: "2. Easy", question: "What kind of natural disasters do the Japanese always prepare for?", choiceA: "Earthquakes", choiceB: "Tsunamis", choiceC: "Heavy rain", choiceD: "All of the above", answer: "D"},
    {questionNo: 39, difficulty: "2. Easy", question: "What was the worst earthquake (based on highest magnitude and damage) that occurred in the 21st century in Japan?", choiceA: "2011 Great East Japan Earthquake", choiceB: "2016 Tohoku Earthquake", choiceC: "2024 Noto Peninsula Earthquake", choiceD: "2026 Kumamoto Earthquake", answer: "A"},
    {questionNo: 40, difficulty: "2. Easy", question: "What kind of land is Japan?", choiceA: "An archipelago", choiceB: "An island", choiceC: "A landlocked country", choiceD: "All of the above", answer: "A"},
    {questionNo: 41, difficulty: "2. Easy", question: "What is the registry number of the USS Enterprise? (regardless of the model or generation)", choiceA: "NCC-1700", choiceB: "NCC-1701", choiceC: "NCC-7101", choiceD: "NCC-7701", answer: "B"},
    {questionNo: 42, difficulty: "2. Easy", question: "What century did the Next Generation take place in?", choiceA: "22nd century", choiceB: "23rd century", choiceC: "24th century", choiceD: "32nd century", answer: "C"},
    {questionNo: 43, difficulty: "2. Easy", question: "Who was the captain of the USS Voyager?", choiceA: "Captain Jean-Luc Picard", choiceB: "Captain James T. Kirk", choiceC: "Captain Benjamin Sisko", choiceD: "Captain Kathryn Janeway", answer: "D"},
    {questionNo: 44, difficulty: "2. Easy", question: "Did the Klingon Empire make peace with the Federation in TNG?", choiceA: "Yes, via a peace/alliance treaty.", choiceB: "Yes, via a simple ceasefire.", choiceC: "No, but there is a ceasefire", choiceD: "No.", answer: "A"},
    {questionNo: 45, difficulty: "2. Easy", question: "What was the stardate of the 1st season of TNG? Express with the first two digits.", choiceA: "40xxx", choiceB: "41xxx", choiceC: "42xxx", choiceD: "43xxx", answer: "B"},
    {questionNo: 46, difficulty: "2. Easy", question: "Is Lieutenant Commander Data an android or not?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 47, difficulty: "2. Easy", question: "What is a tricorder?", choiceA: "A multi-function tool that allows personnel to identify the atmosphere of a certain planet after beaming down from a starship.", choiceB: "A multi-function tool that allows personnel to collect data via sensors, analyse and process them through a computer system, and present it in audible or visual cues.", choiceC: "A multi-function tool that allows personnel only to identify the current time and stardate.", choiceD: "None of the above.", answer: "B"},
    {questionNo: 48, difficulty: "2. Easy", question: "What are the coordinates of Planet Earth according to the Federation?", choiceA: "Section 000", choiceB: "Section 001", choiceC: "Section 002", choiceD: "Section 003", answer: "B"},
    {questionNo: 49, difficulty: "2. Easy", question: "How did the United Federation of Planets found?", choiceA: "Humans and Romulans cooperated with each other in diplomacy, cooperation, exploration, peace and other beneficial aspects.", choiceB: "Klingons waged war against humans on Planet Earth.", choiceC: "Humans have continuously evolved based on space travel and exploration.", choiceD: "Humans and Vulcans cooperated with each other in diplomacy, cooperation, exploration, peace and other beneficial aspects.", answer: "D"},
    {questionNo: 50, difficulty: "2. Easy", question: "Is Commander Troi an empath, as in able to detect feelings and thoughts of others around her?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 51, difficulty: "2. Easy", question: "What purpose does Chemical X have in the Powerpuff Girls series?", choiceA: "It can be used as a GPU coolant or thermal paste", choiceB: "A proposal on creating element no. 119 in the Periodic Table", choiceC: "It can be used as 98-octane gasoline or premium diesel", choiceD: "It can have a person wield superhuman abilities", answer: "D"},
    {questionNo: 52, difficulty: "2. Easy", question: "Who was John Carter's teacher in the early episodes of ER?", choiceA: "Dr. Peter Benton", choiceB: "Dr. Mark Greene", choiceC: "Dr. Doug Ross", choiceD: "Dr. Carol Hathaway", answer: "A"},
    {questionNo: 53, difficulty: "2. Easy", question: "What is the name of the hospital in ER?", choiceA: "Federal General Hospital", choiceB: "State General Hospital", choiceC: "County General Hospital", choiceD: "City General Hospital", answer: "C"},
    {questionNo: 54, difficulty: "2. Easy", question: "What is Homer's most famous catchphrase?", choiceA: "D'oh!", choiceB: "Mmm, donuts...", choiceC: "64 slices of American cheese...", choiceD: "(shriek!)", answer: "A"},
    {questionNo: 55, difficulty: "2. Easy", question: "What happens if a player has all the five cards of Exodia in his/her hand?", choiceA: "The player takes half of the remaining Life Points of his/her opponent.", choiceB: "The player can Special Summon any card of his/her choice.", choiceC: "The player instantly loses the duel.", choiceD: "The player instantly wins the duel.", answer: "D"},
    {questionNo: 56, difficulty: "2. Easy", question: "Which timeline is the main universe of the Gundam series?", choiceA: "Future Century", choiceB: "Cosmic Era", choiceC: "Universe Century", choiceD: "After Colony", answer: "C"},
    {questionNo: 57, difficulty: "2. Easy", question: "Grover Monster has so many jobs, but which one of them seems the most popular amongst them all?", choiceA: "Plumber", choiceB: "Salesman", choiceC: "Musician", choiceD: "Waiter", answer: "D"},
    {questionNo: 58, difficulty: "2. Easy", question: "Who was the pilot of the original Gundam robot?", choiceA: "Amuro Ray", choiceB: "Bright Noa", choiceC: "Sayla Mass", choiceD: "Lalah Sune", answer: "A"},
    {questionNo: 59, difficulty: "2. Easy", question: "Is the Simpsons the longest running primetime animation show?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 60, difficulty: "2. Easy", question: "What do you need to make Ernie's ice cream soda?", choiceA: "Soda water + strawberry syrup + vanilla ice cream + whipped cream", choiceB: "Soda water + vanilla milkshake + strawberry syrup + whipped cream", choiceC: "Soda water + chocolate milkshake + strawberry syrup + whipped cream", choiceD: "Soda water + strawberry syrup + chocolate ice cream + whipped cream", answer: "A"},
    {questionNo: 61, difficulty: "3. Normal", question: "Who is the Prime Minister of Japan (incumbent in 2026)?", choiceA: "Shinzō Abe", choiceB: "Yoshihide Suga", choiceC: "Shigeru Ishiba", choiceD: "Sanae Takaichi", answer: "D"},
    {questionNo: 62, difficulty: "3. Normal", question: "What is the telephone calling code of Japan?", choiceA: "80", choiceB: "81", choiceC: "82", choiceD: "83", answer: "B"},
    {questionNo: 63, difficulty: "3. Normal", question: "If you enter a house in Japan to visit a friend, should you take off your shoes at the doorstep?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 64, difficulty: "3. Normal", question: "When did Japan become a country?", choiceA: "700 BCE", choiceB: "660 BCE", choiceC: "650 BCE", choiceD: "600 BCE", answer: "B"},
    {questionNo: 65, difficulty: "3. Normal", question: "What kind of writing system does Japanese use?", choiceA: "Alphabet", choiceB: "Logographic", choiceC: "Alphabet and logographic", choiceD: "Symbolic", answer: "C"},
    {questionNo: 66, difficulty: "3. Normal", question: "How many prefectures does Japan consist of?", choiceA: "40", choiceB: "44", choiceC: "47", choiceD: "50", answer: "C"},
    {questionNo: 67, difficulty: "3. Normal", question: "Which kind of noodles are thick, chewy and soft to eat?", choiceA: "Ramen", choiceB: "Somen", choiceC: "Soba", choiceD: "Udon", answer: "D"},
    {questionNo: 68, difficulty: "3. Normal", question: "Which of these fictional characters are trending in Japan?", choiceA: "Doraemon", choiceB: "Sazae-san", choiceC: "Crayon Shin-chan", choiceD: "All of the above", answer: "D"},
    {questionNo: 69, difficulty: "3. Normal", question: "What is the current era in Japan (as of the year 2026)?", choiceA: "Meiji Era", choiceB: "Showa Era", choiceC: "Reiwa Era", choiceD: "Heisei Era", answer: "C"},
    {questionNo: 70, difficulty: "3. Normal", question: "How do you convert 2026 to the current Japanese year (using the current era)?", choiceA: "Reiwa 7", choiceB: "Reiwa 8", choiceC: "Heisei 37", choiceD: "Heisei 38", answer: "B"},
    {questionNo: 71, difficulty: "3. Normal", question: "What does Jean-Luc Picard say every time he acknowledges and agrees with a suggestion or action from any of his crew members?", choiceA: "Copy that.", choiceB: "On it.", choiceC: "Make it so.", choiceD: "Good.", answer: "C"},
    {questionNo: 72, difficulty: "3. Normal", question: "How long does it take for the Voyager to travel back to Federation space from the Delta Quadrant", choiceA: "25 years", choiceB: "50 years", choiceC: "75 years", choiceD: "100 years", answer: "C"},
    {questionNo: 73, difficulty: "3. Normal", question: "What is the starship class of the original Enterprise?", choiceA: "Constitution", choiceB: "Galaxy", choiceC: "Intrepid", choiceD: "Constitution Ⅲ", answer: "A"},
    {questionNo: 74, difficulty: "3. Normal", question: "What is the starship class of the Enterprise-D?", choiceA: "Constitution", choiceB: "Galaxy", choiceC: "Intrepid", choiceD: "Constitution Ⅲ", answer: "B"},
    {questionNo: 75, difficulty: "3. Normal", question: "Which deck in a Galaxy Class starship is where the main bridge and the captain's ready room situated in?", choiceA: "1", choiceB: "2", choiceC: "3", choiceD: "4", answer: "A"},
    {questionNo: 76, difficulty: "3. Normal", question: "What measurement system does the Federation and Starfleet use?", choiceA: "Imperial units", choiceB: "English units", choiceC: "Metric units", choiceD: "Self-regulated custom units", answer: "C"},
    {questionNo: 77, difficulty: "3. Normal", question: "What time format does the Federation and Starfleet usually use?", choiceA: "24-hour time format (00-24)", choiceB: "12-hour time format (12AM-11PM)", choiceC: "Bajoran time format (00-26)", choiceD: "All of the above", answer: "A"},
    {questionNo: 78, difficulty: "3. Normal", question: "Did Picard ever once got forced to assimilate with the Borg?", choiceA: "Yes, and he remained part of the Borg for all time", choiceB: "Yes, but the Enterprise-D crew dismantled the Borg systems from Picard and liberated him from the collective", choiceC: "Yes, but nothing happened regarding Picard's physical or mental attributes", choiceD: "No", answer: "B"},
    {questionNo: 79, difficulty: "3. Normal", question: "Did Troi become promoted to Commander within the TNG series?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 80, difficulty: "3. Normal", question: "Did Data finally have emotions, despite not having an emotional chip?", choiceA: "Yes", choiceB: "No", choiceC: "Rarely and not easily", choiceD: "", answer: "C"},
    {questionNo: 81, difficulty: "3. Normal", question: "When did the Powerpuff Girls air? (regardless of location)", choiceA: "1998-2003", choiceB: "1998-2004", choiceC: "1999-2005", choiceD: "1999-2006", answer: "B"},
    {questionNo: 82, difficulty: "3. Normal", question: "Which season did Sheldon and Amy Cooper obtain the Nobel Prize?", choiceA: "First half of Season 11", choiceB: "Second half of Season 11", choiceC: "First half of Season 12", choiceD: "Second half of Season 12", answer: "D"},
    {questionNo: 83, difficulty: "3. Normal", question: "How old was Sheldon when he moved to high school?", choiceA: "7", choiceB: "8", choiceC: "9", choiceD: "10", answer: "C"},
    {questionNo: 84, difficulty: "3. Normal", question: "What did Principal Skinner offer Superintendent Chalmers in The Simpsons: S7.E21: 22 Short Films About Springfield?", choiceA: "Steamed clams", choiceB: "Steamed yams", choiceC: "Steamed jams", choiceD: "Steamed hams", answer: "D"},
    {questionNo: 85, difficulty: "3. Normal", question: "As of October 2026, how many seasons does Sesame Street have?", choiceA: "55", choiceB: "56", choiceC: "57", choiceD: "58", answer: "B"},
    {questionNo: 86, difficulty: "3. Normal", question: "In Seseame Street, who is implied as Elmo's worst enemy?", choiceA: "Zoe", choiceB: "Oscar", choiceC: "Rocco", choiceD: "None of the above", answer: "C"},
    {questionNo: 87, difficulty: "3. Normal", question: "How did Principal Skinner plan to make steamed hams (that's what he calls hamburgers) for Superintendent Chalmers, and why?", choiceA: "He thought Chalmers would find the dinner completely unacceptable for cooking to take this long which resulted him in purcahsing a burger to speed up the time of preparing a meal.", choiceB: "He thought Chalmers was into burgers rather than roast.", choiceC: "He purchased burgers from Krusty Burger and disguised it as his own personal cooking which is a way for Skinner to accompany with homemade food like roast.", choiceD: "He purchased burgers from Krusty Burger and disguised it as his own personal cooking in result of burning his roast.", answer: "D"},
    {questionNo: 88, difficulty: "3. Normal", question: "Identify the three correct adjectives for each character.", choiceA: "Blossom: cute, Bubbles: tough, Buttercup: smart.", choiceB: "Blossom: cute, Bubbles: smart, Buttercup: tough.", choiceC: "Blossom: smart, Bubbles: tough, Buttercup: cute.", choiceD: "Blossom: smart, Bubbles: cute, Buttercup: tough.", answer: "D"},
    {questionNo: 89, difficulty: "3. Normal", question: "What would be the Cartesian mapping coordinates of Sheldon's spot when he sits on it?", choiceA: "(0, 0, 0, 0)", choiceB: "(1, 0, 1, 0)", choiceC: "(0, 0, 0)", choiceD: "(1, 1, 1, 1)", answer: "A"},
    {questionNo: 90, difficulty: "3. Normal", question: "What is the registry number of the original Gundam?", choiceA: "RX-78-1", choiceB: "RX-78-2", choiceC: "RX-79-1", choiceD: "RX-79-2", answer: "B"},
    {questionNo: 91, difficulty: "4. Hard", question: "What is the postal code of Chiyoda Ward, Tokyo Prefecture?", choiceA: "100-0000", choiceB: "110-0000", choiceC: "120-0000", choiceD: "130-0000", answer: "A"},
    {questionNo: 92, difficulty: "4. Hard", question: "What party is part of the Japanese Government and has been in control for most of Japan's post-war history?", choiceA: "Constitutional Democratic Party / Centrist Reform Alliance", choiceB: "Japan Innovation Party", choiceC: "Liberal Democratic Party", choiceD: "Japanese Communist Party", answer: "C"},
    {questionNo: 93, difficulty: "4. Hard", question: "When did Japan start facing a population decline?", choiceA: "2007", choiceB: "2009", choiceC: "2011", choiceD: "2013", answer: "B"},
    {questionNo: 94, difficulty: "4. Hard", question: "Which electronics store is the largest (in surface area) in Akihabara, Tokyo?", choiceA: "Yodobashi Camera", choiceB: "Bic Camera", choiceC: "Edion", choiceD: "Yamada Denki", answer: "A"},
    {questionNo: 95, difficulty: "4. Hard", question: "Which electronics store is the largest (in assets and business size) in Akihabara, Tokyo?", choiceA: "Yodobashi Camera", choiceB: "Bic Camera", choiceC: "Edion", choiceD: "Yamada Denki", answer: "D"},
    {questionNo: 96, difficulty: "4. Hard", question: "What prefecture number is Osaka?", choiceA: "25", choiceB: "26", choiceC: "27", choiceD: "28", answer: "C"},
    {questionNo: 97, difficulty: "4. Hard", question: "What prefecture number is Kyoto?", choiceA: "25", choiceB: "26", choiceC: "27", choiceD: "28", answer: "B"},
    {questionNo: 98, difficulty: "4. Hard", question: "What is the population of Japan by 2024 (not rounded)?", choiceA: "121 million", choiceB: "123 million", choiceC: "125 million", choiceD: "127 million", answer: "B"},
    {questionNo: 99, difficulty: "4. Hard", question: "What is the primary stock index of Japan?", choiceA: "TOPIX", choiceB: "Yomiuri 333", choiceC: "Nikkei 225", choiceD: "Dow Jones Index", answer: "C"},
    {questionNo: 100, difficulty: "4. Hard", question: "What is the largest bank in Japan in terms of market capacity?", choiceA: "Sumitomo Mitsui", choiceB: "Mizuho", choiceC: "Japan Post Bank", choiceD: "Mitsubishi UFG", answer: "D"},
    {questionNo: 101, difficulty: "4. Hard", question: "Using the TNG formula, what is the stardate for the year 2370?", choiceA: "46000.0", choiceB: "47000.0", choiceC: "48000.0", choiceD: "49000.0", answer: "B"},
    {questionNo: 102, difficulty: "4. Hard", question: "Has Commander Riker been part of any other faction temporarily than the Federation?", choiceA: "Yes, the Klingons", choiceB: "Yes, the Romulans", choiceC: "Yes, the Cardassians", choiceD: "No", answer: "A"},
    {questionNo: 103, difficulty: "4. Hard", question: "What was Captain Janeway's first and final line in Voyager?", choiceA: "Coffee.", choiceB: "Set a course for home.", choiceC: "Engage.", choiceD: "None of the above.", answer: "B"},
    {questionNo: 104, difficulty: "4. Hard", question: "The U.S.S. Voyager's warp core is a different one from what was used for the warp core of the refitted U.S.S. Enterprise in the previous Star Trek movies. Is this true or false?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "B"},
    {questionNo: 105, difficulty: "4. Hard", question: "Who are the only two characters in TNG who appear in all episodes?", choiceA: "Picard and Troi", choiceB: "Picard and Beverly Crusher", choiceC: "Picard and Riker", choiceD: "Picard and La Forge", answer: "C"},
    {questionNo: 106, difficulty: "4. Hard", question: "What was the stardate of the first aired Star Trek episode?", choiceA: "1213.4", choiceB: "1223.4", choiceC: "1312.4", choiceD: "1322.4", answer: "C"},
    {questionNo: 107, difficulty: "4. Hard", question: "What is Picard's favourite drink?", choiceA: "Prune juice", choiceB: "Darjeeling tea", choiceC: "Hot chocolate", choiceD: "Earl Grey tea", answer: "D"},
    {questionNo: 108, difficulty: "4. Hard", question: "What is Janeway's favourite drink?", choiceA: "Coffee", choiceB: "Synthethol", choiceC: "Raktajino (Klingon coffee)", choiceD: "Earl Grey tea", answer: "A"},
    {questionNo: 109, difficulty: "4. Hard", question: "What is Troi's favourite drink?", choiceA: "Prune juice", choiceB: "Darjeeling tea", choiceC: "Hot chocolate", choiceD: "Earl Grey tea", answer: "C"},
    {questionNo: 110, difficulty: "4. Hard", question: "What kind of brain does Data have?", choiceA: "Human brain", choiceB: "Positronic brain", choiceC: "A brain powered by an AI agent", choiceD: "A remote control", answer: "B"},
    {questionNo: 111, difficulty: "4. Hard", question: "What are the attack and defense values of the Blue-Eyes White Dragon?", choiceA: "ATK 2500 / DEF 3000", choiceB: "ATK 3000 / DEF 2500", choiceC: "ATK 3500 / DEF 2000", choiceD: "ATK 2000 / DEF 3500", answer: "B"},
    {questionNo: 112, difficulty: "4. Hard", question: "What order out of the following was when Grover served Mr. Johnson's order right (but then gone wrong later despite the right order)?", choiceA: "The cheeseburger, with cherry pie topped with chocolate ice cream", choiceB: "The sandwich", choiceC: "The bowl of soup", choiceD: "The big burger", answer: "A"},
    {questionNo: 113, difficulty: "4. Hard", question: "What year did Mobile Suit Gundam set in?", choiceA: "U.C. 0078", choiceB: "U.C. 0079", choiceC: "U.C. 0087", choiceD: "U.C. 0088", answer: "A"},
    {questionNo: 114, difficulty: "4. Hard", question: "What are forbidden, limited and semi-limited cards in Yu-Gi-Oh?", choiceA: "Respectively, they represent a number of times you can use these cards in a period.", choiceB: "All these cards cannot be used in either casual or official games.", choiceC: "They cannot be sold or produced for a certain period of time.", choiceD: "Respectively, they cannot be used or they can be used as long as they have one or two cards in a single Deck when it comes to tournaments.", answer: "D"},
    {questionNo: 115, difficulty: "4. Hard", question: "In one episode of TBBT, Sheldon took his friends on a team mission. Where is that mission held?", choiceA: "The Arctic", choiceB: "The Sahara desert", choiceC: "Mount Everest", choiceD: "None of the above", answer: "A"},
    {questionNo: 116, difficulty: "4. Hard", question: "Why did Penny receive the second strike from Sheldon?", choiceA: "Violated e-mail humour rule", choiceB: "Unauthorised touching of Sheldon's onion ring", choiceC: "Sitting in Sheldon's spot", choiceD: "No manners in the table", answer: "B"},
    {questionNo: 117, difficulty: "4. Hard", question: "When Mr. Johnson was waiting at the bakery for his jelly donut, what was his ticket number?", choiceA: "10", choiceB: "20", choiceC: "30", choiceD: "40", answer: "D"},
    {questionNo: 118, difficulty: "4. Hard", question: "How many boxes of cookies did Cookie Monster order in Hooper's Store in Episode 0227 of Sesame Street?", choiceA: "180", choiceB: "190", choiceC: "200", choiceD: "210", answer: "C"},
    {questionNo: 119, difficulty: "4. Hard", question: "What was Mr. Hooper's first name?", choiceA: "Harold", choiceB: "Harry", choiceC: "Henry", choiceD: "Hubert", answer: "A"},
    {questionNo: 120, difficulty: "4. Hard", question: "When did Will Lee, the actor of Mr. Hooper, pass away?", choiceA: "1981", choiceB: "1982", choiceC: "1983", choiceD: "1984", answer: "B"},
    {questionNo: 121, difficulty: "5. Very Hard", question: "What are the coordinates of Tokyo?", choiceA: "34°N, 138°E", choiceB: "34°N, 139°E", choiceC: "35°N, 138°E", choiceD: "35°N, 139°E", answer: "D"},
    {questionNo: 122, difficulty: "5. Very Hard", question: "What is the altitude of Mt. Fuji?", choiceA: "3770m", choiceB: "3773m", choiceC: "3776m", choiceD: "3779m", answer: "C"},
    {questionNo: 123, difficulty: "5. Very Hard", question: "Estimate the GDP of Japan in current prices as of 2023.", choiceA: "570 trillion yen", choiceB: "580 trillion yen", choiceC: "590 trillion yen", choiceD: "600 trillion yen", answer: "C"},
    {questionNo: 124, difficulty: "5. Very Hard", question: "What were the dates of the bombing of Hiroshima and Nagasaki?", choiceA: "1945-06-06, 1945-06-09", choiceB: "1945-08-06, 1945-08-09", choiceC: "1946-06-06, 1946-06-09", choiceD: "1946-08-06, 1946-08-09", answer: "B"},
    {questionNo: 125, difficulty: "5. Very Hard", question: "Who was the founder of Sony Group Corporation, one of Japan's leaders in electronics?", choiceA: "Shigeru Miyamoto", choiceB: "Akio Morita and Masaru Ibuka", choiceC: "Ken Kutaragi", choiceD: "None of the above", answer: "B"},
    {questionNo: 126, difficulty: "5. Very Hard", question: "What are the exact starting and ending years of the Meiji Era?", choiceA: "1867-1911", choiceB: "1868-1911", choiceC: "1867-1912", choiceD: "1868-1912", answer: "D"},
    {questionNo: 127, difficulty: "5. Very Hard", question: "What is the computer encoding system that most people in Japan uses, besides Unicode/UTF-8?", choiceA: "EUC-JP", choiceB: "Shift-JIS", choiceC: "Older JIS X", choiceD: "UTF-16", answer: "B"},
    {questionNo: 128, difficulty: "5. Very Hard", question: "After the Empire of Japan's defeat in WWⅡ, Japan ractified a pacifist constitution, changing their stance towards the world completely. What is their official form of government now?", choiceA: "Kingdom under a democratic parliament", choiceB: "Pacifist empire under a multi-party constitutional monarchy", choiceC: "Multi-party constitutional monarchy", choiceD: "Democratic, imperial federation of prefectures under a constitutional monarchy", answer: "C"},
    {questionNo: 129, difficulty: "5. Very Hard", question: "According to the Hofstede Dimensions, is Japan a hardworking and intelligence-based or an emotional and psychological-based country (", choiceA: "Hard-working/intelligence", choiceB: "Emotional-psychological", choiceC: "Both", choiceD: "None", answer: "A"},
    {questionNo: 130, difficulty: "5. Very Hard", question: "According to the Hofstede Dimensions, do the Japanese have the time to have fun and indulge themselves?", choiceA: "Yes", choiceB: "No", choiceC: "", choiceD: "", answer: "B"},
    {questionNo: 131, difficulty: "5. Very Hard", question: "What are the binary digits to the title of the 14th episode of TNG?", choiceA: "01010110", choiceB: "10010110", choiceC: "10101001", choiceD: "11001001", answer: "D"},
    {questionNo: 132, difficulty: "5. Very Hard", question: "How many passengers can a Galaxy-class starship like the Enterprise-D can hold?", choiceA: "1013 passengers", choiceB: "1013 passengers, plus an additional 5000 for evacuational purposes", choiceC: "1013 passengers, plus an additional 10000 for evacuational purposes", choiceD: "1013 passengers, plus an additional 15000 for evacuational purposes", answer: "D"},
    {questionNo: 133, difficulty: "5. Very Hard", question: "In terms of surface area (light years), which faction possesses the most territory?", choiceA: "The Dominion", choiceB: "The Borg", choiceC: "The Federation", choiceD: "The Klingon Empire", answer: "B"},
    {questionNo: 134, difficulty: "5. Very Hard", question: "In terms of surface area (light years), which faction possesses the second most territory?", choiceA: "The Dominion", choiceB: "The Borg", choiceC: "The Federation", choiceD: "The Klingon Empire", answer: "A"},
    {questionNo: 135, difficulty: "5. Very Hard", question: "What stardate where Captain Picard Day was celebrated?", choiceA: "47057.1", choiceB: "47257.1", choiceC: "47457.1", choiceD: "47657.1", answer: "C"},
    {questionNo: 136, difficulty: "5. Very Hard", question: "What standard date (month-day) where Captain Picard Day was celebrated", choiceA: "06-15", choiceB: "06-16", choiceC: "06-17", choiceD: "06-18", answer: "B"},
    {questionNo: 137, difficulty: "5. Very Hard", question: "How many crew members are present in Deep Space 9?", choiceA: "300", choiceB: "500", choiceC: "700", choiceD: "1000", answer: "B"},
    {questionNo: 138, difficulty: "5. Very Hard", question: "How many crew members are present in the Voyager?", choiceA: "111", choiceB: "121", choiceC: "131", choiceD: "141", answer: "D"},
    {questionNo: 139, difficulty: "5. Very Hard", question: "What class is the Voyager?", choiceA: "Constitution", choiceB: "Galaxy", choiceC: "Intrepid", choiceD: "Constitution Ⅲ", answer: "C"},
    {questionNo: 140, difficulty: "5. Very Hard", question: "What is the registry number of the Voyager?", choiceA: "NCC-74556", choiceB: "NCC-74566", choiceC: "NCC-74655", choiceD: "NCC-74656", answer: "D"},
    {questionNo: 141, difficulty: "5. Very Hard", question: "Penny from the Big Bang Theory was wearing the same shirt in what episodes?", choiceA: "1st, 10th, 100th and final episode", choiceB: "1st, 50th, 100th and final episode", choiceC: "1st, 100th, and final episode", choiceD: "1st and final episode", answer: "C"},
    {questionNo: 142, difficulty: "5. Very Hard", question: "What was the first sentence in the entire series of ER?", choiceA: "Dr. Benton?", choiceB: "Dr. Greene?", choiceC: "Dr. Carter?", choiceD: "Dr. Lewis?", answer: "B"},
    {questionNo: 143, difficulty: "5. Very Hard", question: "Matt Groening, the author of the Simpsons, relates himself to the Comic Book Guy. Is this true?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
    {questionNo: 144, difficulty: "5. Very Hard", question: "How exactly is Bart older than Lisa?", choiceA: "2 years, 8 days", choiceB: "2 years, 33 days", choiceC: "2 years, 38 days", choiceD: "2 years, 83 days", answer: "C"},
    {questionNo: 145, difficulty: "5. Very Hard", question: "In one of the episodes of the Powerpuff Girls, Blossom commences a flight plan that resembles a video game company. What video game company is that?", choiceA: "Nintendo", choiceB: "Sega", choiceC: "Sony", choiceD: "Atari", answer: "D"},
    {questionNo: 146, difficulty: "5. Very Hard", question: "Professor Utonium has the same animation and styling as other characters in the Powerpuff Girls series. Is this true?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "B"},
    {questionNo: 147, difficulty: "5. Very Hard", question: "When was the Count from Sesame Street born?", choiceA: "2 million BCE", choiceB: "1.8 million BCE", choiceC: "1.6 million BCE", choiceD: "1.4 million BCE", answer: "B"},
    {questionNo: 148, difficulty: "5. Very Hard", question: "How tall is Big Bird?", choiceA: "8' (= 2.43m)", choiceB: "8'1' (= 2.47m)", choiceC: "8'2' (= 2.49m)", choiceD: "8'3' (= 2.51m)", answer: "C"},
    {questionNo: 149, difficulty: "5. Very Hard", question: "What was the largest number of the day ever announced on Sesame Street?", choiceA: "20", choiceB: "30", choiceC: "40", choiceD: "100", answer: "C"},
    {questionNo: 150, difficulty: "5. Very Hard", question: "The Powerpuff Girls was the last animation produced by Hanna-Barbera Cartoons, closing the studio in 2001 due to William Hanna's death. Is this true?", choiceA: "True", choiceB: "False", choiceC: "", choiceD: "", answer: "A"},
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


function conditionCheck(){
if (grade === "S++" || "S+" || "S" || "A+" || "A" || "B+" || "B" || "C+" || "C") {condition = "Pass - Congratulations! You have passed the quiz!"}
    else if (grade === "D") {condition = "Margin - You have marginally passed the quiz."}
    else if (grade === "E" || "F" || "G") {condition = "Fail - You have failed the quiz. Better luck next time."}
    else {let condition = "Pending"}
}

    var correctAudio = new Audio("correct.mp3");
    var wrongAudio = new Audio("incorrect.mp3")
function checkAnswer(event) {
  console.log(event.target)

  if(event.target.textContent === questions[chosenQuiz][currentQuestion].answer){
    correctCount++;
    correctAudio.play();
    message1 = "Correct! The answer was " + questions[chosenQuiz][currentQuestion].answer + "!"

    combo ++;
    score += 500 * (1 + ((0.05 * combo) - 0.05));
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

scoreDisplay.textContent = score.toFixed(0)
correctDisplay.textContent = correctCount
wrongDisplay.textContent = wrongCount
comboDisplay.textContent = combo
percentDisplay.textContent = percent.toFixed(1)

  const stats = [score, correctCount, wrongCount, percent, combo, time, grade, rating, title]
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
 rating = ((correctCount / questions[chosenQuiz].length) * 800) + ((((((60000 - elapsedTime / questions[chosenQuiz].length) / 60000) * 800) || 0) * (correctCount / questions[chosenQuiz].length)))
 if (rating >= 1440 && (correctCount / questions[chosenQuiz].length == 1) && elapsedTime <= questions[chosenQuiz].length * 12000){title = "[SUPER Special+] Distinguished"} 
    else if (rating >= 1360 && (correctCount / questions[chosenQuiz].length == 1) && elapsedTime <= questions[chosenQuiz].length * 18000){title = "[Special+] Ultimate Master"}  
    else if (rating >= 1280 && (correctCount / questions[chosenQuiz].length == 1) && elapsedTime <= questions[chosenQuiz].length * 24000){title = "[Special] Grand Master"}
    else if (rating >= 1200) {title = "[1st] Master"}
    else if (rating >= 1080) {title = "[2nd] Superior"}
    else if (rating >= 960) {title = "[3rd] Professional"}
    else if (rating >= 840) {title = "[4th] Expert"}
    else if (rating >= 720) {title = "[5th] Upper Intermediate"}
    else if (rating >= 600) {title = "[6th] Intermediate"}
    else if (rating >= 480) {title = "[7th] Pre-Intermediate"}
    else if (rating >= 360) {title = "[8th] Elementary"}
    else if (rating >= 240) {title = "[9th] Starter"}
    else if (rating >= 120) {title = "[10th] Novice"}
    else {title = "[11th] Beginner"};
}

function checkEnd(){
if (questions[chosenQuiz].length  == currentQuestion)  {
  console.log('QUIZ OVER');
    message2 = "Quiz finished!";
    alert("You have finished the quiz!");
    gradeEvaluation()
    gradeDisplay.textContent = grade
    titleEvaluation()
    ratingDisplay.textContent = rating.toFixed(2)
    titleDisplay.textContent = title
    conditionDisplay.textContent = condition
    buttonA.disabled = true
    buttonB.disabled = true
    buttonC.disabled = true
    buttonD.disabled = true
    buttonPass.disabled = true
    conditionCheck()
stopTimer()
} else
  {
  
  }
    showQuestions()

}



const stats = [score, correctCount, wrongCount, percent, combo, time, grade, rating, title]
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