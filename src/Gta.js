import React, { useState } from 'react';
import './Gta.css'
function Gta() {
  const questions = [
    {
      questionText: 'Which GTA game is set in the fictional city of Liberty City, based on New York City?',
      answerOptions: [
        { answerText: 'GTA III', isCorrect: true },
        { answerText: 'GTA: Vice City', isCorrect: false },
        { answerText: 'Niko Bellic', isCorrect: false },
        { answerText: 'Michael De Santa', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the protagonist of GTA: Vice City?',
      answerOptions: [
        { answerText: 'Carl Johnson', isCorrect: false },
        { answerText: 'Tommy Vercetti', isCorrect: true },
        { answerText: 'Niko Bellic', isCorrect: false },
        { answerText: 'Michael De Santa', isCorrect: false },
      ],
    },
    {
      questionText: 'In GTA IV, what is the name of the radio station that plays classical music?',
      answerOptions: [
        { answerText: 'K-JAH Radio West', isCorrect: false },
        { answerText: 'Classic FM', isCorrect: true },
        { answerText: 'Radio Broker', isCorrect: false },
        { answerText: 'The Beat 102.7', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name of the protagonists gang in GTA: San Andreas?',
      answerOptions: [
        { answerText: 'The Ballas', isCorrect: false },
        { answerText: 'The Diablos', isCorrect: false },
        { answerText: 'The Lost MC', isCorrect: false },
        { answerText: 'The Grove Street Families', isCorrect: true },
      ],
    },
    {
        questionText: 'In GTA V, which character is a retired bank robber?',
        answerOptions: [
          { answerText: "Franklin Clinton", isCorrect: false },
          { answerText: "Trevor Philips", isCorrect: false },
          { answerText: "Lamar Davis", isCorrect: false },
          { answerText: "Michael De Santa", isCorrect: true },
        ],
      },
      {
        questionText: "What is the name of the city in GTA: San Andreas that is based on San Francisco?",
        answerOptions: [
          { answerText: "Los Venturas", isCorrect: false },
          { answerText: "Los Santos", isCorrect: false },
          { answerText: "San Fierro", isCorrect:true  },
          { answerText: "Las Venturas", isCorrect: false },
        ],
      },
      {
        questionText: "Who is the voice actor for the character Trevor Philips in GTA V?",
        answerOptions: [
          { answerText: "Michael Madsen", isCorrect: false },
          { answerText: "Steven Ogg", isCorrect: true },
          { answerText: "Samuel L. Jackson", isCorrect: false },
          { answerText: "Ray Liotta", isCorrect: false },
        ],
      },
      {
        questionText: "In GTA III, what is the name of the character who is the boss of the Leone Family?",
        answerOptions: [
          { answerText: "Salvatore Leone", isCorrect: true },
          { answerText: "Donald Love", isCorrect: false },
          { answerText: "Luigi Goterelli", isCorrect: false },
          { answerText: "Mikhail Faustin", isCorrect: false },
        ],
      },
      {
        questionText: "What is the name of the protagonist's cousin in GTA V?",
        answerOptions: [
          { answerText: "Jimmy De Santa", isCorrect: false },
          { answerText: "Franklin Clinton", isCorrect: false },
          { answerText: "Lamar Davis", isCorrect: false },
          { answerText: "Tracey De Santa", isCorrect: true },
        ],
      },
      {
        questionText: "In GTA: Vice City Stories, what is the name of the protagonist's brother?",
        answerOptions: [
          { answerText: "Victor Vance", isCorrect: false },
          { answerText: "Tommy Vercetti", isCorrect: false },
          { answerText: "Lance Vance", isCorrect: true },
          { answerText: "Ken Rosenberg", isCorrect: false },
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
      <h1 className='header-gta'>GTA Quiz</h1>
      <div className="app-gta" >
        {showScore ? (
          <div className='score-section-gta'>
            You scored {score} out of {questions.length}
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
          </div>
        )
          :
          (
            <>
              <div className='question-section-gta' >
                <div className='question-count-gta'>
                  <br></br>
                  <span>Question {currentQuestion + 1} / </span>{questions.length}
                </div>
                <br></br><br></br>
                <div className='question-text-gta'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <br></br><br></br>
              <div className='answer-section-gta'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <table align='center'><tr><td><button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)} className='gta'> {answerOptions.answerText}</button></td></tr></table>
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

export default Gta;