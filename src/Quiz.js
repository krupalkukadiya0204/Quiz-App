// Quiz.js
import React, { useState } from 'react';
import quizData from './quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          <h2>Quiz Completed!</h2>
          <p>You scored {score} out of {quizData.length}.</p>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className='question-text'>{quizData[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].options.map((option) => (
              <button 
                onClick={() => handleAnswerOptionClick(option)} 
                key={option}
                className={`answer-btn ${selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div className='feedback-section'>
              {isCorrect ? <p className='correct'>Correct! </p> : <p className='incorrect'>Sorry, that’s not right.</p>}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;