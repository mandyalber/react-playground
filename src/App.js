import React from 'react';
import './App.css';
import Bomb from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';


function App() {
  return (    
    <main className='App'>
      <HelloWorld/>
      <Bomb/> 
      <RouletteGun/>    
    </main>
  )
}

export default App;