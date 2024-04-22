import React, { useState } from 'react';
import "../style.scss";

const words = [
  { english: 'hello', spanish: 'hola', french: 'bonjour' },
  { english: 'goodbye', spanish: 'adiós', french: 'au revoir' },
  { english: 'thank you', spanish: 'gracias', french: 'merci' },
  { english: 'please', spanish: 'por favor', french: "s'il vous plaît" },
  { english: 'sorry', spanish: 'lo siento', french: 'désolé' },
  { english: 'yes', spanish: 'sí', french: 'oui' },
  { english: 'no', spanish: 'no', french: 'non' },
  { english: 'how are you?', spanish: '¿cómo estás?', french: 'comment ça va?' },
  { english: 'what time is it?', spanish: '¿qué hora es?', french: 'quelle heure est-il?' },
  { english: 'where is the bathroom?', spanish: '¿dónde está el baño?', french: 'où sont les toilettes?' },
];

const VocabGame = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('spanish'); // Default language is Spanish

  const currentWord = words[index];

  const checkAnswer = () => {
    const correctTranslation = currentWord[selectedLanguage];
    if (answer.toLowerCase() === correctTranslation.toLowerCase()) {
      setScore(score + 1);
    } else if (showCorrectAnswer) {
      alert(`Correct answer: ${correctTranslation}`);
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
  };

  return (
    <div className="vocab-game">
      <div className="vocab-game-container">
        <h1>Vocabulary Game</h1>
        <p>Your score: {score}</p>
        <div className="language-dropdown">
          <label>
            Select Language:
            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </label>
        </div>
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
            <button onClick={refreshPage}>Try Again?</button>
          </div>
        )}
        <div>
          <label>
            Show Correct Answer:
            <input
              type="checkbox"
              checked={showCorrectAnswer}
              onChange={() => setShowCorrectAnswer(!showCorrectAnswer)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default VocabGame;