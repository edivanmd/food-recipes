import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {NavBar } from './components';
import Pages from './pages/Pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
