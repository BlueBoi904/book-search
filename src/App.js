import React from 'react';
import './App.css';
import Header from './components/Header'
import Books from './components/Books'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Books/>
    </div>
  );
}

export default App;
