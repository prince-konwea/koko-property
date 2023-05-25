import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import Home from './components/home_list/home_list';


function App() {
  

  return (
    <>
      <div>
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App;
