import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
    const [gameState, setGameState] = useState('start');
    const [isWin, setIsWin] = useState(false);

    const startGame = () => {
        setGameState('playing');
    };

    const finishGame = (winStatus) => {
        setIsWin(winStatus);
        setGameState('result');
    };

    const restartGame = () => {
        setGameState('start');
    };

    return (
        <div className="App">
            {gameState === 'start' && <StartScreen onStart={startGame} />}
            {gameState === 'playing' && <GameScreen onFinish={finishGame} />}
            {gameState === 'result' && <ResultScreen onRestart={restartGame} isWin={isWin} />}
        </div>
    );
}

export default App;
