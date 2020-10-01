import React, { useState } from 'react';
import Note from '../Note';
import './style.scss';

const blockname = 'section';

const Section = ({ title = "Untitled Section" }) => {

  const [notes, setNotes] = useState([]);
  // holds id of focused note
  const [focusedNote, setFocusedNote] = useState(null);

  const handleAdd = () => {
    const note = {
      id: generateId(),
      text: ''
    }
    addNote(note);
  }

  const addNote = note => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    setFocusedNote(note.id);
  }

  const updateNote = note => {
    const noteIndex = notes.findIndex(n => n.id === note.id);
    if (noteIndex > 0) {
      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = note;
      setNotes(updatedNotes);
    }
    setFocusedNote(null);
  }

  const deleteNote = id => {
    const noteIndex = notes.findIndex(n => n.id === id);
    setFocusedNote(null);
    if (noteIndex > -1) {
      const updatedNotes = [...notes];
      updatedNotes.splice(noteIndex, 1);
      setNotes(updatedNotes);
    }
  }

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(note => note.id))
      : 0;

    return maxId + 1;
  }

  return (
    <div className={`${blockname}`}>
      <h2 className={`${blockname}__heading`}>{title}</h2>
      <div className={`${blockname}__body`}>
        {
          notes.map(note => <Note key={`${title}_${note.id}`}
            id={note.id}
            text={note.text}
            editMode={note.id === focusedNote}
            onSave={updateNote}
            onSelect={setFocusedNote}
            onCancel={deleteNote}
          />)
        }
      </div>
      <button className={`${blockname}__button`} onClick={handleAdd}>+</button>
    </div>
  )
}

export default Section;

// todo - default props
// todo - prop types