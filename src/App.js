import React from 'react';
import logo from './logo.svg';
import './App.scss';

import makeHoverable from './components/hoverable/hoverable.component'

import { DotGrowSpinner } from './spinners/dot-spinner/dot-spinner.component'
import RingSpinner from './spinners/rings-spinner/rings-spinner.component'
import BorderSpinner from './spinners/border-spinner/border-spinner.component'
import SquareBlur from './spinners/square-blur/square-blur.component'

function App() {
  return (
    <div className="App">
      <DotGrowSpinner />
      <RingSpinner />
      <BorderSpinner />
      <SquareBlur />
    </div>
  );
}

export default App;
