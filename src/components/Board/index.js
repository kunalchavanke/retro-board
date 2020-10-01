import React from 'react';
import Section from '../Section';
import './style.scss';

const blockname = 'board';

const Board = ({ title = "Untitled Board" }) => {

  return (
    <div className={`${blockname}`}>
      <h1 className={`${blockname}__heading`}>{title}</h1>
      <div className={`${blockname}__body`}>
        <Section title="What went well?" />
        <Section title="What went wrong?" />
        <Section title="What needs improvement?" />
        <Section title="Action Items" />
      </div>
    </div>
  )
}

export default Board;

// todo - default props
// todo - prop types