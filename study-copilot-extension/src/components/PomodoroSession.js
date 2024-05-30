import React, { useState, useEffect } from 'react';
import moment from 'moment';

const PomodoroSession = () => {
    const [studySession, setStudySession] = useState(false);
    const [topic, setTopic] = useState('');
    const [timer, setTimer] = useState(1500); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (timer === 0) {
            // Display warning message in the chat popup
        }

        return () => clearInterval(interval);
    }, [isActive, timer]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimer(1500);
    };

    const handleTopicChange = (e) => {
        setTopic(e.target.value);
    };

    const handleStartSession = () => {
        setStudySession(true);
        startTimer();
    };

    return (
        <div>
            {studySession ? (
                <div>
                    <h3>Focus on: {topic}</h3>
                    <p>Time remaining: {moment.utc(timer * 1000).format('mm:ss')}</p>
                    <button onClick={pauseTimer}>Pause</button>
                    <button onClick={resetTimer}>Reset</button>
                </div>
            ) : (
                <div>
                    <input type="text" value={topic} onChange={handleTopicChange} placeholder="Enter topic to focus on" />
                    <button onClick={handleStartSession}>Start Study Session</button>
                </div>
            )}
        </div>
    );
};

export default PomodoroSession;