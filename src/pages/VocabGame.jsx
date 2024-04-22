import React, { useState } from 'react';
import "../style.scss";

const words = [
  { english: 'hello', spanish: 'hola' },
  { english: 'goodbye', spanish: 'adiós' },
  { english: 'thank you', spanish: 'gracias' },
  { english: 'please', spanish: 'por favor' },
  { english: 'sorry', spanish: 'lo siento' },
  { english: 'yes', spanish: 'sí' },
  { english: 'no', spanish: 'no' },
  { english: 'how are you?', spanish: '¿cómo estás?' },
  { english: 'what time is it?', spanish: '¿qué hora es?' },
  { english: 'where is the bathroom?', spanish: '¿dónde está el baño?' },
];

const VocabGame = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const currentWord = words[index];

  const checkAnswer = () => {
    if (answer.toLowerCase() === currentWord.spanish.toLowerCase()) {
      setScore(score + 1);
    }
    nextWord();
  };

  const nextWord = () => {
    if (index < words.length - 1) {
      setIndex(index + 1);
      setAnswer('');
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  const refreshPage = () => {
    window.location.reload();
} 

  return (
    <div className="vocab-game">
        <div className="vocab-game-container">
        <h1>Vocabulary Game</h1>
        <p>Your score: {score}</p>
        {!showResult ? (
            <div className="word-container">
            <h2>Translate: {currentWord.english}</h2>
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter translation"
            />
            <button onClick={checkAnswer}>Submit</button>
            </div>
        ) : (
            <div className="result-container">
            <h2>Game Over!</h2>
            <p>Your score: {score}</p>
            <button onClick={refreshPage}>Try Again?</button>
            </div>
        )}
        </div>
    </div>
  );
};

export default VocabGame;