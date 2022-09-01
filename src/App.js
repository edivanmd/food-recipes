import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components';
import Pages from './pages/Pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
