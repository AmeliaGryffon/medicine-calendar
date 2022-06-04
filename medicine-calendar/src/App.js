import { useEffect, useState } from 'react';
import './App.css';
import Week from './components/Week';

function App() {
  //data for the month
  const [missed, SetMissed] = useState(0)
  
  function missedCount() {
    let total = 0
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    for(let i = 0; i < days.length; i++){

      if (localStorage.getItem(`${days[i]}-morning`) !== 'true') {
        total += 1
      }

      if (localStorage.getItem(`${days[i]}-evening`) !== 'true') {
        total += 1
      }
    }

    SetMissed(total)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='calendar-container'>
        <div className='title-line'>
          <h1>Medicine Calendar</h1>
          <h2>Missed - {missed}</h2>
        </div>
          <Week missedCount={missedCount}/>
        </div>
      </header>
    </div>
  );
}

export default App;
