import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import RandomMessage from './components/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RandomMessage />} />
    </Routes>
  );
}

export default App;
