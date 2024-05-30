import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressTracker from '../utils/progressTracker';

const StudyGoalTracker = () => {
    const [studyGoals, setStudyGoals] = useState([]);
    const [newGoal, setNewGoal] = useState("");

    useEffect(() => {
        // Fetch study goals from API and set them in state
        axios.get('api/study-goals')
            .then(response => {
                setStudyGoals(response.data);
            })
            .catch(error => {
                console.error('Error fetching study goals: ', error);
            });
    }, []);

    const addStudyGoal = () => {
        // Add a new study goal to the list
        if (newGoal.trim() !== "") {
            axios.post('api/study-goals', { goal: newGoal })
                .then(response => {
                    setStudyGoals([...studyGoals, response.data]);
                    setNewGoal("");
                })
                .catch(error => {
                    console.error('Error adding study goal: ', error);
                });
        }
    };

    const deleteStudyGoal = (id) => {
        // Delete a study goal from the list
        axios.delete(`api/study-goals/${id}`)
            .then(() => {
                setStudyGoals(studyGoals.filter(goal => goal.id !== id));
            })
            .catch(error => {
                console.error('Error deleting study goal: ', error);
            });
    };

    return (
        <div>
            <h2>Study Goal Tracker</h2>
            <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Enter your study goal"
            />
            <button onClick={addStudyGoal}>Add Goal</button>
            <ul>
                {studyGoals.map(goal => (
                    <li key={goal.id}>
                        {goal.title}
                        <button onClick={() => deleteStudyGoal(goal.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <ProgressTracker studyGoals={studyGoals} />
        </div>
    );
};

export default StudyGoalTracker;