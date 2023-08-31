import { useState } from 'react'
import './App.css'

const useCounter = () => { //custom hook
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrease,
    reset
  }
}

function App() {
  const counter1 = useCounter();
  const counter2 = useCounter();

  return (
    <>
      <div>{counter1.counter}</div>
      <button onClick={counter1.increase} className='btn'>+</button>
      <button onClick={counter1.reset} className='btn'>0</button>
      <button onClick={counter1.decrease} className='btn'>-</button>
      <br/><br/><br/>
      <div>{counter2.counter}</div>
      <button onClick={counter2.increase} className='btn'>+</button>
      <button onClick={counter2.reset} className='btn'>0</button>
      <button onClick={counter2.decrease} className='btn'>-</button>
    </>
  )
}

export default App
