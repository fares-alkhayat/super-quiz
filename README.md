# Alkhayat Super Quiz

## Alternative Names

Japanese: もっと知りたい！アルカヤットのスーパークイズ

## Specifications

Technologies used: HTML5, CSS3 and JavaScript

Platform: Web-based

Genre: Quiz, Trivia

Player(s): 1

Version: 1.0.0-alpha

Release date: Wednesday 2026-10-20

## Description

Welcome to the show! In this amazing game, you will be met with a variety of topics where you can learn more about Fares' interests just by answering them!

## How to Play

### 1. Topics

You may choose any of the following topics:

1. Japan - Learn more about the wonderful world of the beloved country of Japan.
2. Science Fiction (Star Trek and Gundam) - What do you know about the world of sci-fi franchises such as Star Trek and Mobile Suit Gundam? Test yourself here!
3. Entertainment and Pop Culture - Test your youth by knowing more about pop culture. (NOTE: Only selected movies, shows and other pop culture are selected for the quiz and does not apply general knowledge of pop culture.)
4. Super Marathon 150 - Answer all 150 questions from the all topics (except for Science and Technology, whereas not available yet)

Each topic has 50 questions, and for each correct answer, you earn a point!

Please note that the questions get harder as you progress. So do your best to take on the challenge!

Furthermore, your score will be evaluated in the end, in which you will earn a rank and a title based on what quiz you have taken. You can print the screen of the webpage as a method to save your result.

### 2. Name Entry

To make sure that your name shall appear when you save/print your result, you will need to enter your name. Do not worry about privacy, for your name will not be stored in any server or platform. Your name is stored locally only throughout the duration of the session where the tab for the quiz is active.

As soon as you type your name in the box, press "Apply" to let the site know and acknowledge your name. After that, you may begin the quiz by pressing the "Begin!" button.

### 3. Controls

Since this is a quiz game, you have one form of controls: you have four buttons that indicate the letters of each choice when answering a question: "A", "B", "C" and "D". You shall answer questions by selecting a correct answer simply by pressing the letter that corresponds to the choice you want to make.

You also have a "Pass" button, which in case if you do not know the answer, you may choose to pass the question. NOTE: The pass button is the same as getting an answer wrong, so your combo shall be reset anyways.

### 4. On-Screen Information

Below the question and controls: you have two areas of information. Those are

1. Quiz Information

    a. Player Name: The name given by the player.

    b. Quiz Start: The date and time where the quiz has started.

    c. Quiz End: The date and time where the quiz has ended.

    d. Quiz ID: A unique hexadecimal number provided to the quiz the player is taking. It uses UUIDv7, and is used for debugging and/or reference purposes only.

2. Player Information

    a. Score: The number of points the player has obtained.

    b. Correct: The number of correct answers (out of total) the player has given.

    c. Wrong: The number of wrong answers the player has given

    d. Accuracy: The percentage of correct answers the player has given.

    e. Combo: The number of correct answers given in a row.

    f. Time: The total elapsed time (written in seconds) the player has spent in the quiz.

    g. Grade: The letter grade the player has progressively awarded.

    h. Rating: An overall rating given to the player based on the performance in the quiz based on time spent and correct answers.

    i. Title: The numerical and phrase title the player has awarded based on the rating he/she obtained.

### 5. Scoring System

Parameter | Value per Unit | Points Awarded at |
--------- | -------------- | ----------------- |
Base score | 500 per correct answer | After each correct answer |
Time bonus | (500 per second remaining from 60 sec/question average times number of correct answers) * ratio of correct answers | At the end of quiz |
Combo bonus | +10% points for each consecutive correct answer given after each response | After each correct answer |

### 6. Rating System

Parameter | Value |
--------- | -------------- |
Accuracy | 750 rating points based on percentage of correct answers |
Time bonus | 750 rating points based on seconds remaining from 60 sec/question average * ratio of correct answers |
Maximum calculatable range of rating points | 1500 rating points |

### 7. Ranking System

A letter grade shall be provided to the player based on the number/percentage of correct answers obtained in the quiz.

Letter Grade | Correct Answers | Percent | Description |
----------- | -------- | -------- | -------------- |
S++ | 50 | 100 | FLAWLESS! You have answered all questions correctly, you are one quiz champion! |
S+ | 48-49 | 95-99 | Outstanding! You have exemplary knowledge of that certain topic. Almost all answers are correct. |
S | 45-47 | 90-94 | Outstanding! You have exemplary knowledge of that certain topic. Almost all answers are correct. |
A+ | 43-44 | 85-89 | Excellent! You have superior knowledge of that certain topic. A strong majority of all answers are correct. |
A | 40-42 | 80-84 | Excellent! You have superior knowledge of that certain topic. A strong majority of all answers are correct. |
B+ | 38-39 | 75-79 | Very good. You have a solid base of knowledge of that certain topic. A good majority of all answers are correct. |
B | 35-37 | 70-74 | Very good. You have a solid base of knowledge of that certain topic. A good majority of all answers are correct. |
C+ | 33-34 | 65-69 | Good. You have a satisfactory base of knowledge of that certain topic. A slight majority of all answers are correct. |
C | 30-32 | 60-64 | Good. You have a satisfactory base of knowledge of that certain topic. A slight majority of all answers are correct. |
D | 25-29 | 50-59 | Average. You have some knowledge of that certain topic. Around half of all answers are correct. |
E | 20-24 | 40-49 | Bad. Your knowledge is below than expected of that certain topic. Less than half of all answers are correct. |
F | 15-19 | 30-39 | Poor. Your knowledge is insufficient of that certain topic. A majority of answers are wrong. |
G | 0-14 | 0-29 | Very poor. Your knowledge is very insufficient below than expected of that certain topic. A large majority of answers are wrong. |

Condition | Grades | Percent | Description |
--------- | ------ | ------- | ----------- |
Pass | S, A, B, C | 60-100 | Quiz passed. You have won the quiz. |
Margin | D | 50-59 | You are within the border between passing and failing the quiz. The quiz can be treated as a pass, but it is strongly recommended to attempt the quiz again for a definite pass. |
Fail | E, F, G | 0-49 | Quiz failed. You have lost the quiz. |

### 8. Title System

Grade | Title | Rating (+ Conditions) |
----- | ----- | --------------------- |
SUPER Special+ | Distinguished | 1400 + all answers correct in avg. 12sec/question |
Special+ | Ultimate Master | 1325 + all answers correct in avg. 21sec/question |
Special | Grand Master | 1250 + all answers correct in avg. 30sec/question |
1st | Master | 1250 |
2nd | Superior | 1125 |
3rd | Professional | 1000 |
4th | Expert | 875 |
5th | Upper Intermediate | 750 |
6th | Intermediate | 625 |
7th | Pre-Intermediate | 500 |
8th | Elementary | 375 |
9th | Starter | 250 |
10th | Novice | 125 |
11th | Beginner | 0 |

## User Stories

1. The game must be presented in English. Adding Japanese is a plus.
2. The game has to load successfully, with all questions and topics ready for boot.
3. A title screen must be introduced.
4. The game must have information related to the test and the player during and after the duration of the quiz's session.
5. The game must ask the user one question at a time. Once answered, it cannot be recalled.
6. After all questions have been answered, the final score, time and rank should be returned by the game, indicating the player's overall performance.
7. The site should allow the player to save and/or print the screen displaying the result at the end of the quiz.

## Screenshots

## Future Enhancements

1. If this were to be a live release copy of the quiz game, each topic would have 100 questions, instead of 50.
2. There must be a profile management system to manage profiles and their records.
3. The game must have an overall records screen (with statistics and achievements) and a high score table indicating the cumulative progress of the player.
4. Two other to-be-selectable quizzes, coming soon:

    a. Science and Technology - Learn more about how things work and where do they go.

    b. Super Marathon 200 - Answer all 200 questions from all topics

## No-AI Disclaimer

I, Fares Alkhayat, do not use artificial intelligence tools to generate, draft, edit, or automate my work — including designing and coding of this quiz.

What this means:

• Everything that I produce for clients and audiences is created by human professionals. All work sold or shared by me is 100% human-made.

• I do not use AI image generators, AI writing tools, or AI code assistants to create deliverables unless if one were to explicitly request and approve it in writing. Every piece is made by hand — my hand.

• When AI tools assist with administrative tasks (calendar management, scheduling, etc.), it is clearly disclosed.

Why do I have this policy:

I believe in the value of human skill, judgment, and craft. If so, I would be hired for perspective and expertise — not for a machine's approximation of it. I also believe that widespread AI use harms the livelihoods of working creatives and knowledge workers.

Therefore, I believe AI tools of all kinds are trained on the work of human workers without consent or compensation, and I won't participate in that system.

If you see my work used to train an AI without my permission, please let me know.

## Credits

Created and developed by Fares Alkhayat.

Quiz and Website © 2026 Fares Alkhayat. All rights reserved. All copyrighted content (especially whereas written under references.txt or the copyright/references page, except for the quiz and website itself) are not owned by Fares Alkhayat nor his affiliates, instead, they belong to their respective owners.

This quiz and website shall be protected under international copyright law. It is strictly prohibited for anyone to copy, produce/reproduce, fork, or in any way utilise or modify the source code of this repository or any of its affiliates or resources without the prior  permission of Fares Alkhayat. Violators shall be punished to the maximum extent of applicable copyright law which may depend on the region or country where the criminal offense is committed.
