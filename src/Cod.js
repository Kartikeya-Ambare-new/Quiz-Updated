import React, { useState } from 'react'; 
import './Cod.css';
function Cod() {

  const questions = [
    {
      questionText: 'Which Call of Duty game was released in 2007?',
      answerOptions: [
        { answerText: 'Call of Duty 4: Modern Warfare', isCorrect: true },
        { answerText: 'Call of Duty: World at War', isCorrect: false },
        { answerText: 'Call of Duty: Black Ops', isCorrect: false },
        { answerText: 'Call of Duty: Ghosts', isCorrect: false },
      ],
    },
    {
      questionText: 'Which Call of Duty game introduced the Zombies mode?',
      answerOptions: [
        { answerText: 'Call of Duty: Black Ops', isCorrect: false },
        { answerText: 'Call of Duty: World at War', isCorrect: true },
        { answerText: 'Call of Duty: Black Ops II', isCorrect: false },
        { answerText: 'Call of Duty: Ghosts', isCorrect: false },
      ],
    },
    {
      questionText: 'Which Call of Duty game introduced the Specialist class?',
      answerOptions: [
        { answerText: 'Call of Duty: Infinite Warfare', isCorrect: false },
        { answerText: 'Call of Duty: Black Ops III', isCorrect: true },
        { answerText: 'Call of Duty: WWII', isCorrect: false },
        { answerText: 'Call of Duty: Black Ops 4', isCorrect: false },
      ],
    },
    {
      questionText: 'Which Call of Duty game introduced the Pick 10 system?',
      answerOptions: [
        { answerText: 'Call of Duty: Black Ops', isCorrect: false },
        { answerText: 'Call of Duty: Infinite Warfare', isCorrect: false },
        { answerText: 'Call of Duty: WWII', isCorrect: false },
        { answerText: 'Call of Duty: Black Ops II', isCorrect: true },
      ],
    },
    {
        questionText: 'Which Call of Duty game introduced the Wall Running mechanic?',
        answerOptions: [
          { answerText: "Call of Duty: WWII", isCorrect: false },
          { answerText: "Call of Duty: Advanced Warfare", isCorrect: false },
          { answerText: "Call of Duty: Black Ops III", isCorrect: false },
          { answerText: "Call of Duty: Infinite Warfare", isCorrect: true },
        ],
      },
      {
        questionText: "Which Call of Duty game introduced the Exo Zombies mode?",
        answerOptions: [
          { answerText: "Call of Duty: Black Ops III", isCorrect: false },
          { answerText: "Call of Duty: Infinite Warfare", isCorrect: false },
          { answerText: "Call of Duty: Advanced Warfare", isCorrect:true  },
          { answerText: "Call of Duty: WWII", isCorrect: false },
        ],
      },
      {
        questionText: "Which Call of Duty game introduced the War mode?",
        answerOptions: [
          { answerText: "Call of Duty: Black Ops 4", isCorrect: false },
          { answerText: "Call of Duty: WWII", isCorrect: true },
          { answerText: "Call of Duty: Modern Warfare", isCorrect: false },
          { answerText: "Call of Duty: Black Ops Cold War", isCorrect: false },
        ],
      },
      {
        questionText: "Which Call of Duty game introduced the Gunsmith feature?",
        answerOptions: [
          { answerText: "Call of Duty: Black Ops 4", isCorrect: true },
          { answerText: "Call of Duty: Black Ops 3", isCorrect: false },
          { answerText: "Call of Duty: Modern Warfare", isCorrect: false },
          { answerText: "Call of Duty: Infinite Warfare", isCorrect: false },
        ],
      },
      {
        questionText: "Which Call of Duty game introduced the Spec Ops Survival mode?",
        answerOptions: [
          { answerText: "Call of Duty: Modern Warfare", isCorrect: false },
          { answerText: "Call of Duty: Ghosts", isCorrect: false },
          { answerText: "Call of Duty: Modern Warfare 2", isCorrect: false },
          { answerText: "Call of Duty: Modern Warfare 3", isCorrect: true },
        ],
      },
      {
        questionText: "Which Call of Duty game introduced the Battle Royale mode?",
        answerOptions: [
          { answerText: "Call of Duty: Modern Warfare", isCorrect: false },
          { answerText: "Call of Duty: Black Ops Cold War", isCorrect: false },
          { answerText: "Call of Duty: Black Ops 4", isCorrect: true },
          { answerText: "Call of Duty: Warzone", isCorrect: false },
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
      <h1 className='header-cod'>Call of Duty Quiz</h1>
      <div className="app" >
        {showScore ? (
          <div className='score-section-cod'>
            You scored {score} out of {questions.length}
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
          </div>
        )
          :
          (
            <>
              <div className='question-section-cod' >
                <div className='question-count-cod'>
                  <br></br>
                  <span>Question {currentQuestion + 1} / </span>{questions.length}
                </div>
                <br></br><br></br>
                <div className='question-text-cod'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <br></br><br></br>
              <div className='answer-section-cod'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <table align='center'><tr><td><button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)} className='answer-section-cod'>{answerOptions.answerText}</button></td></tr></table>
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

export default Cod;