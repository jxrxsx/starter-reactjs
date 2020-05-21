import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);


/* function App() {
  return (
    <div className="App">
      <h1>Hello des</h1>
    </div>
  );
} */

export default App;
