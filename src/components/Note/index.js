import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

const blockname = 'note';
const ENTER_KEY = 'Enter';

const Note = ({ id, editMode, onSave, onSelect, onCancel }) => {

  const [text, setText] = useState('');
  const noteRef = useRef(null);

  // set focus on note
  useEffect(() => noteRef.current && noteRef.current.focus(), [])

  const handleTextChange = ({ target, key }) => {
    if (key === ENTER_KEY) {
      onSave({ id, text });
    }
    setText(target.textContent);
  }

  const handleBlur = () => {
    const note = { id, text }
    if (text.trim()) {
      onSave(note);
    } else {
      onCancel(id);
    }
  }

  const handleFocus = () => {
    if (!editMode) {
      onSelect(id);
    }
  }

  return (
    <>
      <div className={`${blockname}`}
        ref={noteRef}
        contentEditable
        onClick={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleTextChange} />
      <i className={`${blockname}__button-delete material-icons`}
        onClick={() => onCancel(id)}>delete</i>
    </>
  )
}

export default Note;

// todo - default props
// todo - prop types