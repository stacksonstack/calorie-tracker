import React from 'react';
import './App.css';
import { AddCalorieEvent } from './components/AddCalorieEvent'
import { CalorieEventList } from './components/CalorieEventList'
import { CaloricVariation } from './components/CaloricVariation'
import { Balance } from './components/Balance'

function App() {
  return (
    <>
   <h1>Calorie Tracker v0.1</h1>
   <h2>Balance</h2> <Balance />
  <CaloricVariation/>
  <CalorieEventList/>
  <AddCalorieEvent/>
   </>
  );
}

export default App;
