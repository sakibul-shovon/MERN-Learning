import React, { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'

function App() {
  const counterState = useContext(CounterContext);
  return (
    <div>
      <h1>Context API</h1>
      <h2>Counter is {counterState.count}</h2>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App
