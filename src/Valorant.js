import React, { useState } from 'react';
import './valo.css';
function Valorant() {
  const questions = [
    {
      questionText: 'Who is the game director of Valorant?',
      answerOptions: [
        { answerText: 'Anna Donlon', isCorrect: true },
        { answerText: 'David Nottingham', isCorrect: false },
        { answerText: 'Trevor Romleski', isCorrect: false },
        { answerText: 'Joe Ziegler', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is NOT a type of ability in Valorant?',
      answerOptions: [
        { answerText: 'Signature', isCorrect: false },
        { answerText: 'Boost', isCorrect: true },
        { answerText: 'Ultimate', isCorrect: false },
        { answerText: 'Passive', isCorrect: false },
      ],
    },
    {
      questionText: 'How many players are in a team for a standard match in Valorant?',
      answerOptions: [
        { answerText: '6', isCorrect: false },
        { answerText: '5', isCorrect: true },
        { answerText: '4', isCorrect: false },
        { answerText: '3', isCorrect: false },
      ],
    },
    {
        
      questionText: 'Which agent has the ability to heal allies?',
      answerOptions: [
        { answerText: 'Killjoy', isCorrect: false },
        { answerText: 'Sova', isCorrect: false },
        { answerText: 'Cypher', isCorrect: false },
        { answerText: 'Sage', isCorrect: true },
      ],
    },
    {
        questionText: ' Which of the following is NOT a type of gun in Valorant?',
        answerOptions: [
          { answerText: "Shotgun", isCorrect: false },
          { answerText: "Submachine Gun", isCorrect: false },
          { answerText: "Assault Rifle", isCorrect: false },
          { answerText: "Light Machine Gun", isCorrect: true },
        ],
      },
      {
        questionText: "What is the name of the first Valorant agent to be released after the game's official launch?",
        answerOptions: [
          { answerText: "Reyna", isCorrect: false },
          { answerText: "Skype", isCorrect: false },
          { answerText: "Killjoy", isCorrect:true  },
          { answerText: "Yoru", isCorrect: false },
        ],
      },
      {
        questionText: "Which of the following is NOT a map in Valorant?",
        answerOptions: [
          { answerText: "Icebox", isCorrect: false },
          { answerText: "Dusk", isCorrect: true },
          { answerText: "Split", isCorrect: false },
          { answerText: "Peral", isCorrect: false },
        ],
      },
      {
        questionText: "Which agent has the ability to reveal the location of enemies?",
        answerOptions: [
          { answerText: "Sova", isCorrect: true },
          { answerText: "Viper", isCorrect: false },
          { answerText: "Cypher", isCorrect: false },
          { answerText: "Jett", isCorrect: false },
        ],
      },
      {
        questionText: "Which of the following is NOT a type of grenade in Valorant?",
        answerOptions: [
          { answerText: "Molotov", isCorrect: false },
          { answerText: "Smoke", isCorrect: false },
          { answerText: "Flash", isCorrect: false },
          { answerText: "Radianite", isCorrect: true },
        ],
      },
      {
        questionText: "What is the maximum number of rounds that can be played in a standard match in Valorant?",
        answerOptions: [
          { answerText: "15", isCorrect: false },
          { answerText: "30", isCorrect: false },
          { answerText: "25", isCorrect: true },
          { answerText: "20", isCorrect: false },
        ],
      },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header-valo'>Valorant Quiz</h1>
      <div className="app" >
        {showScore ? (
          <div className='score-section-valo'>
            You scored {score} out of {questions.length}
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
          </div>
        )
          :
          (
            <>
              <div className='question-section' >
                <div className='question-count'>
                  <br></br>
                  <span>Question {currentQuestion + 1} / </span>{questions.length}
                </div>
                <br></br><br></br>
                <div className='question-text-valo'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <br></br><br></br>
              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <table align='center'><tr><td><button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)} className='valo'>{answerOptions.answerText}</button></td></tr></table>
                  ))
                }
              </div>
            </>
          )}
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </>
  );
}

export default Valorant;