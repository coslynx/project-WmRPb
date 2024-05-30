import React, { useState } from 'react';

const NoteTaking = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div>
      <h2>Note Taking</h2>
      <textarea placeholder="Write your note here..." />
      <button>Add Note</button>
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            <p>{note}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteTaking;