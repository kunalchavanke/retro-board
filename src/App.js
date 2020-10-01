import React from 'react';
import Board from './components/Board';

import './App.scss';

const blockname = 'app';

const App = () => (
  <div className={`${blockname}`}>
    <Board title="Retro Board" />
  </div>
)
export default App;
