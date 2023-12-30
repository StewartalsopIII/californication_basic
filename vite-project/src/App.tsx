import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Do you want to dominate technology or be dominated by it?</h1>
      <p>if so sign up here</p>
      <button id="submit">Submit</button>
    </div>
  )
}

export default App

