import React, { useState, useEffect } from 'react';
import "./Timer.css";


const Clock = () => {
    const [countdown, setCountDown] = useState(0);
    const [curTimerType, setCurrentTimer] = useState('');
    const [seconds, setSeconds] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let interval;
        if (countdown > 0) {
            interval = setInterval(() => {
                setCountDown((prevTime) => prevTime - 1);
                setSeconds((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [countdown]);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handlePomodoro = () => {
        setCurrentTimer('Pomodoro');
        setSeconds(1500);
        setCountDown(0);
        setIsOpen(false);
    };

    const handleShortBreak = () => {
        setCurrentTimer('ShortBreak');
        setCountDown(0);
        setSeconds(300);
        setIsOpen(false);
    };

    const handleLongBreak = () => {
        setCurrentTimer('LongBreak');
        setCountDown(0);
        setSeconds(1800);
        setIsOpen(false);
    };


    const handleStartTimer = () => {
        if (curTimerType === 'Pomodoro') {
            setCountDown(1500);
        }
        else if (curTimerType === 'ShortBreak') {
            setCountDown(300);
        }
        else if (curTimerType === 'LongBreak') {
            setCountDown(1800);
        }
        else {
            setCountDown(0);
        }
    };

    const handleResetTimer = () => {
        if (curTimerType === 'Pomodoro') {
            setSeconds(1500);
            setCountDown(0);
        }
        else if (curTimerType === 'ShortBreak') {
            setSeconds(300);
            setCountDown(0);
        }
        else if (curTimerType === 'LongBreak') {
            setSeconds(1800);
            setCountDown(0);
        }
        else {
            setCountDown(0);
            setSeconds(0);
        }
    };


    let minutes = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;
    if (minutes < 10) minutes = '0' + minutes;
    if (secondsLeft < 10) secondsLeft = '0' + secondsLeft;


    return (
        <>
            <div className="section1">
                <button type="button" onClick={handlePomodoro} className="timerButton">Pomodoro</button>
                <button type="button" onClick={handleShortBreak} className="timerButton">Short Break</button>
                <button type="button" onClick={handleLongBreak} className="timerButton">Long Break</button>
            </div>

            <div className="altSection1">
                <div className="dropdown-container">
                    <button className="toggle-btn" onClick={toggleDropdown}>
                        {curTimerType || 'Timer Type'}
                    </button>
                    {isOpen && (
                        <div className="dropdown-list">
                            <button type="button" onClick={handlePomodoro} className="dropdown-btn">Pomodoro</button>
                            <button type="button" onClick={handleShortBreak} className="dropdown-btn">Short Break</button>
                            <button type="button" onClick={handleLongBreak} className="dropdown-btn">Long Break</button>
                        </div>
                    )}
                </div>

            </div>

            <div className="position">
                <div className="circle">
                    <div className="tag">
                        {minutes} : {secondsLeft}
                    </div>
                </div>
            </div>

            <div className="section2">
                <button type="button" onClick={handleStartTimer} className="handleButton">Start</button>
                <button type="button" onClick={handleResetTimer} className="handleButton">Reset</button>
            </div>

        </>
    );

}

export default Clock;