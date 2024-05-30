import React from 'react';
import ReactDOM from 'react-dom';
import ChatPopup from './components/ChatPopup';
import StudyGoalTracker from './components/StudyGoalTracker';
import DistractionBlocker from './components/DistractionBlocker';
import NoteTaking from './components/NoteTaking';
import PomodoroSession from './components/PomodoroSession';

ReactDOM.render(
  <>
    <ChatPopup />
    <StudyGoalTracker />
    <DistractionBlocker />
    <NoteTaking />
    <PomodoroSession />
  </>,
  document.getElementById('root')
);