import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style.scss";

const words = [
  { english: 'hello', spanish: 'hola', french: 'bonjour', german: 'hallo', italian: 'ciao', japanese: 'こんにちは', simplified_chinese: '你好', traditional_chinese: '你好' },
  { english: 'goodbye', spanish: 'adiós', french: 'au revoir', german: 'auf Wiedersehen', italian: 'arrivederci', japanese: 'さようなら', simplified_chinese: '再见', traditional_chinese: '再見' },
  { english: 'thank you', spanish: 'gracias', french: 'merci', german: 'danke', italian: 'grazie', japanese: 'ありがとう', simplified_chinese: '谢谢', traditional_chinese: '謝謝' },
  { english: 'please', spanish: 'por favor', french: "s'il vous plaît", german: 'bitte', italian: 'per favore', japanese: 'お願いします', simplified_chinese: '请', traditional_chinese: '請' },
  { english: 'sorry', spanish: 'lo siento', french: 'désolé', german: 'es tut mir leid', italian: 'mi dispiace', japanese: 'ごめんなさい', simplified_chinese: '对不起', traditional_chinese: '對不起' },
  { english: 'yes', spanish: 'sí', french: 'oui', german: 'ja', italian: 'sì', japanese: 'はい', simplified_chinese: '是的', traditional_chinese: '是的' },
  { english: 'no', spanish: 'no', french: 'non', german: 'nein', italian: 'no', japanese: 'いいえ', simplified_chinese: '不', traditional_chinese: '不' },
  { english: 'how are you?', spanish: '¿cómo estás?', french: 'comment ça va?', german: 'wie geht es dir?', italian: 'come stai?', japanese: '元気ですか？', simplified_chinese: '你好吗？', traditional_chinese: '你好嗎？' },
  { english: 'what time is it?', spanish: '¿qué hora es?', french: 'quelle heure est-il?', german: 'wie spät ist es?', italian: 'che ora è?', japanese: '今何時ですか？', simplified_chinese: '现在几点？', traditional_chinese: '現在幾點？' },
  { english: 'where is the bathroom?', spanish: '¿dónde está el baño?', french: 'où sont les toilettes?', german: 'wo ist die Toilette?', italian: "dov'è il bagno?", japanese: 'トイレはどこですか？', simplified_chinese: '洗手间在哪里？', traditional_chinese: '洗手間在哪裡？' },
];

const VocabGame = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState('english'); // Default source language is English
  const [targetLanguage, setTargetLanguage] = useState('spanish'); // Default target language is Spanish

  const currentWord = words[index];

  const checkAnswer = () => {
    const correctTranslation = currentWord[targetLanguage];
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
        <div className="home-link">
          <Link to="/">Home</Link>
        </div>
        <h1>Vocabulary Game</h1>
        <p className="score">Your score: {score}</p>
        <div className="language-dropdown">
          <label>
            Select Source Language:
            <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="simplified_chinese">Chinese (Simplified)</option>
              <option value="traditional_chinese">Chinese (Traditional)</option>
            </select>
          </label>
          <label>
            Select Target Language:
            <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="simplified_chinese">Chinese (Simplified)</option>
              <option value="traditional_chinese">Chinese (Traditional)</option>
            </select>
          </label>
        </div>
        {!showResult ? (
          <div className="word-container">
            <h2>Translate: {currentWord[sourceLanguage]}</h2>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter translation"
              className="answer-input"
            />
            <button onClick={checkAnswer} className="submit-button">Submit</button>
          </div>
        ) : (
          <div className="result-container">
            <h2>Game Over!</h2>
            <button onClick={refreshPage} className="try-again-button">Try Again?</button>
          </div>
        )}
        <div className="options">
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