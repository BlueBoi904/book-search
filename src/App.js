import React from 'react';
import './App.css';
import Header from './components/Header'
import Books from './components/Books'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='container'>
      <Header/>
      <SearchBar />
      <Books/>
    </div>
  );
}

export default App;
