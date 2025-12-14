import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
    const [gameState, setGameState] = useState('start'); // start, playing, result
    const [score, setScore] = useState(0);
    const [gameMode, setGameMode] = useState('nature'); // Varsayılan mod

    // StartScreen'den gelen mod (selectedMode) burada yakalanır
    const startGame = (selectedMode) => {
        setGameMode(selectedMode);
        setScore(0);
        setGameState('playing');
    };

    const finishGame = (finalScore) => {
        setScore(finalScore);
        setGameState('result');
    };

    const restartGame = () => {
        setGameState('start');
    };

    return (
        <div className="App">
            {gameState === 'start' && (
                <StartScreen onStart={startGame} />
            )}

            {gameState === 'playing' && (
                // Seçilen modu (gameMode) GameScreen'e prop olarak gönderiyoruz
                <GameScreen onEndGame={finishGame} mode={gameMode} />
            )}

            {gameState === 'result' && (
                <ResultScreen score={score} onRestart={restartGame} />
            )}
        </div>
    );
}

export default App;