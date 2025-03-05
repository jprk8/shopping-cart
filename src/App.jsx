import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const { page } = useParams();

  return (
    <>
      <Header />
      {page === 'shop' ? (
        <Shop />
      ) : (
        <Home />
      )}
    </>
  )
}

export default App
