import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components';
import Pages from './pages/Pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
